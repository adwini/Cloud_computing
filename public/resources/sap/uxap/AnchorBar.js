/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/m/Button","sap/m/MenuButton","sap/m/library","sap/m/Toolbar","sap/ui/core/IconPool","sap/ui/core/Item","sap/ui/core/ResizeHandler","sap/ui/core/delegate/ScrollEnablement","sap/ui/layout/HorizontalLayout","sap/ui/Device","sap/ui/core/CustomData","sap/ui/core/Control","./HierarchicalSelect","./library","sap/uxap/AnchorBarRenderer","sap/base/Log","sap/ui/core/Configuration","sap/ui/dom/jquery/scrollLeftRTL"],function(jQuery,t,e,o,i,r,s,n,a,l,c,h,u,f,p,d,g,_){"use strict";var S=o.SelectType;var y=i.extend("sap.uxap.AnchorBar",{metadata:{library:"sap.uxap",properties:{showPopover:{type:"boolean",defaultValue:true},upperCase:{type:"boolean",defaultValue:false},backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance"}},associations:{selectedButton:{type:"sap.m.Button",multiple:false}},aggregations:{_select:{type:"sap.uxap.HierarchicalSelect",multiple:false,visibility:"hidden"},_scrollArrowLeft:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},_scrollArrowRight:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}}},renderer:d});y.ButtonDelegate={onAfterRendering:function(){var t=this.isA("sap.m.MenuButton")?this._getButtonControl():this,e=this.hasStyleClass("sapUxAPAnchorBarButtonSelected");if(this.data("bHasSubMenu")){t.$().attr("aria-haspopup","menu");t.$().find(".sapMBtn").attr("role","none").removeAttr("aria-haspopup")}t.$().attr("aria-controls",this.data("sectionId")).attr("aria-selected",e)}};y.prototype.init=function(){if(i.prototype.init){i.prototype.init.call(this)}this.addStyleClass("sapUxAPAnchorBar");this._oPressHandlers={};this._oSectionInfo={};this._oScroller=null;this._sSelectedKey=null;this._bRtl=_.getRTL();this._bHasButtonsBar=c.system.tablet||c.system.desktop;this.oLibraryResourceBundleOP=sap.ui.getCore().getLibraryResourceBundle("sap.uxap");this._oSelect=this._getHierarchicalSelect();if(this._bHasButtonsBar){this._oScroller=new a(this,this.getId()+"-scroll",{horizontal:true,vertical:false,nonTouchScrolling:true});this._iREMSize=0;this._iTolerance=0;this._iOffset=0;this._sResizeListenerId=undefined}this.setDesign("Transparent")};y.SCROLL_STEP=250;y.SCROLL_DURATION=500;y.DOM_CALC_DELAY=200;y.prototype.setSelectedButton=function(t){var e=this.getSelectedButton(),o,i=this._oSelect.getItems(),r=i.length>0;if(typeof t==="string"){t=sap.ui.getCore().byId(t)}if(t){if(t.getId()===e){return this}var s=t.data("sectionId");this._sSelectedKey=s;if(s&&r){this._oSelect.setSelectedKey(s)}if(this._bHasButtonsBar&&t.data("secondLevel")!==true){o=sap.ui.getCore().byId(e);this._toggleSelectionStyleClass(o,false);this._toggleSelectionStyleClass(t,true);if(s){this.scrollToSection(s,y.SCROLL_DURATION)}this._setAnchorButtonsTabFocusValues(t)}this.setAssociation("selectedButton",t,true)}return this};y.prototype.setShowPopover=function(t,e){if(this.getShowPopover()===t){return this}return this.setProperty("showPopover",t,true)};y.prototype.getSelectedSection=function(){var e=this.getSelectedButton();if(e&&typeof e==="string"){e=sap.ui.getCore().byId(e)}if(e&&e instanceof t&&e.data("sectionId")){return sap.ui.getCore().byId(e.data("sectionId"))}return null};y.prototype.onBeforeRendering=function(){if(this._bHasButtonsBar){this._iREMSize=parseInt(jQuery("body").css("font-size"));this._iTolerance=this._iREMSize*1;this._iOffset=this._iREMSize*3}if(i.prototype.onBeforeRendering){i.prototype.onBeforeRendering.call(this)}var t=this.getContent()||[],e=this.getUpperCase();this._oSelect.setUpperCase(e);this.toggleStyleClass("sapUxAPAnchorBarUpperCase",e);if(t.length>0&&this._sSelectedKey){this._oSelect.setSelectedKey(this._sSelectedKey)}};y.prototype.addContent=function(t,e){var o=t.data("secondLevel")===true||t.data("secondLevel")==="true";t.addStyleClass("sapUxAPAnchorBarButton");t.removeAllAriaDescribedBy();this._createSelectItem(t,o);if(o){t.destroy()}else{t.addEventDelegate(y.ButtonDelegate,t);this.addAggregation("content",t,e)}return this};y.prototype._removeButtonsDelegate=function(){var t=this.getContent();t.forEach(function(t){t.removeEventDelegate(y.ButtonDelegate)})};y.prototype._createSelectItem=function(t,e){var o=t.getBindingInfo("text"),i=t.getText().trim()!=""||o;if(i&&(!e||t.data("bTitleVisible")===true)){var r=new s({key:t.data("sectionId"),text:t.getText(),customData:[new h({key:"secondLevel",value:t.data("secondLevel")})]});if(o){r.bindProperty("text",Object.assign({},o))}this._oSelect.addItem(r)}};y.prototype._decorateSubMenuButtons=function(t){var e=t.getSource().getContent();e.forEach(function(t){t.$().attr("aria-controls",t.data("sectionId"))})};y.prototype._toggleSelectionStyleClass=function(t,o){if(t&&t.toggleStyleClass){t.toggleStyleClass("sapUxAPAnchorBarButtonSelected",o);if(t instanceof e){t._getButtonControl().$().attr("aria-selected",o)}else{t.$().attr("aria-selected",o)}}};y.prototype.onButtonPress=function(t){this.fireEvent("_anchorPress",{sectionBaseId:t.getSource().data("sectionId")})};y.prototype._onSelectChange=function(t){var e=t.getParameter("selectedItem"),o,i;if(!e){g.warning("AnchorBar :: no selected hierarchicalSelect item");return}o=sap.ui.getCore().byId(e.getKey());if(o){this.fireEvent("_anchorPress",{sectionBaseId:o.getId()});i=o.getDomRef();if(i){i.focus()}}else{g.error("AnchorBar :: cannot find corresponding section",e.getKey())}};y.prototype._getHierarchicalSelect=function(){if(!this.getAggregation("_select")){this.setAggregation("_select",new f({width:"100%",icon:"sap-icon://slim-arrow-down",tooltip:this.oLibraryResourceBundleOP.getText("ANCHOR_BAR_OVERFLOW"),change:jQuery.proxy(this._onSelectChange,this)}))}return this.getAggregation("_select")};y.prototype._createScrollArrow=function(e){var o,i,s,n,a,c=this,h=this.oLibraryResourceBundleOP.getText("TOOLTIP_OP_SCROLL_LEFT_ARROW"),u=this.oLibraryResourceBundleOP.getText("TOOLTIP_OP_SCROLL_RIGHT_ARROW");if(e){o=this.getId()+"-arrowScrollLeft";i="slim-arrow-left";s="anchorBarArrowLeft";n=this._bRtl?u:h}else{o=this.getId()+"-arrowScrollRight";i="slim-arrow-right";s="anchorBarArrowRight";n=this._bRtl?h:u}a=new t(o,{icon:r.getIconURI(i),type:"Transparent",press:function(t){t.preventDefault();c._handleScrollButtonTap(e)},tooltip:n});a.addEventDelegate({onAfterRendering:function(){if(_.getTheme()!="sap_hcb"){this.$().attr("tabindex",-1)}},onThemeChanged:function(){if(_.getTheme()=="sap_hcb"){this.$().removeAttr("tabindex")}else{this.$().attr("tabindex",-1)}}},a);return new l({content:[a]}).addStyleClass("anchorBarArrow").addStyleClass(s)};y.prototype._getScrollArrowLeft=function(){var t=this.getAggregation("_scrollArrowLeft");if(t){return t}else{t=this._createScrollArrow(true);this.setAggregation("_scrollArrowLeft",t);return t}};y.prototype._getScrollArrowRight=function(){var t=this.getAggregation("_scrollArrowRight");if(t){return t}else{t=this._createScrollArrow(false);this.setAggregation("_scrollArrowRight",t);return t}};y.prototype._applyHierarchicalSelectMode=function(){if(this._sHierarchicalSelectMode===d._AnchorBarHierarchicalSelectMode.Icon){this.$().find(".sapUxAPAnchorBarScrollContainer").show();this._oSelect.setWidth("auto");this._oSelect.setAutoAdjustWidth(true);this._oSelect.setType(S.IconOnly);this._computeBarSectionsInfo()}else{this.$().find(".sapUxAPAnchorBarScrollContainer").hide();this._oSelect.setWidth("100%");this._oSelect.setAutoAdjustWidth(false);this._oSelect.setType(S.Default)}this.$().toggleClass("sapUxAPAnchorBarOverflow",this._sHierarchicalSelectMode===d._AnchorBarHierarchicalSelectMode.Icon)};y.prototype._adjustSize=function(t){var e=c.media.getCurrentRange(c.media.RANGESETS.SAP_STANDARD,this._getWidth(this)),o=t&&t.size&&t.size.width!==t.oldSize.width,i=p.Utilities.isPhoneScenario(e)?d._AnchorBarHierarchicalSelectMode.Text:d._AnchorBarHierarchicalSelectMode.Icon;if(i!==this._sHierarchicalSelectMode){this._sHierarchicalSelectMode=i;this._applyHierarchicalSelectMode()}if(this._sHierarchicalSelectMode===d._AnchorBarHierarchicalSelectMode.Icon){if(this._iMaxPosition<0){return}var r=this.$(),s=r.find(".sapUxAPAnchorBarScrollContainer"),n,a,l,h,u=function t(){var e=n;n=a;a=e};if(o){this.scrollToSection(this._sSelectedKey)}l=s.width();h=this._bRtl?s.scrollLeftRTL():s.scrollLeft();n=h>=this._iTolerance;a=h+l<this._iMaxPosition-this._iTolerance;if(this._bRtl){u()}g.debug("AnchorBar :: scrolled at "+h,"scrollBegin ["+(n?"true":"false")+"] scrollEnd ["+(a?"true":"false")+"]");r.toggleClass("sapUxAPAnchorBarScrollLeft",n);r.toggleClass("sapUxAPAnchorBarScrollRight",a)}};y.prototype._handleScrollButtonTap=function(t){var e=!this._bRtl&&t||this._bRtl&&!t?-1:1;this._oScroller.scrollTo(this._iMaxPosition*e,0,y.SCROLL_DURATION*3)};y.prototype.scrollToSection=function(t,e){if(this._bHasButtonsBar){var o=c.media.getCurrentRange(c.media.RANGESETS.SAP_STANDARD,this._getWidth(this)),e=e||y.SCROLL_DURATION,i;if(!p.Utilities.isPhoneScenario(o)&&this._oSectionInfo[t]){if(this._bRtl&&c.browser.firefox){i=this._oSectionInfo[t].scrollLeft+this._iOffset}else{i=this._oSectionInfo[t].scrollLeft-this._iOffset;if(i<0){i=0}}g.debug("AnchorBar :: scrolling to section "+t+" of "+i);if(this._sCurrentScrollId!=t){this._sCurrentScrollId=t;if(this._iCurrentScrollTimeout){clearTimeout(this._iCurrentScrollTimeout);this.$("scroll").parent().stop(true,false)}this._iCurrentScrollTimeout=setTimeout(function(){this._sCurrentScrollId=undefined;this._iCurrentScrollTimeout=undefined}.bind(this),e);this._oScroller.scrollTo(i,0,e)}}else{g.debug("AnchorBar :: no need to scroll to "+t)}}};y.prototype.scrollToCurrentlySelectedSection=function(){var t=this.getSelectedButton(),e=sap.ui.getCore().byId(t),o;if(e){o=e.data("sectionId");this.scrollToSection(o,0)}};y.prototype.getScrollDelegate=function(){return this._oScroller};y.PAGEUP_AND_PAGEDOWN_JUMP_SIZE=5;y.prototype.onsapright=function(t){t.preventDefault();var e;var o=this.getContent();o.forEach(function(o,i){if(t.target.id.indexOf(o.getId())>-1){e=i+1;return}});if(e&&o[e]){o[e].focus()}else if(o[o.length-1]){o[o.length-1].focus()}};y.prototype.onsapleft=function(t){t.preventDefault();var e;var o=this.getContent();o.forEach(function(o,i){if(t.target.id.indexOf(o.getId())>-1){e=i-1;return}});if(e&&o[e]){o[e].focus()}else if(o[0]){o[0].focus()}};y.prototype.onsapdown=function(t){t.preventDefault()};y.prototype.onsapup=function(t){t.preventDefault()};y.prototype.onsaphome=function(t){t.preventDefault();var e=this.getContent();e[0].focus()};y.prototype.onsapend=function(t){t.preventDefault();var e=this.getContent();e[e.length-1].focus()};y.prototype.onsappageup=function(t){this._handlePageUp(t)};y.prototype.onsappagedown=function(t){this._handlePageDown(t)};y.prototype._handlePageUp=function(t){t.preventDefault();var e;var o=this.getContent();o.forEach(function(o,i){if(t.target.id.indexOf(o.getId())>-1){e=i-(y.PAGEUP_AND_PAGEDOWN_JUMP_SIZE+1);return}});if(e&&o[e]){o[e].focus()}else if(o[0]){o[0].focus()}};y.prototype._handlePageDown=function(t){t.preventDefault();var e;var o=this.getContent();o.forEach(function(o,i){if(t.target.id.indexOf(o.getId())>-1){e=i+y.PAGEUP_AND_PAGEDOWN_JUMP_SIZE+1;return}});if(e&&o[e]){o[e].focus()}else if(o[o.length-1]){o[o.length-1].focus()}};y.prototype._setAnchorButtonsTabFocusValues=function(t){var e=this.getContent()||[],o,i="0",r="-1",s="tabIndex";e.forEach(function(e){o=e.getAggregation("_button")?e.getAggregation("_button").$():e.$();if(e===t){o.attr(s,i)}else{o.attr(s,r)}})};y.prototype.onAfterRendering=function(){var t;if(i.prototype.onAfterRendering){i.prototype.onAfterRendering.call(this)}t=sap.ui.getCore().byId(this.getSelectedButton());this._setAnchorButtonsTabFocusValues(t);this._iMaxPosition=-1;this._sResizeListenerId=n.register(this,jQuery.proxy(this._adjustSize,this));this.$().find(".sapUxAPAnchorBarScrollContainer").on("scroll",jQuery.proxy(this._onScroll,this));if(t){this.setSelectedButton(t)}if(this._bHasButtonsBar){this._iComputeContentSizeTimeout=setTimeout(function(){if(this._sHierarchicalSelectMode===d._AnchorBarHierarchicalSelectMode.Icon){this._computeBarSectionsInfo()}this._adjustSize();this._iComputeContentSizeTimeout=null}.bind(this),y.DOM_CALC_DELAY)}};y.prototype.onThemeChanged=function(){if(this._sHierarchicalSelectMode===d._AnchorBarHierarchicalSelectMode.Icon){this._computeBarSectionsInfo()}};y.prototype._onScroll=function(){if(!this._iCurrentSizeCheckTimeout){this._iCurrentSizeCheckTimeout=setTimeout(function(){this._iCurrentSizeCheckTimeout=undefined;this._adjustSize()}.bind(this),y.SCROLL_DURATION)}};y.prototype._computeBarSectionsInfo=function(){this._iMaxPosition=0;var t=this.getContent()||[];t.forEach(this._computeNextSectionInfo,this);if(this._bRtl&&(c.browser.webkit||c.browser.firefox)){t.forEach(this._adjustNextSectionInfo,this);this._oScroller&&this._oScroller.scrollTo(this._iMaxPosition,0,0)}};y.prototype._computeNextSectionInfo=function(t){var e=t.$().outerWidth(true);this._oSectionInfo[t.data("sectionId")]={scrollLeft:this._iMaxPosition,width:e};this._iMaxPosition+=e};y.prototype._adjustNextSectionInfo=function(t){var e=this._oSectionInfo[t.data("sectionId")];if(c.browser.firefox){e.scrollLeft=-e.scrollLeft}else{e.scrollLeft=this._iMaxPosition-e.scrollLeft-e.width}};y.prototype._resetControl=function(){this._removeButtonsDelegate();this.destroyAggregation("content");this._oSelect.destroyAggregation("items",true);return this};y.prototype._getAccessibilityRole=function(){return"none"};y.prototype.enhanceAccessibilityState=function(t,e){var o=this.getContent(),i=o.indexOf(t);if(i!==-1){e.role="option";e.setsize=o.length;e.posinset=i+1}};y.prototype.exit=function(){if(this._sResizeListenerId){n.deregister(this._sResizeListenerId);this._sResizeListenerId=null}if(this._oScroller){this._oScroller.destroy();this._oScroller=null}if(this.oLibraryResourceBundleOP){this.oLibraryResourceBundleOP=null}if(this._iComputeContentSizeTimeout){clearTimeout(this._iComputeContentSizeTimeout);this._iComputeContentSizeTimeout=null}this._removeButtonsDelegate()};y.prototype._getWidth=function(t){var e=t.getDomRef();return!(t instanceof u)?0:e&&e.offsetWidth||0};y.prototype.setVisible=function(t){this.getParent()&&this.getParent().toggleStyleClass("sapUxAPObjectPageLayoutNoAnchorBar",!t);return this.setProperty("visible",t)};return y});
//# sourceMappingURL=AnchorBar.js.map