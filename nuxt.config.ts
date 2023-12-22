// https://nuxt.com/docs/api/configuration/nuxt-config
import eslintPlugin from "vite-plugin-eslint";

export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    plugins: [
      eslintPlugin(),
    ]
  },
  css: ["@/assets/styles/app.scss"],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxt/image',
    'nuxt-icon',
  ],
  image: {
    inject: true,
  },
  i18n: {
    locales: [
      {
        code: 'ru',
        file: 'ru.ts'
      },
      {
        code: 'kk',
        file: 'kk.ts'
      },
    ],
    langDir: 'lang',
    defaultLocale: 'ru'
  },
})
