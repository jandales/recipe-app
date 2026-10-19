<script setup>
import { computed, reactive, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import http from '../api/http'
import { useToastStore } from '../stores/toast'

const route = useRoute()
const router = useRouter()
const toast = useToastStore()

const hasToken = computed(() => !!route.params.token)
const email = ref('')
const form = reactive({ password: '', confirmation_password: '' })
const saving = ref(false)

async function requestReset() {
  saving.value = true
  try {
    await http.post('/password/reset', { email: email.value.trim() })
    toast.success('If that email exists, a reset link was sent.')
  } catch (e) {
    toast.error(e.response?.data?.message || 'Could not request reset.')
  } finally {
    saving.value = false
  }
}

async function submitNewPassword() {
  saving.value = true
  try {
    await http.put('/account/password/change', {
      token: route.params.token,
      password: form.password,
      confirmation_password: form.confirmation_password,
    })
    toast.success('Password updated. Please sign in.')
    router.push('/login')
  } catch (e) {
    toast.error(e.response?.data?.message || 'Could not reset password.')
  } finally {
    saving.value = false
  }
}
</script>

<template>
  <div class="auth-page">
    <div class="auth-card card-surface">
      <h1 class="display h1">{{ hasToken ? 'Set new password' : 'Reset password' }}</h1>
      <p class="muted">
        {{ hasToken ? 'Choose a new password for your account.' : 'Enter your email and we’ll send a reset link.' }}
      </p>

      <form v-if="!hasToken" @submit.prevent="requestReset">
        <div class="field">
          <label for="email">Email</label>
          <input id="email" v-model="email" class="input" type="email" required />
        </div>
        <button class="btn btn-primary full" type="submit" :disabled="saving">
          {{ saving ? 'Sending…' : 'Send reset link' }}
        </button>
      </form>

      <form v-else @submit.prevent="submitNewPassword">
        <div class="field">
          <label for="password">New password</label>
          <input id="password" v-model="form.password" class="input" type="password" required />
        </div>
        <div class="field">
          <label for="confirm">Confirm password</label>
          <input id="confirm" v-model="form.confirmation_password" class="input" type="password" required />
        </div>
        <button class="btn btn-primary full" type="submit" :disabled="saving">
          {{ saving ? 'Saving…' : 'Update password' }}
        </button>
      </form>

      <p class="switch"><router-link to="/login">Back to login</router-link></p>
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
.full { width: 100%; }
.switch { text-align: center; margin-top: 1rem; }
.switch a { color: var(--primary); font-weight: 700; }
</style>
