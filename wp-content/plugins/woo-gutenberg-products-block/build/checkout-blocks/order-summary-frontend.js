(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[42],{113:function(e,t,c){"use strict";var n=c(13),a=c.n(n),o=c(0),r=c(151),l=c(6),s=c.n(l);c(215);const i=e=>({thousandSeparator:null==e?void 0:e.thousandSeparator,decimalSeparator:null==e?void 0:e.decimalSeparator,decimalScale:null==e?void 0:e.minorUnit,fixedDecimalScale:!0,prefix:null==e?void 0:e.prefix,suffix:null==e?void 0:e.suffix,isNumericString:!0});t.a=e=>{let{className:t,value:c,currency:n,onValueChange:l,displayType:u="text",...m}=e;const b="string"==typeof c?parseInt(c,10):c;if(!Number.isFinite(b))return null;const p=b/10**n.minorUnit;if(!Number.isFinite(p))return null;const d=s()("wc-block-formatted-money-amount","wc-block-components-formatted-money-amount",t),f={...m,...i(n),value:void 0,currency:void 0,onValueChange:void 0},v=l?e=>{const t=+e.value*10**n.minorUnit;l(t)}:()=>{};return Object(o.createElement)(r.a,a()({className:d,displayType:u},f,{value:p,onValueChange:v}))}},215:function(e,t){},371:function(e,t){},437:function(e,t,c){"use strict";var n=c(0),a=c(1),o=c(6),r=c.n(o),l=c(113),s=c(11),i=c(42),u=c(2),m=c(43);c(371),t.a=e=>{let{currency:t,values:c,className:o}=e;const b=Object(u.getSetting)("taxesEnabled",!0)&&Object(u.getSetting)("displayCartPricesIncludingTax",!1),{total_price:p,total_tax:d,tax_lines:f}=c,{receiveCart:v,...j}=Object(i.a)(),O=Object(s.applyCheckoutFilter)({filterName:"totalLabel",defaultValue:Object(a.__)("Total","woo-gutenberg-products-block"),extensions:j.extensions,arg:{cart:j}}),g=parseInt(d,10),x=f&&f.length>0?Object(a.sprintf)(
/* translators: %s is a list of tax rates */
Object(a.__)("Including %s","woo-gutenberg-products-block"),f.map(e=>{let{name:c,price:n}=e;return`${Object(m.formatPrice)(n,t)} ${c}`}).join(", ")):Object(a.__)("Including <TaxAmount/> in taxes","woo-gutenberg-products-block");return Object(n.createElement)(s.TotalsItem,{className:r()("wc-block-components-totals-footer-item",o),currency:t,label:O,value:parseInt(p,10),description:b&&0!==g&&Object(n.createElement)("p",{className:"wc-block-components-totals-footer-item-tax"},Object(n.createInterpolateElement)(x,{TaxAmount:Object(n.createElement)(l.a,{className:"wc-block-components-totals-footer-item-tax-value",currency:t,value:g})}))})}},522:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(437),o=c(43),r=c(42),l=c(11);const s=()=>{const{extensions:e,receiveCart:t,...c}=Object(r.a)(),a={extensions:e,cart:c,context:"woocommerce/checkout"};return Object(n.createElement)(l.ExperimentalOrderMeta.Slot,a)};t.default=e=>{let{children:t,className:c=""}=e;const{cartTotals:l}=Object(r.a)(),i=Object(o.getCurrencyFromPriceResponse)(l);return Object(n.createElement)("div",{className:c},t,Object(n.createElement)("div",{className:"wc-block-components-totals-wrapper"},Object(n.createElement)(a.a,{currency:i,values:l})),Object(n.createElement)(s,null))}}}]);