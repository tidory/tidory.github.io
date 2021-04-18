import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'

import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import xml from 'highlight.js/lib/languages/xml'
import bash from 'highlight.js/lib/languages/bash'
import plaintext from 'highlight.js/lib/languages/plaintext'
import less from 'highlight.js/lib/languages/less'
import css from 'highlight.js/lib/languages/css'

import 'highlight.js/styles/xcode.css'

Vue.use(VueHighlightJS, { languages: { javascript, json, xml, bash, plaintext, less, css } })
