import { Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import 'nextra-theme-docs/style.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

// const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
export default async function RootLayout({ children, params }) {
  const { lang } = await params

  const navbar = (
    <Navbar
      logo={
          <span style={{fontSize: "1.6rem"}}><b>Caro-Kann</b></span>
      }
      logoLink={`/${lang}/intro`}
      projectLink="https://github.com/ayden94/caro-kann"
    />
  )

  return (
    <html
      lang={lang}
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head></Head>
      <body>
        <Layout
          navbar={navbar}
          // pageMap={await getPageMap(lang)}

          pageMap={
            [
              { "data": {} },
              {
                // content/index.mdx
                "name": "intro",
                "route": "/intro",
                "title": "Introduce the caro-kann",
                "frontMatter": {}
              },
              {
                "name": "guides",
                "title": "Guides",
                "route": "/guides/create-a-store",
                "children": [
                  {
                    "name": "create-a-store",
                    "route": "/guides/create-a-store",
                    "title": "Create a store",
                    "frontMatter": {}
                  },
                  {
                    "name": "derided-state",
                    "route": "/guides/derided-state",
                    "title": "Derided state",
                    "frontMatter": {}
                  },
                  {
                    "name": "updating-state",
                    "route": "/guides/updating-state",
                    "title": "Updating state",
                    "frontMatter": {}
                  },
                  {
                    "name": "selector-functions",
                    "route": "/guides/selector-functions",
                    "title": "Selector functions",
                    "frontMatter": {}
                  }
                ]
              },
              {
                "name": "middlewares",
                "title": "Middlewares",
                "route": "/middlewares/persist",
                "frontMatter": {},
                "children": [
                  {
                    "name": "persist",
                    "route": "/middlewares/persist",
                    "title": "persist",
                    "frontMatter": {}
                  },
                  {
                    "name":"reducer",
                    "route": "/middlewares/reducer",
                    "title": "reducer",
                    "frontMatter": {}
                  },
                  {
                    "name": "devtools",
                    "route": "/middlewares/devtools",
                    "title": "devtools",
                    "frontMatter": {}
                  },
                  {
                    "name": 'zustand',
                    "route": "/middlewares/zustand",
                    "title": "zustand",
                    "frontMatter": {}
                    
                  }
                ]
              }
            ]
          }
          i18n={[
            { locale: 'en', name: 'English' }, 
            { locale: 'ko', name: '한국어' }
          ]}
          docsRepositoryBase="https://github.com/ayden94/caro-kann"
          search={<Search placeholder="Search..." />}
          editLink={null}
          feedback={
            {content: null}
          }
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}