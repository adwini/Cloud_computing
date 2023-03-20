/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./DragDropBase"],function(t){"use strict";var e=t.extend("sap.ui.core.dnd.DragInfo",{metadata:{library:"sap.ui.core",interfaces:["sap.ui.core.dnd.IDragInfo"],properties:{sourceAggregation:{type:"string",defaultValue:null}},events:{dragStart:{allowPreventDefault:true},dragEnd:{}}}});e.Mixin=function(){this.isDraggable=function(t){if(!this.getEnabled()){return false}var e=this.getParent();if(!e){return false}var r=this.getSourceAggregation();if(!this.checkMetadata(e,r,"draggable")){return false}if(e===t&&!r){return true}if(t.getParent()===e&&r===t.sParentAggregationName){return true}return false};this.fireDragStart=function(t){if(!t||!t.dragSession){return}var e=t.dragSession;return this.fireEvent("dragStart",{dragSession:e,browserEvent:t.originalEvent,target:e.getDragControl()},true)};this.fireDragEnd=function(t){if(!t||!t.dragSession){return}var e=t.dragSession;return this.fireEvent("dragEnd",{dragSession:e,browserEvent:t.originalEvent,target:e.getDragControl()})};this.setEnabled=function(t){this.setProperty("enabled",t,false);this.invalidateDraggables();return this};this.setParent=function(){t.prototype.setParent.apply(this,arguments);this.invalidateDraggables();return this};this.setSourceAggregation=function(t){var e=this.getSourceAggregation();if(e==t){return this}e&&this.invalidateDraggables();this.setProperty("sourceAggregation",t,false);this.invalidateDraggables();return this};this.invalidateDraggables=function(){var t=this.getParent();if(t&&t.bOutput==true){var e=this.getSourceAggregation();if(e){[].concat(t.getAggregation(e)).forEach(function(t){if(t&&t.bOutput==true){t.invalidate()}})}else{t.invalidate()}}}};e.Mixin.apply(e.prototype);return e});
//# sourceMappingURL=DragInfo.js.map