(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[24],{119:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r(5),c=r(56),o=r(24),s=r(78);const a=t=>{if(!Object(c.b)())return{className:"",style:{}};const e=Object(o.b)(t)?t:{},r=Object(s.a)(e.style);return Object(n.__experimentalUseBorderProps)({...e,style:r})}},221:function(t,e,r){"use strict";r.r(e),r.d(e,"Block",(function(){return v}));var n=r(6),c=r.n(n),o=r(0),s=r(4),a=r.n(s),i=r(1),d=r(86),l=r(274),u=r(104),b=r(119),p=r(92),_=r(117),m=r(17),g=r(19),y=r(2),w=r(21),E=r(47);r(270);const C=t=>{let{product:e,colorStyles:r,borderStyles:n,typographyStyles:s,spacingStyles:u,textAlign:b}=t;const{id:p,permalink:_,add_to_cart:w,has_options:E,is_purchasable:C,is_in_stock:O}=e,{dispatchStoreEvent:v}=Object(d.a)(),{cartQuantity:h,addingToCart:f,addToCart:S}=Object(l.a)(p),j=Number.isFinite(h)&&h>0,R=!E&&C&&O,T=Object(m.decodeEntities)((null==w?void 0:w.description)||""),k=j?Object(i.sprintf)(
/* translators: %s number of products in cart. */
Object(i._n)("%d in cart","%d in cart",h,"woo-gutenberg-products-block"),h):Object(m.decodeEntities)((null==w?void 0:w.text)||Object(i.__)("Add to cart","woo-gutenberg-products-block")),P=R?"button":"a",A={};return R?A.onClick=async()=>{await S(),v("cart-add-item",{product:e});const{cartRedirectAfterAdd:t}=Object(y.getSetting)("productsSettings");t&&(window.location.href=g.d)}:(A.href=_,A.rel="nofollow",A.onClick=()=>{v("product-view-link",{product:e})}),Object(o.createElement)(P,c()({"aria-label":T,className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button",r.className,n.className,{loading:f,added:j},{["has-text-align-"+b]:b}),style:{...r.style,...n.style,...s.style,...u.style},disabled:f},A),k)},O=t=>{let{colorStyles:e,borderStyles:r,typographyStyles:n,spacingStyles:c}=t;return Object(o.createElement)("button",{className:a()("wp-block-button__link","wp-element-button","add_to_cart_button","wc-block-components-product-button__button","wc-block-components-product-button__button--placeholder",e.className,r.className),style:{...e.style,...r.style,...n.style,...c.style},disabled:!0})},v=t=>{const{className:e,textAlign:r}=t,{parentClassName:n}=Object(w.useInnerBlockLayoutContext)(),{product:c}=Object(w.useProductDataContext)(),s=Object(u.a)(t),i=Object(b.a)(t),d=Object(p.a)(t),l=Object(_.a)(t);return Object(o.createElement)("div",{className:a()(e,"wp-block-button","wc-block-components-product-button",{[n+"__product-add-to-cart"]:n},{["has-text-align-"+r]:r})},c.id?Object(o.createElement)(C,{product:c,colorStyles:s,borderStyles:i,typographyStyles:d,spacingStyles:l}):Object(o.createElement)(O,{colorStyles:s,borderStyles:i,typographyStyles:d,spacingStyles:l}))};e.default=Object(E.withProductDataContext)(v)},263:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return s}));const n=window.CustomEvent||null,c=(t,e)=>{let{bubbles:r=!1,cancelable:c=!1,element:o,detail:s={}}=e;if(!n)return;o||(o=document.body);const a=new n(t,{bubbles:r,cancelable:c,detail:s});o.dispatchEvent(a)},o=t=>{let{preserveCartData:e=!1}=t;c("wc-blocks_added_to_cart",{bubbles:!0,cancelable:!0,detail:{preserveCartData:e}})},s=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if("function"!=typeof jQuery)return()=>{};const o=()=>{c(e,{bubbles:r,cancelable:n})};return jQuery(document).on(t,o),()=>jQuery(document).off(t,o)}},264:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(98),c=(r(16),r(2));const o=t=>{const e=Object.keys(c.defaultAddressFields),r=Object(n.a)(e,{},t.country),o=Object.assign({},t);return r.forEach(e=>{let{key:r="",hidden:n=!1}=e;n&&((t,e)=>t in e)(r,t)&&(o[r]="")}),o}},270:function(t,e){},274:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var n=r(0),c=r(7),o=r(10),s=r(17),a=r(44);const i=(t,e)=>{const r=t.find(t=>{let{id:r}=t;return r===e});return r?r.quantity:0},d=t=>{const{addItemToCart:e}=Object(c.useDispatch)(o.CART_STORE_KEY),{cartItems:r,cartIsLoading:d}=Object(a.a)(),{createErrorNotice:l,removeNotice:u}=Object(c.useDispatch)("core/notices"),[b,p]=Object(n.useState)(!1),_=Object(n.useRef)(i(r,t));return Object(n.useEffect)(()=>{const e=i(r,t);e!==_.current&&(_.current=e)},[r,t]),{cartQuantity:Number.isFinite(_.current)?_.current:0,addingToCart:b,cartIsLoading:d,addToCart:function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return p(!0),e(t,r).then(()=>{u("add-to-cart")}).catch(t=>{l(Object(s.decodeEntities)(t.message),{id:"add-to-cart",context:"wc/all-products",isDismissible:!0})}).finally(()=>{p(!1)})}}}},44:function(t,e,r){"use strict";r.d(e,"a",(function(){return C}));var n=r(9),c=r(0),o=r(10),s=r(7),a=r(17),i=r(264),d=r(85);var l=r(263);const u=t=>{const e=null==t?void 0:t.detail;e&&e.preserveCartData||Object(s.dispatch)(o.CART_STORE_KEY).invalidateResolutionForStore()},b=t=>{(null!=t&&t.persisted||"back_forward"===(window.performance&&window.performance.getEntriesByType("navigation").length?window.performance.getEntriesByType("navigation")[0].type:""))&&Object(s.dispatch)(o.CART_STORE_KEY).invalidateResolutionForStore()},p=()=>{1===window.wcBlocksStoreCartListeners.count&&window.wcBlocksStoreCartListeners.remove(),window.wcBlocksStoreCartListeners.count--},_=()=>{Object(c.useEffect)(()=>((()=>{if(window.wcBlocksStoreCartListeners||(window.wcBlocksStoreCartListeners={count:0,remove:()=>{}}),(null===(t=window.wcBlocksStoreCartListeners)||void 0===t?void 0:t.count)>0)return void window.wcBlocksStoreCartListeners.count++;var t;document.body.addEventListener("wc-blocks_added_to_cart",u),document.body.addEventListener("wc-blocks_removed_from_cart",u),window.addEventListener("pageshow",b);const e=Object(l.a)("added_to_cart","wc-blocks_added_to_cart"),r=Object(l.a)("removed_from_cart","wc-blocks_removed_from_cart");window.wcBlocksStoreCartListeners.count=1,window.wcBlocksStoreCartListeners.remove=()=>{document.body.removeEventListener("wc-blocks_added_to_cart",u),document.body.removeEventListener("wc-blocks_removed_from_cart",u),window.removeEventListener("pageshow",b),e(),r()}})(),p),[])},m={first_name:"",last_name:"",company:"",address_1:"",address_2:"",city:"",state:"",postcode:"",country:"",phone:""},g={...m,email:""},y={total_items:"",total_items_tax:"",total_fees:"",total_fees_tax:"",total_discount:"",total_discount_tax:"",total_shipping:"",total_shipping_tax:"",total_price:"",total_tax:"",tax_lines:o.EMPTY_TAX_LINES,currency_code:"",currency_symbol:"",currency_minor_unit:2,currency_decimal_separator:"",currency_thousand_separator:"",currency_prefix:"",currency_suffix:""},w=t=>Object.fromEntries(Object.entries(t).map(t=>{let[e,r]=t;return[e,Object(a.decodeEntities)(r)]})),E={cartCoupons:o.EMPTY_CART_COUPONS,cartItems:o.EMPTY_CART_ITEMS,cartFees:o.EMPTY_CART_FEES,cartItemsCount:0,cartItemsWeight:0,crossSellsProducts:o.EMPTY_CART_CROSS_SELLS,cartNeedsPayment:!0,cartNeedsShipping:!0,cartItemErrors:o.EMPTY_CART_ITEM_ERRORS,cartTotals:y,cartIsLoading:!0,cartErrors:o.EMPTY_CART_ERRORS,billingAddress:g,shippingAddress:m,shippingRates:o.EMPTY_SHIPPING_RATES,isLoadingRates:!1,cartHasCalculatedShipping:!1,paymentRequirements:o.EMPTY_PAYMENT_REQUIREMENTS,receiveCart:()=>{},receiveCartContents:()=>{},extensions:o.EMPTY_EXTENSIONS},C=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{shouldSelect:!0};const{isEditor:e,previewData:r}=Object(d.b)(),a=null==r?void 0:r.previewCart,{shouldSelect:l}=t,u=Object(c.useRef)();_();const b=Object(s.useSelect)((t,r)=>{let{dispatch:n}=r;if(!l)return E;if(e)return{cartCoupons:a.coupons,cartItems:a.items,crossSellsProducts:a.cross_sells,cartFees:a.fees,cartItemsCount:a.items_count,cartItemsWeight:a.items_weight,cartNeedsPayment:a.needs_payment,cartNeedsShipping:a.needs_shipping,cartItemErrors:o.EMPTY_CART_ITEM_ERRORS,cartTotals:a.totals,cartIsLoading:!1,cartErrors:o.EMPTY_CART_ERRORS,billingData:g,billingAddress:g,shippingAddress:m,extensions:o.EMPTY_EXTENSIONS,shippingRates:a.shipping_rates,isLoadingRates:!1,cartHasCalculatedShipping:a.has_calculated_shipping,paymentRequirements:a.paymentRequirements,receiveCart:"function"==typeof(null==a?void 0:a.receiveCart)?a.receiveCart:()=>{},receiveCartContents:"function"==typeof(null==a?void 0:a.receiveCartContents)?a.receiveCartContents:()=>{}};const c=t(o.CART_STORE_KEY),s=c.getCartData(),d=c.getCartErrors(),u=c.getCartTotals(),b=!c.hasFinishedResolution("getCartData"),p=c.isCustomerDataUpdating(),{receiveCart:_,receiveCartContents:y}=n(o.CART_STORE_KEY),C=w(s.billingAddress),O=s.needsShipping?w(s.shippingAddress):C,v=s.fees.length>0?s.fees.map(t=>w(t)):o.EMPTY_CART_FEES;return{cartCoupons:s.coupons.length>0?s.coupons.map(t=>({...t,label:t.code})):o.EMPTY_CART_COUPONS,cartItems:s.items,crossSellsProducts:s.crossSells,cartFees:v,cartItemsCount:s.itemsCount,cartItemsWeight:s.itemsWeight,cartNeedsPayment:s.needsPayment,cartNeedsShipping:s.needsShipping,cartItemErrors:s.errors,cartTotals:u,cartIsLoading:b,cartErrors:d,billingData:Object(i.a)(C),billingAddress:Object(i.a)(C),shippingAddress:Object(i.a)(O),extensions:s.extensions,shippingRates:s.shippingRates,isLoadingRates:p,cartHasCalculatedShipping:s.hasCalculatedShipping,paymentRequirements:s.paymentRequirements,receiveCart:_,receiveCartContents:y}},[l]);return u.current&&Object(n.isEqual)(u.current,b)||(u.current=b),u.current}},85:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"a",(function(){return a}));var n=r(0),c=r(7);const o=Object(n.createContext)({isEditor:!1,currentPostId:0,currentView:"",previewData:{},getPreviewData:()=>({})}),s=()=>Object(n.useContext)(o),a=t=>{let{children:e,currentPostId:r=0,previewData:s={},currentView:a=""}=t;const i=Object(c.useSelect)(t=>r||t("core/editor").getCurrentPostId(),[r]),d=Object(n.useCallback)(t=>s&&t in s?s[t]:{},[s]),l={isEditor:!0,currentPostId:i,currentView:a,previewData:s,getPreviewData:d};return Object(n.createElement)(o.Provider,{value:l},e)}},86:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r(45),c=r(0),o=r(44);const s=()=>{const t=Object(o.a)(),e=Object(c.useRef)(t);return Object(c.useEffect)(()=>{e.current=t},[t]),{dispatchStoreEvent:Object(c.useCallback)((function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-"+t,e)}catch(t){console.error(t)}}),[]),dispatchCheckoutEvent:Object(c.useCallback)((function(t){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{Object(n.doAction)("experimental__woocommerce_blocks-checkout-"+t,{...r,storeCart:e.current})}catch(t){console.error(t)}}),[])}}},98:function(t,e,r){"use strict";var n=r(2),c=r(1),o=r(152),s=r(67);const a=Object(n.getSetting)("countryLocale",{}),i=t=>{const e={};return void 0!==t.label&&(e.label=t.label),void 0!==t.required&&(e.required=t.required),void 0!==t.hidden&&(e.hidden=t.hidden),void 0===t.label||t.optionalLabel||(e.optionalLabel=Object(c.sprintf)(
/* translators: %s Field label. */
Object(c.__)("%s (optional)","woo-gutenberg-products-block"),t.label)),t.priority&&(Object(o.a)(t.priority)&&(e.index=t.priority),Object(s.a)(t.priority)&&(e.index=parseInt(t.priority,10))),t.hidden&&(e.required=!1),e},d=Object.entries(a).map(t=>{let[e,r]=t;return[e,Object.entries(r).map(t=>{let[e,r]=t;return[e,i(r)]}).reduce((t,e)=>{let[r,n]=e;return t[r]=n,t},{})]}).reduce((t,e)=>{let[r,n]=e;return t[r]=n,t},{});e.a=function(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";const c=r&&void 0!==d[r]?d[r]:{};return t.map(t=>({key:t,...n.defaultAddressFields[t]||{},...c[t]||{},...e[t]||{}})).sort((t,e)=>t.index-e.index)}}}]);