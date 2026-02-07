export default defineNuxtRouteMiddleware(async (to) => {
  if (import.meta.server)
    return

  const { getToken, removeToken } = useAuthToken()

  if (to.path.startsWith('/dashboard') && to.path !== '/dashboard/login') {
    if (!getToken())
      return navigateTo('/dashboard/login')
  }

  if (to.path === '/dashboard/login') {
    const token = getToken()
    if (token) {
      try {
        await useAPI('/api/verify')
        return navigateTo('/dashboard')
      }
      catch (e) {
        removeToken()
        console.warn(e)
      }
    }
  }
})
