<template>
  <div class="wrap">
    <h1 class="display h1">Page not found</h1>
    <p class="muted">That page doesn’t exist or may have moved.</p>
    <router-link to="/" class="btn btn-primary">Go home</router-link>
  </div>
</template>

<style scoped>
.wrap {
  text-align: center;
  padding: 4rem 1rem;
  display: grid;
  gap: 0.75rem;
  justify-items: center;
}
</style>
