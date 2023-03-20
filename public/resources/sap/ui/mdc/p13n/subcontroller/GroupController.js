/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseController","sap/ui/mdc/p13n/P13nBuilder","sap/m/p13n/GroupPanel"],function(t,e,r){"use strict";var o=t.extend("sap.ui.mdc.p13n.subcontroller.GroupController");o.prototype.getStateKey=function(){return"groupLevels"};o.prototype.getUISettings=function(){return{tabText:sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc").getText("p13nDialog.TAB_Group"),title:sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc").getText("group.PERSONALIZATION_DIALOG_TITLE")}};o.prototype.getDelta=function(e){return t.prototype.getDelta.apply(this,arguments)};o.prototype.getAdaptationUI=function(t){var e=new r;var o=this.mixInfoAndState(t);var n=this.getAdaptationControl();if(n.isA("sap.ui.mdc.Table")&&n._getStringType()==="ResponsiveTable"){e.setQueryLimit(1)}e.setP13nData(o.items);this._oPanel=e;return Promise.resolve(e)};o.prototype.model2State=function(){var t=[];this._oPanel.getP13nData(true).forEach(function(e){if(e.grouped){t.push({name:e.name})}});return t};o.prototype.getChangeOperations=function(){return{add:"addGroup",remove:"removeGroup",move:"moveGroup"}};o.prototype._getPresenceAttribute=function(){return"grouped"};o.prototype.mixInfoAndState=function(t){var r=this.getCurrentState();var o=e.arrayToMap(r);var n=this.getAdaptationControl();var i=n.getAggregateConditions?n.getAggregateConditions()||{}:{};var a=e.prepareAdaptationData(t,function(t,e){var r=o[e.name];t.grouped=!!r;t.position=r?r.position:-1;return!(e.groupable===false||i[e.name])});e.sortP13nData({visible:"grouped",position:"position"},a.items);a.presenceAttribute=this._getPresenceAttribute();a.items.forEach(function(t){delete t.position});return a};return o});
//# sourceMappingURL=GroupController.js.map