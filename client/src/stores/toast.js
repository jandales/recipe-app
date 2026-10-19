import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useToastStore = defineStore('toast', () => {
  const items = ref([])

  function push(message, type = 'success', timeout = 3500) {
    const id = Date.now() + Math.random()
    items.value.push({ id, message, type })
    setTimeout(() => dismiss(id), timeout)
  }

  function dismiss(id) {
    items.value = items.value.filter((t) => t.id !== id)
  }

  function success(message) {
    push(message, 'success')
  }

  function error(message) {
    push(message, 'error')
  }

  return { items, push, dismiss, success, error }
})
