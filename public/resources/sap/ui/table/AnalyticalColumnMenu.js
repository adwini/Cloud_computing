/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ColumnMenu","sap/ui/unified/MenuRenderer","./utils/TableUtils","./library","sap/ui/thirdparty/jquery"],function(e,t,o,u,jQuery){"use strict";var n=e.extend("sap.ui.table.AnalyticalColumnMenu",{metadata:{library:"sap.ui.table"},renderer:t});n.prototype._addMenuItems=function(){e.prototype._addMenuItems.apply(this);if(this._oColumn){this._addSumMenuItem()}};n.prototype._addGroupMenuItem=function(){var e=this._oColumn,t=this._oTable;if(e.isGroupableByMenu()){this._oGroupIcon=this._createMenuItem("group","TBL_GROUP",e.getGrouped()?"accept":null,function(u){var n=u.getSource();var i=e.getGrouped();e._setGrouped(!i);if(!i&&!e.getShowIfGrouped()){var a;if(o.isNoDataVisible(t)){a=t.getDomRef("noDataCnt")}else{a=t.getDomRef("rowsel0")}if(a){a.focus()}}n.setIcon(!i?"sap-icon://accept":null)});this.addItem(this._oGroupIcon)}};n.prototype._addSumMenuItem=function(){var e=this._oColumn;if(e._isAggregatableByMenu()){this._oSumItem=this._createMenuItem("total","TBL_TOTAL",e.getSummed()?"accept":null,jQuery.proxy(function(t){var o=t.getSource(),u=e.getSummed();e.setSummed(!u);o.setIcon(!u?"sap-icon://accept":null)},this));this.addItem(this._oSumItem)}};n.prototype.open=function(){e.prototype.open.apply(this,arguments);var t=this._oColumn;this._oSumItem&&this._oSumItem.setIcon(t.getSummed()?"sap-icon://accept":null);this._oGroupIcon&&this._oGroupIcon.setIcon(t.getGrouped()?"sap-icon://accept":null)};return n});
//# sourceMappingURL=AnalyticalColumnMenu.js.map