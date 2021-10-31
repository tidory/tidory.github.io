export const state = () => ({
  pages: [
    {
      category: '프롤로그',
      items: [
        { title: '티도리 프레임워크', path: '/' }
      ]
    },
    {
      category: '튜토리얼',
      items: [
        { title: '시작하기', path: '/docs/get-started' },
        { title: '디렉터리', path: '/docs/directory' },
        { title: '템플릿', path: '/docs/template' },
        { title: '티스토리 예제', path: '/docs/example' },
        { title: '환경설정', path: '/docs/configuration' },
        { title: '빌드 및 배포', path: '/docs/deployment' }
      ]
    },
    {
      category: '스케일링 업',
      items: [
        { title: '프레임워크 - 뷰 & 리액트', path: '/docs/framework' },
        { title: '패키지', path: '/docs/package' }
      ]
    }
  ]
})
