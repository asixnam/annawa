import { defineStore } from 'pinia'
import { useCookie } from '#imports'

export const useAuthStore = defineStore('auth', () => {
  const user = useCookie<null | { id: string; name: string; role: string; image_url?: string }>('auth_user', {
    default: () => null,
    watch: true
  })

  function setUser(u: any) { user.value = u }

  async function login(payload: { email: string; password: string }) {
    try {
      const { data, error } = await useFetch('/api/auth/login', {
        method: 'POST',
        body: payload
      })

      if (error.value) {
        throw new Error(error.value.statusMessage || 'Login failed')
      }

      if (data.value && data.value.user) {
        setUser(data.value.user)
      }
    } catch (err: any) {
      throw new Error(err.message || 'Login failed')
    }
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
