sap.ui.define(["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;const t={};const n=(e,n,r)=>{t[e]={borders:n,names:r}};const r=(e,n=window.innerWidth)=>{const r=t[e];let s=0;if(!r){return null}for(;s<r.borders.length;s++){if(n<r.borders[s]){return r.names[s]}}return r.names[s]};const s={RANGE_4STEPS:"4Step"};const o={RANGESETS:s,initRangeSet:n,getCurrentRange:r};o.initRangeSet(o.RANGESETS.RANGE_4STEPS,[600,1024,1440],["S","M","L","XL"]);var i=o;e.default=i});
//# sourceMappingURL=MediaRange.js.map