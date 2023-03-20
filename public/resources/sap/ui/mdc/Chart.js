/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","sap/ui/mdc/Control","./chart/ChartSettings","sap/ui/mdc/util/loadModules","./ChartRenderer","sap/ui/mdc/library","sap/m/Text","sap/base/Log","./chart/ChartToolbar","./chart/PropertyHelper","sap/ui/mdc/mixin/FilterIntegrationMixin","sap/ui/model/base/ManagedObjectModel","sap/ui/mdc/p13n/subcontroller/ChartItemController","sap/ui/mdc/p13n/subcontroller/FilterController","sap/ui/mdc/p13n/subcontroller/SortController","sap/ui/mdc/p13n/subcontroller/ChartTypeController","sap/ui/base/ManagedObjectObserver","sap/ui/mdc/chart/DrillBreadcrumbs","sap/ui/mdc/actiontoolbar/ActionToolbarAction","sap/ui/thirdparty/jquery","sap/ui/core/library"],function(t,e,i,r,o,n,a,s,l,h,p,u,c,g,d,y,f,C,b,jQuery,m){"use strict";var D;var _=m.TitleLevel;var v=e.extend("sap.ui.mdc.Chart",{metadata:{library:"sap.ui.mdc",designtime:"sap/ui/mdc/designtime/chart/Chart.designtime",interfaces:["sap.ui.mdc.IFilterSource","sap.ui.mdc.IxState"],defaultAggregation:"items",properties:{width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%",invalidate:true},height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"100%",invalidate:true},delegate:{type:"object",group:"Data",defaultValue:{name:"sap/ui/mdc/ChartDelegate"}},header:{type:"string",group:"Misc",defaultValue:null},noDataText:{type:"string",defaultValue:"No data"},p13nMode:{type:"sap.ui.mdc.ChartP13nMode[]",defaultValue:[]},legendVisible:{type:"boolean",group:"Misc",defaultValue:true},ignoreToolbarActions:{type:"sap.ui.mdc.ChartToolbarActionType[]",defaultValue:[]},minWidth:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"240px",invalidate:true},minHeight:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:"400px",invalidate:true},sortConditions:{type:"object"},filterConditions:{type:"object",defaultValue:{}},showChartTooltip:{type:"boolean",group:"Misc",defaultValue:true},autoBindOnInit:{type:"boolean",group:"Misc",defaultValue:true},chartType:{type:"string",group:"Misc",defaultValue:"column"},showSelectionDetails:{type:"boolean",group:"Misc",defaultValue:true},propertyInfo:{type:"object",defaultValue:[]},headerLevel:{type:"sap.ui.core.TitleLevel",group:"Appearance",defaultValue:_.Auto}},aggregations:{items:{type:"sap.ui.mdc.chart.Item",multiple:true},actions:{type:"sap.ui.core.Control",multiple:true,forwarding:{getter:"_getToolbar",aggregation:"actions"}},_toolbar:{type:"sap.ui.mdc.chart.ChartToolbar",multiple:false,visibility:"hidden"},_breadcrumbs:{type:"sap.m.Breadcrumbs",multiple:false,visibility:"hidden"},_innerChart:{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},selectionDetailsActions:{type:"sap.ui.mdc.chart.SelectionDetailsActions",multiple:false},variant:{type:"sap.ui.fl.variants.VariantManagement",multiple:false},noData:{type:"sap.ui.core.Control",multiple:false}},associations:{filter:{type:"sap.ui.mdc.IFilter",multiple:false}},events:{selectionDetailsActionPressed:{parameters:{action:{type:"sap.ui.core.Item"},itemContexts:{type:"sap.ui.model.Context"},level:{type:"sap.m.SelectionDetailsActionLevel"}}}}},renderer:o});var I=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");p.call(v.prototype);v.prototype.init=function(){this._oManagedObjectModel=new u(this);this.setModel(this._oManagedObjectModel,"$mdcChart");this._bNewP13n=true;e.prototype.init.apply(this,arguments);this._setupPropertyInfoStore("propertyInfo");this._setPropertyHelperClass(h)};v.prototype.setP13nMode=function(t){var e=null;if(t&&t.length>=1){e=[];var i=t.reduce(function(t,e,i){t[e]=true;return t},{});if(i.Item){e.push("Item")}if(i.Sort){e.push("Sort")}if(i.Filter){e.push("Filter")}if(i.Type){this._typeBtnActive=true;e.push("Type")}else{this._typeBtnActive=false}}else{e=t}this.setProperty("p13nMode",e,true);this._updateAdaptation(this.getP13nMode());return this};v.prototype._updateAdaptation=function(t){var e={controller:{}};var i={Item:c,Sort:d,Filter:g,Type:y};if(t&&t.length>0){t.forEach(function(t){var r=t;var o=i[t];if(o){e.controller[r]=o}});this.getEngine().registerAdaptation(this,e)}};v.prototype.setFilterConditions=function(t){this.setProperty("filterConditions",t,true);var e=this.getInbuiltFilter();if(e){e.setFilterConditions(t)}return this};v.prototype.getConditions=function(){return this.getInbuiltFilter()?this.getInbuiltFilter().getConditions():[]};v.prototype._registerInnerFilter=function(t){t.attachSearch(function(){this._rebind()},this)};v.prototype.applySettings=function(t,i){this._setPropertyHelperClass(h);e.prototype.applySettings.apply(this,arguments);this.initializedPromise=new Promise(function(t,e){this._fnResolveInitialized=t;this._fnRejectInitialized=e}.bind(this));this.innerChartBoundPromise=new Promise(function(t,e){this._fnResolveInnerChartBound=t;this._fnRejectInnerChartBound=e}.bind(this));var r=this._loadDelegate().then(function(t){return t}).then(function(t){return this.initControlDelegate(t)}.bind(this)).catch(function(t){this._fnRejectInitialized(t)}.bind(this));var o=[r];if(this.isFilteringEnabled()){o.push(this.retrieveInbuiltFilter())}Promise.all(o).then(function(){this._initInnerControls()}.bind(this))};v.prototype._initInnerControls=function(){this.getControlDelegate().initializeInnerChart(this).then(function(t){this.setBusyIndicatorDelay(0);this.getControlDelegate().createInitialChartContent(this);this._renderOverlay(true);if(this.getAutoBindOnInit()){this.setBusy(true);this._createContentfromPropertyInfos(t)}this.setAggregation("_innerChart",t);this._bInnerChartReady=true;this._fnResolveInitialized();this.invalidate()}.bind(this)).catch(function(t){this._fnRejectInitialized(t)}.bind(this));this._getToolbar().createToolbarContent(this)};v.prototype._createContentfromPropertyInfos=function(t){this.getControlDelegate().checkAndUpdateMDCItems(this).then(function(){this.getControlDelegate().createInnerChartContent(this,this._innerChartDataLoadComplete.bind(this)).then(function(){this._createBreadcrumbs();this._oObserver=new f(this._propagateItemChangeToInnerChart.bind(this));this._oObserver.observe(this,{aggregations:["items"]});this._propagatePropertiesToInnerChart();this._fnResolveInnerChartBound()}.bind(this))}.bind(this))};v.prototype._createBreadcrumbs=function(){if(!this._oBreadcrumbs){this._oBreadcrumbs=new C(this.getId()+"--breadcrumbs");this._oBreadcrumbs.updateDrillBreadcrumbs(this,this.getControlDelegate().getDrillableItems(this));this.setAggregation("_breadcrumbs",this._oBreadcrumbs)}};v.prototype._loadDelegate=function(){return new Promise(function(t){var e=[this.getDelegate().name];function i(e){t(e)}sap.ui.require(e,i)}.bind(this))};v.prototype.isFilteringEnabled=function(){return this.getP13nMode().indexOf("Filter")>-1};v.prototype.getAdaptationUI=function(){return this.getControlDelegate().getAdaptionUI(this)};v.prototype._propagateItemChangeToInnerChart=function(t){if(this._bIsDestroyed){return}this.setBusy(true);switch(t.mutation){case"insert":var e;if(t.child&&t.child.getType()){e=this.getItems().filter(function(e){return e.getType()===t.child.getType()}).indexOf(t.child)}else{e=this.getItems().indexOf(t.child)}this.getControlDelegate().insertItemToInnerChart(this,t.child,e);break;case"remove":this.getControlDelegate().removeItemFromInnerChart(this,t.child);break;default:s.error("Unknown mutation on MDC Chart Item Aggregation. This will not sync to inner chart!");break}this._rebind();this._oBreadcrumbs.updateDrillBreadcrumbs(this,this.getControlDelegate().getDrillableItems(this))};v.prototype._rebind=function(){if(!this._bInnerChartReady){this.initialized().then(function(){this._rebind()}.bind(this));return}this.setBusy(true);if(!this.getControlDelegate().getInnerChartBound(this)){this._createContentfromPropertyInfos();return}var t=this.getControlDelegate()._getBindingInfo(this);this.getControlDelegate().updateBindingInfo(this,t);this.getControlDelegate().rebind(this,t)};v.prototype._getToolbar=function(){if(this.getAggregation("_toolbar")){return this.getAggregation("_toolbar")}else{var t=new l(this.getId()+"--toolbar",{design:"Transparent"});this.setAggregation("_toolbar",t);return t}};v.prototype._updateToolbar=function(){if(this.getAggregation("_toolbar")){this.getAggregation("_toolbar").updateToolbar(this)}else{s.warning("Trying to uipdate Chart Toolbar, but toolbar is not yet initialized. This will not work!")}};v.prototype._getInnerChart=function(){if(this._bInnerChartReady){return this.getControlDelegate().getInnerChart(this)}else{s.error("Trying to acces inner chart while inner chart is not yet initialized!")}};v.prototype.initialized=function(){return this.initializedPromise};v.prototype.innerChartBound=function(){return this.innerChartBoundPromise};v.prototype.zoomIn=function(t){if(!t){t=10}this.getControlDelegate().zoomIn(this,t)};v.prototype.zoomOut=function(t){if(t){t=10}this.getControlDelegate().zoomOut(this,t)};v.prototype.getZoomState=function(){return this.getControlDelegate().getZoomState(this)};v.prototype.getSelectionHandler=function(){return this.getControlDelegate().getInnerChartSelectionHandler(this)};v.prototype.getChartTypeLayoutConfig=function(){return this.getControlDelegate().getChartTypeLayoutConfig()};v.prototype.getAllowedRolesForKinds=function(){return this.getControlDelegate().getAllowedRolesForKinds()};v.prototype.setLegendVisible=function(t){this.setProperty("legendVisible",t);try{this.getControlDelegate().setLegendVisible(this,t)}catch(t){s.info("Trying to set legend visiblity for Chart before delegate was initialized")}return this};v.prototype.setShowChartTooltip=function(t){this.setProperty("showChartTooltip",t);try{this.getControlDelegate().setChartTooltipVisibility(this,t)}catch(t){s.info("Trying to set tooltip visibility before delegate was initialized")}return this};v.prototype.destroy=function(){this._bIsDestroyed=true;e.prototype.destroy.apply(this,arguments)};v.prototype._showDrillDown=function(t){if(!this.oDrillPopover){if(D){this.oDrillPopover=D.createDrillDownPopover(this);this.oDrillPopover.attachAfterClose(function(){delete this.oDrillPopover}.bind(this));return D.showDrillDownPopover(this,t)}return new Promise(function(e,i){sap.ui.require(["sap/ui/mdc/chart/DrillStackHandler"],function(i){D=i;this.oDrillPopover=D.createDrillDownPopover(this);this.oDrillPopover.attachAfterClose(function(){delete this.oDrillPopover}.bind(this));D.showDrillDownPopover(this,t).then(function(t){e(t)})}.bind(this))}.bind(this))}};v.prototype._propagatePropertiesToInnerChart=function(){this.setLegendVisible(this.getLegendVisible());this.setShowChartTooltip(this.getShowChartTooltip());this.setChartType(this.getChartType())};v.prototype.getChartTypeInfo=function(){var e;try{e=this.getControlDelegate().getChartTypeInfo(this)}catch(r){var i=t.getLibraryResourceBundle("sap.chart.messages");if(!e){e={icon:"sap-icon://vertical-bar-chart",text:I.getText("chart.CHART_TYPE_TOOLTIP",[i.getText("info/bar")])}}}return e};v.prototype.getAvailableChartTypes=function(){return this.getControlDelegate().getAvailableChartTypes(this)};v.prototype.setChartType=function(t){this.setProperty("chartType",t);try{this.getControlDelegate().setChartType(this,t)}catch(t){s.info("Trying to set chart type for Chart before delegate was initialized")}return this};v.prototype.setNoData=function(t){this.setAggregation("noData",t);try{this.getControlDelegate().changedNoDataStruct(this)}catch(t){}return this};v.prototype.getManagedObjectModel=function(){return this._oManagedObjectModel};v.prototype._innerChartDataLoadComplete=function(t){this._checkStyleClassesForDimensions();this.setBusy(false);this._renderOverlay(false);this.getControlDelegate().requestToolbarUpdate(this)};v.prototype._checkStyleClassesForDimensions=function(){var t=this.getItems().some(function(t){return t.getType()==="groupable"});if(!t&&this.hasStyleClass("sapUiMDCChartGrid")){this.removeStyleClass("sapUiMDCChartGrid");this.addStyleClass("sapUiMDCChartGridNoBreadcrumbs")}else if(t&&this.hasStyleClass("sapUiMDCChartGridNoBreadcrumbs")){this.removeStyleClass("sapUiMDCChartGridNoBreadcrumbs");this.addStyleClass("sapUiMDCChartGrid")}};v.prototype.getCurrentState=function(){var t={};var e=this.getP13nMode();if(e){if(e.indexOf("Item")>-1){t.items=this._getVisibleProperties()}if(e.indexOf("Sort")>-1){t.sorters=this._getSortedProperties()}if(e.indexOf("Filter")>-1){t.filter=this.getFilterConditions()}if(e.indexOf("Type")>-1){t.chartType=this.getChartType()}}return t};v.prototype._getVisibleProperties=function(){var t=[];this.getItems().forEach(function(e){t.push({name:e.getName(),role:e.getRole()})});return t};v.prototype._getSortedProperties=function(){return this.getSortConditions()?this.getSortConditions().sorters:[]};v.prototype._getPropertyData=function(){if(!this.aFetchedProperties){this.aFetchedProperties=this.getControlDelegate().fetchProperties(this)}else{return this.aFetchedProperties}};v.prototype._getTypeBtnActive=function(){return!!this._typeBtnActive};v.prototype.setNoDataText=function(t){this.setProperty("noDataText",t);try{this.getControlDelegate().setNoDataText(this,t)}catch(t){}return this};v.prototype._onFiltersChanged=function(t){if(this._bInnerChartReady&&this.getControlDelegate()&&this.getControlDelegate().getInnerChartBound(this)&&t.getParameter("conditionsBased")){this._renderOverlay(true)}};v.prototype.setVariant=function(t){this.setAggregation("variant",t);if(this.getAggregation("_toolbar")){this.getAggregation("_toolbar").addVariantManagement(t)}return this};v.prototype._renderOverlay=function(t){try{this.getControlDelegate().showOverlay(this,t)}catch(t){s.error("sap.ui.mdc.Chart: Tried to render overlay on not initiailized chart. This will not work!")}};v.prototype.addAction=function(t){if(t.getMetadata().getName()!=="sap.ui.mdc.actiontoolbar.ActionToolbarAction"){t=new b(t.getId()+"-action",{action:t})}return e.prototype.addAggregation.apply(this,["actions",t])};v.prototype.setHeaderLevel=function(t){if(this.getAggregation("_toolbar")){this.getAggregation("_toolbar")._setHeaderLevel(t)}this.setProperty("headerLevel",t);return this};return v});
//# sourceMappingURL=Chart.js.map