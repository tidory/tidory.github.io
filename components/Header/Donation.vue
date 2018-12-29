<template lang="pug">
	form(action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank")
		input(type="hidden" name="cmd" value="_s-xclick")
		input(type="hidden" name="hosted_button_id" value="FJ5F2DP7G9J62")
		input(type="submit" value="커피 한 잔 사주세요!")
</template>

<script>
	export default {
		/** empty */
	}
</script>

<style lang="less">
	#desktop {
		form {
			display: inline;
			input[type="submit"] {
				background-color: unset !important;
				border: none;
				font-size: 1em;
				font-weight: 600;
				padding: 0;
				font-family:'Noto Sans KR', sans-serif !important;
				cursor: pointer;
				color: black;
			}
		}
	}
</style>