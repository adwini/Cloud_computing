/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/p13n/BasePanel","sap/m/Label","sap/m/ColumnListItem","sap/m/Select","sap/m/Text","sap/ui/core/Item","sap/ui/mdc/library","sap/m/Button","sap/m/Column","sap/m/Table","sap/ui/model/Filter","sap/ui/model/FilterOperator","sap/m/VBox","sap/m/HBox","sap/m/ComboBox","sap/ui/model/Sorter","sap/base/Log","sap/m/library","sap/ui/Device","sap/ui/core/ResizeHandler","sap/ui/core/CustomData","sap/ui/thirdparty/jquery","sap/ui/core/library"],function(e,t,i,n,o,r,s,a,l,h,p,u,g,d,m,_,f,c,v,I,y,jQuery,M){"use strict";var b=M.ValueState;var P=c.FlexJustifyContent;var C=sap.ui.getCore();var O=e.extend("sap.ui.mdc.p13n.panels.ChartItemPanel",{metadata:{library:"sap.ui.mdc",properties:{panelConfig:{type:"object"}},events:{changeItems:{}}},init:function(){this._bMobileMode=v.system.phone;e.prototype.init.apply(this,arguments);this._bindListItems()},renderer:{}});O.prototype._setInnerLayout=function(){this._oInnerControl=new g({items:[this._oListControl]});this.setAggregation("_content",this._oInnerControl);this._fnHandleResize=function(){if(this.getParent){var e=null;var t=this.getParent();if(t&&t.$){e=t.$("cont");if(e.children().length>0){var i=this._oInnerControl.$()[0].clientWidth;var n=570;if(!this._bMobileMode&&i<=n){this._switchMobileMode(true)}else if(this._bMobileMode&&i>n){this._switchMobileMode(false)}}}}};if(v.system.desktop){this._sContainerResizeListener=I.register(this._oInnerControl,this._fnHandleResize.bind(this))}};O.prototype._switchMobileMode=function(e){if(this._bMobileMode==e){return}this._bMobileMode=e;if(this._sContainerResizeListener){I.deregister(this._sContainerResizeListener);this._sContainerResizeListener=null}this._oListControl.destroy();this._oDragDropInfo=null;this._oListControl=this._createInnerListControl();this._oListControl.setMultiSelectMode("ClearAll");this._setInnerLayout();this._bindListItems()};O.prototype._createInnerListControl=function(){var e=this._bMobileMode?this.getId()+"-innerP13nListMobile":this.getId()+"-innerP13nList";var t=new h(e,Object.assign(this._getListControlConfig(),{}));this.setEnableReorder(true);t.addEventDelegate({onAfterRendering:this._onAfterTableRender.bind(this)});return t};O.prototype._onAfterTableRender=function(){if(this._oFocusInfo&&this._oFocusInfo.tableItem){this._oFocusInfo.tableItem.focus()}this._mInvalidMap.forEach(function(e,t){if(this._mNamesMap.has(t)){this._mNamesMap.get(t).setValueState(b.Error);this._mNamesMap.get(t).setValue(e)}}.bind(this));this._oFocusInfo=null};O.prototype._bindListItems=function(e){var t;var i=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");if(this.getPanelConfig()&&this.getPanelConfig().sorter){t=this.getPanelConfig().sorter}else{var n={text:i.getText("chart.PERSONALIZATION_DIALOG_MEASURE_GROUP_HEADER")};var o={text:i.getText("chart.PERSONALIZATION_DIALOG_DIMENSION_GROUP_HEADER")};var r={Aggregatable:n,Groupable:o,Measure:n,Dimension:o};var s=function(e){var t=e.getProperty("kind");return{key:t,text:r[t].text}};var a=function(e,t){if(e===t){return 0}if(e==="MEASURE"||e==="AGGREGATABLE"){return 1}return-1};t=new _("kind",false,s,a)}var l;this._mTemplatesMap=new Map;this._mNamesMap=new Map;this._mInvalidMap=new Map;if(this._bMobileMode){l=this._createListItemMobile}else{l=this._createListItem}this._oListControl.bindItems(Object.assign({path:this.P13N_MODEL+">/items",key:"name",filters:[new p({filters:[new p("visible",u.EQ,true),new p("template",u.EQ,true)],and:false})],factory:l.bind(this),sorter:t},e))};O.prototype._getTemplateComboBox=function(e){var t=new p("visible",u.EQ,false);var i=new window.Intl.Collator;var n=function(e,t){return i.compare(e,t)};var o=new _("label",false,false,n);var s=new m({id:"p13nPanel-templateComboBox-"+e,width:"100%",placeholder:this._getPlaceholderTextForTemplate(e),items:{path:this.P13N_MODEL+">/items",template:new r({key:"{"+this.P13N_MODEL+">name}",text:"{"+this.P13N_MODEL+">label}"}),templateShareable:false,filters:[t,new p("kind",u.EQ,e)],sorter:o},change:[this.onChangeOfTemplateName,this]});this._mTemplatesMap.set(e,s);return s};O.prototype._getPlaceholderTextForTemplate=function(e){var t=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");return t.getText("chart.PERSONALIZATION_DIALOG_TEMPLATE_PLACEHOLDER")};O.prototype._getRoleSelect=function(){return new n({width:"100%",selectedKey:"{"+this.P13N_MODEL+">role}",change:[this.onChangeOfRole,this],forceSelection:false,items:{path:this.P13N_MODEL+">availableRoles",templateShareable:false,template:new r({key:"{"+this.P13N_MODEL+">key}",text:"{"+this.P13N_MODEL+">text}"})},visible:{path:this.P13N_MODEL+">availableRoles",formatter:function(e){if(!e){return false}return e.length>1}}})};O.prototype._getNameComboBox=function(e,t){var i=new window.Intl.Collator;var n=function(e,t){return i.compare(e,t)};var o=new _("label",false,false,n);var s=new p({filters:[new p("visible",u.EQ,false),new p("name",u.EQ,t)],and:false});return new m({width:"100%",items:{path:this.P13N_MODEL+">/items",factory:function(e,t){return new r({key:t.getObject().name,text:t.getObject().label})},templateShareable:false,filters:[s,new p("kind",u.EQ,e)],sorter:o},change:[this.onChangeOfItemName,this],selectedKey:"{"+this.P13N_MODEL+">tempName}",customData:[new y({key:"prevName",value:t}),new y({key:"prevKind",value:e})]})};O.prototype._createListItem=function(e,t){var n,o=[];if(t.getObject()&&t.getObject().template){o.push(this._getTemplateComboBox(t.getObject().kind))}else{var r;if(t.getObject().name!=t.getObject().tempName){t.getObject().tempName=t.getObject().name}r=this._getNameComboBox(t.getObject().kind,t.getObject().name);o.push(r);o.push(this._getRoleSelect());n=this.getId()+t.getObject().kind+"-RemoveBtn-"+t.getObject().name;o.push(new d({justifyContent:P.End,items:[new a({id:n,press:[this._onPressHide,this],type:"Transparent",icon:"sap-icon://decline",tooltip:this._getResourceTextMDC("chart.PERSONALIZATION_DIALOG_REMOVE_ENTRY"),customData:[new y({key:"propertyName",value:"{"+this.P13N_MODEL+">name}"}),new y({key:"propertyKind",value:"{"+this.P13N_MODEL+">kind}"})]})]}));this._mNamesMap.set(t.getObject().name,r)}var s;if(t.getObject()&&t.getObject().template){var l=t.getObject().kind;s=new i({cells:o,visible:{path:this.P13N_MODEL+">/items",formatter:function(e){e=e.filter(function(e){return e.visible===false&&e.template===false&&e.kind===l});return e.length!=0}}})}else{s=new i({cells:o})}s.addEventDelegate({onmouseover:this._hoverHandler.bind(this),onfocusin:this._focusHandler.bind(this),onkeydown:this._handleOnKeyDown.bind(this)});return s};O.prototype._createListItemMobile=function(e,t){var n,o=[];if(t.getObject()&&t.getObject().template){o.push(this._getTemplateComboBox(t.getObject().kind))}else{var r=new g({items:[this._getNameComboBox(t.getObject().kind,t.getObject().name),this._getRoleSelect()]});n=t.getObject().kind+"-RemoveBtn-"+t.getObject().name;o.push(r)}var s=new d({justifyContent:P.End,items:[new a({id:n,press:[this._onPressHide,this],type:"Transparent",icon:"sap-icon://decline",visible:{path:this.P13N_MODEL+">template",formatter:function(e){return!e}},customData:[new y({key:"propertyName",value:"{"+this.P13N_MODEL+">name}"}),new y({key:"propertyKind",value:"{"+this.P13N_MODEL+">kind}"})]})]});o.push(s);var l;if(t.getObject()&&t.getObject().template){var h=t.getObject().kind;l=new i({cells:o,visible:{path:this.P13N_MODEL+">/items",formatter:function(e){e=e.filter(function(e){return e.visible===false&&e.template===false&&e.kind===h});return e.length!=0}}})}else{l=new i({cells:o})}l.addEventDelegate({onmouseover:this._hoverHandler.bind(this),onfocusin:this._focusHandler.bind(this),onkeydown:this._handleOnKeyDown.bind(this)});return l};O.prototype._handleOnKeyDown=function(e){if(e.keyCode===38&&e.ctrlKey){}else if(e.keyCode===40&&e.ctrlKey){}else if(e.keyCode===68&&e.ctrlKey){var t,i=C.byId(e.currentTarget.id);if(this._bMobileMode){t=i.getCells()[1].getItems()[i.getCells()[1].getItems().length-1]}else{t=i.getCells()[2].getItems()[i.getCells()[2].getItems().length-1]}if(t){this._onPressHide(e,t);e.preventDefault()}}};O.prototype._focusHandler=function(t){var i=C.byId(t.target.id);if(i instanceof a){return}e.prototype._focusHandler.apply(this,arguments)};O.prototype._handleActivated=function(e){var t=this._getModelItemByTableItem(e);if(t&&t.template){this.removeMoveButtons()}this._oHoveredItem=e;this._updateEnableOfMoveButtons(e,false);this._addMoveButtons(e);this._setMoveButtonVisibility(true)};O.prototype.onChangeOfItemName=function(e){var t=e.getSource().data().prevName;var i=e.getSource().data().prevKind;var n=e.getSource().getSelectedKey();var o=this._getP13nModel().getProperty("/items").find(function(e){return e.name===t&&e.kind===i});var r=this._getP13nModel().getProperty("/items").find(function(e){return e.name===n&&e.kind===i});this.removeMoveButtons();if(o&&r){o.visible=false;r.visible=true;o.tempName=o.name;r.role=o.role;this._moveItemsByIndex(this._getItemIndex(r),this._getItemIndex(o));this._refreshP13nModel();this._fireChangeItems();this._updateVisibleIndexes();this._mInvalidMap.delete(t);this._mInvalidMap.delete(n)}else if(e.getSource()&&e.getSource()instanceof m){this._mInvalidMap.set(e.getSource().data("prevName"),e.getSource().getValue());e.getSource().setValueState(b.Error)}};O.prototype._getItemIndexByNameAndKind=function(e,t){var i=this._getP13nModel().getProperty("/items");var n=i.find(function(i){return i.name===e&&i.kind===t&&!i.template});return this._getItemIndex(n)};O.prototype._getItemIndex=function(e){return this._getP13nModel().getProperty("/items").indexOf(e)};O.prototype.removeMoveButtons=function(){var e=this._getMoveButtonContainer();if(e){e.removeItem(this._getMoveBottomButton());e.removeItem(this._getMoveDownButton());e.removeItem(this._getMoveUpButton());e.removeItem(this._getMoveTopButton())}};O.prototype.getP13nData=function(){var e=this._getCleanP13nItems();this._getP13nModel().setProperty("/items",e);return e};O.prototype._getMoveButtonContainer=function(){if(this._oMoveUpButton&&this._oMoveUpButton.getParent()&&this._oMoveUpButton.getParent().isA("sap.m.FlexBox")){return this._oMoveUpButton.getParent()}return undefined};O.prototype._addMoveButtons=function(e){var t=e;if(!t){return}var i=this._getP13nModel().getProperty(t.getBindingContextPath())?this._getP13nModel().getProperty(t.getBindingContextPath()).template:true;if(t.getCells()&&(t.getCells().length===2||t.getCells().length===3)&&!i){if(this._bMobileMode){t.getCells()[1].insertItem(this._getMoveDownButton(),0);t.getCells()[1].insertItem(this._getMoveUpButton(),0)}else{t.getCells()[2].insertItem(this._getMoveBottomButton(),0);t.getCells()[2].insertItem(this._getMoveDownButton(),0);t.getCells()[2].insertItem(this._getMoveUpButton(),0);t.getCells()[2].insertItem(this._getMoveTopButton(),0)}}};O.prototype._moveSelectedItem=function(){this._oSelectedItem=this._getMoveButtonContainer().getParent();e.prototype._moveSelectedItem.apply(this,arguments)};O.prototype._updateAvailableRolesForItems=function(){var e=this._getP13nModel().getProperty("/items");var t=[];if(this.getPanelConfig()&&this.getPanelConfig().allowedLayoutOptions){t=this.getPanelConfig().allowedLayoutOptions}else{f.warning("No allowedLayoutOptions configured for chart type. This will not show any p13n options!")}e.forEach(function(e){if(!e.availableRoles){return}e.availableRoles=e.availableRoles.filter(function(e){return t.indexOf(e.key)!=-1})});this._getP13nModel().setProperty("/items",e);this._refreshP13nModel()};O.prototype._onPressHide=function(e,t){var i;if(t){i=t.data().propertyName}else{i=e.getSource().data().propertyName}var n=jQuery.extend([],this._getP13nModel().getProperty("/items"),true);n.filter(function(e){return e.name===i}).forEach(function(e){e.visible=false;if(this._mTemplatesMap.has(e.kind)&&this._mTemplatesMap.get(e.kind).getVisible()){this._mTemplatesMap.get(e.kind).focus()}}.bind(this));this._getP13nModel().setProperty("/items",n);this._refreshP13nModel();this._fireChangeItems();this._updateVisibleIndexes()};O.prototype.setP13nData=function(t){t=t.filter(function(e){return!e.template});e.prototype.setP13nData.apply(this,arguments);var i=[];var n=[];this.getP13nData().forEach(function(e,t){if(!e.availableRoles){e.availableRoles=this._getChartItemTextByKey(e.kind)}if(this.getPanelConfig()&&this.getPanelConfig().allowedLayoutOptions){var o=this.getPanelConfig().allowedLayoutOptions;if(o&&o.length>=1){e.availableRoles=e.availableRoles.filter(function(e){return o.indexOf(e.key)!=-1});if(o.indexOf(e.role)===-1){e.role=o[0]}}}e.template=false;e.tempName=e.name;if(!e.visible){n.push(e)}if(!e.index){e.index=t}i.push(e)}.bind(this));i=i.concat(this._getTemplateItems());this._getP13nModel().setProperty("/items",i);this._updateVisibleIndexes()};O.prototype._updateVisibleIndexes=function(){this._mVisibleIndexes=new Map;this._getP13nModel().getProperty("/items").forEach(function(e,t){if(e.template||!e.visible){return}if(this._mVisibleIndexes.has(e.kind)){this._mVisibleIndexes.get(e.kind).push(t)}else{var i=[t];this._mVisibleIndexes.set(e.kind,i)}}.bind(this))};O.prototype.onChangeOfTemplateName=function(e){var t=e.getSource().getSelectedKey();var i=this._getCleanP13nItems().find(function(e){return e.name===t});if(i){i.visible=true;e.getSource().setSelectedKey(undefined);this._refreshP13nModel();var n=this._mVisibleIndexes.has(i.kind)?this._mVisibleIndexes.get(i.kind):[];var o=this._getItemIndexByNameAndKind(i.name,i.kind);var r=n[n.length-1];if(o>r){r+=1}if(r&&o!=r){this._moveItemsByIndex(o,r,true)}else{this._fireChangeItems()}this._mInvalidMap.delete(e.getSource().getValue());this._updateVisibleIndexes()}else if(e.getSource()&&e.getSource()instanceof m){if(e.getSource().getValue()!=""){e.getSource().setValueState(b.Error)}else{e.getSource().setValueState(b.None)}}};O.prototype._refreshP13nModel=function(){this._getP13nModel().refresh(true)};O.prototype._getTemplateItems=function(){var e=[];if(!this.getPanelConfig()||!this.getPanelConfig().templateConfig){return[]}this.getPanelConfig().templateConfig.forEach(function(t){var i={template:true,kind:t.kind};e.push(i)});return e};O.prototype._getListControlConfig=function(){var t=e.prototype._getListControlConfig.apply(this,arguments);if(this._bMobileMode){t.columns=[new l({header:new o({text:this._getResourceTextMDC("chart.PERSONALIZATION_DIALOG_COLUMN_DESCRIPTION")+" / "+this._getResourceTextMDC("chart.PERSONALIZATION_DIALOG_COLUMN_ROLE")})}),new l]}else{var i=new l({header:new o({text:this._getResourceTextMDC("chart.PERSONALIZATION_DIALOG_COLUMN_DESCRIPTION")})});var n=new l({header:new o({text:this._getResourceTextMDC("chart.PERSONALIZATION_DIALOG_COLUMN_ROLE")})});t.columns=[i,n,new l]}t.mode="None";return t};O.prototype._getCleanP13nItems=function(){return this._getP13nModel().getProperty("/items").filter(function(e){return!e.template})};O.prototype._fireChangeItems=function(){this.fireChangeItems({items:this._getCleanP13nItems().map(function(e){return{columnKey:e.name,visible:e.visible,index:e.index,role:e.role}})})};O.prototype.onChangeOfRole=function(e){var t=e.getParameter("selectedItem");if(t){var i;if(this._bMobileMode){i=e.getSource().getParent().getParent()}else{i=e.getSource().getParent()}this.fireChange();this._updateEnableOfMoveButtons(i)}this._fireChangeItems()};O.prototype._updateEnableOfMoveButtons=function(e,t){if(!e){return}var i,n=this._getModelItemByTableItem(e);var o=this._getP13nModel().getProperty("/items").indexOf(n);var r=true,s=true;if(!n||n.template){return}i=this._mVisibleIndexes.has(n.kind)?this._mVisibleIndexes.get(n.kind):[];if(o==0||i.indexOf(o)===0){r=false}if(i.indexOf(o)===i.length-1){s=false}this._getMoveTopButton().setEnabled(r);this._getMoveUpButton().setEnabled(r);this._getMoveDownButton().setEnabled(s);this._getMoveBottomButton().setEnabled(s);if(t){this._oFocusInfo={tableItem:e}}};O.prototype._getListItemFromMoveButton=function(e){if(e&&e.getParent()&&e.getParent().getParent()){return e.getParent().getParent()}return undefined};O.prototype._onPressButtonMoveToTop=function(e){var t=this._getListItemFromMoveButton(e.getSource());if(!t){return}var i=this._getP13nModel().getProperty(t.getBindingContextPath());var n=this._mVisibleIndexes.get(i.kind)[0];this._oSelectedItem=t;this._moveSelectedItem(n)};O.prototype._onPressButtonMoveUp=function(e,t){if(!t){t=this._getListItemFromMoveButton(e.getSource())}if(!t){return}var i=this._getP13nModel().getProperty(t.getBindingContextPath());var n=this._mVisibleIndexes.get(i.kind);var o=this._getP13nModel().getProperty("/items").indexOf(i);this._oSelectedItem=t;var r=n[n.indexOf(o)-1];this._moveSelectedItem(r)};O.prototype._onPressButtonMoveDown=function(e,t){if(!t){t=this._getListItemFromMoveButton(e.getSource())}if(!t){return}var i=this._getP13nModel().getProperty(t.getBindingContextPath());var n=this._mVisibleIndexes.get(i.kind);var o=this._getP13nModel().getProperty("/items").indexOf(i);this._oSelectedItem=t;var r=n[n.indexOf(o)+1];this._moveSelectedItem(r)};O.prototype._onPressButtonMoveToBottom=function(e){var t=this._getListItemFromMoveButton(e.getSource());if(!t){return}var i=this._getP13nModel().getProperty(t.getBindingContextPath());var n=this._mVisibleIndexes.get(i.kind)[this._mVisibleIndexes.get(i.kind).length-1];this._oSelectedItem=t;this._moveSelectedItem(n)};O.prototype._moveTableItem=function(e,t){var i=this._getP13nModel().getProperty("/items");var n=i.indexOf(e.getBindingContext(this.P13N_MODEL).getObject());this._moveItemsByIndex(n,t)};O.prototype._moveItemsByIndex=function(e,t,i){var n=this._getP13nModel().getProperty("/items");t=t<=0?0:Math.min(t,n.length-1);if(t==e){return}n.splice(t,0,n.splice(e,1)[0]);n.forEach(function(e,t){if(!e.template){e.index=t}});this._getP13nModel().setProperty("/items",n);if(!i){this._oSelectedItem=this._oListControl.getItems().find(function(e){var i=this._getModelItemByTableItem(e);return i&&i===n[t]}.bind(this));this._updateEnableOfMoveButtons(this._oSelectedItem,!i);this._handleActivated(this._oSelectedItem)}this._fireChangeItems()};O.prototype._getModelItemByTableItem=function(e){return this._getP13nModel().getProperty(e.getBindingContextPath())};O.prototype._getMoveConfigForTableItem=function(e){var t=this._getModelItemByTableItem(e);if(!t){return undefined}return{currentIndex:this._getP13nModel().getProperty("/items").indexOf(t),aggregationRole:t.kind,template:t.template}};O.prototype._getDragDropConfig=function(){if(!this._oDragDropInfo){var t=e.prototype._getDragDropConfig.apply(this,arguments);t.attachDragStart(this._checkDragStart.bind(this));t.attachDragEnter(this._checkDrag.bind(this));t.attachDragEnd(function(){this._oDraggedItem=null}.bind(this));return t}return this._oDragDropInfo};O.prototype._checkDrag=function(e){var t=e.getParameter("target");var i=this._getMoveConfigForTableItem(t);var n=this._getMoveConfigForTableItem(this._oDraggedItem);if(!i||i.template||n.aggregationRole!=i.aggregationRole){e.preventDefault();return}};O.prototype._checkDragStart=function(e){this._oDraggedItem=e.getParameter("target");this._checkDrag(e)};O.prototype._onRearrange=function(e){var t=e.getParameter("draggedControl");var i=e.getParameter("droppedControl");var n=e.getParameter("dropPosition");var o=this._getMoveConfigForTableItem(t);var r=this._getMoveConfigForTableItem(i);if(!o||o.template||!r){e.preventDefault();return}var s=o.currentIndex;var a=r.currentIndex;if(r.template&&n=="After"){e.preventDefault();return}if(!r.template&&(o.aggregationRole!=undefined&&o.aggregationRole!=r.aggregationRole)){e.preventDefault();return}if(s<a){if(n=="Before"&&a!=0){a-=1}}else if(n=="After"){a+=1}this._moveItemsByIndex(s,a);this._refreshP13nModel();this._updateVisibleIndexes()};O.prototype._getMoveTopButton=function(){if(this._oMoveTopBtn&&this._oMoveTopBtn.isDestroyed()){this._oMoveTopBtn=null}return e.prototype._getMoveTopButton.apply(this,arguments)};O.prototype._getMoveUpButton=function(){if(this._oMoveUpButton&&this._oMoveUpButton.isDestroyed()){this._oMoveUpButton=null}return e.prototype._getMoveUpButton.apply(this,arguments)};O.prototype._getMoveDownButton=function(){if(this._oMoveDownButton&&this._oMoveDownButton.isDestroyed()){this._oMoveDownButton=null}return e.prototype._getMoveDownButton.apply(this,arguments)};O.prototype._getMoveBottomButton=function(){if(this._oMoveBottomButton&&this._oMoveBottomButton.isDestroyed()){this._oMoveBottomButton=null}return e.prototype._getMoveBottomButton.apply(this,arguments)};O.prototype._getChartItemTextByKey=function(e){var t=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");var i={Dimension:[{key:s.ChartItemRoleType.category,text:t.getText("chart.PERSONALIZATION_DIALOG_CHARTROLE_CATEGORY")},{key:s.ChartItemRoleType.category2,text:t.getText("chart.PERSONALIZATION_DIALOG_CHARTROLE_CATEGORY2")},{key:s.ChartItemRoleType.series,text:t.getText("chart.PERSONALIZATION_DIALOG_CHARTROLE_SERIES")}],Measure:[{key:s.ChartItemRoleType.axis1,text:t.getText("chart.PERSONALIZATION_DIALOG_CHARTROLE_AXIS1")},{key:s.ChartItemRoleType.axis2,text:t.getText("chart.PERSONALIZATION_DIALOG_CHARTROLE_AXIS2")},{key:s.ChartItemRoleType.axis3,text:t.getText("chart.PERSONALIZATION_DIALOG_CHARTROLE_AXIS3")}]};return i[e]};O.prototype._getResourceTextMDC=function(e,t){this.oResourceBundleMDC=this.oResourceBundleMDC?this.oResourceBundleMDC:sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc");return e?this.oResourceBundleMDC.getText(e,t):this.oResourceBundleMDC};O.prototype.exit=function(){this._fnSort=null;this.oResourceBundleMDC=null;this._bMobileMode=null;return e.prototype.exit.apply(this,arguments)};return O});
//# sourceMappingURL=ChartItemPanel.js.map