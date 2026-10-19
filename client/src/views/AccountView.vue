<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import http from '../api/http'
import { useAuthStore } from '../stores/auth'
import { useToastStore } from '../stores/toast'
import ConfirmDialog from '../components/ConfirmDialog.vue'

const auth = useAuthStore()
const toast = useToastStore()
const router = useRouter()

const profile = reactive({
  name: auth.user?.name || '',
  bio: auth.user?.bio || '',
  phone: auth.user?.phone || '',
})
const password = reactive({
  password: '',
  new_password: '',
  password_confirmation: '',
})
const saving = ref(false)
const changing = ref(false)
const confirmOpen = ref(false)

async function saveProfile() {
  saving.value = true
  try {
    const { data } = await http.put('/user/update', profile)
    auth.user = data
    toast.success('Profile updated.')
  } catch (e) {
    toast.error(e.response?.data?.message || 'Could not update profile.')
  } finally {
    saving.value = false
  }
}

async function changePassword() {
  changing.value = true
  try {
    await http.put('/user/change-password', password)
    password.password = ''
    password.new_password = ''
    password.password_confirmation = ''
    toast.success('Password changed.')
  } catch (e) {
    toast.error(e.response?.data?.message || 'Could not change password.')
  } finally {
    changing.value = false
  }
}

async function deleteAccount() {
  try {
    await http.delete('/user/delete/account')
    auth.user = null
    toast.success('Account deleted.')
    router.push('/login')
  } catch (e) {
    toast.error(e.response?.data?.message || 'Could not delete account.')
  } finally {
    confirmOpen.value = false
  }
}
</script>

<template>
  <div class="page-narrow">
    <h1 class="display h1">Account</h1>
    <p class="muted">Manage your profile and security settings.</p>

    <section class="card-surface block">
      <h2 class="display h2">Profile</h2>
      <div class="field">
        <label for="name">Name</label>
        <input id="name" v-model="profile.name" class="input" type="text" />
      </div>
      <div class="field">
        <label for="bio">Bio</label>
        <textarea id="bio" v-model="profile.bio" class="textarea" rows="3" />
      </div>
      <div class="field">
        <label for="phone">Phone</label>
        <input id="phone" v-model="profile.phone" class="input" type="text" />
      </div>
      <button class="btn btn-primary" type="button" :disabled="saving" @click="saveProfile">
        {{ saving ? 'Saving…' : 'Save profile' }}
      </button>
    </section>

    <section class="card-surface block">
      <h2 class="display h2">Change password</h2>
      <div class="field">
        <label for="current">Current password</label>
        <input id="current" v-model="password.password" class="input" type="password" />
      </div>
      <div class="field">
        <label for="new">New password</label>
        <input id="new" v-model="password.new_password" class="input" type="password" />
      </div>
      <div class="field">
        <label for="confirm">Confirm new password</label>
        <input id="confirm" v-model="password.password_confirmation" class="input" type="password" />
      </div>
      <button class="btn btn-secondary" type="button" :disabled="changing" @click="changePassword">
        {{ changing ? 'Updating…' : 'Update password' }}
      </button>
    </section>

    <section class="card-surface block danger">
      <h2 class="display h2">Danger zone</h2>
      <p class="muted">Permanently delete your account and associated data.</p>
      <button class="btn btn-danger" type="button" @click="confirmOpen = true">Delete account</button>
    </section>

    <ConfirmDialog
      :open="confirmOpen"
      title="Delete your account?"
      message="This action cannot be undone."
      confirm-label="Delete account"
      danger
      @cancel="confirmOpen = false"
      @confirm="deleteAccount"
    />
  </div>
</template>

<style scoped>
.block {
  padding: 1.25rem;
  margin-top: 1rem;
}
.danger {
  border-color: #f5c2c0;
}
</style>
