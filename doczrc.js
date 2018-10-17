import math from 'remark-math'
import katex from 'remark-html-katex'
import html from 'remark-html'
import { css } from 'docz-plugin-css'

export default {
  indexHtml: './index.html',
  mdPlugins: [math, html, katex],
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
    }),
  ],
}
