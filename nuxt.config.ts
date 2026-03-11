// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap' },
        { rel: 'icon', type: 'image/png', href: '/ico.png' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  runtimeConfig: {
    smtpUser: process.env.SMTP_USER || 'no-reply@example.com',
    smtpPass: process.env.SMTP_PASS || 'password',
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '/api',
      googleClientId: process.env.GOOGLE_CLIENT_ID || 'YOUR_GOOGLE_CLIENT_ID'
    }
  },
  nitro: {
    externals: {
      inline: ['pg', 'pg-pool', 'pg-types', 'pgpass', 'pg-protocol', 'pg-connection-string']
    }
  }
})


