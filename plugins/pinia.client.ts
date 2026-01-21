import { useAuthStore } from '../stores/auth'

export default defineNuxtPlugin(() => {
  // On client start, hydrate auth store from localStorage (example)
  if (process.client) {
    const raw = localStorage.getItem('auth_user')
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        const auth = useAuthStore()
        auth.setUser(parsed)
      } catch (e) { /* ignore */ }
  }
  }
})
