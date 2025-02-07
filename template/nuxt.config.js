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
        'http-equiv': 'Content-Security-Policy',
        content: "default-src * 'self' 'unsafe-inline' 'unsafe-eval' data: gap:",
      },
      {
        hid: 'description',
        name: 'description',
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
    app: {
      theme: 'auto',
    },
    main: {
      main: true,
      pushState: true,
      pushStateSeparator: '#',
    },
    mode: 'hash',
    invertNav: false,
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

  // Generate configuration
  generate: {
    fallback: true,
  },

  // Additional CSS configuration
  css: [
    'assets/app.css'
  ]
}
