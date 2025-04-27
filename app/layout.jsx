import { Layout, Navbar } from 'nextra-theme-docs'
import { Head, Search } from 'nextra/components'
import 'nextra-theme-docs/style.css'

// 메타데이터 추가
export const metadata = {
  title: 'Caro-Kann',
  description: '전역 상태 관리 라이브러리',
  openGraph: {
    title: 'Caro-Kann - 전역 상태 관리 라이브러리',
    description: 'useState와 유사한 문법으로 사용할 수 있는 전역 상태 관리 도구',
    images: [
      {
        url: 'https://img1.daumcdn.net/thumb/R960x0/?scode=mtistory2&fname=https://img1.daumcdn.net/thumb/R750x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FGxXMj%2FbtsLHOrJhvB%2FT2cgkdLkccDgKgliVqY7L0%2Fimg.webp', // 실제 이미지 URL로 변경하세요
        width: 1200,
        height: 630,
        alt: 'Caro-Kann 라이브러리',
      }
    ],
    locale: 'ko',
    type: 'website',
  }
}

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
