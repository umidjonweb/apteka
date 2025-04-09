export default defineNuxtConfig({
   ssr: false,
   nitro: {
     preset: "netlify",
   },
   modules: [
     "@nuxtjs/tailwindcss",
     "@element-plus/nuxt",
     "@vueuse/nuxt",
     "@nuxtjs/i18n",
   ],
   tailwindcss: {},
   vite: {
     optimizeDeps: {
       exclude: ["webpack"],
     },
     server: {
       proxy: {
         "/api": {
           target: "https://education00.pythonanywhere.com", // Backend server
           changeOrigin: true,
           rewrite: (path) => {
             const lang = useI18n().locale.value || 'uz'; // Tilni olish
             return path.replace(/^\/api/, `/${lang}/api/v1`); // Tilni URL'ga qo'shish
           },
         },
       },
     },
   },
   i18n: {
     vueI18n: "~/i18n/index.ts", // Agar maxsus fayl yo'li ishlatilsa
   },
   css: [
     "~/assets/css/main.css",
     "swiper/css",
     "swiper/css/navigation",
     "swiper/css/pagination",
   ],
 });
 