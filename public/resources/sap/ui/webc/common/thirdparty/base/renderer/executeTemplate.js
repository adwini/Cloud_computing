sap.ui.define(["exports","../CustomElementsScopeUtils"],function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;const o=(e,o)=>{const u=s(o);const n=(0,t.getCustomElementsScopingSuffix)();return e(o,u,n)};const s=e=>{const o=e.constructor.getMetadata().getPureTag();const s=e.constructor.getUniqueDependencies().map(e=>e.getMetadata().getPureTag()).filter(t.shouldScopeCustomElement);if((0,t.shouldScopeCustomElement)(o)){s.push(o)}return s};var u=o;e.default=u});
//# sourceMappingURL=executeTemplate.js.map