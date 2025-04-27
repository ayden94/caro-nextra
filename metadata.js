export default function metadata(lang) {
  // 언어별 메타데이터 설정
  const metadata = {
    en: {
      title: 'Caro-Kann',
      description: 'Global state management library',
      openGraph: {
        title: 'Caro-Kann - Global State Management Library',
        description: 'A global state management tool with syntax similar to useState',
        locale: 'en',
      }
    },
    ko: {
      title: 'Caro-Kann',
      description: '전역 상태 관리 라이브러리',
      openGraph: {
        title: 'Caro-Kann - 전역 상태 관리 라이브러리',
        description: 'useState와 유사한 문법으로 사용할 수 있는 전역 상태 관리 도구',
        locale: 'ko',
      }
    }
  };

  // 공통 설정
  const commonMetadata = {
    images: [
      {
        url: 'https://github.com/user-attachments/assets/1fa53294-205c-45a3-b6f8-b1be585ce11e',
        width: 1200,
        height: 630,
        alt: 'Caro-Kann 라이브러리',
      }
    ],
    openGraph: {
      type: 'website',
      images: [
        {
          url: 'https://github.com/user-attachments/assets/1fa53294-205c-45a3-b6f8-b1be585ce11e',
          width: 1200,
          height: 630,
          alt: 'Caro-Kann Library',
        }
      ],
    }
  };

  // 언어별 메타데이터와 공통 메타데이터 병합
  return {
    ...commonMetadata,
    ...metadata[lang] || metadata.en, // 지원하지 않는 언어는 영어로 대체
    openGraph: {
      ...commonMetadata.openGraph,
      ...metadata[lang]?.openGraph || metadata.en.openGraph,
    }
  };
}

