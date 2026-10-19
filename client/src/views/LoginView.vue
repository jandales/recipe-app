<script setup>
import { reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { useToastStore } from '../stores/toast'

const auth = useAuthStore()
const toast = useToastStore()
const router = useRouter()
const route = useRoute()

const form = reactive({ email: '', password: '' })
const errors = reactive({})
const saving = ref(false)

async function onSubmit() {
  errors.email = ''
  errors.password = ''
  errors.form = ''
  if (!form.email.trim()) errors.email = 'Email is required.'
  if (!form.password) errors.password = 'Password is required.'
  if (errors.email || errors.password) return

  saving.value = true
  try {
    await auth.login(form.email.trim(), form.password)
    toast.success('Welcome back.')
    const redirect = typeof route.query.redirect === 'string' ? route.query.redirect : '/'
    router.push(redirect)
  } catch (e) {
    errors.form = e.response?.data?.message || 'Invalid credentials.'
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card card-surface">
      <div class="brand">
        <span class="mark" aria-hidden="true"></span>
        <h1 class="display h1">Simply Savored</h1>
        <p class="muted">Sign in to discover and share recipes.</p>
      </div>

      <form @submit.prevent="onSubmit" novalidate>
        <div class="field">
          <label for="email">Email address</label>
          <input id="email" v-model="form.email" class="input" type="email" autocomplete="email" />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input id="password" v-model="form.password" class="input" type="password" autocomplete="current-password" />
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
        </div>
        <p v-if="errors.form" class="error form-error">{{ errors.form }}</p>
        <router-link to="/account/password/reset" class="forgot">Forgot password?</router-link>
        <button class="btn btn-primary full" type="submit" :disabled="saving">
          {{ saving ? 'Signing in…' : 'Login' }}
        </button>
      </form>

      <p class="switch">
        Don’t have an account?
        <router-link to="/register">Register</router-link>
      </p>

      <div class="divider"><span>Or</span></div>
      <a class="btn btn-secondary full" href="/api/auth/google">Sign in with Google</a>
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
  width: min(420px, 100%);
  padding: 1.75rem;
}

.brand {
  text-align: center;
  margin-bottom: 1.5rem;
}

.mark {
  display: inline-block;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  margin-bottom: 0.75rem;
  background: linear-gradient(145deg, var(--primary), var(--accent));
}

.full { width: 100%; margin-top: 0.35rem; text-transform: uppercase; letter-spacing: 0.04em; }
.forgot {
  display: inline-block;
  margin: 0 0 1rem;
  color: var(--primary);
  font-size: 0.9rem;
  font-weight: 600;
}
.switch { text-align: center; margin: 1.15rem 0; color: var(--text-muted); }
.switch a { color: var(--primary); font-weight: 700; }
.divider {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 0.75rem;
  margin: 1rem 0;
  color: var(--text-muted);
  font-size: 0.85rem;
}
.divider::before,
.divider::after {
  content: '';
  height: 1px;
  background: var(--border);
}
.error { color: var(--danger); font-size: 0.85rem; margin: 0; }
.form-error { margin-bottom: 0.75rem; }
</style>
