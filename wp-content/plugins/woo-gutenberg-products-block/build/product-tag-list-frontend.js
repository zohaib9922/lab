(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[79],{114:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n(53);var r=n(34);const c=()=>r.n>1},115:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(23),c=n(21);const o=t=>Object(r.a)(t)?JSON.parse(t)||{}:Object(c.a)(t)?t:{}},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));const r=t=>!(t=>null===t)(t)&&t instanceof Object&&t.constructor===Object;function c(t,e){return r(t)&&e in t}},286:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n(65),c=n(114),o=n(21),a=n(115);const s=t=>{if(!Object(c.a)())return{className:"",style:{}};const e=Object(o.a)(t)?t:{},n=Object(a.a)(e.style);return Object(r.__experimentalUseColorProps)({...e,style:n})}},290:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n(21),c=n(23),o=n(115);const a=t=>{const e=Object(r.a)(t)?t:{},n=Object(o.a)(e.style),a=Object(r.a)(n.typography)?n.typography:{},s=Object(c.a)(a.fontFamily)?a.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:s,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:a.fontSize,fontStyle:a.fontStyle,fontWeight:a.fontWeight,letterSpacing:a.letterSpacing,lineHeight:a.lineHeight,textDecoration:a.textDecoration,textTransform:a.textTransform}}}},418:function(t,e){},463:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),o=n(6),a=n.n(o),s=n(52),i=n(286),u=n(290),l=n(5),f=n(135);n(418),e.default=Object(f.withProductDataContext)(t=>{const{className:e}=t,{parentClassName:n}=Object(s.useInnerBlockLayoutContext)(),{product:o}=Object(s.useProductDataContext)(),f=Object(i.a)(t),p=Object(u.a)(t);return Object(l.isEmpty)(o.tags)?null:Object(r.createElement)("div",{className:a()(e,f.className,"wc-block-components-product-tag-list",{[n+"__product-tag-list"]:n}),style:{...f.style,...p.style}},Object(c.__)("Tags:","woo-gutenberg-products-block")," ",Object(r.createElement)("ul",null,Object.values(o.tags).map(t=>{let{name:e,link:n,slug:c}=t;return Object(r.createElement)("li",{key:"tag-list-item-"+c},Object(r.createElement)("a",{href:n},e))})))})},6:function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var o=typeof r;if("string"===o||"number"===o)t.push(r);else if(Array.isArray(r)){if(r.length){var a=c.apply(null,r);a&&t.push(a)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&t.push(s);else t.push(r.toString())}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(r=function(){return c}.apply(e,[]))||(t.exports=r)}()}}]);