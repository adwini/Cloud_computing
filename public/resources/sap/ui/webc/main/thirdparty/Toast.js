sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/types/Integer","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/util/PopupUtils","./types/ToastPlacement","./generated/templates/ToastTemplate.lit","./generated/themes/Toast.css"],function(e,t,i,n,s,a,o,r){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=u(t);i=u(i);n=u(n);a=u(a);o=u(o);r=u(r);function u(e){return e&&e.__esModule?e:{default:e}}const d=500;const l=1e3;const p={tag:"ui5-toast",properties:{duration:{type:t.default,defaultValue:3e3},placement:{type:a.default,defaultValue:a.default.BottomCenter},open:{type:Boolean},hover:{type:Boolean},domRendered:{type:Boolean}},slots:{default:{type:Node}}};class h extends i.default{static get metadata(){return p}static get render(){return n.default}static get styles(){return r.default}static get template(){return o.default}onAfterRendering(){if(this._reopen){this._reopen=false;this._initiateOpening()}}show(){if(this.open){this._reopen=true;this.open=false}else{this._initiateOpening()}}get effectiveDuration(){return this.duration<d?d:this.duration}get styles(){const e=Math.min(this.effectiveDuration/3,l);return{root:{"transition-duration":this.open?`${e}ms`:"","transition-delay":this.open?`${this.effectiveDuration-e}ms`:"",opacity:this.open&&!this.hover?"0":"","z-index":(0,s.getNextZIndex)()}}}_initiateOpening(){this.domRendered=true;requestAnimationFrame(e=>{this.open=true})}_ontransitionend(){if(this.hover){return}this.domRendered=false;this.open=false}_onmouseover(){this.hover=true}_onmouseleave(){this.hover=false}}h.define();var f=h;e.default=f});
//# sourceMappingURL=Toast.js.map