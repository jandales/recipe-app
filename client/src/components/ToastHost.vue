<script setup>
import { useToastStore } from '../stores/toast'
const toast = useToastStore()
</script>

<template>
  <div class="toasts" aria-live="polite" aria-relevant="additions">
    <div
      v-for="item in toast.items"
      :key="item.id"
      class="toast"
      :class="item.type"
      role="status"
    >
      <span>{{ item.message }}</span>
      <button type="button" aria-label="Dismiss" @click="toast.dismiss(item.id)">×</button>
    </div>
  </div>
</template>

<style scoped>
.toasts {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 80;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: min(360px, calc(100vw - 2rem));
}

.toast {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding: 0.85rem 1rem;
  border-radius: 12px;
  border: 1px solid var(--border);
  background: var(--surface);
  box-shadow: var(--shadow);
}

.toast.success {
  background: var(--success-bg);
  border-color: #c7ddcb;
  color: var(--success);
}

.toast.error {
  background: var(--danger-bg);
  border-color: #f5c2c0;
  color: var(--danger);
}

.toast button {
  border: 0;
  background: transparent;
  font-size: 1.2rem;
  line-height: 1;
  color: inherit;
}
</style>
