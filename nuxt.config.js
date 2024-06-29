export default {
  // Configurações do cabeçalho da página
  head: {
    title: 'gs studio - Agência especializada em design, marketing e tecnologia',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap' }
    ]
  },

  css: [
    '~/assets/css/main.css'
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' },
    { src: '~/plugins/axios.js', mode: 'client' },
    { src: '~/plugins/vue-smooth-scroll.js', mode: 'client' }
  ],

  components: true,

  buildModules: [
  ],

  modules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/axios',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
  ],

  googleFonts: {
    families: {
      Poppins: [400, 600]
    },
    display: 'swap'
  },
  
  axios: {
    baseURL: process.env.VITE_STRAPI_URL || 'http://localhost:1337'
  },

  router: {
    base: '/gsstudio/'
  },

  build: {
    babel: {
      plugins: [
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-transform-private-property-in-object', { loose: true }]
      ]
    }
  }
}
