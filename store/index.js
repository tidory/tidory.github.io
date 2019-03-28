export const state = () => ({
  patchNote: { label: '패치노트', href: '/patch-note', page: '10' },
  menu: {
    home: { label: '티도리 프레임워크', href: '/', page: '01' },
    getStarted: { label: '시작하기', href: '/docs/get-started', page: '02' },
    directory: { label: '디렉토리', href: '/docs/directory', page: '03' },
    template: { label: '템플릿', href: '/docs/template', page: '04' },
    example: { label: '티스토리 예제', href: '/docs/example', page: '05' },
    framework: { label: '프레임워크', href: '/docs/framework', page: '06' },
    configuration: { label: '환경설정', href: '/docs/configuration', page: '07' },
    distribute: { label: '빌드 및 배포', href: '/docs/distribute', page: '08' },
    package: { label: '패키지', href: '/docs/package', page: '09' },
  },
  active: null
})

export const mutations = {
  activeMenu(state, active) {
    state.active = active;
  }
}