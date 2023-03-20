/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./InstanceManager","sap/ui/core/Popup","sap/ui/core/library","sap/ui/core/Control","sap/ui/Device","sap/base/Log","sap/ui/thirdparty/jquery","sap/ui/core/Configuration"],function(e,t,i,o,n,a,jQuery,s){"use strict";var r=i.Dock;var f=i.CSSSize;var l={};var u="0 -64",d="sapMMessageToast",p="sapUiSelectable",c="sapContrast",v="sapContrastPlus";l._mSettings={duration:3e3,width:"15em",my:"center bottom",at:"center bottom",of:document.defaultView,offset:"0 0",collision:"fit fit",onClose:null,animationTimingFunction:"ease",animationDuration:1e3,autoClose:true,closeOnBrowserNavigation:true};l._aPopups=[];l._iOpenedPopups=0;l._bBoundedEvents=false;l._validateSettings=function(e){l._isFiniteInteger(e.duration);l._validateWidth(e.width);l._validateDockPosition(e.my);l._validateDockPosition(e.at);l._validateOf(e.of);l._validateOffset(e.offset);l._validateCollision(e.collision);l._validateOnClose(e.onClose);l._validateAutoClose(e.autoClose);l._validateAnimationTimingFunction(e.animationTimingFunction);l._isFiniteInteger(e.animationDuration)};l._isFiniteInteger=function(e){if(typeof e!=="number"||!isFinite(e)||!(Math.floor(e)===e)||e<=0){a.error('"iNumber" needs to be a finite positive nonzero integer on '+l+"._isFiniteInteger")}};l._validateWidth=function(e){if(!f.isValid(e)){a.error(e+" is not of type "+'"sap.ui.core.CSSSize" for property "width" on '+l+"._validateWidth")}};l._validateDockPosition=function(e){if(!r.isValid(e)){a.error('"'+e+'"'+" is not of type "+'"sap.ui.core.Popup.Dock" on '+l+"._validateDockPosition")}};l._validateOf=function(e){if(!(e instanceof jQuery)&&!(e&&e.nodeType===1)&&!(e instanceof o)&&e!==window){a.error('"of" needs to be an instance of sap.ui.core.Control or an Element or a jQuery object or the window on '+l+"._validateOf")}};l._validateOffset=function(e){if(typeof e!=="string"){a.error(e+" is of type "+typeof e+', expected "string" for property "offset" on '+l+"._validateOffset")}};l._validateCollision=function(e){var t=/^(fit|flip|none|flipfit|flipflip|flip flip|flip fit|fitflip|fitfit|fit fit|fit flip)$/i;if(!t.test(e)){a.error('"collision" needs to be a single value “fit”, “flip”, or “none”, or a pair for horizontal and vertical e.g. "fit flip”, "fit none", "flipfit" on '+l+"._validateOffset")}};l._validateOnClose=function(e){if(typeof e!=="function"&&e!==null){a.error('"onClose" should be a function or null on '+l+"._validateOnClose")}};l._validateAutoClose=function(e){if(typeof e!=="boolean"){a.error('"autoClose" should be a boolean on '+l+"._validateAutoClose")}};l._validateAnimationTimingFunction=function(e){var t=/^(ease|linear|ease-in|ease-out|ease-in-out)$/i;if(!t.test(e)){a.error('"animationTimingFunction" should be a string, expected values: '+"ease, linear, ease-in, ease-out, ease-in-out on "+l+"._validateAnimationTimingFunction")}};function _(e){for(var t=["my","at","of","offset"],i=0;i<t.length;i++){if(e[t[i]]!==undefined){return false}}return true}function m(e){var t=document.createElement("div");t.className=d+" "+p+" "+c+" "+v;if(s.getAccessibility()){t.setAttribute("role","alert")}t.style.width=e.width;t.appendChild(document.createTextNode(e.message));return t}function g(e){if(e){if(_(e)){e.offset=u}if(e.of&&e.of.nodeType===9){e.of=document.defaultView}}else{e={offset:u}}return e}l._handleResizeEvent=function(){if(n.system.phone||n.system.tablet){l._resetPosition(l._aPopups)}setTimeout(l["_applyPositions"].bind(l,l._aPopups),0)};l._handleMouseDownEvent=function(e){var t=e.target.hasAttribute("class")&&e.target.getAttribute("class").indexOf(d)!==-1;if(t||e.isMarked("delayedMouseEvent")){return}l._aPopups.forEach(function(e){e&&e.__bAutoClose&&e.close()})};l._resetPosition=function(e){for(var t=0,i;t<e.length;t++){i=e[t]&&e[t].getContent();if(i){i.style.visibility="hidden";i.style.left=0}}};l._applyPositions=function(e){for(var t=0,i,o;t<e.length;t++){i=e[t];if(i){o=i._oPosition;if(n.system.phone||n.system.tablet){setTimeout(l["_applyPosition"].bind(l,i,o),0)}else{i.setPosition(o.my,o.at,o.of,o.offset)}}}};l._applyPosition=function(e,t){t=t||e._oPosition;var i=e.getContent();e.setPosition(t.my,t.at,t.of,t.offset);i.style.visibility="visible"};l._setCloseAnimation=function(e,t,i,o){var n="opacity "+o.animationTimingFunction+" "+o.animationDuration+"ms",a="webkitTransitionEnd."+d+" transitionend."+d;if(s.getAnimation()&&o.animationDuration>0){e[0].style.webkitTransition=n;e[0].style.transition=n;e[0].style.opacity=0;e.on(a,function t(){e.off(a);i()})}else{i()}};l.show=function(i,o){var a=l,s=jQuery.extend({},l._mSettings,{message:i}),r=new t,f,u,p="mousedown."+d+" touchstart."+d,c,v;o=g(o);jQuery.extend(s,o);l._validateSettings(s);u=m(s);f=l._aPopups.push(r)-1;r.setContent(u);r.setPosition(s.my,s.at,s.of,s.offset,s.collision);r.setAnimations(function e(t,i,o){o()},function e(t,i,o){a._setCloseAnimation(t,i,o,s)});r.setShadow(false);r.__bAutoClose=s.autoClose;if(s.closeOnBrowserNavigation){e.addPopoverInstance(r)}if(!l._bBoundedEvents){jQuery(window).on("resize."+d,l._handleResizeEvent.bind(l));jQuery(document).on(p,l._handleMouseDownEvent.bind(l));l._bBoundedEvents=true}r.open();l._iOpenedPopups++;function _(){e.removePopoverInstance(a._aPopups[f]);jQuery(a._aPopups[f].getContent()).remove();a._aPopups[f].detachClosed(_);a._aPopups[f].destroy();a._aPopups[f]=null;a._iOpenedPopups--;if(a._iOpenedPopups===0){a._aPopups=[];jQuery(window).off("resize."+d);jQuery(document).off(p);a._bBoundedEvents=false}if(typeof s.onClose==="function"){s.onClose.call(a)}}r.attachClosed(_);c=setTimeout(r["close"].bind(r),s.duration);function y(){clearTimeout(c);c=null;function e(){v=setTimeout(r["close"].bind(r),s.duration);r.getContent().removeEventListener("mouseleave",e)}r.getContent().addEventListener("mouseleave",e);clearTimeout(v);v=null}r.getContent().addEventListener("touchstart",y);r.getContent().addEventListener("mouseover",y);if(n.system.desktop){r.getContent().addEventListener("mouseleave",function(){c=setTimeout(r["close"].bind(r),s.duration)})}};l.toString=function(){return"sap.m.MessageToast"};return l},true);
//# sourceMappingURL=MessageToast.js.map