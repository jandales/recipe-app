<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RecipeForm from '../components/RecipeForm.vue'
import { createRecipe } from '../api/recipes'
import { useToastStore } from '../stores/toast'

const router = useRouter()
const toast = useToastStore()
const saving = ref(false)

async function onSubmit({ payload, imageFile }) {
  saving.value = true
  try {
    const res = await createRecipe(payload, imageFile)
    toast.success(res.message || 'Recipe saved.')
    const id = res.recipe?._id
    router.push(id ? { name: 'recipe', params: { id } } : { name: 'home' })
  } catch (e) {
    const msg =
      e.response?.data?.errors?.[0]?.msg ||
      e.response?.data?.message ||
      'Could not save recipe.'
    toast.error(msg)
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="page-narrow">
    <div class="head">
      <router-link to="/" class="back">← Back to recipes</router-link>
      <h1 class="display h1">Create a Recipe</h1>
      <p class="muted">Share something delicious with the community.</p>
    </div>
    <RecipeForm :saving="saving" submit-label="Save Recipe" @submit="onSubmit" @cancel="router.push('/')" />
  </div>
</template>

<style scoped>
.head { margin-bottom: 1.25rem; }
.back {
  display: inline-block;
  margin-bottom: 0.75rem;
  color: var(--primary);
  font-weight: 600;
}
</style>
