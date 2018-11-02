import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
		docs: {
			docs: {
				architecture: {
					path: '/docs/architecture/architecture',
					label: '프레임워크 아키텍쳐'
				},
				template: {
					path: '/docs/template/split',
					label: '템플릿'
				},
				distribution: {
					path: '/docs/distribution/mode',
					label: '빌드 및 배포'
				},
				patchNote: {
					path: '/docs/prologue/patch-note',
					label: '패치노트'
				}
			},
			prologue: {
				patchNote: {
					path: '/docs/prologue/patch-note',
					label: '패치노트'
				}
			},
			architecture: {
				architecture: {
					path: '/docs/architecture/architecture',
					label: '프레임워크 아키텍쳐'
				},
				directory: {
					path: '/docs/architecture/directory',
					label: '디렉토리'
				},
				templateStructure: {
					path: '/docs/architecture/template-structure',
					label: '템플릿 구조'
				},
				configuration: {
					path: '/docs/architecture/configuration',
					label: '설정 파일'
				}
			},
			template: {
				getStarted: {
					path: '/docs/template/split',
					label: '템플릿 분리'
				},
				resources: {
					path: '/docs/template/resources',
					label: '리소스'
				},
				env: {
					path: '/docs/template/env',
					label: '환경 설정'
				},
				example: {
					path: '/docs/template/example',
					label: '티스토리 예제'
				}
			},
			framework: {
				vueAndReact: {
					path: '/docs/framework/vue-and-react',
					label: '뷰 & 리액트'
				},
				resources: {
					path: '/docs/framework/resources',
					label: '정적파일 및 에셋'
				}
			},
			distribution: {
				mode: {
					path: '/docs/distribution/mode',
					label: '빌드 및 배포 모드'
				},
				directory: {
					path: '/docs/distribution/directory',
					label: '배포 디렉토리'
				}
			},
			packages: {
				tistory: {
					path: 'https://github.com/pronist/tistory',
					label: '티스토리 API'
				}
			}
		},
		community: {
			github: {
				path: 'https://github.com/pronist/tidory-starter-template',
				label: '프로젝트 템플릿'
			},
			npm: {
				path: 'https://www.npmjs.com/package/tidory',
				label: '티도리 모듈'
			},
			tistorySkinGuide: {
				path: 'http://www.tistory.com/guide/skin/step0',
				label: '티스토리 가이드'
			},
		}
	}
})
 
export default store