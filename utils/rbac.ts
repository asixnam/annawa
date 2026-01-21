export function canAccess(user: { role:string }|null, required: string) {
  if (!required) return true
  if (!user) return false
  const roles = required.split('|')
  return roles.some(r => {
    if (r === '*') return true
    if (r.endsWith(':*')) return user.role.startsWith(r.replace(':*',''))
    return user.role === r
  })
}
