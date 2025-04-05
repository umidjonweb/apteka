// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
   ssr: false,
   nitro: {
      preset: 'netlify'
    },
   compatibilityDate: '2024-11-01',
   modules: ['@nuxtjs/tailwindcss', '@element-plus/nuxt','@vueuse/nuxt', "@nuxtjs/i18n"],
   devtools: { enabled: true },
   tailwindcss: {
      // Options
   },
   vite: {
      optimizeDeps: {
        exclude: ["webpack"],
      },
      server: {
         proxy: {
           '/api': {
             target: 'https://education00.pythonanywhere.com',
             changeOrigin: true,
             rewrite: (path) => path.replace(/^\/api/, '/ru/api/v1'),
           },
         },
       },      
    },
   i18n: {
      vueI18n: '~/i18n/index.ts' // if you are using custom path, default
   },
   css: ['~/assets/css/main.css', 'swiper/css', 'swiper/css/navigation', 'swiper/css/pagination'],

})
