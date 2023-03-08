// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/main.css'
  ],
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Inter&display=swap", 
          rel: "stylesheet",
        }
      ]
    }
  }
})
