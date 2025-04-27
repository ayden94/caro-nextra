import nextra from 'nextra'

// Set up Nextra with its configuration
const withNextra = nextra({
})

// Export the final Next.js config with Nextra included
export default withNextra({
  i18n: {
    locales: ['en', 'ko'],
    defaultLocale: 'en',
    localeDetection: false,
  }
})
