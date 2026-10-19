<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { listRecipes } from '../api/recipes'
import { useAuthStore } from '../stores/auth'
import RecipeCard from '../components/RecipeCard.vue'
import RecipeSkeleton from '../components/RecipeSkeleton.vue'
import EmptyState from '../components/EmptyState.vue'

const PAGE_SIZE = 50

const auth = useAuthStore()
const router = useRouter()
const recipes = ref([])
const loading = ref(true)
const loadingMore = ref(false)
const error = ref('')
const hasMore = ref(true)

const canLoadMore = computed(() => hasMore.value && !loading.value && recipes.value.length > 0)

function goCreate() {
  if (auth.isAuthenticated) {
    router.push('/create')
    return
  }
  router.push({ name: 'login', query: { redirect: '/create' } })
}

async function fetchPage(offset, { append = false } = {}) {
  const batch = await listRecipes(offset)
  if (append) {
    recipes.value = [...recipes.value, ...batch]
  } else {
    recipes.value = batch
  }
  // API uses offset + limit; a short batch means the end
  hasMore.value = Array.isArray(batch) && batch.length >= PAGE_SIZE
}

async function loadMore() {
  if (loadingMore.value || !hasMore.value) return
  loadingMore.value = true
  error.value = ''
  try {
    await fetchPage(recipes.value.length, { append: true })
  } catch (e) {
    error.value = e.response?.data?.message || 'Could not load more recipes.'
  } finally {
    loadingMore.value = false
  }
}

onMounted(async () => {
  loading.value = true
  error.value = ''
  try {
    await fetchPage(0)
  } catch (e) {
    error.value = e.response?.data?.message || 'Could not load recipes.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">Recipe discovery</p>
        <h1 class="display h1">Discover your next favorite meal.</h1>
        <p class="muted lead">
          Find inspiration, explore new flavors, and save the recipes you love.
        </p>
        <div class="hero-actions">
          <button type="button" class="btn btn-primary" @click="goCreate">Share a recipe</button>
          <a href="#recipes" class="btn btn-secondary">Browse recipes</a>
        </div>
      </div>
      <div class="hero-panel" aria-hidden="true">
        <div class="hero-blob"></div>
        <div class="hero-card">
          <span>Seasonal ideas</span>
          <strong>Cook something green tonight</strong>
        </div>
      </div>
    </section>

    <section id="recipes" class="recipes">
      <div class="section-head">
        <h2 class="display h2">Explore recipes</h2>
        <p class="muted">Public recipes from the community</p>
      </div>

      <RecipeSkeleton v-if="loading" />

      <EmptyState
        v-else-if="error"
        title="Something went wrong"
        :message="error"
      />

      <EmptyState
        v-else-if="!recipes.length"
        title="No public recipes yet"
        message="Be the first to share something delicious with the community."
      >
        <button type="button" class="btn btn-primary" @click="goCreate">Create a recipe</button>
      </EmptyState>

      <div v-else class="grid">
        <RecipeCard v-for="recipe in recipes" :key="recipe._id" :recipe="recipe" />
      </div>

      <div v-if="canLoadMore" class="load-more">
        <button
          type="button"
          class="btn btn-secondary"
          :disabled="loadingMore"
          @click="loadMore"
        >
          {{ loadingMore ? 'Loading…' : 'Load more recipes' }}
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1.25rem 0 0.5rem;
}

.eyebrow {
  margin: 0 0 0.5rem;
  color: var(--primary);
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.75rem;
}

.lead {
  margin: 0 0 1.25rem;
  max-width: 36rem;
  font-size: 1.05rem;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
}

.hero-panel {
  position: relative;
  min-height: 180px;
}

.hero-blob {
  position: absolute;
  inset: 10% 5% 0;
  border-radius: 28px;
  background:
    linear-gradient(145deg, rgba(36, 92, 67, 0.9), rgba(114, 166, 122, 0.85)),
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.25), transparent 45%);
}

.hero-card {
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 12%;
  background: rgba(255, 255, 255, 0.94);
  border-radius: 16px;
  padding: 1rem 1.1rem;
  display: grid;
  gap: 0.25rem;
  box-shadow: var(--shadow);
}

.hero-card span {
  color: var(--text-muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.hero-card strong {
  font-family: var(--font-display);
  font-size: 1.15rem;
  color: var(--primary);
}

.section-head {
  margin-bottom: 1.15rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}

.load-more {
  display: flex;
  justify-content: center;
  margin-top: 1.75rem;
}

@media (max-width: 1100px) {
  .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .hero-panel {
    min-height: 140px;
  }
}

@media (max-width: 800px) {
  .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 520px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
