<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import RecipeForm from '../components/RecipeForm.vue'
import { getRecipe, updateRecipe } from '../api/recipes'
import { useToastStore } from '../stores/toast'
import { useAuthStore } from '../stores/auth'

const route = useRoute()
const router = useRouter()
const toast = useToastStore()
const auth = useAuthStore()

const loading = ref(true)
const saving = ref(false)
const initial = ref(null)

onMounted(async () => {
  try {
    const recipe = await getRecipe(route.params.id)
    const ownerId = recipe.user?._id || recipe.user
    if (String(ownerId) !== String(auth.user?._id)) {
      toast.error('You can only edit your own recipes.')
      router.push({ name: 'recipe', params: { id: route.params.id } })
      return
    }
    initial.value = recipe
  } catch {
    toast.error('Recipe not found.')
    router.push('/')
  } finally {
    loading.value = false
  }
})

async function onSubmit({ payload, imageFile }) {
  saving.value = true
  try {
    await updateRecipe(route.params.id, payload, imageFile)
    toast.success('Recipe updated.')
    router.push({ name: 'recipe', params: { id: route.params.id } })
  } catch (e) {
    toast.error(e.response?.data?.message || 'Could not update recipe.')
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="page-narrow">
    <div class="head">
      <router-link :to="{ name: 'recipe', params: { id: route.params.id } }" class="back">
        ← Back to recipe
      </router-link>
      <h1 class="display h1">Edit Recipe</h1>
      <p class="muted">Update details and keep your dish looking its best.</p>
    </div>
    <p v-if="loading" class="muted">Loading…</p>
    <RecipeForm
      v-else-if="initial"
      :initial="initial"
      :saving="saving"
      submit-label="Update Recipe"
      @submit="onSubmit"
      @cancel="router.push({ name: 'recipe', params: { id: route.params.id } })"
    />
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
