/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Configuration"],function(t){"use strict";var e={apiVersion:2};e.render=function(e,i){var r=i.getPercentage();if(r<0){r=0}if(r>100){r=100}var a=Math.round(r*58/100);var s=58-a;var n=r.toString();e.openStart("div",i);e.attr("tabindex","0");if(i.getTooltip_AsString()){e.attr("title",i.getTooltip_AsString())}else{e.attr("title",n)}if(t.getAccessibility()){e.attr("role","progressbar");e.accessibilityState(i,{valuemin:"0%"});e.accessibilityState(i,{valuemax:"100%"});e.accessibilityState(i,{valuenow:r+"%"})}e.class("sapUiVerticalProgressOuterContainer");e.openEnd();e.openStart("div",i.getId()+"-bar");e.class("sapUiVerticalProgressInnerContainer");e.style("top",s+"px");e.style("height",a+"px");e.openEnd();e.close("div");e.close("div")};return e},true);
//# sourceMappingURL=VerticalProgressIndicatorRenderer.js.map