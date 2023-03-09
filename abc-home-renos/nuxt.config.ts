 import { indexImages } from './index_images'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/main.css'
  ],
  app: {
    head: {
      link: [
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap", 
          rel: "stylesheet",
        }
      ]
    }
  },
  // hooks: {
  //   'modules:before': () => {
  //     indexImages()
  //   }
  // }
})

// const fs = require('fs')
// To read Static Files
// const images = fs.readdirSync('./assets/images/home-page-carousel')
//process.env.IMAGES_HOME_CAROUSEL = images