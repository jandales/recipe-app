<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { recipesByUser, savedRecipes } from '../api/recipes'
import { useAuthStore } from '../stores/auth'
import RecipeCard from '../components/RecipeCard.vue'
import RecipeSkeleton from '../components/RecipeSkeleton.vue'
import EmptyState from '../components/EmptyState.vue'
import http from '../api/http'
import { userAvatarUrl, onImgError, PLACEHOLDER_AVATAR } from '../utils/media'

const route = useRoute()
const auth = useAuthStore()

const tab = ref('recipes')
const loading = ref(true)
const recipes = ref([])
const profile = ref(null)

const isSelf = computed(() => String(route.params.id) === String(auth.user?._id))

async function load() {
  loading.value = true
  try {
    try {
      const { data } = await http.get(`/user/info/${route.params.id}`)
      profile.value = data
    } catch {
      profile.value = isSelf.value ? auth.user : { name: 'Cook', _id: route.params.id }
    }

    recipes.value =
      tab.value === 'saved' && isSelf.value
        ? await savedRecipes(route.params.id)
        : await recipesByUser(route.params.id)
  } finally {
    loading.value = false
  }
}

onMounted(load)
watch(() => route.params.id, load)
watch(tab, load)
</script>

<template>
  <div>
    <header class="profile card-surface">
      <img
        class="avatar"
        :src="userAvatarUrl(profile)"
        alt=""
        @error="onImgError($event, PLACEHOLDER_AVATAR)"
      />
      <div>
        <h1 class="display h1">{{ profile?.name || 'Cook' }}</h1>
        <p class="muted">{{ isSelf ? 'Your recipes and saved collection' : 'Recipes shared by this cook' }}</p>
      </div>
    </header>

    <div v-if="isSelf" class="tabs" role="tablist">
      <button type="button" role="tab" :aria-selected="tab === 'recipes'" :class="{ active: tab === 'recipes' }" @click="tab = 'recipes'">
        My Recipes
      </button>
      <button type="button" role="tab" :aria-selected="tab === 'saved'" :class="{ active: tab === 'saved' }" @click="tab = 'saved'">
        Saved
      </button>
    </div>

    <RecipeSkeleton v-if="loading" />
    <EmptyState
      v-else-if="!recipes.length"
      :title="tab === 'saved' ? 'No saved recipes' : 'No recipes yet'"
      :message="tab === 'saved' ? 'Save recipes you love from the community.' : 'Create your first recipe to get started.'"
    >
      <router-link
        v-if="tab !== 'saved'"
        :to="auth.isAuthenticated ? '/create' : { name: 'login', query: { redirect: '/create' } }"
        class="btn btn-primary"
      >
        Create a recipe
      </router-link>
    </EmptyState>
    <div v-else class="grid">
      <RecipeCard v-for="recipe in recipes" :key="recipe._id" :recipe="recipe" />
    </div>
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1.25rem;
  margin-bottom: 1.25rem;
}

.avatar {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
}

.tabs {
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1.15rem;
}

.tabs button {
  border: 1px solid var(--border);
  background: var(--surface);
  border-radius: 999px;
  padding: 0.55rem 1rem;
  font-weight: 600;
  color: var(--text-muted);
}

.tabs button.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1.25rem;
}
@media (max-width: 1100px) { .grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-width: 800px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 520px) { .grid { grid-template-columns: 1fr; } }
</style>
