module.exports = {
  ssr: false,

  // Head configuration
  head: {
    title: 'Nuxt7 Project',
    meta: [
      {
        charset: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover'
      },
      {
        name: 'mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent'
      },
      {
        name: 'theme-color',
        content: '#000'
      },
      {
        hid: 'description',
        name: '<%= name %>',
        content: '<%= description %>'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.png'
      }
    ]
  },

  // Nuxt modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt7'
  ],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: '<%= name %>',
    description: '<%= description %>'
  },

  // Framework7 Config
  framework7: {
    // ...
  },

  // Build configuration
  build: {
    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend (config) {
      // ...
    }
  },

  // Additional CSS configuration
  css: [
    'assets/app.css'
  ]
}
