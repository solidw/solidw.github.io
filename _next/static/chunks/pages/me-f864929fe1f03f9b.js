(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[865],{1985:function(n,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/me",function(){return o(2539)}])},2100:function(n,e,o){"use strict";o.d(e,{$:function(){return v}});var t=o(5192),r=o(7391),i=o(1519),l=o(1335),a=o(6193),s=o(3198),c=o(8963),h=o(7298),u=o(1879),p=o(3561),d=o(872),g=o(1744),b=o(8849),k=o(546);function m(){var n,e,o=(n=['\n  line-height: 3rem;\n  word-break: break-all;\n\n  img {\n    width: 100%;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    // sticky header\uc5d0 \ub9c1\ud06c\uac00 \uac00\ub824\uc9c0\ub294 \ud604\uc0c1 \ubc29\uc5b4 \ucf54\ub4dc\n    &:before {\n      content: "";\n      display: block;\n      padding-top: ',"px;\n      margin-top: -","px;\n    }\n\n    &:hover {\n      .anchor {\n        visibility: visible;\n      }\n    }\n  }\n\n  h1,\n  h2,\n  h3 {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .anchor {\n    visibility: hidden;\n    margin-left: 5px;\n    vertical-align: middle;\n  }\n\n  blockquote {\n    box-shadow: ",";\n    margin: 0;\n    padding: 5px;\n    border-left: 0.25em solid ",";\n    & > * {\n      margin: 0;\n    }\n  }\n\n  p > code {\n    box-shadow: ",";\n    padding: 5px;\n    margin-left: 3px;\n    margin-right: 3px;\n    color: ",';\n  }\n\n  :not(pre) > code[class*="language-"],\n  pre {\n    box-shadow: ',';\n    border: none;\n    padding: 15px;\n  }\n\n  // \uc5ec\uae30 \uc544\ub798\ubd80\ud130 \ucee4\uc2a4\ud140(prism-themes)\n  /**\n * One Light theme for prism.js\n * Based on Atom\'s One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax\n */\n\n  /**\n * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)\n * From colors.less\n * --mono-1: hsl(230, 8%, 24%);\n * --mono-2: hsl(230, 6%, 44%);\n * --mono-3: hsl(230, 4%, 64%)\n * --hue-1: hsl(198, 99%, 37%);\n * --hue-2: hsl(221, 87%, 60%);\n * --hue-3: hsl(301, 63%, 40%);\n * --hue-4: hsl(119, 34%, 47%);\n * --hue-5: hsl(5, 74%, 59%);\n * --hue-5-2: hsl(344, 84%, 43%);\n * --hue-6: hsl(35, 99%, 36%);\n * --hue-6-2: hsl(35, 99%, 40%);\n * --syntax-fg: hsl(230, 8%, 24%);\n * --syntax-bg: hsl(230, 1%, 98%);\n * --syntax-gutter: hsl(230, 1%, 62%);\n * --syntax-guide: hsla(230, 8%, 24%, 0.2);\n * --syntax-accent: hsl(230, 100%, 66%);\n * From syntax-variables.less\n * --syntax-selection-color: hsl(230, 1%, 90%);\n * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);\n * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);\n */\n\n  code[class*="language-"],\n  pre[class*="language-"] {\n    background: none;\n    color: hsl(230, 8%, 24%);\n    font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono",\n      monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    line-height: 1.5;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  /* Selection */\n  code[class*="language-"]::-moz-selection,\n  code[class*="language-"] *::-moz-selection,\n  pre[class*="language-"] *::-moz-selection {\n    background: hsl(230, 1%, 90%);\n    color: inherit;\n  }\n\n  code[class*="language-"]::selection,\n  code[class*="language-"] *::selection,\n  pre[class*="language-"] *::selection {\n    background: hsl(230, 1%, 90%);\n    color: inherit;\n  }\n\n  /* Code blocks */\n  pre[class*="language-"] {\n    padding: 1em;\n    margin: 0.5em 0;\n    overflow: auto;\n    border-radius: 0.3em;\n  }\n\n  /* Inline code */\n  :not(pre) > code[class*="language-"] {\n    padding: 0.2em 0.3em;\n    border-radius: 0.3em;\n    white-space: normal;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.cdata {\n    color: hsl(230, 4%, 64%);\n  }\n\n  .token.doctype,\n  .token.punctuation,\n  .token.entity {\n    color: hsl(230, 8%, 24%);\n  }\n\n  .token.attr-name,\n  .token.class-name,\n  .token.boolean,\n  .token.constant,\n  .token.number,\n  .token.atrule {\n    color: hsl(35, 99%, 36%);\n  }\n\n  .token.keyword {\n    color: hsl(301, 63%, 40%);\n  }\n\n  .token.property,\n  .token.tag,\n  .token.symbol,\n  .token.deleted,\n  .token.important {\n    color: hsl(5, 74%, 59%);\n  }\n\n  .token.selector,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted,\n  .token.regex,\n  .token.attr-value,\n  .token.attr-value > .token.punctuation {\n    color: hsl(119, 34%, 47%);\n  }\n\n  .token.variable,\n  .token.operator,\n  .token.function {\n    color: hsl(221, 87%, 60%);\n  }\n\n  .token.url {\n    color: hsl(198, 99%, 37%);\n  }\n\n  /* HTML overrides */\n  .token.attr-value > .token.punctuation.attr-equals,\n  .token.special-attr > .token.attr-value > .token.value.css {\n    color: hsl(230, 8%, 24%);\n  }\n\n  /* CSS overrides */\n  .language-css .token.selector {\n    color: hsl(5, 74%, 59%);\n  }\n\n  .language-css .token.property {\n    color: hsl(230, 8%, 24%);\n  }\n\n  .language-css .token.function,\n  .language-css .token.url > .token.function {\n    color: hsl(198, 99%, 37%);\n  }\n\n  .language-css .token.url > .token.string.url {\n    color: hsl(119, 34%, 47%);\n  }\n\n  .language-css .token.important,\n  .language-css .token.atrule .token.rule {\n    color: hsl(301, 63%, 40%);\n  }\n\n  /* JS overrides */\n  .language-javascript .token.operator {\n    color: hsl(301, 63%, 40%);\n  }\n\n  .language-javascript\n    .token.template-string\n    > .token.interpolation\n    > .token.interpolation-punctuation.punctuation {\n    color: hsl(344, 84%, 43%);\n  }\n\n  /* JSON overrides */\n  .language-json .token.operator {\n    color: hsl(230, 8%, 24%);\n  }\n\n  .language-json .token.null.keyword {\n    color: hsl(35, 99%, 36%);\n  }\n\n  /* MD overrides */\n  .language-markdown .token.url,\n  .language-markdown .token.url > .token.operator,\n  .language-markdown .token.url-reference.url > .token.string {\n    color: hsl(230, 8%, 24%);\n  }\n\n  .language-markdown .token.url > .token.content {\n    color: hsl(221, 87%, 60%);\n  }\n\n  .language-markdown .token.url > .token.url,\n  .language-markdown .token.url-reference.url {\n    color: hsl(198, 99%, 37%);\n  }\n\n  .language-markdown .token.blockquote.punctuation,\n  .language-markdown .token.hr.punctuation {\n    color: hsl(230, 4%, 64%);\n    font-style: italic;\n  }\n\n  .language-markdown .token.code-snippet {\n    color: hsl(119, 34%, 47%);\n  }\n\n  .language-markdown .token.bold .token.content {\n    color: hsl(35, 99%, 36%);\n  }\n\n  .language-markdown .token.italic .token.content {\n    color: hsl(301, 63%, 40%);\n  }\n\n  .language-markdown .token.strike .token.content,\n  .language-markdown .token.strike .token.punctuation,\n  .language-markdown .token.list.punctuation,\n  .language-markdown .token.title.important > .token.punctuation {\n    color: hsl(5, 74%, 59%);\n  }\n\n  /* General */\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.comment,\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .token.namespace {\n    opacity: 0.8;\n  }\n\n  /* Plugin overrides */\n  /* Selectors should have higher specificity than those in the plugins\' default stylesheets */\n\n  /* Show Invisibles plugin overrides */\n  .token.token.tab:not(:empty):before,\n  .token.token.cr:before,\n  .token.token.lf:before,\n  .token.token.space:before {\n    color: hsla(230, 8%, 24%, 0.2);\n  }\n\n  /* Toolbar plugin overrides */\n  /* Space out all buttons and move them away from the right edge of the code block */\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item {\n    margin-right: 0.4em;\n  }\n\n  /* Styling the buttons */\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {\n    background: hsl(230, 1%, 90%);\n    color: hsl(230, 6%, 44%);\n    padding: 0.1em 0.4em;\n    border-radius: 0.3em;\n  }\n\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {\n    background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */\n    color: hsl(230, 8%, 24%);\n  }\n\n  /* Line Highlight plugin overrides */\n  /* The highlighted line itself */\n  .line-highlight.line-highlight {\n    background: hsla(230, 8%, 24%, 0.05);\n  }\n\n  /* Default line numbers in Line Highlight plugin */\n  .line-highlight.line-highlight:before,\n  .line-highlight.line-highlight[data-end]:after {\n    background: hsl(230, 1%, 90%);\n    color: hsl(230, 8%, 24%);\n    padding: 0.1em 0.6em;\n    border-radius: 0.3em;\n    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2); /* same as Toolbar plugin default */\n  }\n\n  /* Hovering over a linkable line number (in the gutter area) */\n  /* Requires Line Numbers plugin as well */\n  pre[id].linkable-line-numbers.linkable-line-numbers\n    span.line-numbers-rows\n    > span:hover:before {\n    background-color: hsla(230, 8%, 24%, 0.05);\n  }\n\n  /* Line Numbers and Command Line plugins overrides */\n  /* Line separating gutter from coding area */\n  .line-numbers.line-numbers .line-numbers-rows,\n  .command-line .command-line-prompt {\n    border-right-color: hsla(230, 8%, 24%, 0.2);\n  }\n\n  /* Stuff in the gutter */\n  .line-numbers .line-numbers-rows > span:before,\n  .command-line .command-line-prompt > span:before {\n    color: hsl(230, 1%, 62%);\n  }\n\n  /* Match Braces plugin overrides */\n  /* Note: Outline colour is inherited from the braces */\n  .rainbow-braces .token.token.punctuation.brace-level-1,\n  .rainbow-braces .token.token.punctuation.brace-level-5,\n  .rainbow-braces .token.token.punctuation.brace-level-9 {\n    color: hsl(5, 74%, 59%);\n  }\n\n  .rainbow-braces .token.token.punctuation.brace-level-2,\n  .rainbow-braces .token.token.punctuation.brace-level-6,\n  .rainbow-braces .token.token.punctuation.brace-level-10 {\n    color: hsl(119, 34%, 47%);\n  }\n\n  .rainbow-braces .token.token.punctuation.brace-level-3,\n  .rainbow-braces .token.token.punctuation.brace-level-7,\n  .rainbow-braces .token.token.punctuation.brace-level-11 {\n    color: hsl(221, 87%, 60%);\n  }\n\n  .rainbow-braces .token.token.punctuation.brace-level-4,\n  .rainbow-braces .token.token.punctuation.brace-level-8,\n  .rainbow-braces .token.token.punctuation.brace-level-12 {\n    color: hsl(301, 63%, 40%);\n  }\n\n  /* Diff Highlight plugin overrides */\n  /* Taken from https://github.com/atom/github/blob/master/styles/variables.less */\n  pre.diff-highlight > code .token.token.deleted:not(.prefix),\n  pre > code.diff-highlight .token.token.deleted:not(.prefix) {\n    background-color: hsla(353, 100%, 66%, 0.15);\n  }\n\n  pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,\n  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,\n  pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,\n  pre\n    > code.diff-highlight\n    .token.token.deleted:not(.prefix)\n    *::-moz-selection {\n    background-color: hsla(353, 95%, 66%, 0.25);\n  }\n\n  pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,\n  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,\n  pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,\n  pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {\n    background-color: hsla(353, 95%, 66%, 0.25);\n  }\n\n  pre.diff-highlight > code .token.token.inserted:not(.prefix),\n  pre > code.diff-highlight .token.token.inserted:not(.prefix) {\n    background-color: hsla(137, 100%, 55%, 0.15);\n  }\n\n  pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,\n  pre.diff-highlight\n    > code\n    .token.token.inserted:not(.prefix)\n    *::-moz-selection,\n  pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,\n  pre\n    > code.diff-highlight\n    .token.token.inserted:not(.prefix)\n    *::-moz-selection {\n    background-color: hsla(135, 73%, 55%, 0.25);\n  }\n\n  pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,\n  pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,\n  pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,\n  pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {\n    background-color: hsla(135, 73%, 55%, 0.25);\n  }\n\n  /* Previewers plugin overrides */\n  /* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */\n  /* Border around popup */\n  .prism-previewer.prism-previewer:before,\n  .prism-previewer-gradient.prism-previewer-gradient div {\n    border-color: hsl(0, 0, 95%);\n  }\n\n  /* Angle and time should remain as circles and are hence not included */\n  .prism-previewer-color.prism-previewer-color:before,\n  .prism-previewer-gradient.prism-previewer-gradient div,\n  .prism-previewer-easing.prism-previewer-easing:before {\n    border-radius: 0.3em;\n  }\n\n  /* Triangles pointing to the code */\n  .prism-previewer.prism-previewer:after {\n    border-top-color: hsl(0, 0, 95%);\n  }\n\n  .prism-previewer-flipped.prism-previewer-flipped.after {\n    border-bottom-color: hsl(0, 0, 95%);\n  }\n\n  /* Background colour within the popup */\n  .prism-previewer-angle.prism-previewer-angle:before,\n  .prism-previewer-time.prism-previewer-time:before,\n  .prism-previewer-easing.prism-previewer-easing {\n    background: hsl(0, 0%, 100%);\n  }\n\n  /* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */\n  /* For time, this is the alternate colour */\n  .prism-previewer-angle.prism-previewer-angle circle,\n  .prism-previewer-time.prism-previewer-time circle {\n    stroke: hsl(230, 8%, 24%);\n    stroke-opacity: 1;\n  }\n\n  /* Stroke colours of the handle, direction point, and vector itself */\n  .prism-previewer-easing.prism-previewer-easing circle,\n  .prism-previewer-easing.prism-previewer-easing path,\n  .prism-previewer-easing.prism-previewer-easing line {\n    stroke: hsl(230, 8%, 24%);\n  }\n\n  /* Fill colour of the handle */\n  .prism-previewer-easing.prism-previewer-easing circle {\n    fill: transparent;\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return m=function(){return o},o}var f=[(0,i.s)("svg.autolink-svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24"},(0,i.s)("path",{d:"M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z"}))];function v(n){var e=n.markdown,o=(0,u.j)().use(p.Z).use(d.Z,{allowDangerousHtml:!0}).use(h.Z,{allowDangerousHtml:!0}).use(c.Z).use(l.Z,{behavior:"append",content:f,properties:{class:"anchor"}}).use(a.Z,{target:"_blank",rel:["noopener","noreferrer"]}).use(s.ZP).processSync(e).toString();return(0,t.tZ)(w,{dangerouslySetInnerHTML:{__html:o}})}var w=r.Z.div(m(),g.h.height+10,g.h.height+10,(0,k.LS)(1,2,{inset:!0}),b.G.secondary,(0,k.LS)(1,2,{inset:!0}),b.r.palette.secondary.dark,(0,k.LS)(3,5,{inset:!0}))},2539:function(n,e,o){"use strict";o.r(e),o.d(e,{__N_SSG:function(){return b},default:function(){return k}});var t=o(5192),r=o(4014),i=o(6098),l=o(2100),a=o(4853),s=o(2927);function c(n,e,o){return e in n?Object.defineProperty(n,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[e]=o,n}function h(n,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):function(n,e){var o=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.push.apply(o,t)}return o}(Object(e)).forEach((function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(e,o))})),n}function u(n,e){if(null==n)return{};var o,t,r=function(n,e){if(null==n)return{};var o,t,r={},i=Object.keys(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||(r[o]=n[o]);return r}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(t=0;t<i.length;t++)o=i[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}function p(){var n,e,o=(n=["\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n      "],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return p=function(){return o},o}function d(n){var e=n.children,o=u(n,["children"]);return(0,t.tZ)("section",h(function(n){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{},t=Object.keys(o);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(o).filter((function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable})))),t.forEach((function(e){c(n,e,o[e])}))}return n}({css:(0,s.css)(p())},o),{children:e}))}var g=o(8509),b=!0;function k(n){var e=n.body;return(0,t.BX)(a.T,{css:{marginTop:20},children:[(0,t.tZ)(g.H,{title:"\uace0\ud0dc\uc644 (solidw)"}),(0,t.tZ)(i.W,{children:(0,t.tZ)(r.g,{children:(0,t.tZ)(d,{children:(0,t.tZ)(l.$,{markdown:e})})})})]})}}},function(n){n.O(0,[157,921,790,774,888,179],(function(){return e=1985,n(n.s=e);var e}));var e=n.O();_N_E=e}]);