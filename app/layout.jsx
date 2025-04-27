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
              { "data": {} },
              {
                // content/index.mdx
                "name": "intro",
                "route": "/",
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
                "route": "/middlewares",
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
                    "name": 'zustand',
                    "route": "/middlewares/zustand",
                    "title": "zustand",
                    "frontMatter": {}
                  },
                  {
                    "name": "devtools",
                    "route": "/middlewares/devtools",
                    "title": "devtools",
                    "frontMatter": {}
                  },
                  {
                    "name": "composition",
                    "route": "/middlewares/composition",
                    "title": "Middleware Composition",
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
