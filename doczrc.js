import math from 'remark-math'
import katex from 'remark-html-katex'
import html from 'remark-html'
import { css } from 'docz-plugin-css'
import pkg from './package.json';

const libName = pkg.name;
export default {
  indexHtml: './index.html',
  mdPlugins: [math, html, katex],
  plugins: [
    css({
      preprocessor: 'sass',
      cssmodules: true,
    }),
  ],
  hashRouter: true,
  base: `/${libName}/`,
}
