(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[80],{114:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n(53);var c=n(34);const r=()=>c.n>1},115:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(23),r=n(21);const a=t=>Object(c.a)(t)?JSON.parse(t)||{}:Object(r.a)(t)?t:{}},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));const c=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function r(t,e){return c(t)&&e in t}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var c=n(65),r=n(114),a=n(21),o=n(115);const s=t=>{if(!Object(r.a)())return{className:"",style:{}};const e=Object(a.a)(t)?t:{},n=Object(o.a)(e.style);return Object(c.__experimentalUseColorProps)({...e,style:n})}},290:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(21),r=n(23),a=n(115);const o=t=>{const e=Object(c.a)(t)?t:{},n=Object(a.a)(e.style),o=Object(c.a)(n.typography)?n.typography:{},s=Object(r.a)(o.fontFamily)?o.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:s,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:o.fontSize,fontStyle:o.fontStyle,fontWeight:o.fontWeight,letterSpacing:o.letterSpacing,lineHeight:o.lineHeight,textDecoration:o.textDecoration,textTransform:o.textTransform}}}},301:function(t,e,n){"use strict";var c=n(13),r=n.n(c),a=n(0),o=n(30),s=n(6),i=n.n(s);n(302),e.a=t=>{let{className:e="",disabled:n=!1,name:c,permalink:s="",target:l,rel:u,style:p,onClick:f,...b}=t;const d=i()("wc-block-components-product-name",e);if(n){const t=b;return Object(a.createElement)("span",r()({className:d},t,{dangerouslySetInnerHTML:{__html:Object(o.decodeEntities)(c)}}))}return Object(a.createElement)("a",r()({className:d,href:s,target:l},b,{dangerouslySetInnerHTML:{__html:Object(o.decodeEntities)(c)},style:p}))}},302:function(t,e){},307:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n(65),r=n(21),a=n(115);const o=t=>{if("function"!=typeof c.__experimentalGetSpacingClassesAndStyles)return{style:{}};const e=Object(r.a)(t)?t:{},n=Object(a.a)(e.style);return Object(c.__experimentalGetSpacingClassesAndStyles)({...e,style:n})}},354:function(t,e,n){"use strict";n.d(e,"a",(function(){return y}));var c=n(0),r=n(6),a=n.n(r),o=n(52),s=n(114),i=n(135),l=n(301),u=n(73),p=n(286),f=n(307),b=n(290);n(355);const d=t=>{let{children:e,headingLevel:n,elementType:r="h"+n,...a}=t;return Object(c.createElement)(r,a,e)},y=t=>{const{className:e,headingLevel:n=2,showProductLink:r=!0,linkTarget:i,align:y}=t,{parentClassName:m}=Object(o.useInnerBlockLayoutContext)(),{product:j}=Object(o.useProductDataContext)(),{dispatchStoreEvent:O}=Object(u.a)(),g=Object(p.a)(t),h=Object(f.a)(t),v=Object(b.a)(t);return j.id?Object(c.createElement)(d,{headingLevel:n,className:a()(e,g.className,"wc-block-components-product-title",{[m+"__product-title"]:m,["wc-block-components-product-title--align-"+y]:y&&Object(s.a)()}),style:Object(s.a)()?{...h.style,...v.style,...g.style}:{}},Object(c.createElement)(l.a,{disabled:!r,name:j.name,permalink:j.permalink,target:i,onClick:()=>{O("product-view-link",{product:j})}})):Object(c.createElement)(d,{headingLevel:n,className:a()(e,g.className,"wc-block-components-product-title",{[m+"__product-title"]:m,["wc-block-components-product-title--align-"+y]:y&&Object(s.a)()}),style:Object(s.a)()?{...h.style,...v.style,...g.style}:{}})};e.b=Object(i.withProductDataContext)(y)},355:function(t,e){},531:function(t,e,n){"use strict";n.r(e);var c=n(135),r=n(354),a=n(114);let o={headingLevel:{type:"number",default:2},showProductLink:{type:"boolean",default:!0},linkTarget:{type:"string"},productId:{type:"number",default:0}};Object(a.a)()&&(o={...o,align:{type:"string"}});var s=o;e.default=Object(c.withFilteredAttributes)(s)(r.b)},6:function(t,e,n){var c;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var t=[],e=0;e<arguments.length;e++){var c=arguments[e];if(c){var a=typeof c;if("string"===a||"number"===a)t.push(c);else if(Array.isArray(c)){if(c.length){var o=r.apply(null,c);o&&t.push(o)}}else if("object"===a)if(c.toString===Object.prototype.toString)for(var s in c)n.call(c,s)&&c[s]&&t.push(s);else t.push(c.toString())}}return t.join(" ")}t.exports?(r.default=r,t.exports=r):void 0===(c=function(){return r}.apply(e,[]))||(t.exports=c)}()}}]);