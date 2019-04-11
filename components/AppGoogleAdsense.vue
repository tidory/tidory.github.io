<template lang="pug">
div.adsense
  script2(async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js")
  ins(class="adsbygoogle"
    style="display:block; text-align:center;"
    data-ad-client="ca-pub-2513331130923231"
    :data-ad-layout="dataAdLayout"
    :data-ad-format="dataAdFormat"
    :data-ad-slot="dataAdSlot"
  )
  script2 (adsbygoogle = window.adsbygoogle || []).push({});
</template>

<script>
export default {
  props: ['dataAdSlot', 'dataAdFormat', 'dataAdLayout']
}
</script>