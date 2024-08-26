import { defineStore } from 'pinia';
import napi from '../api';
import { hoursToMs } from '~/utils/time/hoursToMs';  // Импортируем функцию hoursToMs

const cookieOptions = {
  sameSite: 'lax' as 'lax',
  expires: new Date(Date.now() + hoursToMs(24 * 7))
};

export const useAuthStore = defineStore('auth', {
  state: () =>
    ({
      user: undefined,
      access_token: useCookie('access_token').value,
      refresh_token: useCookie('refresh_token').value
    } as IAuthState),

  getters: {
    isAuth: state => !!state.user,
    tokens: state => ({ access_token: state.access_token, refresh_token: state.refresh_token })
  },

  actions: {
    setUser(user: IAuthState['user']) {
      this.user = user;
    },

    setAccessToken(access_token: string | null) {
      this.access_token = access_token;

      if (process.client) {
        let cookie = useCookie('access_token', cookieOptions);

        cookie.value = access_token;
      }
    },

    setRefreshToken(refresh_token: string | null) {
      this.refresh_token = refresh_token;

      if (process.client) {
        let cookie = useCookie('refresh_token', cookieOptions);

        cookie.value = refresh_token;
      }
    },

    syncTokens() {
      if (process.client) {
        const access_token = useCookie('access_token', cookieOptions);
        const refresh_token = useCookie('refresh_token', cookieOptions);

        access_token.value = this.access_token;
        refresh_token.value = this.refresh_token;
      }
    },

    async login(login: string, password: string) {
      const { access_token, refresh_token } = await napi.auth.signin(login, password);

      this.setAccessToken(access_token);
      this.setRefreshToken(refresh_token);

      await this.fetchUser();
    },

    async logout() {
      if (this.tokens.refresh_token) {
        napi.auth.revoke(this.tokens.refresh_token).catch(console.error);
      }

      await navigateTo('/signin');

      this.setAccessToken(null);
      this.setRefreshToken(null);

      this.setUser(undefined);
    },

    async fetchUser() {
      if (!this.access_token) return;

      try {
        const user = await napi.auth.me();

        this.setUser(user);
      } catch (err) {
        this.setUser(undefined);
      }
    }
  }
});
