/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/Control","sap/ui/core/ResizeHandler","sap/ui/core/delegate/ScrollEnablement","sap/ui/layout/library","./DynamicSideContentRenderer"],function(jQuery,t,e,i,s,n){"use strict";var r=s.SideContentPosition;var o=s.SideContentFallDown;var a=s.SideContentVisibility;var h=t.extend("sap.ui.layout.DynamicSideContent",{metadata:{library:"sap.ui.layout",properties:{showSideContent:{type:"boolean",group:"Appearance",defaultValue:true},showMainContent:{type:"boolean",group:"Appearance",defaultValue:true},sideContentVisibility:{type:"sap.ui.layout.SideContentVisibility",group:"Appearance",defaultValue:a.ShowAboveS},sideContentFallDown:{type:"sap.ui.layout.SideContentFallDown",group:"Appearance",defaultValue:o.OnMinimumWidth},equalSplit:{type:"boolean",group:"Appearance",defaultValue:false},containerQuery:{type:"boolean",group:"Behavior",defaultValue:false},sideContentPosition:{type:"sap.ui.layout.SideContentPosition",group:"Appearance",defaultValue:r.End},mcSpan:{type:"int",defaultValue:0,visibility:"hidden"},scSpan:{type:"int",defaultValue:0,visibility:"hidden"}},defaultAggregation:"mainContent",events:{breakpointChanged:{parameters:{currentBreakpoint:{type:"string"}}}},aggregations:{mainContent:{type:"sap.ui.core.Control",multiple:true},sideContent:{type:"sap.ui.core.Control",multiple:true}},designTime:"sap/ui/layout/designtime/DynamicSideContent.designtime",dnd:{draggable:false,droppable:true}},renderer:n});var l="S",d="M",p="L",u="XL",C="sapUiHidden",S="sapUiDSCSpan12",_="sapUiDSCMCFixed",c="sapUiDSCSCFixed",g=3,f=4,y=6,b=8,w=9,V=12,M="Invalid Breakpoint. Expected: S, M, L or XL",m="SCGridCell",k="MCGridCell",B=720,P=1024,v=1440;h.prototype.setSideContentVisibility=function(t,e){this.setProperty("sideContentVisibility",t,true);if(!e&&this.$().length){this._setResizeData(this.getCurrentBreakpoint());this._changeGridState()}return this};h.prototype.setShowSideContent=function(t,e){if(t===this.getShowSideContent()){return this}this.setProperty("showSideContent",t,true);this._SCVisible=t;if(!e&&this.$().length){this._setResizeData(this.getCurrentBreakpoint(),this.getEqualSplit());if(this._currentBreakpoint===l){this._MCVisible=true}this._changeGridState()}return this};h.prototype.setShowMainContent=function(t,e){if(t===this.getShowMainContent()){return this}this.setProperty("showMainContent",t,true);this._MCVisible=t;if(!e&&this.$().length){this._setResizeData(this.getCurrentBreakpoint(),this.getEqualSplit());if(this._currentBreakpoint===l){this._SCVisible=true}this._changeGridState()}return this};h.prototype.isSideContentVisible=function(){if(this._currentBreakpoint===l){return this._SCVisible&&this.getProperty("showSideContent")}else{return this.getProperty("showSideContent")}};h.prototype.isMainContentVisible=function(){if(this._currentBreakpoint===l){return this._MCVisible&&this.getProperty("showMainContent")}else{return this.getProperty("showMainContent")}};h.prototype.setEqualSplit=function(t){this._MCVisible=true;this._SCVisible=true;this.setProperty("equalSplit",t,true);if(this._currentBreakpoint){this._setResizeData(this._currentBreakpoint,t);this._changeGridState()}return this};h.prototype.addSideContent=function(t){this.addAggregation("sideContent",t,true);this._rerenderControl(this.getAggregation("sideContent"),this.$(m));return this};h.prototype.addMainContent=function(t){this.addAggregation("mainContent",t,true);this._rerenderControl(this.getAggregation("mainContent"),this.$(k));return this};h.prototype.toggle=function(){if(this._currentBreakpoint===l){if(!this.getProperty("showMainContent")){this.setShowMainContent(true,true);this._MCVisible=false}if(!this.getProperty("showSideContent")){this.setShowSideContent(true,true);this._SCVisible=false}if(this._MCVisible&&!this._SCVisible){this._SCVisible=true;this._MCVisible=false}else if(!this._MCVisible&&this._SCVisible){this._MCVisible=true;this._SCVisible=false}this._changeGridState()}return this};h.prototype.getCurrentBreakpoint=function(){return this._currentBreakpoint};h.prototype.onBeforeRendering=function(){this._bSuppressInitialFireBreakPointChange=true;this._detachContainerResizeListener();this._SCVisible=this._SCVisible===undefined?this.getProperty("showSideContent"):this._SCVisible;this._MCVisible=this._MCVisible===undefined?this.getProperty("showMainContent"):this._MCVisible;if(!this.getContainerQuery()){this._iWindowWidth=jQuery(window).width();this._setBreakpointFromWidth(this._iWindowWidth);this._setResizeData(this._currentBreakpoint,this.getEqualSplit())}};h.prototype.onAfterRendering=function(){if(this.getContainerQuery()){this._attachContainerResizeListener();this._adjustToScreenSize()}else{var t=this;jQuery(window).on("resize",function(){t._adjustToScreenSize()})}this._changeGridState();this._initScrolling()};h.prototype.onThemeChanged=function(){if(this.getContainerQuery()){this._adjustToScreenSize()}};h.prototype.exit=function(){this._detachContainerResizeListener();if(this._oSCScroller){this._oSCScroller.destroy();this._oSCScroller=null}if(this._oMCScroller){this._oMCScroller.destroy();this._oMCScroller=null}};h.prototype.getScrollDelegate=function(t){var e=t,i=this.getParent(),s=this._getBreakPointFromWidth(),n=this.getShowMainContent()&&this._MCVisible,r=this.getShowSideContent()&&this._SCVisible;if(s&&s!==p&&s!==u){if(e&&(e.sParentAggregationName==="sideContent"&&!r||e.sParentAggregationName==="mainContent"&&!n)){return}else{while(i&&(!i.getScrollDelegate||!i.getScrollDelegate())){i=i.getParent()}return i.getScrollDelegate()}}if(this._oMCScroller&&this._oSCScroller){while(e&&e.getId()!==this.getId()){if(e.sParentAggregationName==="mainContent"&&n){return this._oMCScroller}if(e.sParentAggregationName==="sideContent"&&r){return this._oSCScroller}e=e.getParent()}}return};h.prototype._rerenderControl=function(t,e){if(this.getDomRef()){var i=sap.ui.getCore().createRenderManager();this.getRenderer().renderControls(i,t);i.flush(e[0]);i.destroy()}return this};h.prototype._initScrolling=function(){var t=this.getId(),e=t+"-"+m,s=t+"-"+k;if(!this._oSCScroller&&!this._oMCScroller){this._oSCScroller=new i(this,null,{scrollContainerId:e,horizontal:false,vertical:true});this._oMCScroller=new i(this,null,{scrollContainerId:s,horizontal:false,vertical:true})}};h.prototype._attachContainerResizeListener=function(){setTimeout(function(){this._sContainerResizeListener=e.register(this,this._adjustToScreenSize.bind(this))}.bind(this),0)};h.prototype._detachContainerResizeListener=function(){if(this._sContainerResizeListener){e.deregister(this._sContainerResizeListener);this._sContainerResizeListener=null}};h.prototype._getBreakPointFromWidth=function(t){if(t<=B&&this._currentBreakpoint!==l){return l}else if(t>B&&t<=P&&this._currentBreakpoint!==d){return d}else if(t>P&&t<=v&&this._currentBreakpoint!==p){return p}else if(t>v&&this._currentBreakpoint!==u){return u}return this._currentBreakpoint};h.prototype._setBreakpointFromWidth=function(t){this._currentBreakpoint=this._getBreakPointFromWidth(t);if(this._bSuppressInitialFireBreakPointChange){this._bSuppressInitialFireBreakPointChange=false}else{this.fireBreakpointChanged({currentBreakpoint:this._currentBreakpoint})}};h.prototype._adjustToScreenSize=function(){if(this.getContainerQuery()){this._iWindowWidth=this.$().parent().width()}else{this._iWindowWidth=jQuery(window).width()}this._currentBreakpoint=this._getBreakPointFromWidth(this._iWindowWidth);this._setResizeData(this._currentBreakpoint,this.getEqualSplit());this._changeGridState();this._setBreakpointFromWidth(this._iWindowWidth)};h.prototype._setResizeData=function(t,e){var i=this.getSideContentVisibility(),s=this.getSideContentFallDown();if(!e){switch(t){case l:this._setSpanSize(V,V);if(this.getProperty("showSideContent")&&this.getProperty("showMainContent")&&this._MCVisible){this._SCVisible=i===a.AlwaysShow}this._bFixedSideContent=false;break;case d:var n=Math.ceil(33.333/100*this._iWindowWidth);if(s===o.BelowL||s===o.BelowXL||n<=320&&s===o.OnMinimumWidth){this._setSpanSize(V,V);this._bFixedSideContent=false}else{this._setSpanSize(f,b);this._bFixedSideContent=true}this._SCVisible=i===a.ShowAboveS||i===a.AlwaysShow;this._MCVisible=true;break;case p:if(s===o.BelowXL){this._setSpanSize(V,V)}else{this._setSpanSize(f,b)}this._SCVisible=i===a.ShowAboveS||i===a.ShowAboveM||i===a.AlwaysShow;this._MCVisible=true;this._bFixedSideContent=false;break;case u:this._setSpanSize(g,w);this._SCVisible=i!==a.NeverShow;this._MCVisible=true;this._bFixedSideContent=false;break;default:throw new Error(M)}}else{switch(t){case l:this._setSpanSize(V,V);this._SCVisible=false;break;default:this._setSpanSize(y,y);this._SCVisible=true;this._MCVisible=true}this._bFixedSideContent=false}return this};h.prototype._shouldSetHeight=function(){var t,e,i,s,n,r,o;t=this.getProperty("scSpan")+this.getProperty("mcSpan")===V;e=this._MCVisible&&this._SCVisible;i=!this._MCVisible&&this._SCVisible;s=this._MCVisible&&!this._SCVisible;n=i||s;r=this._fixedSideContent;o=this.getSideContentVisibility()===a.NeverShow;return t&&e||n||r||o};h.prototype._changeGridState=function(){var t=this.$(m),e=this.$(k),i=this.getProperty("showMainContent"),s=this.getProperty("showSideContent");if(this._bFixedSideContent){t.removeClass().addClass(c);e.removeClass().addClass(_)}else{t.removeClass(c);e.removeClass(_)}if(this._SCVisible&&this._MCVisible&&s&&i){if(!this._bFixedSideContent){e.removeClass().addClass("sapUiDSCSpan"+this.getProperty("mcSpan"));t.removeClass().addClass("sapUiDSCSpan"+this.getProperty("scSpan"))}if(this._shouldSetHeight()){t.css("height","100%").css("float","left");e.css("height","100%").css("float","left")}else{t.css("height","auto").css("float","none");e.css("height","auto").css("float","none")}}else if(!this._SCVisible&&!this._MCVisible){e.addClass(C);t.addClass(C)}else if(this._MCVisible&&i){e.removeClass().addClass(S);t.addClass(C)}else if(this._SCVisible&&s){t.removeClass().addClass(S);e.addClass(C)}else if(!i&&!s){e.addClass(C);t.addClass(C)}e.addClass("sapUiDSCM");t.addClass("sapUiDSCS")};h.prototype._setSpanSize=function(t,e){this.setProperty("scSpan",t);this.setProperty("mcSpan",e)};return h});
//# sourceMappingURL=DynamicSideContent.js.map