sap.ui.define(["exports","./asset-registries/i18n","./util/formatMessage"],function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.registerCustomI18nBundleGetter=e.getI18nBundle=void 0;Object.defineProperty(e,"registerI18nLoader",{enumerable:true,get:function(){return t.registerI18nLoader}});n=r(n);function r(e){return e&&e.__esModule?e:{default:e}}const u=new Map;let s;class i{constructor(e){this.packageName=e}getText(e,...r){if(typeof e==="string"){e={key:e,defaultText:e}}if(!e||!e.key){return""}const u=(0,t.getI18nBundleData)(this.packageName);if(u&&!u[e.key]){console.warn(`Key ${e.key} not found in the i18n bundle, the default text will be used`)}const s=u&&u[e.key]?u[e.key]:e.defaultText||e.key;return(0,n.default)(s,r)}}const a=e=>{if(u.has(e)){return u.get(e)}const t=new i(e);u.set(e,t);return t};const o=e=>{s=e};e.registerCustomI18nBundleGetter=o;const d=async e=>{if(s){return s(e)}await(0,t.fetchI18nBundle)(e);return a(e)};e.getI18nBundle=d});
//# sourceMappingURL=i18nBundle.js.map