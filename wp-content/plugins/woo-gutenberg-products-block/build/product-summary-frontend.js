(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[78],{114:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(53);var o=n(34);const c=()=>o.n>1},115:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var o=n(23),c=n(21);const r=t=>Object(o.a)(t)?JSON.parse(t)||{}:Object(c.a)(t)?t:{}},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));const o=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function c(t,e){return o(t)&&e in t}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var o=n(65),c=n(114),r=n(21),s=n(115);const a=t=>{if(!Object(c.a)())return{className:"",style:{}};const e=Object(r.a)(t)?t:{},n=Object(s.a)(e.style);return Object(o.__experimentalUseColorProps)({...e,style:n})}},290:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var o=n(21),c=n(23),r=n(115);const s=t=>{const e=Object(o.a)(t)?t:{},n=Object(r.a)(e.style),s=Object(o.a)(n.typography)?n.typography:{},a=Object(c.a)(s.fontFamily)?s.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:a,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:s.fontSize,fontStyle:s.fontStyle,fontWeight:s.fontWeight,letterSpacing:s.letterSpacing,lineHeight:s.lineHeight,textDecoration:s.textDecoration,textTransform:s.textTransform}}}},339:function(t,e,n){"use strict";var o=n(0),c=n(130),r=n(131);const s=t=>{const e=t.indexOf("</p>");return-1===e?t:t.substr(0,e+4)},a=t=>t.replace(/<\/?[a-z][^>]*?>/gi,""),i=(t,e)=>t.replace(/[\s|\.\,]+$/i,"")+e,u=function(t,e){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"&hellip;";const o=a(t),c=o.split(" ").splice(0,e).join(" ");return Object(r.autop)(i(c,n))},l=function(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"&hellip;";const c=a(t),s=c.slice(0,e);if(n)return Object(r.autop)(i(s,o));const u=s.match(/([\s]+)/g),l=u?u.length:0,p=c.slice(0,e+l);return Object(r.autop)(i(p,o))};e.a=t=>{let{source:e,maxLength:n=15,countType:a="words",className:i="",style:p={}}=t;const f=Object(o.useMemo)(()=>function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"words";const o=Object(r.autop)(t),a=Object(c.count)(o,n);if(a<=e)return o;const i=s(o),p=Object(c.count)(i,n);return p<=e?i:"words"===n?u(i,e):l(i,e,"characters_including_spaces"===n)}(e,n,a),[e,n,a]);return Object(o.createElement)(o.RawHTML,{style:p,className:i},f)}},415:function(t,e){},460:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(6),r=n.n(c),s=n(339),a=n(34),i=n(52),u=n(286),l=n(290),p=n(135);n(415),e.default=Object(p.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:n}=Object(i.useInnerBlockLayoutContext)(),{product:c}=Object(i.useProductDataContext)(),p=Object(u.a)(t),f=Object(l.a)(t);if(!c)return Object(o.createElement)("div",{className:r()(e,"wc-block-components-product-summary",{[n+"__product-summary"]:n})});const b=c.short_description?c.short_description:c.description;return b?Object(o.createElement)(s.a,{className:r()(e,p.className,"wc-block-components-product-summary",{[n+"__product-summary"]:n}),source:b,maxLength:150,countType:a.o.wordCountType||"words",style:{...p.style,...f.style}}):null})},6:function(t,e,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var o=arguments[e];if(o){var r=typeof o;if("string"===r||"number"===r)t.push(o);else if(Array.isArray(o)){if(o.length){var s=c.apply(null,o);s&&t.push(s)}}else if("object"===r)if(o.toString===Object.prototype.toString)for(var a in o)n.call(o,a)&&o[a]&&t.push(a);else t.push(o.toString())}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(o=function(){return c}.apply(e,[]))||(t.exports=o)}()}}]);