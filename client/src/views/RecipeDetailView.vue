<script setup>
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { deleteRecipe, getRecipe, toggleSaved } from '../api/recipes'
import { useAuthStore } from '../stores/auth'
import { useToastStore } from '../stores/toast'
import ConfirmDialog from '../components/ConfirmDialog.vue'
import {
  recipeImageUrl,
  userAvatarUrl,
  onImgError,
  PLACEHOLDER_RECIPE,
  PLACEHOLDER_AVATAR,
} from '../utils/media'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()
const toast = useToastStore()

const recipe = ref(null)
const loading = ref(true)
const confirmOpen = ref(false)
const deleting = ref(false)

const isOwner = computed(() => {
  const ownerId = recipe.value?.user?._id || recipe.value?.user
  return String(ownerId) === String(auth.user?._id)
})

const isSaved = computed(() => {
  const saved = recipe.value?.saved || []
  return saved.map(String).includes(String(auth.user?._id))
})

onMounted(load)

async function load() {
  loading.value = true
  try {
    recipe.value = await getRecipe(route.params.id)
  } catch {
    toast.error('Recipe not found.')
    router.push('/')
  } finally {
    loading.value = false
  }
}

function requireLogin(action = 'continue') {
  toast.error(`Please log in or register to ${action}.`)
  router.push({
    name: 'login',
    query: { redirect: route.fullPath },
  })
}

async function onToggleSave() {
  if (!auth.isAuthenticated) {
    requireLogin('save recipes')
    return
  }
  try {
    recipe.value = await toggleSaved(route.params.id)
    toast.success(isSaved.value ? 'Saved to your collection.' : 'Removed from saved.')
  } catch {
    toast.error('Could not update saved recipes.')
  }
}

async function onDelete() {
  deleting.value = true
  try {
    await deleteRecipe(route.params.id)
    toast.success('Recipe deleted.')
    router.push('/')
  } catch {
    toast.error('Could not delete recipe.')
  } finally {
    deleting.value = false
    confirmOpen.value = false
  }
}

function shareUrl() {
  return `${window.location.origin}/recipe/${route.params.id}`
}

function shareToFacebook() {
  if (recipe.value?.status === 'private') {
    toast.error('Make this recipe public before sharing.')
    return
  }

  const url = shareUrl()
  const shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  window.open(shareLink, 'facebook-share', 'width=640,height=720,noopener,noreferrer')
}
</script>

