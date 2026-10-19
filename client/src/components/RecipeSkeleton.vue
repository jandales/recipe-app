<template>
  <div class="grid" aria-hidden="true">
    <div v-for="n in 6" :key="n" class="item card-surface">
      <div class="skeleton media" />
      <div class="pad">
        <div class="skeleton line short" />
        <div class="skeleton line" />
        <div class="skeleton line mid" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;
}

.item {
  overflow: hidden;
}

.media {
  aspect-ratio: 4 / 3;
  border-radius: 0;
}

.pad {
  padding: 1rem;
  display: grid;
  gap: 0.55rem;
}

.line {
  height: 12px;
}

.short { width: 40%; }
.mid { width: 70%; }

@media (max-width: 1100px) {
  .grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 800px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 520px) {
  .grid { grid-template-columns: 1fr; }
}
</style>
