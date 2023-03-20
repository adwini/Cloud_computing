/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Object","sap/ui/mdc/util/loadModules","sap/base/Log"],function(t,e,n){"use strict";var i="UIManager: This class is a singleton and should not be used without an AdaptationProvider. Please use 'sap.m.p13n.Engine.getInstance().uimanager' instead";var a;var r=t.extend("sap.m.p13n.UIManager",{constructor:function(e){if(a){throw Error(i)}this.oAdaptationProvider=e;t.call(this)}});r.prototype.show=function(t,i,a){var r=i instanceof Array?i:[i];var o=sap.ui.getCore().getLibraryResourceBundle("sap.m");var s=this;a=Object.assign({},a);if(!this.hasActiveP13n(t)){this.setActiveP13n(t,i);return this.create(t,i,a).then(function(n){return e(["sap/m/p13n/Popup"]).then(function(e){var i;if(!a.title&&r.length===1){i=n[0].getTitle()}else{i=a.title||o.getText("p13n.VIEW_SETTINGS")}var c=e[0];var u=new c({mode:a.mode,warningText:a.warningText||o.getText("p13n.RESET_WARNING_TEXT"),title:i,close:function(e){var n=e.getParameter("reason");if(n=="Ok"){s.oAdaptationProvider.handleP13n(t,r)}u.removeAllPanels();s.setActiveP13n(t,null);u.destroy()},reset:function(){s.oAdaptationProvider.reset(t,r)}});n.forEach(function(t,e){u.addPanel(t,r[e])});t.addDependent(u);u.open(a.source,a);return u._oPopup})},function(e){this.setActiveP13n(t,null);n.error("UIManager failure:"+e.stack)}.bind(this))}else{return Promise.resolve()}};r.prototype.create=function(t,e){var n=e instanceof Array?e:[e];var i=this;return this.oAdaptationProvider.initAdaptation(t,n).then(function(){var e=this.oAdaptationProvider.getUISettings(t,n);if(e instanceof Promise){return e}else{var i=[],a=[];Object.keys(e).forEach(function(t){var n=e[t];if(n&&n.hasOwnProperty("adaptationUI")){var r=n.adaptationUI;i.push(r);a.push({key:t,settings:n})}});return Promise.all(i).then(function(t){var e={};t.forEach(function(t,n){if(t){var i=a[n];var r=i.settings.containerSettings;if(r.title){t.setTitle(r.title)}e[i.key]={panel:t}}});return e})}}.bind(this)).then(function(e){var a=[];Object.keys(e).forEach(function(r,o){var s=e[r].panel;if(s.attachChange instanceof Function){s.attachChange(function(e){i.oAdaptationProvider.validateP13n(t,n[o],e.getSource())})}a.push(s)});return a})};r.getInstance=function(t){if(!a){this._checkValidInterface(t);a=new r(t)}return a};r.prototype.setActiveP13n=function(t,e){if(this.oAdaptationProvider.setActiveP13n instanceof Function){this.oAdaptationProvider.setActiveP13n(t,e)}};r.prototype.hasActiveP13n=function(t){var e=false;if(this.oAdaptationProvider.hasActiveP13n instanceof Function){e=this.oAdaptationProvider.hasActiveP13n(t)}return e};r._checkValidInterface=function(t){if(!t||!t.isA("sap.m.p13n.AdaptationProvider")){throw Error("The UIManager singleton must not be accessed without an AdaptationProvider interface!")}};r.prototype.destroy=function(){t.prototype.destroy.apply(this,arguments);a=null};return r});
//# sourceMappingURL=UIManager.js.map