<template>
  <div v-if="loading" class="muted">Loading recipe…</div>

  <article v-else-if="recipe" class="detail">
    <router-link to="/" class="back">← Back to recipes</router-link>

    <div class="cover">
      <img
        :src="recipeImageUrl(recipe)"
        :alt="recipe.name"
        @error="onImgError($event, PLACEHOLDER_RECIPE)"
      />
    </div>

    <header class="meta">
      <div class="titles">
        <p class="status">{{ recipe.status === 'private' ? 'Private' : 'Public' }}</p>
        <h1 class="display h1">{{ recipe.name }}</h1>
        <p class="muted">{{ recipe.description }}</p>
      </div>

      <div class="author">
        <img
          :src="userAvatarUrl(recipe.user)"
          alt=""
          @error="onImgError($event, PLACEHOLDER_AVATAR)"
        />
        <div>
          <router-link
            v-if="recipe.user?._id"
            :to="{ name: 'user', params: { id: recipe.user._id } }"
            class="author-name"
          >
            {{ recipe.user?.name || 'Home cook' }}
          </router-link>
          <span v-else class="author-name">{{ recipe.user?.name || 'Home cook' }}</span>
          <p class="muted tiny">Recipe author</p>
        </div>
      </div>
    </header>

    <div class="stats" aria-label="Recipe details">
      <div class="stat">
        <span class="stat-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <path d="M6 10h12v7a3 3 0 01-3 3H9a3 3 0 01-3-3v-7z" stroke-linejoin="round" />
            <path d="M8 10V7a4 4 0 018 0v3" stroke-linecap="round" />
            <path d="M4 10h16" stroke-linecap="round" />
          </svg>
        </span>
        <strong>{{ recipe.cookTime || '—' }}</strong>
        <span>Cooking Time</span>
      </div>
      <div class="stat">
        <span class="stat-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <path d="M6 18V12M12 18V8M18 18V5" stroke-linecap="round" />
          </svg>
        </span>
        <strong>{{ recipe.difficulty || '—' }}</strong>
        <span>Difficulty</span>
      </div>
      <div class="stat">
        <span class="stat-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <circle cx="12" cy="12" r="8" />
            <path d="M12 8v4l3 2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <strong>{{ recipe.prepTime || '—' }}</strong>
        <span>Prep Time</span>
      </div>
      <div class="stat">
        <span class="stat-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">
            <path d="M4 11c0 4.4 3.6 8 8 8s8-3.6 8-8" stroke-linecap="round" />
            <path d="M4 11h16" stroke-linecap="round" />
            <path d="M12 7v4" stroke-linecap="round" />
            <circle cx="12" cy="6" r="1.2" fill="currentColor" stroke="none" />
          </svg>
        </span>
        <strong>{{ recipe.servings || '—' }}</strong>
        <span>Serves</span>
      </div>
    </div>

    <div class="actions">
      <button type="button" class="btn btn-secondary" @click="onToggleSave">
        {{ isSaved ? 'Unsave' : 'Save recipe' }}
      </button>
      <button
        type="button"
        class="btn btn-secondary share-fb"
        :disabled="recipe.status === 'private'"
        :title="recipe.status === 'private' ? 'Only public recipes can be shared' : 'Share on Facebook'"
        @click="shareToFacebook"
      >
        <span class="fb-icon" aria-hidden="true">f</span>
        Share to Facebook
      </button>
      <template v-if="isOwner">
        <router-link class="btn btn-secondary" :to="{ name: 'edit', params: { id: recipe._id } }">
          Edit
        </router-link>
        <button type="button" class="btn btn-danger" @click="confirmOpen = true">Delete</button>
      </template>
    </div>

    <div class="content">
      <section class="card-surface block">
        <h2 class="display h2">Ingredients</h2>
        <ul>
          <li v-for="(item, i) in recipe.ingredients || []" :key="'i' + i">{{ item }}</li>
        </ul>
      </section>

      <section class="card-surface block">
        <h2 class="display h2">Instructions</h2>
        <ol>
          <li v-for="(step, i) in recipe.instructions || []" :key="'s' + i">{{ step }}</li>
        </ol>
      </section>
    </div>

    <ConfirmDialog
      :open="confirmOpen"
      title="Delete this recipe?"
      message="This cannot be undone."
      confirm-label="Delete"
      danger
      @cancel="confirmOpen = false"
      @confirm="onDelete"
    />
  </article>
</template>

<style scoped>
.back {
  display: inline-block;
  margin-bottom: 1rem;
  color: var(--primary);
  font-weight: 600;
}

.cover {
  border-radius: calc(var(--radius) + 4px);
  overflow: hidden;
  aspect-ratio: 21 / 9;
  background: var(--accent-soft);
  border: 1px solid var(--border);
  margin-bottom: 1.25rem;
}

.cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.meta {
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.status {
  margin: 0 0 0.35rem;
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.author img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
}

.author-name {
  font-weight: 700;
}

.tiny { margin: 0; font-size: 0.82rem; }

.stats {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.85rem;
  margin: 0.25rem 0 1.35rem;
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  text-align: center;
  padding: 1rem 0.75rem;
  border-radius: 16px;
  background: var(--accent-soft);
  color: var(--primary);
}

.stat-icon {
  display: grid;
  place-items: center;
  margin-bottom: 0.25rem;
  opacity: 0.9;
}

.stat strong {
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}

.stat span {
  font-size: 0.82rem;
  font-weight: 500;
  opacity: 0.85;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-bottom: 1.5rem;
}

.share-fb {
  gap: 0.45rem;
}

.fb-icon {
  display: inline-grid;
  place-items: center;
  width: 1.15rem;
  height: 1.15rem;
  border-radius: 4px;
  background: #1877f2;
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  line-height: 1;
}

.content {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1rem;
}

.block {
  padding: 1.25rem;
}

.block ul,
.block ol {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
}

.block li {
  margin-bottom: 0.55rem;
}

@media (max-width: 800px) {
  .cover { aspect-ratio: 16 / 10; }
  .content { grid-template-columns: 1fr; }
  .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}

@media (max-width: 420px) {
  .stats { grid-template-columns: 1fr 1fr; gap: 0.6rem; }
  .stat { padding: 0.85rem 0.5rem; }
  .stat strong { font-size: 0.95rem; }
}
</style>
