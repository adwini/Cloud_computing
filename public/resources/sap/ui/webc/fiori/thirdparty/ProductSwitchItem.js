sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/Keys","sap/ui/webc/main/thirdparty/Icon","./generated/templates/ProductSwitchItemTemplate.lit","./generated/themes/ProductSwitchItem.css"],function(e,t,i,s,a,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=c(t);i=c(i);a=c(a);r=c(r);n=c(n);function c(e){return e&&e.__esModule?e:{default:e}}const u={tag:"ui5-product-switch-item",properties:{titleText:{type:String},subtitleText:{type:String},icon:{type:String},target:{type:String,defaultValue:"_self"},targetSrc:{type:String},active:{type:Boolean},focused:{type:Boolean},selected:{type:Boolean},_tabIndex:{type:String,defaultValue:"-1",noAttribute:true}},slots:{},events:{click:{},_focused:{}}};class o extends t.default{constructor(){super();this._deactivate=()=>{if(this.active){this.active=false}}}static get metadata(){return u}static get render(){return i.default}static get styles(){return n.default}static get template(){return r.default}onEnterDOM(){document.addEventListener("mouseup",this._deactivate)}onExitDOM(){document.removeEventListener("mouseup",this._deactivate)}_onmousedown(){this.active=true}_onkeydown(e){if((0,s.isSpace)(e)||(0,s.isEnter)(e)){this.active=true}if((0,s.isSpace)(e)){e.preventDefault()}if((0,s.isEnter)(e)){this._fireItemClick()}}_onkeyup(e){if((0,s.isSpace)(e)||(0,s.isEnter)(e)){this.active=false}if((0,s.isSpace)(e)){if((0,s.isSpaceShift)(e)){e.stopPropagation()}this._fireItemClick()}}_onfocusout(){this.active=false;this.focused=false}_onfocusin(e){this.focused=true;this.fireEvent("_focused",e)}_fireItemClick(){this.fireEvent("click",{item:this})}static get dependencies(){return[a.default]}}o.define();var d=o;e.default=d});
//# sourceMappingURL=ProductSwitchItem.js.map