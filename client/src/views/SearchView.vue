<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { searchRecipes } from '../api/recipes'
import RecipeCard from '../components/RecipeCard.vue'
import RecipeSkeleton from '../components/RecipeSkeleton.vue'
import EmptyState from '../components/EmptyState.vue'

const route = useRoute()
const recipes = ref([])
const loading = ref(false)
const error = ref('')

async function runSearch(keyword) {
  if (!keyword) {
    recipes.value = []
    return
  }
  loading.value = true
  error.value = ''
  try {
    recipes.value = await searchRecipes(keyword)
  } catch (e) {
    error.value = e.response?.data?.message || 'Search failed.'
    recipes.value = []
  } finally {
    loading.value = false
  }
}

watch(
  () => route.query.keyword,
  (kw) => runSearch(typeof kw === 'string' ? kw.trim() : ''),
  { immediate: true }
)
</script>

<template>
  <div>
    <div class="section-head">
      <h1 class="display h1">Search results</h1>
      <p class="muted">
        <template v-if="route.query.keyword">Showing matches for “{{ route.query.keyword }}”</template>
        <template v-else>Enter a keyword in the header search.</template>
      </p>
    </div>

    <RecipeSkeleton v-if="loading" />
    <EmptyState v-else-if="error" title="Search failed" :message="error" />
    <EmptyState
      v-else-if="!recipes.length"
      title="No recipes found"
      message="Try another keyword or browse the homepage."
    >
      <router-link to="/" class="btn btn-secondary">Back to recipes</router-link>
    </EmptyState>
    <div v-else class="grid">
      <RecipeCard v-for="recipe in recipes" :key="recipe._id" :recipe="recipe" />
    </div>
  </div>
</template>

<style scoped>
.section-head { margin-bottom: 1.25rem; }
.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}
@media (max-width: 1100px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 800px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
</style>
