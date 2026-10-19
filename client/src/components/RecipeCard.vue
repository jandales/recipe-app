<script setup>
import { computed } from 'vue'
import { recipeImageUrl, userAvatarUrl, onImgError, PLACEHOLDER_RECIPE, PLACEHOLDER_AVATAR } from '../utils/media'

const props = defineProps({
  recipe: { type: Object, required: true },
})

const image = computed(() => recipeImageUrl(props.recipe))
const avatar = computed(() => userAvatarUrl(props.recipe.user))
const authorName = computed(() => props.recipe.user?.name || 'Home cook')
</script>

<template>
  <article class="card">
    <router-link :to="{ name: 'recipe', params: { id: recipe._id } }" class="media">
      <img
        :src="image"
        :alt="recipe.name || 'Recipe image'"
        loading="lazy"
        @error="onImgError($event, PLACEHOLDER_RECIPE)"
      />
    </router-link>

    <div class="body">
      <div class="author">
        <img
          class="avatar"
          :src="avatar"
          alt=""
          @error="onImgError($event, PLACEHOLDER_AVATAR)"
        />
        <router-link
          v-if="recipe.user?._id"
          class="author-name"
          :to="{ name: 'user', params: { id: recipe.user._id } }"
        >
          {{ authorName }}
        </router-link>
        <span v-else class="author-name">{{ authorName }}</span>
      </div>

      <h3 class="title">
        <router-link :to="{ name: 'recipe', params: { id: recipe._id } }">
          {{ recipe.name }}
        </router-link>
      </h3>

      <p v-if="recipe.description" class="desc">{{ recipe.description }}</p>
    </div>
  </article>
</template>

<style scoped>
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow);
}

.media {
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  background: var(--accent-soft);
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.35s ease;
}

.card:hover .media img {
  transform: scale(1.04);
}

.body {
  padding: 1rem 1.05rem 1.15rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  flex: 1;
}

.author {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--border);
}

.author-name {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 500;
}

.author-name:hover {
  color: var(--primary);
}

.title {
  margin: 0;
  font-family: var(--font-display);
  font-size: 1.15rem;
  line-height: 1.3;
}

.title a:hover {
  color: var(--primary);
}

.desc {
  margin: 0;
  color: var(--text-muted);
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
