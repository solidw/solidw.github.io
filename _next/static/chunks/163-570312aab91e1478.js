"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{3522:function(n,e,o){o.d(e,{g:function(){return a}});var t=o(5192),r=o(2927),i=o(9342);function l(){var n,e;let o=(n=["\n        display: flex;\n        flex-direction: column;\n        border-radius: 15px;\n        padding: 20px;\n        box-shadow: ",";\n      "],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return l=function(){return o},o}function a(n){let{children:e,...o}=n;return(0,t.tZ)("div",{css:(0,r.css)(l(),(0,i.LS)(3,5)),...o,children:e})}},3735:function(n,e,o){o.d(e,{z:function(){return s}});var t=o(5192),r=o(2927),i=o(1658),l=o(9342);function a(){var n,e;let o=(n=["\n        padding: 8px 20px;\n        font-size: 1.6rem;\n        border-radius: 8px;\n        border: none;\n\n        ",";\n        color: ",";\n        background: ",";\n\n        box-shadow: ",";\n\n        &:hover {\n          box-shadow: ",";\n        }\n\n        &:active {\n          box-shadow: ",";\n        }\n      "],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return a=function(){return o},o}function s(n){let{children:e,variant:o="primary",...s}=n;return(0,t.tZ)("button",{css:(0,r.css)(a(),l.wY,"primary"===o?i.G.primaryText:i.G.secondaryText,i.G[o],(0,l.LS)(5,10),(0,l.LS)(2,5),(0,l.LS)(1,2,{inset:!0})),...s,children:e})}},921:function(n,e,o){o.d(e,{W:function(){return i}});var t=o(7391);function r(){var n,e;let o=(n=["\n  max-width: 900px;\n  margin: 0 auto;\n  height: 100%;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return r=function(){return o},o}let i=t.Z.div(r())},279:function(n,e,o){o.d(e,{h:function(){return m}});var t=o(5192),r=o(2927),i=o(7391),l=o(3239),a=o.n(l),s=o(3735),c=o(1658),u=o(9342);function d(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function h(){let n=d(["\n        position: sticky;\n        top: 0;\n        height: ","px;\n        z-index: 1;\n\n        display: flex;\n        justify-content: space-between;\n        align-items: stretch;\n        padding: 0px 30px;\n\n        background-color: ",";\n        box-shadow: ",";\n      "]);return h=function(){return n},n}function p(){let n=d(["\n              font-size: 2.4rem;\n              font-weight: bold;\n            "]);return p=function(){return n},n}function g(){let n=d(["\n          justify-content: flex-end;\n          font-size: 1.8rem;\n        "]);return g=function(){return n},n}function b(){let n=d(["\n        ","\n      "]);return b=function(){return n},n}function f(){let n=d(["\n  display: flex;\n  flex: 1;\n  align-items: center;\n  gap: 20px;\n  font-size: 1.4rem;\n\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]);return f=function(){return n},n}function k(){let n=d([""]);return k=function(){return n},n}function m(){return(0,t.BX)("header",{css:(0,r.css)(h(),m.height,c.G.primary,(0,u.LS)(5,5)),children:[(0,t.tZ)(w,{children:(0,t.tZ)(x,{children:(0,t.tZ)(v,{href:"/",passHref:!0,css:(0,r.css)(p()),children:"solidw"})})}),(0,t.BX)(w,{css:(0,r.css)(g()),children:[(0,t.tZ)(x,{children:(0,t.tZ)(v,{href:"/me",passHref:!0,children:(0,t.tZ)(s.z,{children:"ME"})})}),(0,t.tZ)(x,{children:(0,t.tZ)(v,{href:"/",passHref:!0,children:(0,t.tZ)(s.z,{children:"POST"})})})]})]})}function v(n){let{className:e,children:o,...i}=n;return(0,t.tZ)(a(),{css:(0,r.css)(b(),u.$u),className:e,...i,children:o})}m.height=80;let w=i.Z.ul(f()),x=i.Z.li(k())},2007:function(n,e,o){o.d(e,{$:function(){return v}});var t=o(5192),r=o(7391),i=o(1519),l=o(1335),a=o(6193),s=o(3198),c=o(8963),u=o(7298),d=o(1879),h=o(3561),p=o(872),g=o(279),b=o(1658),f=o(9342);function k(){var n,e;let o=(n=['\n  line-height: 3rem;\n  word-break: break-all;\n\n  img {\n    width: 100%;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    // sticky header에 링크가 가려지는 현상 방어 코드\n    &:before {\n      content: "";\n      display: block;\n      padding-top: ',"px;\n      margin-top: -","px;\n    }\n\n    &:hover {\n      .anchor {\n        visibility: visible;\n      }\n    }\n  }\n\n  h1,\n  h2,\n  h3 {\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .anchor {\n    visibility: hidden;\n    margin-left: 5px;\n    vertical-align: middle;\n  }\n\n  blockquote {\n    box-shadow: ",";\n    margin: 0;\n    padding: 5px;\n    border-left: 0.25em solid ",";\n    & > * {\n      margin: 0;\n    }\n  }\n\n  p > code {\n    box-shadow: ",";\n    padding: 5px;\n    margin-left: 3px;\n    margin-right: 3px;\n    color: ",';\n  }\n\n  :not(pre) > code[class*="language-"],\n  pre {\n    box-shadow: ',';\n    border: none;\n    padding: 15px;\n  }\n\n  // 여기 아래부터 커스텀(prism-themes)\n  /**\n * One Light theme for prism.js\n * Based on Atom\'s One Light theme: https://github.com/atom/atom/tree/master/packages/one-light-syntax\n */\n\n  /**\n * One Light colours (accurate as of commit eb064bf on 19 Feb 2021)\n * From colors.less\n * --mono-1: hsl(230, 8%, 24%);\n * --mono-2: hsl(230, 6%, 44%);\n * --mono-3: hsl(230, 4%, 64%)\n * --hue-1: hsl(198, 99%, 37%);\n * --hue-2: hsl(221, 87%, 60%);\n * --hue-3: hsl(301, 63%, 40%);\n * --hue-4: hsl(119, 34%, 47%);\n * --hue-5: hsl(5, 74%, 59%);\n * --hue-5-2: hsl(344, 84%, 43%);\n * --hue-6: hsl(35, 99%, 36%);\n * --hue-6-2: hsl(35, 99%, 40%);\n * --syntax-fg: hsl(230, 8%, 24%);\n * --syntax-bg: hsl(230, 1%, 98%);\n * --syntax-gutter: hsl(230, 1%, 62%);\n * --syntax-guide: hsla(230, 8%, 24%, 0.2);\n * --syntax-accent: hsl(230, 100%, 66%);\n * From syntax-variables.less\n * --syntax-selection-color: hsl(230, 1%, 90%);\n * --syntax-gutter-background-color-selected: hsl(230, 1%, 90%);\n * --syntax-cursor-line: hsla(230, 8%, 24%, 0.05);\n */\n\n  code[class*="language-"],\n  pre[class*="language-"] {\n    background: none;\n    color: hsl(230, 8%, 24%);\n    font-family: "Fira Code", "Fira Mono", Menlo, Consolas, "DejaVu Sans Mono",\n      monospace;\n    direction: ltr;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    line-height: 1.5;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  /* Selection */\n  code[class*="language-"]::-moz-selection,\n  code[class*="language-"] *::-moz-selection,\n  pre[class*="language-"] *::-moz-selection {\n    background: hsl(230, 1%, 90%);\n    color: inherit;\n  }\n\n  code[class*="language-"]::selection,\n  code[class*="language-"] *::selection,\n  pre[class*="language-"] *::selection {\n    background: hsl(230, 1%, 90%);\n    color: inherit;\n  }\n\n  /* Code blocks */\n  pre[class*="language-"] {\n    padding: 1em;\n    margin: 0.5em 0;\n    overflow: auto;\n    border-radius: 0.3em;\n  }\n\n  /* Inline code */\n  :not(pre) > code[class*="language-"] {\n    padding: 0.2em 0.3em;\n    border-radius: 0.3em;\n    white-space: normal;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.cdata {\n    color: hsl(230, 4%, 64%);\n  }\n\n  .token.doctype,\n  .token.punctuation,\n  .token.entity {\n    color: hsl(230, 8%, 24%);\n  }\n\n  .token.attr-name,\n  .token.class-name,\n  .token.boolean,\n  .token.constant,\n  .token.number,\n  .token.atrule {\n    color: hsl(35, 99%, 36%);\n  }\n\n  .token.keyword {\n    color: hsl(301, 63%, 40%);\n  }\n\n  .token.property,\n  .token.tag,\n  .token.symbol,\n  .token.deleted,\n  .token.important {\n    color: hsl(5, 74%, 59%);\n  }\n\n  .token.selector,\n  .token.string,\n  .token.char,\n  .token.builtin,\n  .token.inserted,\n  .token.regex,\n  .token.attr-value,\n  .token.attr-value > .token.punctuation {\n    color: hsl(119, 34%, 47%);\n  }\n\n  .token.variable,\n  .token.operator,\n  .token.function {\n    color: hsl(221, 87%, 60%);\n  }\n\n  .token.url {\n    color: hsl(198, 99%, 37%);\n  }\n\n  /* HTML overrides */\n  .token.attr-value > .token.punctuation.attr-equals,\n  .token.special-attr > .token.attr-value > .token.value.css {\n    color: hsl(230, 8%, 24%);\n  }\n\n  /* CSS overrides */\n  .language-css .token.selector {\n    color: hsl(5, 74%, 59%);\n  }\n\n  .language-css .token.property {\n    color: hsl(230, 8%, 24%);\n  }\n\n  .language-css .token.function,\n  .language-css .token.url > .token.function {\n    color: hsl(198, 99%, 37%);\n  }\n\n  .language-css .token.url > .token.string.url {\n    color: hsl(119, 34%, 47%);\n  }\n\n  .language-css .token.important,\n  .language-css .token.atrule .token.rule {\n    color: hsl(301, 63%, 40%);\n  }\n\n  /* JS overrides */\n  .language-javascript .token.operator {\n    color: hsl(301, 63%, 40%);\n  }\n\n  .language-javascript\n    .token.template-string\n    > .token.interpolation\n    > .token.interpolation-punctuation.punctuation {\n    color: hsl(344, 84%, 43%);\n  }\n\n  /* JSON overrides */\n  .language-json .token.operator {\n    color: hsl(230, 8%, 24%);\n  }\n\n  .language-json .token.null.keyword {\n    color: hsl(35, 99%, 36%);\n  }\n\n  /* MD overrides */\n  .language-markdown .token.url,\n  .language-markdown .token.url > .token.operator,\n  .language-markdown .token.url-reference.url > .token.string {\n    color: hsl(230, 8%, 24%);\n  }\n\n  .language-markdown .token.url > .token.content {\n    color: hsl(221, 87%, 60%);\n  }\n\n  .language-markdown .token.url > .token.url,\n  .language-markdown .token.url-reference.url {\n    color: hsl(198, 99%, 37%);\n  }\n\n  .language-markdown .token.blockquote.punctuation,\n  .language-markdown .token.hr.punctuation {\n    color: hsl(230, 4%, 64%);\n    font-style: italic;\n  }\n\n  .language-markdown .token.code-snippet {\n    color: hsl(119, 34%, 47%);\n  }\n\n  .language-markdown .token.bold .token.content {\n    color: hsl(35, 99%, 36%);\n  }\n\n  .language-markdown .token.italic .token.content {\n    color: hsl(301, 63%, 40%);\n  }\n\n  .language-markdown .token.strike .token.content,\n  .language-markdown .token.strike .token.punctuation,\n  .language-markdown .token.list.punctuation,\n  .language-markdown .token.title.important > .token.punctuation {\n    color: hsl(5, 74%, 59%);\n  }\n\n  /* General */\n  .token.bold {\n    font-weight: bold;\n  }\n\n  .token.comment,\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .token.namespace {\n    opacity: 0.8;\n  }\n\n  /* Plugin overrides */\n  /* Selectors should have higher specificity than those in the plugins\' default stylesheets */\n\n  /* Show Invisibles plugin overrides */\n  .token.token.tab:not(:empty):before,\n  .token.token.cr:before,\n  .token.token.lf:before,\n  .token.token.space:before {\n    color: hsla(230, 8%, 24%, 0.2);\n  }\n\n  /* Toolbar plugin overrides */\n  /* Space out all buttons and move them away from the right edge of the code block */\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item {\n    margin-right: 0.4em;\n  }\n\n  /* Styling the buttons */\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span {\n    background: hsl(230, 1%, 90%);\n    color: hsl(230, 6%, 44%);\n    padding: 0.1em 0.4em;\n    border-radius: 0.3em;\n  }\n\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:hover,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > button:focus,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:hover,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > a:focus,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:hover,\n  div.code-toolbar > .toolbar.toolbar > .toolbar-item > span:focus {\n    background: hsl(230, 1%, 78%); /* custom: darken(--syntax-bg, 20%) */\n    color: hsl(230, 8%, 24%);\n  }\n\n  /* Line Highlight plugin overrides */\n  /* The highlighted line itself */\n  .line-highlight.line-highlight {\n    background: hsla(230, 8%, 24%, 0.05);\n  }\n\n  /* Default line numbers in Line Highlight plugin */\n  .line-highlight.line-highlight:before,\n  .line-highlight.line-highlight[data-end]:after {\n    background: hsl(230, 1%, 90%);\n    color: hsl(230, 8%, 24%);\n    padding: 0.1em 0.6em;\n    border-radius: 0.3em;\n    box-shadow: 0 2px 0 0 rgba(0, 0, 0, 0.2); /* same as Toolbar plugin default */\n  }\n\n  /* Hovering over a linkable line number (in the gutter area) */\n  /* Requires Line Numbers plugin as well */\n  pre[id].linkable-line-numbers.linkable-line-numbers\n    span.line-numbers-rows\n    > span:hover:before {\n    background-color: hsla(230, 8%, 24%, 0.05);\n  }\n\n  /* Line Numbers and Command Line plugins overrides */\n  /* Line separating gutter from coding area */\n  .line-numbers.line-numbers .line-numbers-rows,\n  .command-line .command-line-prompt {\n    border-right-color: hsla(230, 8%, 24%, 0.2);\n  }\n\n  /* Stuff in the gutter */\n  .line-numbers .line-numbers-rows > span:before,\n  .command-line .command-line-prompt > span:before {\n    color: hsl(230, 1%, 62%);\n  }\n\n  /* Match Braces plugin overrides */\n  /* Note: Outline colour is inherited from the braces */\n  .rainbow-braces .token.token.punctuation.brace-level-1,\n  .rainbow-braces .token.token.punctuation.brace-level-5,\n  .rainbow-braces .token.token.punctuation.brace-level-9 {\n    color: hsl(5, 74%, 59%);\n  }\n\n  .rainbow-braces .token.token.punctuation.brace-level-2,\n  .rainbow-braces .token.token.punctuation.brace-level-6,\n  .rainbow-braces .token.token.punctuation.brace-level-10 {\n    color: hsl(119, 34%, 47%);\n  }\n\n  .rainbow-braces .token.token.punctuation.brace-level-3,\n  .rainbow-braces .token.token.punctuation.brace-level-7,\n  .rainbow-braces .token.token.punctuation.brace-level-11 {\n    color: hsl(221, 87%, 60%);\n  }\n\n  .rainbow-braces .token.token.punctuation.brace-level-4,\n  .rainbow-braces .token.token.punctuation.brace-level-8,\n  .rainbow-braces .token.token.punctuation.brace-level-12 {\n    color: hsl(301, 63%, 40%);\n  }\n\n  /* Diff Highlight plugin overrides */\n  /* Taken from https://github.com/atom/github/blob/master/styles/variables.less */\n  pre.diff-highlight > code .token.token.deleted:not(.prefix),\n  pre > code.diff-highlight .token.token.deleted:not(.prefix) {\n    background-color: hsla(353, 100%, 66%, 0.15);\n  }\n\n  pre.diff-highlight > code .token.token.deleted:not(.prefix)::-moz-selection,\n  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::-moz-selection,\n  pre > code.diff-highlight .token.token.deleted:not(.prefix)::-moz-selection,\n  pre\n    > code.diff-highlight\n    .token.token.deleted:not(.prefix)\n    *::-moz-selection {\n    background-color: hsla(353, 95%, 66%, 0.25);\n  }\n\n  pre.diff-highlight > code .token.token.deleted:not(.prefix)::selection,\n  pre.diff-highlight > code .token.token.deleted:not(.prefix) *::selection,\n  pre > code.diff-highlight .token.token.deleted:not(.prefix)::selection,\n  pre > code.diff-highlight .token.token.deleted:not(.prefix) *::selection {\n    background-color: hsla(353, 95%, 66%, 0.25);\n  }\n\n  pre.diff-highlight > code .token.token.inserted:not(.prefix),\n  pre > code.diff-highlight .token.token.inserted:not(.prefix) {\n    background-color: hsla(137, 100%, 55%, 0.15);\n  }\n\n  pre.diff-highlight > code .token.token.inserted:not(.prefix)::-moz-selection,\n  pre.diff-highlight\n    > code\n    .token.token.inserted:not(.prefix)\n    *::-moz-selection,\n  pre > code.diff-highlight .token.token.inserted:not(.prefix)::-moz-selection,\n  pre\n    > code.diff-highlight\n    .token.token.inserted:not(.prefix)\n    *::-moz-selection {\n    background-color: hsla(135, 73%, 55%, 0.25);\n  }\n\n  pre.diff-highlight > code .token.token.inserted:not(.prefix)::selection,\n  pre.diff-highlight > code .token.token.inserted:not(.prefix) *::selection,\n  pre > code.diff-highlight .token.token.inserted:not(.prefix)::selection,\n  pre > code.diff-highlight .token.token.inserted:not(.prefix) *::selection {\n    background-color: hsla(135, 73%, 55%, 0.25);\n  }\n\n  /* Previewers plugin overrides */\n  /* Based on https://github.com/atom-community/atom-ide-datatip/blob/master/styles/atom-ide-datatips.less and https://github.com/atom/atom/blob/master/packages/one-light-ui */\n  /* Border around popup */\n  .prism-previewer.prism-previewer:before,\n  .prism-previewer-gradient.prism-previewer-gradient div {\n    border-color: hsl(0, 0, 95%);\n  }\n\n  /* Angle and time should remain as circles and are hence not included */\n  .prism-previewer-color.prism-previewer-color:before,\n  .prism-previewer-gradient.prism-previewer-gradient div,\n  .prism-previewer-easing.prism-previewer-easing:before {\n    border-radius: 0.3em;\n  }\n\n  /* Triangles pointing to the code */\n  .prism-previewer.prism-previewer:after {\n    border-top-color: hsl(0, 0, 95%);\n  }\n\n  .prism-previewer-flipped.prism-previewer-flipped.after {\n    border-bottom-color: hsl(0, 0, 95%);\n  }\n\n  /* Background colour within the popup */\n  .prism-previewer-angle.prism-previewer-angle:before,\n  .prism-previewer-time.prism-previewer-time:before,\n  .prism-previewer-easing.prism-previewer-easing {\n    background: hsl(0, 0%, 100%);\n  }\n\n  /* For angle, this is the positive area (eg. 90deg will display one quadrant in this colour) */\n  /* For time, this is the alternate colour */\n  .prism-previewer-angle.prism-previewer-angle circle,\n  .prism-previewer-time.prism-previewer-time circle {\n    stroke: hsl(230, 8%, 24%);\n    stroke-opacity: 1;\n  }\n\n  /* Stroke colours of the handle, direction point, and vector itself */\n  .prism-previewer-easing.prism-previewer-easing circle,\n  .prism-previewer-easing.prism-previewer-easing path,\n  .prism-previewer-easing.prism-previewer-easing line {\n    stroke: hsl(230, 8%, 24%);\n  }\n\n  /* Fill colour of the handle */\n  .prism-previewer-easing.prism-previewer-easing circle {\n    fill: transparent;\n  }\n'],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return k=function(){return o},o}let m=[(0,i.s)("svg.autolink-svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"currentColor",viewBox:"0 0 24 24"},(0,i.s)("path",{d:"M9.199 13.599a5.99 5.99 0 0 0 3.949 2.345 5.987 5.987 0 0 0 5.105-1.702l2.995-2.994a5.992 5.992 0 0 0 1.695-4.285 5.976 5.976 0 0 0-1.831-4.211 5.99 5.99 0 0 0-6.431-1.242 6.003 6.003 0 0 0-1.905 1.24l-1.731 1.721a.999.999 0 1 0 1.41 1.418l1.709-1.699a3.985 3.985 0 0 1 2.761-1.123 3.975 3.975 0 0 1 2.799 1.122 3.997 3.997 0 0 1 .111 5.644l-3.005 3.006a3.982 3.982 0 0 1-3.395 1.126 3.987 3.987 0 0 1-2.632-1.563A1 1 0 0 0 9.201 13.6zm5.602-3.198a5.99 5.99 0 0 0-3.949-2.345 5.987 5.987 0 0 0-5.105 1.702l-2.995 2.994a5.992 5.992 0 0 0-1.695 4.285 5.976 5.976 0 0 0 1.831 4.211 5.99 5.99 0 0 0 6.431 1.242 6.003 6.003 0 0 0 1.905-1.24l1.723-1.723a.999.999 0 1 0-1.414-1.414L9.836 19.81a3.985 3.985 0 0 1-2.761 1.123 3.975 3.975 0 0 1-2.799-1.122 3.997 3.997 0 0 1-.111-5.644l3.005-3.006a3.982 3.982 0 0 1 3.395-1.126 3.987 3.987 0 0 1 2.632 1.563 1 1 0 0 0 1.602-1.198z"}))];function v(n){let{markdown:e}=n,o=(0,d.j)().use(h.Z).use(p.Z,{allowDangerousHtml:!0}).use(u.Z,{allowDangerousHtml:!0}).use(c.Z).use(l.Z,{behavior:"append",content:m,properties:{class:"anchor"}}).use(a.Z,{target:"_blank",rel:["noopener","noreferrer"]}).use(s.ZP).processSync(e).toString();return(0,t.tZ)(w,{dangerouslySetInnerHTML:{__html:o}})}let w=r.Z.div(k(),g.h.height+10,g.h.height+10,(0,f.LS)(1,2,{inset:!0}),b.G.secondary,(0,f.LS)(1,2,{inset:!0}),b.r.palette.secondary.dark,(0,f.LS)(3,5,{inset:!0}))},2289:function(n,e,o){o.d(e,{T:function(){return g}});var t=o(5192),r=o(2927),i=o(1658),l=o(9342);function a(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function s(){let n=a(["\n        display: flex;\n        padding: 30px;\n        justify-content: center;\n        white-space: pre;\n        height: ","px;\n      "]);return s=function(){return n},n}function c(){let n=a(["\n          ",";\n          color: ",";\n        "]);return c=function(){return n},n}let u=new Date().getFullYear();function d(){return(0,t.BX)("footer",{css:(0,r.css)(s(),d.height),children:[(0,t.BX)("span",{children:["Copyright ",u,". "]}),(0,t.tZ)("a",{href:"https://github.com/solidw",target:"_blank",rel:"noopener noreferrer",css:(0,r.css)(c(),l.$u,i.G.secondary),children:(0,t.tZ)("span",{children:"@solidw"})}),(0,t.tZ)("span",{children:" All rights reserved."})]})}d.height=80;var h=o(279);function p(){var n,e;let o=(n=["\n            html,\n            body,\n            #__next {\n              height: 100%;\n            }\n\n            #__next {\n              display: flex;\n              flex-direction: column;\n            }\n          "],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return p=function(){return o},o}function g(n){let{children:e,full:o=!1,className:i}=n;return(0,t.BX)(t.HY,{children:[o?(0,t.tZ)(r.Global,{styles:(0,r.css)(p())}):null,(0,t.tZ)(h.h,{}),(0,t.tZ)("main",{className:i,css:{flex:1},children:e}),(0,t.tZ)(d,{})]})}},7190:function(n,e,o){o.d(e,{H:function(){return i},K:function(){return l}});var t=o(5192),r=o(8727);function i(n){let e="".concat(null!=n.title?"".concat(n.title," | "):""," solidw의 블로그");return(0,t.tZ)(r.PB,{...n,title:e})}function l(n){let e=n.startsWith("/");return"https://solidw.github.io".concat(e?n:"/".concat(n))}},9342:function(n,e,o){o.d(e,{$u:function(){return l},LS:function(){return c},wY:function(){return a}});var t=o(2927),r=o(1658);function i(){var n,e;let o=(n=["\n  text-decoration: none;\n  color: inherit;\n"],e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return i=function(){return o},o}let l=(0,t.css)(i()),a="\n  transition: all 0.2s ease-in-out;\n",s=(n,e,o)=>{let{shadowDark:t,shadowLight:r,inset:i=!1}=o;return"".concat(i?"inset ":"").concat(n,"px ").concat(n,"px ").concat(e,"px ").concat(t,", ").concat(i?"inset ":"").concat(-n,"px ").concat(-n,"px ").concat(e,"px ").concat(r)},c=function(n,e){let{inset:o=!1,shadowDark:t=r.G.primaryDarkShadow,shadowLight:i=r.G.primaryLightShadow}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},l=s(n,e,{shadowDark:t,shadowLight:i,inset:o});return l}}}]);