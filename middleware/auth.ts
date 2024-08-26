import { useAuthStore } from '~/stores/auth';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore();

  if (!auth.isAuth) {
    if (!auth.tokens.access_token) return navigateTo('/signin');

    try {
      await auth.fetchUser();

      if (!auth.isAuth) {
        auth.setAccessToken(null);
        auth.setRefreshToken(null);

        return await navigateTo('/signin');
      }
    } catch (err) {
      await auth.logout();
    }
  }
});
