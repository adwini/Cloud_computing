/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/Device","sap/ui/core/Control","sap/ui/core/Popup","sap/ui/core/theming/Parameters","./SplitContainer","./library","./ShellLayoutRenderer","sap/ui/dom/containsOrEquals","sap/base/Log","sap/ui/thirdparty/jquery","sap/ui/core/Configuration","sap/ui/dom/jquery/Focusable"],function(t,e,n,i,r,o,s,a,u,jQuery,d){"use strict";var h=e.extend("sap.ui.unified.ShellLayout",{metadata:{library:"sap.ui.unified",deprecated:true,properties:{showPane:{type:"boolean",group:"Appearance",defaultValue:false},headerHiding:{type:"boolean",group:"Appearance",defaultValue:false},headerVisible:{type:"boolean",group:"Appearance",defaultValue:true}},defaultAggregation:"content",aggregations:{content:{type:"sap.ui.core.Control",multiple:true,singularName:"content",forwarding:{idSuffix:"-container",aggregation:"content"}},paneContent:{type:"sap.ui.core.Control",multiple:true,singularName:"paneContent",forwarding:{idSuffix:"-container",aggregation:"secondaryContent"}},header:{type:"sap.ui.core.Control",multiple:false},canvasSplitContainer:{type:"sap.ui.unified.SplitContainer",multiple:false,visibility:"hidden"},curtainSplitContainer:{type:"sap.ui.unified.SplitContainer",multiple:false,visibility:"hidden"}}},renderer:s});h._SIDEPANE_WIDTH_PHONE=208;h._SIDEPANE_WIDTH_TABLET=208;h._SIDEPANE_WIDTH_DESKTOP=240;h._HEADER_ALWAYS_VISIBLE=true;h._HEADER_AUTO_CLOSE=true;h._HEADER_TOUCH_TRESHOLD=15;if(t.browser.chrome&&t.browser.version<36){h._HEADER_TOUCH_TRESHOLD=10}h.prototype.init=function(){this._rtl=d.getRTL();this._animation=d.getAnimation();this._showHeader=true;this._showCurtain=false;this._iHeaderHidingDelay=3e3;this._useStrongBG=false;this._cont=new r(this.getId()+"-container");this._cont._bRootContent=true;if(d.getAccessibility()){var e=this;this._cont.addEventDelegate({onAfterRendering:function(){e._cont.$("canvas").attr("role","main");e._cont.$("pane").attr("role","complementary")}})}this.setAggregation("canvasSplitContainer",this._cont,true);this._curtCont=new r(this.getId()+"-curt-container");this._curtCont._bRootContent=true;this.setAggregation("curtainSplitContainer",this._curtCont,true);this._setSidePaneWidth();t.media.attachHandler(this._handleMediaChange,this,t.media.RANGESETS.SAP_STANDARD);t.resize.attachHandler(this._handleResizeChange,this)};h.prototype.exit=function(){t.media.detachHandler(this._handleMediaChange,this,t.media.RANGESETS.SAP_STANDARD);t.resize.detachHandler(this._handleResizeChange,this);delete this._cont;delete this._curtCont};h.prototype.onAfterRendering=function(){var t=this;function e(e){var n=jQuery.event.fix(e);if(a(t.getDomRef("hdr"),n.target)){t._timedHideHeader(n.type==="focus")}}if(window.addEventListener&&!h._HEADER_ALWAYS_VISIBLE){var n=this.getDomRef("hdr");n.addEventListener("focus",e,true);n.addEventListener("blur",e,true)}this._refreshAfterRendering()};h.prototype.onThemeChanged=function(){this._refreshAfterRendering()};h.prototype.onfocusin=function(t){var e=this.getId();if(t.target.id===e+"-curt-focusDummyOut"&&this.$("hdrcntnt").firstFocusableDomRef()){this.$("hdrcntnt").firstFocusableDomRef().focus()}else if(t.target.id===e+"-main-focusDummyOut"&&this.$("curtcntnt").firstFocusableDomRef()){this.$("curtcntnt").firstFocusableDomRef().focus()}};(function(){function e(t){if(t._startY===undefined||t._currY===undefined){return}var e=t._currY-t._startY;if(Math.abs(e)>h._HEADER_TOUCH_TRESHOLD){t._doShowHeader(e>0);t._startY=t._currY}}if(t.support.touch){h._HEADER_ALWAYS_VISIBLE=false;h.prototype.ontouchstart=function(t){this._startY=t.touches[0].pageY;if(this._startY>2*48){this._startY=undefined}this._currY=this._startY};h.prototype.ontouchend=function(t){e(this);this._startY=undefined;this._currY=undefined};h.prototype.ontouchcancel=h.prototype.ontouchend;h.prototype.ontouchmove=function(t){this._currY=t.touches[0].pageY;e(this)}}})();h.prototype.setHeaderHiding=function(t){t=!!t;return this._mod(function(e){return this.setProperty("headerHiding",t,e)},function(){this._doShowHeader(!t?true:this._showHeader)})};h.prototype.setHeaderHidingDelay=function(t){this._iHeaderHidingDelay=t;return this};h.prototype.getHeaderHidingDelay=function(){return this._iHeaderHidingDelay};h.prototype.getShowPane=function(){return this._cont.getShowSecondaryContent()};h.prototype.setShowPane=function(t){this._cont.setShowSecondaryContent(t);this.setProperty("showPane",!!t,true);return this};h.prototype.setShowCurtainPane=function(t){this._curtCont.setShowSecondaryContent(t);return this};h.prototype.getShowCurtainPane=function(){return this._curtCont.getShowSecondaryContent()};h.prototype.setHeaderVisible=function(t){t=!!t;this.setProperty("headerVisible",t,true);this.$().toggleClass("sapUiUfdShellNoHead",!t);return this};h.prototype.setShowCurtain=function(t){t=!!t;return this._mod(function(e){this._showCurtain=t;return this},function(){this.$("main-focusDummyOut").attr("tabindex",t?0:-1);this.$().toggleClass("sapUiUfdShellCurtainHidden",!t).toggleClass("sapUiUfdShellCurtainVisible",t);if(t){var e=n.getNextZIndex();this.$("curt").css("z-index",e+1);this.$("hdr").css("z-index",e+3);this.$("brand").css("z-index",e+7);this.$().toggleClass("sapUiUfdShellCurtainClosed",false)}this._timedCurtainClosed(t);this._doShowHeader(true)})};h.prototype.getShowCurtain=function(){return this._showCurtain};h.prototype.setHeader=function(t){this.setAggregation("header",t,true);t=this.getHeader();if(this.getDomRef()){if(!t){this.$("hdrcntnt").html("")}else{var e=sap.ui.getCore().createRenderManager();e.renderControl(t);e.flush(this.getDomRef("hdrcntnt"));e.destroy()}}return this};h.prototype.destroyHeader=function(){this.destroyAggregation("header",true);this.$("hdrcntnt").html("");return this};h.prototype.getCurtainContent=function(){return this._curtCont.getContent()};h.prototype.insertCurtainContent=function(t,e){this._curtCont.insertContent(t,e);return this};h.prototype.addCurtainContent=function(t){this._curtCont.addContent(t);return this};h.prototype.removeCurtainContent=function(t){return this._curtCont.removeContent(t)};h.prototype.removeAllCurtainContent=function(){return this._curtCont.removeAllContent()};h.prototype.destroyCurtainContent=function(){this._curtCont.destroyContent();return this};h.prototype.indexOfCurtainContent=function(t){return this._curtCont.indexOfCurtainContent(t)};h.prototype.getCurtainPaneContent=function(){return this._curtCont.getSecondaryContent()};h.prototype.insertCurtainPaneContent=function(t,e){this._curtCont.insertSecondaryContent(t,e);return this};h.prototype.addCurtainPaneContent=function(t){this._curtCont.addSecondaryContent(t);return this};h.prototype.removeCurtainPaneContent=function(t){return this._curtCont.removeSecondaryContent(t)};h.prototype.removeAllCurtainPaneContent=function(){return this._curtCont.removeAllSecondaryContent()};h.prototype.destroyCurtainPaneContent=function(){this._curtCont.destroySecondaryContent();return this};h.prototype.indexOfCurtainPaneContent=function(t){return this._curtCont.indexOfSecondaryContent(t)};h.prototype._setStrongBackground=function(t){this._useStrongBG=!!t;this.$("strgbg").toggleClass("sapUiStrongBackgroundColor",this._useStrongBG)};h.prototype._mod=function(t,e){var n=!!this.getDomRef();var i=t.apply(this,[n]);if(n&&e){if(e instanceof o._ContentRenderer){e.render()}else{e.apply(this)}}return i};h.prototype._doShowHeader=function(t){var e=this._showHeader;this._showHeader=this._isHeaderHidingActive()?!!t:true;this.$().toggleClass("sapUiUfdShellHeadHidden",!this._showHeader).toggleClass("sapUiUfdShellHeadVisible",this._showHeader);if(this._showHeader){this._timedHideHeader()}if(e!=this._showHeader&&this._isHeaderHidingActive()){setTimeout(function(){try{var t=document.createEvent("UIEvents");t.initUIEvent("resize",true,false,window,0);window.dispatchEvent(t)}catch(t){u.error(t)}},500)}};h.prototype._timedHideHeader=function(t){if(this._headerHidingTimer){clearTimeout(this._headerHidingTimer);this._headerHidingTimer=null}if(t||!h._HEADER_AUTO_CLOSE||!this._isHeaderHidingActive()||this._iHeaderHidingDelay<=0){return}this._headerHidingTimer=setTimeout(function(){if(this._isHeaderHidingActive()&&this._iHeaderHidingDelay>0&&!a(this.getDomRef("hdr"),document.activeElement)){this._doShowHeader(false)}}.bind(this),this._iHeaderHidingDelay)};h.prototype._timedCurtainClosed=function(t){if(this._curtainClosedTimer){clearTimeout(this._curtainClosedTimer);this._curtainClosedTimer=null}if(t){return}var e=parseInt(i.get("_sap_ui_unified_ShellLayout_AnimDuration"));if(!this._animation){e=0}this._curtainClosedTimer=setTimeout(function(){this._curtainClosedTimer=null;this.$("curt").css("z-index","");this.$("hdr").css("z-index","");this.$("brand").css("z-index","");this.$().toggleClass("sapUiUfdShellCurtainClosed",true)}.bind(this),e)};h.prototype._isHeaderHidingActive=function(){if(h._HEADER_ALWAYS_VISIBLE||this.getShowCurtain()||!this.getHeaderHiding()||o._iNumberOfOpenedShellOverlays>0||!this.getHeaderVisible()){return false}return true};h.prototype._setSidePaneWidth=function(e){if(!e){e=t.media.getCurrentRange(t.media.RANGESETS.SAP_STANDARD).name}var n=h["_SIDEPANE_WIDTH_"+e.toUpperCase()]+"px";this._cont.setSecondaryContentSize(n);this._curtCont.setSecondaryContentSize(n)};h.prototype._handleMediaChange=function(t){if(!this.getDomRef()){return false}this._setSidePaneWidth(t.name)};h.prototype._handleResizeChange=function(t){};h.prototype._refreshAfterRendering=function(){var t=this.getDomRef();if(!t){return false}this._timedHideHeader();return true};h.prototype._getSearchWidth=function(){return-1};return h});
//# sourceMappingURL=ShellLayout.js.map