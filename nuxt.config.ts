// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://dummyjson.com/",
      myVal: 123456,
    }
  },
  telemetry: false,
  ssr: false,
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/icon",
    "@nuxt/image",
    ["nuxt-typed-router", {
      strict: true,
    }],
    "@pinia/nuxt",
    "@vueuse/nuxt"
  ],
  pinia: {
    storesDirs:['~/stores/**'],
  },
  components: {
    dirs:[],
  },
  typescript: {
    strict: true,
    typeCheck:'build',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title:"Демо для Вадима",
      htmlAttrs: {
        lang:'ru'
      }
    }
  }
});