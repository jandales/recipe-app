<script setup>
import { reactive, ref, watch } from 'vue'

const props = defineProps({
  initial: {
    type: Object,
    default: () => ({
      name: '',
      description: '',
      ingredients: [''],
      instructions: [''],
      status: 'public',
      image: '',
      cookTime: '',
      prepTime: '',
      difficulty: '',
      servings: '',
    }),
  },
  submitLabel: { type: String, default: 'Save Recipe' },
  saving: { type: Boolean, default: false },
})

const emit = defineEmits(['submit', 'cancel'])

const form = reactive({
  name: '',
  description: '',
  ingredients: [''],
  instructions: [''],
  status: 'public',
  cookTime: '',
  prepTime: '',
  difficulty: 'Easy',
  servings: '',
})

const errors = reactive({})
const imageFile = ref(null)
const previewUrl = ref('')
const existingImage = ref('')

watch(
  () => props.initial,
  (val) => {
    form.name = val.name || ''
    form.description = val.description || ''
    form.ingredients = val.ingredients?.length ? [...val.ingredients] : ['']
    form.instructions = val.instructions?.length ? [...val.instructions] : ['']
    form.status = val.status || 'public'
    form.cookTime = val.cookTime || ''
    form.prepTime = val.prepTime || ''
    form.difficulty = val.difficulty || 'Easy'
    form.servings = val.servings || ''
    existingImage.value = val.image || ''
    previewUrl.value = ''
    imageFile.value = null
  },
  { immediate: true, deep: true }
)

function onFileChange(e) {
  const file = e.target.files?.[0]
  if (!file) return
  if (!file.type.startsWith('image/')) {
    errors.image = 'Please choose an image file (JPG, PNG, or WebP).'
    return
  }
  if (file.size > 5 * 1024 * 1024) {
    errors.image = 'Image must be under 5MB.'
    return
  }
  errors.image = ''
  imageFile.value = file
  previewUrl.value = URL.createObjectURL(file)
}

function removeImage() {
  imageFile.value = null
  previewUrl.value = ''
  existingImage.value = ''
  const input = document.getElementById('recipe-image-input')
  if (input) input.value = ''
}

function addIngredient() {
  form.ingredients.push('')
}

function removeIngredient(i) {
  if (form.ingredients.length === 1) {
    form.ingredients[0] = ''
    return
  }
  form.ingredients.splice(i, 1)
}

function addInstruction() {
  form.instructions.push('')
}

function removeInstruction(i) {
  if (form.instructions.length === 1) {
    form.instructions[0] = ''
    return
  }
  form.instructions.splice(i, 1)
}

function validate() {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (!form.name.trim()) errors.name = 'Recipe name is required.'
  if (!form.description.trim()) errors.description = 'Description is required.'
  if (!form.ingredients.filter((x) => x.trim()).length) {
    errors.ingredients = 'Add at least one ingredient.'
  }
  if (!form.instructions.filter((x) => x.trim()).length) {
    errors.instructions = 'Add at least one instruction step.'
  }
  return Object.keys(errors).length === 0
}

function onSubmit() {
  if (!validate() || props.saving) return
  emit('submit', {
    payload: {
      name: form.name.trim(),
      description: form.description.trim(),
      ingredients: form.ingredients.map((x) => x.trim()).filter(Boolean),
      instructions: form.instructions.map((x) => x.trim()).filter(Boolean),
      status: form.status,
      cookTime: form.cookTime.trim(),
      prepTime: form.prepTime.trim(),
      difficulty: form.difficulty,
      servings: form.servings.trim(),
    },
    imageFile: imageFile.value,
  })
}

const shownImage = () => previewUrl.value || existingImage.value
</script>

