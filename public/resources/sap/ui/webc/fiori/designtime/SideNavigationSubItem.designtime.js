/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define([],function(){"use strict";var e=function(e){return Array.from(e.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-item-ui5")).find(function(t){return t.associatedItem===e.getDomRef()})};return{name:{singular:"SIDE_NAVIGATION_SUB_ITEM_NAME",plural:"SIDE_NAVIGATION_ITEM_SUB_PLURAL"},domRef:function(t){var r=Array.from(t.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[0].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));return r.find(function(r){return r.treeItem===e(t)})},actions:{rename:{changeType:"rename",domRef:function(t){var r=Array.from(t.getParent().getParent().getDomRef().shadowRoot.querySelectorAll("ui5-tree-ui5")[0].shadowRoot.querySelectorAll("ui5-li-tree-ui5"));return r.find(function(r){return r.treeItem===e(t)}).shadowRoot.querySelector(".ui5-li-title")},getTextMutators:function(e){return{getText:function(){return e.getText()},setText:function(t){e.setText(t)}}}}}}});
//# sourceMappingURL=SideNavigationSubItem.designtime.js.map