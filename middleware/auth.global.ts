// global middleware to set auth from localStorage/session (simple example)
import { defineNuxtRouteMiddleware, useState } from '#imports'

export default defineNuxtRouteMiddleware((to, from) => {
  // This middleware runs on every route. In real app, hydrate auth from cookie/jwt.
  const authState = useState('auth_user')
  if (!authState.value) {
    try {
      const raw = process.client ? localStorage.getItem('auth_user') : null
      if (raw) authState.value = JSON.parse(raw)
    } catch (e) { /* ignore */ }
  }
})
