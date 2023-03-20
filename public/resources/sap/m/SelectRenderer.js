/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Renderer","sap/ui/core/IconPool","sap/m/library","sap/ui/Device","sap/ui/core/library"],function(e,t,a,i,n){"use strict";var s=n.TextDirection;var r=n.ValueState;var l=a.SelectType;var d={apiVersion:2};d.CSS_CLASS="sapMSlt";d.render=function(e,t){var a=t.getType(),n=t.getAutoAdjustWidth(),s=t.getEditable(),o=t.getEnabled(),c=t.getWidth(),g=c.indexOf("%")>-1,u=n||c==="auto"||g,S=d.CSS_CLASS,f=o&&s;e.openStart("div",t);this.addClass(e,t);e.class(S);e.class(S+t.getType());if(!o){e.class(S+"Disabled")}else if(!s){e.class(S+"Readonly")}if(u&&a===l.Default){e.class(S+"MinWidth")}if(n){e.class(S+"AutoAdjustedWidth")}else{e.style("width",c)}if(t.getIcon()){e.class(S+"WithIcon")}if(f&&i.system.desktop){e.class(S+"Hoverable")}e.class(S+"WithArrow");if(t.getValueState()!==r.None&&f){this.addValueStateClasses(e,t)}e.style("max-width",t.getMaxWidth());if(o){e.attr("tabindex","-1")}e.openEnd();this.renderFocusElement(e,t);this.renderHiddenInput(e,t);this.renderLabel(e,t);switch(a){case l.Default:this.renderArrow(e,t);break;case l.IconOnly:this.renderIcon(e,t);break}var p=t.getList();if(t._isShadowListRequired()&&p){this.renderShadowList(e,p)}this.renderAccessibilityDomNodes(e,t);e.close("div")};d.renderFocusElement=function(e,t){var a=t.getSelectedItem(),i=t.getType()===l.IconOnly;e.openStart("div",t.getId()+"-hiddenSelect");this.writeAccessibilityState(e,t);e.class("sapUiPseudoInvisibleText");e.class(d.CSS_CLASS+"HiddenSelect");if(t.getEnabled()){e.attr("tabindex","0")}this.renderTooltip(e,t);e.openEnd();if(a&&!i){e.text(a.getText())}e.close("div")};d.renderTooltip=function(e,a){var i,n=a.getTooltip_AsString(),s=a.getType()===l.IconOnly;if(!n&&s){i=t.getIconInfo(a.getIcon());if(i){n=i.text}}if(!n){return}e.attr("title",n);if(s){e.attr("aria-label",n)}};d.renderHiddenInput=function(e,t){e.voidStart("input",t.getId()+"-hiddenInput");e.attr("name",t.getName());e.attr("value",t.getSelectedKey());e.attr("aria-readonly","true");e.attr("tabindex","-1");e.attr("aria-hidden","true");e.attr("type","hidden");e.class("sapUiPseudoInvisibleText");e.voidEnd()};d.renderLabel=function(t,a){var i=a.getSelectedItem(),n=a.getTextDirection(),o=e.getTextAlign(a.getTextAlign(),n),c=d.CSS_CLASS,g=a.getEnabled()&&a.getEditable(),u=a.getTooltip_AsString();t.openStart("span",a.getId()+"-label");t.attr("aria-hidden",true);t.class(c+"Label");if(u){t.attr("title",u)}if(a.getValueState()!==r.None&&g){t.class(c+"LabelState");t.class(c+"Label"+a.getValueState())}if(a.getType()===l.IconOnly){t.class("sapUiPseudoInvisibleText")}if(n!==s.Inherit){t.attr("dir",n.toLowerCase())}t.style("text-align",o);t.openEnd();if(a.getType()!==l.IconOnly){t.renderControl(a._getValueIcon());t.openStart("span",a.getId()+"-labelText");t.class("sapMSelectListItemText");t.openEnd();t.text(i&&i.getParent()?i.getText():null);t.close("span")}t.close("span")};d.renderArrow=function(e,t){var a=d.CSS_CLASS,i=t.getTooltip_AsString();e.openStart("span",t.getId()+"-arrow");e.attr("aria-hidden",true);e.class(a+"Arrow");if(t.getValueState()!==r.None){e.class(a+"ArrowState")}if(i){e.attr("title",i)}e.openEnd().close("span")};d.renderIcon=function(e,a){var i=a.getTooltip_AsString(),n=t.getIconInfo(a.getIcon()),s=n&&n.text;e.icon(a.getIcon(),d.CSS_CLASS+"Icon",{id:a.getId()+"-icon",title:i||s||null})};d.renderShadowList=function(e,t){var a=t.getRenderer();a.writeOpenListTag(e,t,{elementData:false});this.renderShadowItems(e,t);a.writeCloseListTag(e,t)};d.renderShadowItems=function(e,t){var a=t.getRenderer(),i=t.getSelectableItems(),n=i.length,s=t.getSelectedItem();for(var r=0;r<n;r++){a.renderItem(e,t,i[r],{selected:s===i[r],setsize:n,posinset:r+1,elementData:false})}};d.addClass=function(e,t){};d.addValueStateClasses=function(e,t){e.class(d.CSS_CLASS+"State");e.class(d.CSS_CLASS+t.getValueState())};d.getAriaRole=function(e){switch(e.getType()){case l.Default:return"combobox";case l.IconOnly:return"button"}};d.writeAccessibilityState=function(e,a){var i=a.getValueState(),n=a.getSelectedItem(),s=a.getType()===l.IconOnly,d=a._getValueIcon(),o=a.getEnabled()&&a.getEditable(),c=[],g=[],u,S,f,p;a.getLabels().forEach(function(e){if(e&&e.getId){c.push(e.getId())}});if(a.isOpen()&&n&&n.getDomRef()){f=n.getId()}if(n&&!n.getText()&&n.getIcon&&n.getIcon()){var I=t.getIconInfo(n.getIcon());if(I){p=I.text||I.name}}if(i!==r.None&&o){S=a.getValueStateMessageId()+"-sr"}if(p&&d){g.push(d.getId())}if(c.length){g=g.concat(c)}u={value:g.join(" "),append:true};e.accessibilityState(null,{role:this.getAriaRole(a),roledescription:s?undefined:a._sAriaRoleDescription,readonly:s?undefined:a.getEnabled()&&!a.getEditable(),required:a._isRequired()||undefined,disabled:!a.getEnabled()||undefined,expanded:a.isOpen(),invalid:a.getValueState()===r.Error&&o?true:undefined,labelledby:s||u.value===""?undefined:u,describedby:S,activedescendant:f,haspopup:a.getEditable()?"listbox":undefined})};d.renderAccessibilityDomNodes=function(e,t){var a=t.getValueState(),i,n=t.getEnabled()&&t.getEditable();if(a===r.None||!n){return}i=t._getValueStateText();e.openStart("div",t.getValueStateMessageId()+"-sr").class("sapUiPseudoInvisibleText").attr("aria-hidden",true).openEnd().text(i).close("div")};return d},true);
//# sourceMappingURL=SelectRenderer.js.map