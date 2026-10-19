<script setup>
defineProps({
  title: { type: String, default: 'Nothing here yet' },
  message: { type: String, default: '' },
})
</script>

<template>
  <div class="empty card-surface">
    <div class="icon" aria-hidden="true"></div>
    <h2 class="display h2">{{ title }}</h2>
    <p class="muted">{{ message }}</p>
    <div v-if="$slots.default" class="slot">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.empty {
  text-align: center;
  padding: 2.5rem 1.5rem;
}

.icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background:
    radial-gradient(circle at 35% 35%, #fff 0 18%, transparent 19%),
    linear-gradient(145deg, var(--accent-soft), #d7e8db);
}

.slot {
  margin-top: 1.25rem;
}
</style>
