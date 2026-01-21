import { useAuthStore } from '../stores/auth'
export function useAuth() {
  const auth = useAuthStore()
  function isSuper() { return auth.user?.role === 'super' }
  function isAdmin() { return auth.user?.role?.startsWith('admin') }
  return { auth, isSuper, isAdmin }
}
