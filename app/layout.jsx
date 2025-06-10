import { Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import 'nextra-theme-docs/style.css'

export default async function RootLayout({ children, params }) {
  const { lang } = await params

  const navbar = (
    <Navbar
      logo={
          <span style={{fontSize: "1.6rem"}}><b>Caro-Kann</b></span>
      }
      logoLink="/"
      projectLink="https://github.com/ayden94/caro-kann"
    />
  )

  return (
    <html
    lang={lang}
    dir="ltr"
    suppressHydrationWarning
  >
    <Head></Head>
    <body>
    <Layout
          navbar={navbar}
          pageMap={
            [
              {
                "name": "intro",
                "route": "/",
                "title": "Introduce the caro-kann",
              },
              {
                "name": "tutorials",
                "title": "Tutorials",
                "route": "/tutorial",
              },
              {
                "name": "guides",
                "title": "Guides",
                "route": null,
                "children": [
                  {
                    "name": "create-a-store",
                    "route": "/guides/create-a-store",
                    "title": "Create a store",
                  },
                  {
                    "name": "basic-usage",
                    "route": "/guides/basic-usage",
                    "title": "Basic usage",
                  },
                  {
                    "name": "provider",
                    "route": "/guides/provider",
                    "title": "Provider",
                  }
                ]
              },
              {
                "name": "utils",
                "title": "Utils",
                "route": null,
                "children": [
                  {
                    "name": "adaptor",
                    "route": "/utils/adaptor",
                    "title": "Adaptor",
                  },
                  {
                    "name": "merge",
                    "route": "/utils/merge",
                    "title": "Merge",
                  },
                ]
              },
              {
                "name": "middlewares",
                "title": "Middlewares",
                "route": null,
                "children": [
                  {
                    "name": "logger",
                    "route": "/middlewares/logger",
                    "title": "logger",
                  },
                  {
                    "name": "devtools",
                    "route": "/middlewares/devtools",
                    "title": "devtools",
                  },
                  {
                    "name": "debounce",
                    "route": "/middlewares/debounce",
                    "title": "debounce",
                  },
                  {
                    "name": "persist",
                    "route": "/middlewares/persist",
                    "title": "persist",
                  },
                  {
                    "name": "validate",
                    "route": "/middlewares/validate",
                    "title": "validate",
                  },
                  {
                    "name":"reducer",
                    "route": "/middlewares/reducer",
                    "title": "reducer",
                  },
                  {
                    "name": "composition",
                    "route": "/middlewares/composition",
                    "title": "Middleware Composition",
                  }
                ]
              },
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
