<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { userAvatarUrl, onImgError, PLACEHOLDER_AVATAR } from '../utils/media'

const auth = useAuthStore()
const router = useRouter()
const route = useRoute()

const query = ref(typeof route.query.keyword === 'string' ? route.query.keyword : '')
const menuOpen = ref(false)
const mobileOpen = ref(false)

const avatar = computed(() => userAvatarUrl(auth.user))
const isLoggedIn = computed(() => auth.isAuthenticated)

function submitSearch() {
  const keyword = query.value.trim()
  if (!keyword) {
    router.push({ name: 'home' })
    return
  }
  router.push({ name: 'search', query: { keyword } })
  mobileOpen.value = false
}

function requireAuth(path = '/create') {
  if (isLoggedIn.value) {
    router.push(path)
    return
  }
  router.push({ name: 'login', query: { redirect: path } })
}

async function logout() {
  menuOpen.value = false
  await auth.logout()
  router.push({ name: 'home' })
}

function closeMenus(e) {
  if (!e.target.closest?.('.account-menu')) menuOpen.value = false
}

onMounted(() => document.addEventListener('click', closeMenus))
onUnmounted(() => document.removeEventListener('click', closeMenus))
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/" class="brand" aria-label="Simply Savored home">
        <span class="brand-mark" aria-hidden="true"></span>
        <span class="brand-text">
          <span class="brand-name">Simply Savored</span>
          <span class="brand-tag">Recipes</span>
        </span>
      </router-link>

      <nav class="nav-desktop" aria-label="Primary">
        <router-link to="/" class="nav-link" exact-active-class="active">Home</router-link>
        <a href="/#recipes" class="nav-link">Explore</a>
        <router-link
          v-if="auth.user"
          :to="{ name: 'user', params: { id: auth.user._id } }"
          class="nav-link"
          active-class="active"
        >
          My Recipes
        </router-link>
      </nav>

      <form class="search" role="search" @submit.prevent="submitSearch">
        <label class="sr-only" for="header-search">Search recipes</label>
        <span class="search-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20l-3.5-3.5" />
          </svg>
        </span>
        <input
          id="header-search"
          v-model="query"
          class="search-input"
          type="search"
          placeholder="Search recipes…"
          autocomplete="off"
        />
      </form>

      <div class="actions">
        <button
          v-if="isLoggedIn"
          type="button"
          class="btn btn-primary add-btn"
          @click="requireAuth('/create')"
        >
          Add Recipe
        </button>

        <template v-if="isLoggedIn">
          <div class="account-menu desktop-only">
            <button
              class="avatar-btn"
              type="button"
              aria-haspopup="menu"
              :aria-expanded="menuOpen"
              aria-label="Account menu"
              @click.stop="menuOpen = !menuOpen"
            >
              <img :src="avatar" alt="" @error="onImgError($event, PLACEHOLDER_AVATAR)" />
            </button>
            <div v-if="menuOpen" class="menu" role="menu">
              <p class="menu-user">{{ auth.user?.name }}</p>
              <router-link to="/account" role="menuitem" @click="menuOpen = false">Account</router-link>
              <router-link
                :to="{ name: 'user', params: { id: auth.user._id } }"
                role="menuitem"
                @click="menuOpen = false"
              >
                My Recipes
              </router-link>
              <button type="button" role="menuitem" @click="logout">Log out</button>
            </div>
          </div>
        </template>
        <template v-else>
          <router-link to="/login" class="btn btn-secondary auth-btn">Log in</router-link>
          <router-link to="/register" class="btn btn-primary auth-btn register-btn">Register</router-link>
        </template>

        <button
          class="btn-icon mobile-toggle"
          type="button"
          :aria-expanded="mobileOpen"
          :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
          @click="mobileOpen = !mobileOpen"
        >
          <svg v-if="!mobileOpen" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
          </svg>
          <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
          </svg>
        </button>
      </div>
    </div>

    <div v-if="mobileOpen" class="mobile-panel" id="mobile-nav">
      <form class="mobile-search" @submit.prevent="submitSearch">
        <label class="sr-only" for="mobile-search">Search recipes</label>
        <input id="mobile-search" v-model="query" type="search" placeholder="Search recipes…" />
      </form>
      <router-link to="/" @click="mobileOpen = false">Home</router-link>
      <a href="/#recipes" @click="mobileOpen = false">Explore</a>
      <template v-if="isLoggedIn">
        <router-link
          :to="{ name: 'user', params: { id: auth.user._id } }"
          @click="mobileOpen = false"
        >
          My Recipes
        </router-link>
        <button type="button" class="mobile-action" @click="mobileOpen = false; requireAuth('/create')">
          Add Recipe
        </button>
        <router-link to="/account" @click="mobileOpen = false">Account</router-link>
        <button type="button" class="mobile-action" @click="mobileOpen = false; logout()">
          Log out
        </button>
      </template>
      <template v-else>
        <router-link to="/login" @click="mobileOpen = false">Log in</router-link>
        <router-link to="/register" class="mobile-register" @click="mobileOpen = false">Register</router-link>
      </template>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(10px);
  background: rgba(250, 248, 243, 0.92);
  border-bottom: 1px solid var(--border);
}

