export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // Pour la traduction
  modules: ["@nuxt/content", "@nuxtjs/i18n"],
  i18n: {
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      { code: "fr-FR", iso: "fr-FR", name: "français", file: "fr-FR.json" },
      { code: "en-UK", iso: "en-UK", name: "English (UK)", file: "en-UK.json" },
      { code: "es-ES", iso: "es-ES", name: "Español", file: "es-ES.json" },
      { code: "in-HI", iso: "in-HI", name: "हिन्दी", file: "in-HI.json" },
    ],
    defaultLocale: "en-UK",
    vueI18n: "./i18n.config.js",
  },
});
