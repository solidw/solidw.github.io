(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[579],{7082:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[path]",function(){return n(5716)}])},6732:function(t,e,n){"use strict";n.d(e,{k:function(){return u}});var r=n(5192),i=n(2927);function c(){var t,e;let n=(t=["\n        display: flex;\n        flex-direction: ",";\n        justify-content: ",";\n        align-items: ",";\n      "],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return c=function(){return n},n}function u(t){let{direction:e="row",justify:n="flex-start",align:u="flex-start",children:s,...o}=t;return(0,r.tZ)("div",{css:(0,i.css)(c(),e,n,u),...o,children:s})}},6292:function(t,e,n){"use strict";n.d(e,{Hr:function(){return u}});var r=n(5192),i=n(2927);function c(){var t,e;let n=(t=["\n        height: 1px;\n        margin: 5px 0px;\n      "],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return c=function(){return n},n}function u(t){return(0,r.tZ)("hr",{css:(0,i.css)(c()),...t})}},7953:function(t,e,n){"use strict";n.d(e,{K:function(){return s}});var r=n(5192),i=n(2927),c=n(6732);function u(){var t,e;let n=(t=["\n        gap: ","px;\n      "],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return u=function(){return n},n}function s(t){let{spacing:e=20,children:n,...s}=t;return(0,r.tZ)(c.k,{css:(0,i.css)(u(),e),...s,children:n})}s.Vertical=function(t){let{children:e,...n}=t;return(0,r.tZ)(s,{direction:"column",...n,children:e})},s.Horizontal=function(t){let{children:e,...n}=t;return(0,r.tZ)(s,{direction:"row",...n,children:e})}},5954:function(t,e,n){"use strict";n.d(e,{D:function(){return u}});var r=n(5192),i=n(2927);function c(){var t,e;let n=(t=["\n        font-size: 3.2rem;\n      "],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return c=function(){return n},n}function u(t){let{children:e,...n}=t;return(0,r.tZ)("h1",{css:(0,i.css)(c()),...n,children:e})}},7520:function(t,e,n){"use strict";n.d(e,{x:function(){return i}});var r=n(5223);let i=function(t){let e=r.ZP.create(t);function n(t){return async function(n){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{let i=await e(n,{method:t,...r});return i.json()}catch(c){throw c}}}return{instance:e,get:n("get"),post:n("post"),put:n("put"),patch:n("patch"),delete:n("delete"),head:n("head")}}({prefixUrl:"https://solidw-github-io-server.herokuapp.com",retry:0})},5716:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return y},default:function(){return _}});var r=n(5192),i=n(2927),c=n(9953),u=n(3522);function s(){let t=(0,c.useRef)(null);return(0,c.useEffect)(()=>{if(null==t.current)return;let e=document.createElement("script");e.src="https://utteranc.es/client.js",e.async=!0,e.setAttribute("repo","solidw/solidw.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme","github-light"),e.setAttribute("label","blog-comment"),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async","true"),t.current.appendChild(e)},[]),(0,r.tZ)("div",{ref:t})}var o=n(921),a=n(6292),f=n(2007),l=n(2289),d=n(7190),p=n(7953),h=n(5954),m=n(456),b=n(7520);function v(t){return(0,m.useMutation)([v.mutationKey],async()=>b.x.patch("posts/".concat(t,"/views/increment")))}v.mutationKey="posts/{postId}/views/increment";var w=n(5323);function g(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function j(){let t=g(["\n              margin-bottom: 10px;\n            "]);return j=function(){return t},t}function O(){let t=g(["\n              margin-bottom: 10px;\n            "]);return O=function(){return t},t}var y=!0;function _(t){let{metadata:e,body:n}=t,{mutateAsync:m}=v(e.id);return(0,c.useEffect)(()=>{m()},[]),(0,r.BX)(l.T,{css:{marginTop:20},children:[(0,r.tZ)(d.H,{title:e.title,description:e.description,canonical:(0,d.K)("/posts/".concat(e.path))}),(0,r.BX)(o.W,{children:[(0,r.BX)(u.g,{children:[(0,r.tZ)(h.D,{css:(0,i.css)(j()),children:e.title}),(0,r.tZ)("span",{css:(0,i.css)(O()),children:w._.formatDateToShow(e.timestamp)}),(0,r.tZ)(a.Hr,{css:{marginBottom:20}}),(0,r.tZ)(p.K.Vertical,{align:"stretch",children:(0,r.tZ)(f.$,{markdown:n})})]}),(0,r.tZ)(s,{})]})]})}},5323:function(t,e,n){"use strict";n.d(e,{_:function(){return i}});var r=n(5959);let i={formatDate:t=>t.toISOString(),formatDateToShow:t=>(0,r.Z)("string"==typeof t?new Date(t):t,"yyyy. MM. dd.")}}},function(t){t.O(0,[245,921,105,163,774,888,179],function(){return t(t.s=7082)}),_N_E=t.O()}]);