.header-inner {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
  min-height: var(--header-h);
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  gap: 1rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.55rem;
}

.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  background:
    radial-gradient(circle at 30% 30%, #9bc4a1 0 28%, transparent 29%),
    linear-gradient(145deg, var(--primary), var(--accent));
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.2);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
  color: var(--primary);
}

.brand-tag {
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.nav-desktop {
  display: flex;
  gap: 0.35rem;
}

.nav-link {
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  color: var(--text-muted);
  font-weight: 600;
  font-size: 0.92rem;
}

.nav-link.active,
.nav-link:hover {
  color: var(--primary);
  background: var(--accent-soft);
}

.search {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 320px;
  width: 100%;
  justify-self: end;
}

.search-icon {
  position: absolute;
  left: 0.9rem;
  top: 0;
  bottom: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  pointer-events: none;
  line-height: 0;
}

.search-icon svg {
  display: block;
}

.search-input {
  width: 100%;
  height: 42px;
  border: 1px solid var(--border);
  border-radius: 999px;
  padding: 0 1rem 0 2.5rem;
  background: var(--surface);
  line-height: 42px;
  font-size: 0.95rem;
  color: var(--text);
}

.search-input::placeholder {
  line-height: normal;
  vertical-align: middle;
}

.search-input::-webkit-search-decoration,
.search-input::-webkit-search-cancel-button,
.search-input::-webkit-search-results-button,
.search-input::-webkit-search-results-decoration {
  -webkit-appearance: none;
  appearance: none;
}

.actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.avatar-btn {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 2px solid var(--border);
  padding: 0;
  overflow: hidden;
  background: var(--surface);
}

.avatar-btn img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.account-menu {
  position: relative;
}

.menu {
  position: absolute;
  right: 0;
  top: calc(100% + 0.4rem);
  min-width: 180px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
}

.menu-user {
  margin: 0;
  padding: 0.55rem 0.75rem;
  font-size: 0.85rem;
  color: var(--text-muted);
  border-bottom: 1px solid var(--border);
}

.menu a,
.menu button {
  text-align: left;
  border: 0;
  background: transparent;
  padding: 0.65rem 0.75rem;
  border-radius: 8px;
  color: var(--text);
  font-weight: 500;
}

.menu a:hover,
.menu button:hover {
  background: var(--accent-soft);
}

.mobile-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  padding: 0;
  color: var(--text);
  line-height: 0;
}

.mobile-toggle svg {
  display: block;
  width: 20px;
  height: 20px;
}

.mobile-panel {
  display: none;
}

@media (max-width: 900px) {
  .header-inner {
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
  }

  .brand-name {
    font-size: 1rem;
  }

  .nav-desktop,
  .search,
  .add-btn,
  .auth-btn,
  .desktop-only {
    display: none;
  }

  .mobile-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .mobile-panel {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding: 0.85rem 1rem 1.1rem;
    border-top: 1px solid var(--border);
    background: rgba(250, 248, 243, 0.98);
  }

  .mobile-panel a,
  .mobile-panel .mobile-action,
  .mobile-panel input {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0.8rem 0.95rem;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    font-weight: 600;
    font-size: 0.95rem;
  }

  .mobile-panel .mobile-action {
    cursor: pointer;
  }

  .mobile-panel a:hover,
  .mobile-panel .mobile-action:hover {
    border-color: var(--accent);
    background: var(--accent-soft);
    color: var(--primary);
  }

  .mobile-register {
    background: var(--primary) !important;
    border-color: var(--primary) !important;
    color: #fff !important;
    text-align: center !important;
  }

  .mobile-search {
    margin-bottom: 0.25rem;
  }
}
</style>
