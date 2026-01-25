import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null as null | { id: string; name: string; role: string })

  function setUser(u: any) { user.value = u }

  async function login(payload: { email: string; password: string }) {
    // TODO: replace with real API call
    if (payload.email === 'super@local' && payload.password === 'pass') {
      setUser({ id: '1', name: 'Super Admin', role: 'super' })
      return
    }
    if (payload.email === 'admin@local' && payload.password === 'pass') {
      setUser({ id: '2', name: 'Admin PAUD', role: 'admin:paud' })
      return
    }
    if (payload.email === 'santri@admin' && payload.password === 'pass') {
      setUser({ id: '5', name: 'Admin Kesantrian', role: 'admin:santri' })
      return
    }
    if (payload.email === 'user@local' && payload.password === 'pass') {
      setUser({ id: '3', name: 'Santri', role: 'user' })
      return
    }
    if (payload.email === 'author@local' && payload.password === 'pass') {
      setUser({ id: '4', name: 'Ustadz Author', role: 'author' })
      return
    }
    throw new Error('Invalid credentials')
  }

  function logout() { user.value = null }

  function hasRole(required: string) {
    if (!user.value) return false
    if (required === '*') return true
    // support multiple roles separated by | e.g. 'admin:paud|admin:sd'
    return required.split('|').some(r => user.value!.role === r || (r.endsWith(':*') && user.value!.role.startsWith(r.replace(':*', ''))))
  }

  return { user, login, logout, setUser, hasRole }
})
