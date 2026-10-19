<script setup>
defineProps({
  open: Boolean,
  title: { type: String, default: 'Are you sure?' },
  message: { type: String, default: '' },
  confirmLabel: { type: String, default: 'Confirm' },
  danger: { type: Boolean, default: false },
})

defineEmits(['cancel', 'confirm'])
</script>

<template>
  <div v-if="open" class="overlay" role="presentation" @click.self="$emit('cancel')">
    <div
      class="dialog"
      role="alertdialog"
      aria-modal="true"
      :aria-labelledby="'confirm-title'"
      :aria-describedby="'confirm-desc'"
    >
      <h2 id="confirm-title" class="display h2">{{ title }}</h2>
      <p id="confirm-desc" class="muted">{{ message }}</p>
      <div class="actions">
        <button type="button" class="btn btn-secondary" @click="$emit('cancel')">Cancel</button>
        <button
          type="button"
          class="btn"
          :class="danger ? 'btn-danger' : 'btn-primary'"
          @click="$emit('confirm')"
        >
          {{ confirmLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(36, 42, 37, 0.4);
  display: grid;
  place-items: center;
  z-index: 70;
  padding: 1rem;
}

.dialog {
  width: min(420px, 100%);
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: 1.35rem;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.6rem;
  margin-top: 1.25rem;
}
</style>
