import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import http from '../api/http'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const ready = ref(false)
  const loading = ref(false)

  const isAuthenticated = computed(() => !!user.value)

  async function fetchUser() {
    loading.value = true
    try {
      const { data } = await http.get('/user')
      user.value = data
      return data
    } catch {
      user.value = null
      return null
    } finally {
      ready.value = true
      loading.value = false
    }
  }

  async function login(email, password) {
    const { data } = await http.post('/auth/login', { email, password })
    user.value = data
    return data
  }

  async function register(payload) {
    const { data } = await http.post('/register/store', payload)
    return data
  }

  async function logout() {
    try {
      await http.post('/logout')
    } finally {
      user.value = null
    }
  }

  return {
    user,
    ready,
    loading,
    isAuthenticated,
    fetchUser,
    login,
    register,
    logout,
  }
})
