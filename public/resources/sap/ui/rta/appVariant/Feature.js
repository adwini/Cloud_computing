/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/Utils","sap/ui/rta/appVariant/AppVariantUtils","sap/ui/core/BusyIndicator","sap/base/util/UriParameters","sap/ui/fl/registry/Settings","sap/ui/fl/write/_internal/appVariant/AppVariantFactory","sap/ui/fl/write/api/FeaturesAPI","sap/base/util/merge"],function(e,n,r,a,i,t,s,o){"use strict";var u;var p;var c;var l;var f;var v=function(){return e.getAppDescriptor(c)};var h=function(){return i.getInstance()};var d=function(){window.onbeforeunload=f};var g=function(e){var r=e?"MSG_DO_NOT_CLOSE_BROWSER_CURRENTLY_ADAPTING":"MSG_DO_NOT_CLOSE_BROWSER";f=window.onbeforeunload;window.onbeforeunload=n.handleBeforeUnloadEvent;return n.showMessage(r)};var w=function(e,n){return p.triggerCatalogPublishing(e,n,true)};var A=function(e){return p.triggerCatalogPublishing(e,null,false)};var b=function(e,a){if(u){n.closeOverviewDialog();return this.onGetOverview(true,a)}else if(!u&&e){r.hide();return this.onGetOverview(true,a)}return Promise.resolve()};var S=function(e,r,a){return e?n.navigateToFLPHomepage():b.call(this,!r,a)};var m=function(e,n){if(e&&e.response&&e.response.IAMId){return p.notifyKeyUserWhenPublishingIsReady(e.response.IAMId,n,true)}return Promise.resolve()};var I=function(e,n){if(e&&e.response&&e.response.IAMId&&e.response.inProgress){return p.notifyKeyUserWhenPublishingIsReady(e.response.IAMId,n,false)}return Promise.resolve()};sap.ui.getCore().getEventBus().subscribe("sap.ui.rta.appVariant.manageApps.controller.ManageApps","navigate",function(){if(u){u.destroy();u=null}});return{onGetOverview:function(e,r){var i=v();return new Promise(function(t){var s=function(){n.closeOverviewDialog()};var o=a.fromQuery(window.location.search);var p=o.get("sap-ui-xx-rta-adaptations");var c="sap/ui/rta/appVariant/AppVariantOverviewDialog";var l={idRunningApp:i["sap.app"].id,isOverviewForKeyUser:e,layer:r};if(p==="true"){c="sap/ui/rta/appContexts/AppContextsOverviewDialog";l={layer:r}}sap.ui.require([c],function(e){if(!u){u=new e(l)}u.attachCancel(s);u.oPopup.attachOpened(function(){t(u)});u.open()})})},isOverviewExtended:function(){var e=a.fromQuery(window.location.search);var n=e.get("sap-ui-xx-app-variant-overview-extended");if(!n){return false}return n.toLowerCase()==="true"},isManifestSupported:function(){var e=v();return n.getManifirstSupport(e["sap.app"].id)},isSaveAsAvailable:function(e,r,a){c=e;l=a;var i=v();if(i["sap.app"]&&i["sap.app"].id){return s.isSaveAsAvailable(r).then(function(e){if(e){if(i["sap.app"].crossNavigation&&i["sap.app"].crossNavigation.inbounds){return n.getInboundInfo(i["sap.app"].crossNavigation.inbounds)}return n.getInboundInfo()}return undefined}).then(function(e){return!!e})}return Promise.resolve(false)},getAppVariantDescriptor:function(e){c=e;var n=v();if(n["sap.app"]&&n["sap.app"].id){return t.load({id:n["sap.app"].id})}return Promise.resolve(false)},_determineSelector:function(e,n){return e?c:{appId:n["sap.app"].id,appVersion:n["sap.app"].applicationVersion.version}},onSaveAs:function(a,i,t,s){var u;var c;var f=v();var A=true;if(s&&s["sap.app"].id===f["sap.app"].id){i=true;f=o({},s);s=null}else if(s){A=false;f=o({},s);s=null}var b=this._determineSelector(A,f);return new Promise(function(s){var v=function(){return p.processSaveAsDialog(f,a)};var A=function(e){r.show();return p.createAllInlineChanges(e,b)};var I=function(e){var r=e.slice();return n.addChangesToPersistence(r,b)};var P=function(){var e=n.getNewAppVariantId();return p.createAppVariant(e,b).catch(function(r){var a=r.messageKey;if(!a){a="MSG_SAVE_APP_VARIANT_FAILED"}return n.catchErrorDialog(r,a,e)})};var O=function(e){c=null;c=o({},e.response);return p.clearRTACommandStack(i)};var D=function(){var n=e.getUshellContainer();if(n&&i){n.setDirtyFlag(false)}};var _=function(e){D();u=n.isS4HanaCloud(e);var r=n.buildSuccessInfo(c.id,a,u);return p.showSuccessMessage(r)};var y=function(){var e=n.buildFinalSuccessInfoS4HANACloud();return p.showSuccessMessage(e)};var V=function(){r.show();if(u){var e;return g().then(function(){return w(c.id,c.reference)}).then(function(n){e=Object.assign({},n);r.hide();return S.call(this,a,null,t)}.bind(this)).then(function(){return m(e,c.id)}).then(function(){d();return y()}).then(function(){return a?s():S.call(this,a,u,t)}.bind(this))}r.hide();return S.call(this,a,u,t)};sap.ui.require(["sap/ui/rta/appVariant/AppVariantManager"],function(e){if(!p){p=new e({commandSerializer:l,layer:t})}return v().then(A).then(I).then(P).then(O).then(h).then(_).then(V.bind(this)).then(s).catch(function(e){if(!e){return false}if(u){d()}return S.call(this,null,u,t).then(s)}.bind(this))}.bind(this))}.bind(this))},onDeleteFromOverviewDialog:function(e,a,i){var t;return new Promise(function(s){sap.ui.require(["sap/ui/rta/appVariant/AppVariantManager"],function(o){if(!p){p=new o({rootControl:c,commandSerializer:l,layer:i})}var u=function(){return p.deleteAppVariant(e).catch(function(r){if(r==="cancel"){return Promise.reject("cancel")}var a=r.messageKey;if(!a){a="MSG_DELETE_APP_VARIANT_FAILED"}return n.catchErrorDialog(r,a,e)})};var f=function(){n.closeOverviewDialog();var r=n.buildDeleteSuccessMessage(e,t);return p.showSuccessMessage(r)};var v=function(s){t=n.isS4HanaCloud(s);if(t){var o;return g(a).then(function(){return A(e)}).then(function(e){o=Object.assign({},e);return b.call(this,!a,i)}.bind(this)).then(function(){return I(o,e)})}r.show();return Promise.resolve()};var w=function(){if(t){d()}r.hide();return a?s():b.call(this,!t,t,i).then(s)};if(a){n.closeOverviewDialog();n.navigateToFLPHomepage()}return h().then(v.bind(this)).then(u).then(f).then(w.bind(this)).catch(function(e){if(e==="cancel"){return false}if(t){d()}return b.call(this,null,t,i).then(s)}.bind(this))}.bind(this))}.bind(this))}}});
//# sourceMappingURL=Feature.js.map