<template>
  <form class="form" @submit.prevent="onSubmit" novalidate>
    <section class="section card-surface">
      <h2 class="section-title">Basic information</h2>
      <div class="field">
        <label for="recipe-name">Recipe name</label>
        <input id="recipe-name" v-model="form.name" class="input" type="text" placeholder="e.g. Lemon herb roast chicken" />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>
      <div class="field">
        <label for="recipe-description">Short description</label>
        <textarea
          id="recipe-description"
          v-model="form.description"
          class="textarea"
          placeholder="What makes this recipe special?"
        />
        <p v-if="errors.description" class="error">{{ errors.description }}</p>
      </div>
      <div class="meta-grid">
        <div class="field">
          <label for="prep-time">Prep time</label>
          <input id="prep-time" v-model="form.prepTime" class="input" type="text" placeholder="e.g. 10 mins" />
        </div>
        <div class="field">
          <label for="cook-time">Cooking time</label>
          <input id="cook-time" v-model="form.cookTime" class="input" type="text" placeholder="e.g. 20 mins" />
        </div>
        <div class="field">
          <label for="difficulty">Difficulty</label>
          <select id="difficulty" v-model="form.difficulty" class="select">
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div class="field">
          <label for="servings">Serves</label>
          <input id="servings" v-model="form.servings" class="input" type="text" placeholder="e.g. 4 people" />
        </div>
      </div>
    </section>

    <section class="section card-surface">
      <h2 class="section-title">Recipe image</h2>
      <p class="hint">JPG, PNG, or WebP up to 5MB. A clear photo of the finished dish works best.</p>
      <div class="uploader">
        <div class="preview" :class="{ empty: !shownImage() }">
          <img v-if="shownImage()" :src="shownImage()" alt="Recipe preview" />
          <div v-else class="placeholder">
            <span class="cam" aria-hidden="true"></span>
            <p>No image selected</p>
          </div>
        </div>
        <div class="uploader-actions">
          <label class="btn btn-secondary" for="recipe-image-input">
            {{ shownImage() ? 'Replace image' : 'Upload image' }}
          </label>
          <input id="recipe-image-input" class="sr-only" type="file" accept="image/*" @change="onFileChange" />
          <button v-if="shownImage()" type="button" class="btn btn-ghost" @click="removeImage">Remove</button>
        </div>
        <p v-if="errors.image" class="error">{{ errors.image }}</p>
      </div>
    </section>

    <section class="section card-surface">
      <h2 class="section-title">Ingredients</h2>
      <div v-for="(item, i) in form.ingredients" :key="'ing-' + i" class="row-field">
        <label class="sr-only" :for="'ing-' + i">Ingredient {{ i + 1 }}</label>
        <input
          :id="'ing-' + i"
          v-model="form.ingredients[i]"
          class="input"
          type="text"
          :placeholder="`Ingredient ${i + 1}`"
        />
        <button type="button" class="btn-icon" :aria-label="`Remove ingredient ${i + 1}`" @click="removeIngredient(i)">
          ×
        </button>
      </div>
      <button type="button" class="btn btn-ghost" @click="addIngredient">+ Add ingredient</button>
      <p v-if="errors.ingredients" class="error">{{ errors.ingredients }}</p>
    </section>

    <section class="section card-surface">
      <h2 class="section-title">Cooking instructions</h2>
      <div v-for="(step, i) in form.instructions" :key="'step-' + i" class="row-field step">
        <span class="step-num" aria-hidden="true">{{ i + 1 }}</span>
        <label class="sr-only" :for="'step-' + i">Step {{ i + 1 }}</label>
        <textarea
          :id="'step-' + i"
          v-model="form.instructions[i]"
          class="textarea"
          rows="2"
          :placeholder="`Describe step ${i + 1}`"
        />
        <button type="button" class="btn-icon" :aria-label="`Remove step ${i + 1}`" @click="removeInstruction(i)">
          ×
        </button>
      </div>
      <button type="button" class="btn btn-ghost" @click="addInstruction">+ Add step</button>
      <p v-if="errors.instructions" class="error">{{ errors.instructions }}</p>
    </section>

    <section class="section card-surface">
      <h2 class="section-title">Visibility</h2>
      <p class="hint">Public recipes appear on the homepage. Private recipes stay on your profile.</p>
      <div class="visibility">
        <label class="choice">
          <input v-model="form.status" type="radio" value="public" />
          <span>
            <strong>Public</strong>
            <small>Visible to the community</small>
          </span>
        </label>
        <label class="choice">
          <input v-model="form.status" type="radio" value="private" />
          <span>
            <strong>Private</strong>
            <small>Only visible to you</small>
          </span>
        </label>
      </div>
    </section>

    <div class="form-actions">
      <button type="button" class="btn btn-secondary" :disabled="saving" @click="$emit('cancel')">Cancel</button>
      <button type="submit" class="btn btn-primary" :disabled="saving">
        {{ saving ? 'Saving…' : submitLabel }}
      </button>
    </div>
  </form>
</template>

<style scoped>
.form {
  display: grid;
  gap: 1.1rem;
}

.section {
  padding: 1.25rem;
}

.section-title {
  margin: 0 0 1rem;
  font-family: var(--font-display);
  font-size: 1.2rem;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem 1rem;
}

@media (max-width: 600px) {
  .meta-grid {
    grid-template-columns: 1fr;
  }
}

.hint {
  margin: -0.35rem 0 1rem;
  color: var(--text-muted);
  font-size: 0.9rem;
}

.uploader {
  display: grid;
  gap: 0.85rem;
}

.preview {
  width: min(100%, 280px);
  aspect-ratio: 1;
  border-radius: var(--radius-sm);
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--accent-soft);
}

.preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder {
  height: 100%;
  display: grid;
  place-content: center;
  gap: 0.5rem;
  text-align: center;
  color: var(--text-muted);
}

.cam {
  width: 42px;
  height: 42px;
  margin: 0 auto;
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 50%, transparent 28%, var(--primary) 29% 34%, transparent 35%),
    var(--surface);
  border: 2px solid var(--primary);
}

.uploader-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: center;
}

.row-field {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 0.5rem;
  margin-bottom: 0.65rem;
  align-items: start;
}

.row-field.step {
  grid-template-columns: auto 1fr auto;
}

.step-num {
  width: 28px;
  height: 28px;
  margin-top: 0.55rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: var(--accent-soft);
  color: var(--primary);
  font-weight: 700;
  font-size: 0.85rem;
}

.visibility {
  display: grid;
  gap: 0.65rem;
}

.choice {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  padding: 0.85rem 1rem;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  background: #fcfbf8;
}

.choice input {
  margin-top: 0.25rem;
}

.choice strong {
  display: block;
}

.choice small {
  color: var(--text-muted);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.65rem;
  position: sticky;
  bottom: 0.75rem;
  background: rgba(250, 248, 243, 0.92);
  backdrop-filter: blur(8px);
  padding: 0.75rem 0;
}

.error {
  color: var(--danger);
  font-size: 0.85rem;
  margin: 0.25rem 0 0;
}
</style>
