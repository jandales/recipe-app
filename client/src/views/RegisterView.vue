<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useToastStore } from '../stores/toast'

const auth = useAuthStore()
const toast = useToastStore()
const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  password: '',
  confirmation_password: '',
})
const errors = reactive({})
const saving = ref(false)

async function onSubmit() {
  Object.keys(errors).forEach((k) => delete errors[k])
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) errors.email = 'Email is required.'
  if (!form.password) errors.password = 'Password is required.'
  if (form.password !== form.confirmation_password) {
    errors.confirmation_password = 'Passwords do not match.'
  }
  if (Object.keys(errors).length) return

  saving.value = true
  try {
    await auth.register({
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password,
      confirmation_password: form.confirmation_password,
    })
    toast.success('Account created. Please sign in.')
    router.push({ name: 'login' })
  } catch (e) {
    errors.form = e.response?.data?.message || 'Could not register.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card card-surface">
      <div class="brand">
        <h1 class="display h1">Create account</h1>
        <p class="muted">Join Simply Savored and start sharing recipes.</p>
      </div>

      <form @submit.prevent="onSubmit" novalidate>
        <div class="field">
          <label for="name">Name</label>
          <input id="name" v-model="form.name" class="input" type="text" autocomplete="name" />
          <p v-if="errors.name" class="error">{{ errors.name }}</p>
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input id="email" v-model="form.email" class="input" type="email" autocomplete="email" />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" v-model="form.password" class="input" type="password" autocomplete="new-password" />
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
        </div>
        <div class="field">
          <label for="confirm">Confirm password</label>
          <input id="confirm" v-model="form.confirmation_password" class="input" type="password" autocomplete="new-password" />
          <p v-if="errors.confirmation_password" class="error">{{ errors.confirmation_password }}</p>
        </div>
        <p v-if="errors.form" class="error">{{ errors.form }}</p>
        <button class="btn btn-primary full" type="submit" :disabled="saving">
          {{ saving ? 'Creating…' : 'Register' }}
        </button>
      </form>

      <p class="switch">
        Already have an account?
        <router-link to="/login">Login</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 1.5rem;
}
.auth-card {
  width: min(440px, 100%);
  padding: 1.75rem;
}
.brand { text-align: center; margin-bottom: 1.25rem; }
.full { width: 100%; }
.switch { text-align: center; margin-top: 1.15rem; color: var(--text-muted); }
.switch a { color: var(--primary); font-weight: 700; }
.error { color: var(--danger); font-size: 0.85rem; margin: 0; }
</style>
