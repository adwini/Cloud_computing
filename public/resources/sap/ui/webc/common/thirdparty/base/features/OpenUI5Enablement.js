sap.ui.define(["exports","../FeaturesRegistry","../generated/css/BusyIndicator.css","../thirdparty/merge","../Keys"],function(e,t,s,i,r){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;s=o(s);i=o(i);function o(e){return e&&e.__esModule?e:{default:e}}const a={properties:{__isBusy:{type:Boolean}}};const n=()=>s.default;const c=(e,t,s)=>{if(t.isOpenUI5Component&&t.__isBusy){s=e`
		<div class="busy-indicator-wrapper">
			<span tabindex="0" busy-indicator-before-span @focusin=${t.__suppressFocusIn}></span>
			${s}
			<div class="busy-indicator-overlay"></div>
			<div busy-indicator
				class="busy-indicator-busy-area"
				tabindex="0"
				role="progressbar"
				@keydown=${t.__suppressFocusBack}
				aria-valuemin="0"
				aria-valuemax="100"
				aria-valuetext="Busy">
				<div>
					<div class="busy-indicator-circle circle-animation-0"></div>
					<div class="busy-indicator-circle circle-animation-1"></div>
					<div class="busy-indicator-circle circle-animation-2"></div>
				</div>
			</div>
		</div>`}return s};const u=e=>{e.metadata=(0,i.default)(e.metadata,a)};const d=e=>{Object.defineProperties(e,{__redirectFocus:{value:true,writable:true},__suppressFocusBack:{get(){const e=this;return{handleEvent:t=>{if((0,r.isTabPrevious)(t)){const t=e.shadowRoot.querySelector("[busy-indicator-before-span]");e.__redirectFocus=false;t.focus();e.__redirectFocus=true}},capture:true,passive:false}}},isOpenUI5Component:{get:()=>true}});e.__suppressFocusIn=function e(){const t=this.shadowRoot.querySelector("[busy-indicator]");if(t&&this.__redirectFocus){t.focus()}};e.getDomRef=function e(){if(typeof this._getRealDomRef==="function"){return this._getRealDomRef()}if(!this.shadowRoot||this.shadowRoot.children.length===0){return}const t=[...this.shadowRoot.children].filter(e=>!["link","style"].includes(e.localName));if(t.length!==1){console.warn(`The shadow DOM for ${this.constructor.getMetadata().getTag()} does not have a top level element, the getDomRef() method might not work as expected`)}if(this.__isBusy){return t[0].querySelector(".busy-indicator-wrapper > :not([busy-indicator-before-span]):not(.busy-indicator-overlay):not(.busy-indicator-busy-area)")}return t[0]}};const l=e=>{u(e);d(e.prototype)};const p={enrichBusyIndicatorSettings:l,wrapTemplateResultInBusyMarkup:c,getBusyIndicatorStyles:n};var y=p;e.default=y;(0,t.registerFeature)("OpenUI5Enablement",p)});
//# sourceMappingURL=OpenUI5Enablement.js.map