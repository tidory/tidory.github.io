export const state = () => ({
  menu: {
    prologue: {
      intro: { label: '티도리 프레임워크', href: '/', page: '01' }
    },
    basic: {
      getStarted: { label: '시작하기', href: '/docs/get-started', page: '02' },
      directory: { label: '디렉토리', href: '/docs/directory', page: '03' },
      template: { label: '템플릿', href: '/docs/template', page: '04' },
      example: { label: '티스토리 예제', href: '/docs/example', page: '05' },
      configuration: { label: '환경설정', href: '/docs/configuration', page: '06' },
      distribute: { label: '빌드 및 배포', href: '/docs/distribute', page: '07' }
    },
    advanced: {
      framework: { label: '프레임워크 - 뷰 & 리액트', href: '/docs/framework', page: '08' },
      package: { label: '패키지', href: '/docs/package', page: '09' }
    },
    libraries: {
      tistory: { label: 'Tistory for Javascript', href: 'https://github.com/tistory-project/tistory.js' },
      phpTistory: { label: 'Tistory for PHP', href: 'https://github.com/tistory-project/tistory.php' },
      tistorySkin: { label: '(Unofficial) Tistory Skin ', href: 'https://github.com/tistory-project/tistory-skin' }
    },
    meta: {
      tistoryGuidebook: { label: '티스토리 스킨 가이드', href: 'https://tistory.github.io/document-tistory-skin/' },
      tistoryAPI: { label: '티스토리 API', href: 'https://tistory.github.io/document-tistory-apis/' },
      lecture: { label: '티도리 프레임워크 강좌', href: 'https://www.inflearn.com/course/%ED%94%84%EB%A0%88%EC%9E%84%EC%9B%8C%ED%81%AC/#' }
    },
    community: {
      npm: { label: 'NPM', href: 'https://www.npmjs.com/package/tidory' },
      github: { label: 'Github', href: 'https://github.com/tidory' }
    }
  },
  active: -1
})

export const mutations = {
  activeMenu (state, active) { state.active = active }
}
