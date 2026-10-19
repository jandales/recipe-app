import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
    meta: { guest: true, hideChrome: true },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue'),
    meta: { guest: true, hideChrome: true },
  },
  {
    path: '/account/password/reset',
    name: 'password-reset-request',
    component: () => import('../views/PasswordResetView.vue'),
    meta: { guest: true, hideChrome: true },
  },
  {
    path: '/account/password/reset/:token',
    name: 'password-reset',
    component: () => import('../views/PasswordResetView.vue'),
    meta: { guest: true, hideChrome: true },
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/search',
    name: 'search',
    component: () => import('../views/SearchView.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreateRecipeView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/recipe/:id',
    name: 'recipe',
    component: () => import('../views/RecipeDetailView.vue'),
  },
  {
    path: '/recipe/edit/:id',
    name: 'edit',
    component: () => import('../views/EditRecipeView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/UserRecipesView.vue'),
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/AccountView.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.beforeEach(async (to) => {
  const auth = useAuthStore()
  if (!auth.ready) {
    await auth.fetchUser()
  }

  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return { name: 'login', query: { redirect: to.fullPath } }
  }

  if (to.meta.guest && auth.isAuthenticated) {
    return { name: 'home' }
  }

  return true
})

export default router
