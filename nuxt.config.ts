// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  components: [
    '~/components/ui',
    '~/components/entity',
    '~/components/inventory',
    '~/components/location',
    '~/components/chat',
    '~/components'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config'
  },
  imports: {
    dirs: ['stores']
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_API_URL || 'http://localhost:5000'
    }
  },
  typescript: {
    typeCheck: true
  },
  vite: {
    vue: {
      script: {
        propsDestructure: true,
        defineModel: true
      }
    }
  }
});
