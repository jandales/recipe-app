<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import ToastHost from './components/ToastHost.vue'

const route = useRoute()
const hideChrome = computed(() => !!route.meta.hideChrome)
</script>

<template>
  <div class="app-shell">
    <AppHeader v-if="!hideChrome" />
    <main class="main-content" :class="{ flush: hideChrome }">
      <router-view />
    </main>
    <ToastHost />
  </div>
</template>

<style scoped>
.flush {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
}
</style>
