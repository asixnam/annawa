import { defineNuxtRouteMiddleware, navigateTo, useState } from '#imports'

// Usage: add route meta: { middleware: 'rbac', auth: 'admin:paud|super' }
export default defineNuxtRouteMiddleware((to) => {
  const required = to.meta?.auth as string | undefined
  if (!required) return

  // get user from pinia store/state
  const auth = useState('auth_user')
  const user = auth.value
  if (!user) return navigateTo('/login')

  const roles = required.split('|')
  const ok = roles.some(r => {
    if (r === '*') return true
    if (r.endsWith(':*')) return user.role.startsWith(r.replace(':*',''))
    return user.role === r
  })
  if (!ok) return navigateTo('/unauthorized')
})
