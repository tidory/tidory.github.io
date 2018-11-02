<template lang="pug">
	section#tidory-distribution-wrapper
		h1.section-title 빌드 및 배포 모드
		article.categories
			h1 빌드 및 배포 모드
			div.categories
				h2: a(href="#build") tidory build
				h3: a(href="#uncompressed") 비압축(Uncompressed)
				h3: a(href="#compressed") 압축(Compressed)
		article.box
			h2(id="build") tidory build
			div.paragraph
				| 배포는 두 가지의 모드가 존재하는데, 하나는 <b>압축(Compressed)</b>과 <b>비압축(Uncompressed)</b>입니다. 압축버전은 일반적으로 개발자가 자신의 스킨을 적용할 때 사용하며, 그렇지 않은 버전은 유저에게 배포하기 위한 것입니다.
			div.paragraph
				h3(id="uncompressed") 비압축(Uncompressed)
				div.paragraph
					| 빌드는 기본적으로 비압축모드로 진행되며 아래에 보여지듯이 <b>tidory build</b> 명령을 내리면 됩니다.
				div.paragraph
					div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
							p
								| $ tidory build
				h3(id="compressed") 압축(Compressed)
				div.paragraph
					| <b>개발자가 직접 사용하기 위해 빌드하는 모드</b> 입니다. 웹페이지 로드속도를 향상시키기 위해 코드를 <b>압축</b>합니다.
				div.paragraph
					div.txc-textbox(style='border-style: solid; border-width: 1px; border-color: rgb(238, 238, 238); background-color: rgb(238, 238, 238); padding: 10px;')
						p
							| $ tidory build --compress
</template>
<script>
	export default {
		head() {
			return {
				title: "빌드 및 배포 모드 - 티도리(TIDORY)",
				meta: [
					{ content: '빌드 및 배포 모드 - 티도리(TIDORY)', property: 'og:title' }
				]
			}
		}
	}
</script>