/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/ui/thirdparty/jquery"],function(e,jQuery){"use strict";function t(e){return typeof e==="object"&&!Array.isArray(e)&&e!==null}function r(e){return"<ul "+e.attributes.join(" ")+">"}function n(){return"</ul>"}function i(e,t){var r='<li data-id="'+e.id+'" ';if(t){r+="issue"}r+=">";return r}function o(){return"</li>"}function s(e,t){var r='<offset data-indent="'+t+'" >';if(e.content.length>0){r+='<arrow down="true"></arrow>'}else{r+="<place-holder></place-holder>"}r+="</offset>";return r}function a(e,t){var r=e.name.split(".");var n=r[r.length-1];var i=e.name.replace(n,"");var o=t>0?"showNumbOfIssues":"hideNumbOfIssues";return'<tag data-search="'+e.name+e.id+'">'+"&#60;"+"<namespace>"+i+"</namespace>"+n+'<attribute>&#32;id="<attribute-value>'+e.id+'</attribute-value>"</attribute>'+"&#62;"+"</tag>"+"<span class = "+o+">["+t+"  issue(s)] </span>"}function u(e,t){while(e.nodeName!==t){if(e.nodeName==="CONTROL-TREE"){break}e=e.parentNode}return e}function l(e,r){var n=t(r);var i;if(n){i=r}else{i={}}this._ElementTreeContainer=document.getElementById(e);this.onIssueCountClicked=i.onIssueCountClicked?i.onIssueCountClicked:function(){};this.onSelectionChanged=i.onSelectionChanged?i.onSelectionChanged:function(e){};this.onContextMenu=i.onContextMenu?i.onContextMenu:function(e){};this.onHoverChanged=i.onHoverChanged?i.onHoverChanged:function(e){};this.onMouseOut=i.onMouseOut?i.onMouseOut:function(){};this.onInitialRendering=i.onInitialRendering?i.onInitialRendering:function(){};this.filterOptions=jQuery.extend({issues:true,namespaces:true,attributes:true,search:false},i.filter);this.setData(i.data)}l.prototype.init=function(){if(!this._ElementTreeContainer){return}this._createHTML();this._createHandlers();this.onInitialRendering()};l.prototype.getData=function(){return this._data};l.prototype.setData=function(r){var n=this.getData();var i=t(r);if(i===false){e.warning("The parameter should be an Object");return}if(JSON.stringify(n)===JSON.stringify(r)){return}this._data=r;if(this._isFirstRendering===undefined){this.init();this._isFirstRendering=true}else{this._createTree()}return this};l.prototype.setContainerId=function(e){this._ElementTreeContainer=document.getElementById(e);this.init()};l.prototype.getSelectedElement=function(){return this._selectedElement};l.prototype.setSelectedElement=function(t,r){var n;if(typeof t!=="string"){e.warning("Please use a valid string parameter");return}n=this._ElementTreeContainer.querySelector("[data-id='"+t+"']");if(n===null){e.warning("The selected element is not a child of the ElementTree");return}this._selectedElement=n;this._selectTreeElement(n,r);return this};l.prototype.clearSelection=function(){var e=this._ElementTreeContainer.querySelector("[selected]");if(e){e.removeAttribute("selected")}};l.prototype._createHTML=function(){var e;e=this._createFilter();e+=this._createTreeContainer();this._ElementTreeContainer.innerHTML=e;this._setReferences();if(this.getData()!==undefined){this._createTree()}};l.prototype._createFilter=function(){return"<filter>"+"<end>"+(this.filterOptions.search?'<input type="text" search placeholder="Search by ID or type">':"")+(this.filterOptions.search?'<label><input type="checkbox" filter>Filter results <results>(0)</results></label>':"")+(this.filterOptions.issues?'<label><input type="checkbox" issues checked>Issues</label>':"")+(this.filterOptions.namespaces?'<label><input type="checkbox" namespaces checked>Namespaces</label>':"")+(this.filterOptions.attributes?'<label><input type="checkbox" attributes>Attributes</label>':"")+"</end>"+"</filter>"};l.prototype._createTreeContainer=function(){return"<tree show-namespaces show-problematic-elements></tree>"};l.prototype._createTree=function(){var e=this.getData().controls;this._treeContainer.innerHTML=this._createTreeHTML(e);this._provideIndentation()};l.prototype._provideIndentation=function(){var e=this._treeContainer.getElementsByTagName("offset"),t,r;for(r=0;r<e.length;r++){t=e[r];if(t.dataset&&t.dataset.indent){t.style.paddingLeft=t.dataset.indent+"px"}}};l.prototype._createTreeHTML=function(e,t){if(e===undefined||e.length===0){return""}var u="";var l=t||0;var h=++l*10;var c=this;var f=this.getData().issuesIds;e.forEach(function(e){u+=r({attributes:['expanded="true"']});var t=f&&f[e.id]!==undefined?true:false;var p=t?f[e.id].length:0;u+=i({id:e.id},t);u+=s(e,h);u+=a(e,p);u+=o();u+=c._createTreeHTML(e.content,l);u+=n()});return u};l.prototype._toggleCollapse=function(e){var t=u(e.parentNode,"UL");if(e.getAttribute("right")==="true"){e.removeAttribute("right");e.setAttribute("down","true");t.setAttribute("expanded","true")}else if(e.getAttribute("down")==="true"){e.removeAttribute("down");t.removeAttribute("expanded");e.setAttribute("right","true")}};l.prototype._selectTreeElement=function(e,t){var r=u(e,"LI");var n=r.attributes["data-id"];if(!n){return}var i=n.value;if(i===this._ElementTreeContainer.id){return}this._scrollToElement(r,window);if(t){this.onSelectionChanged(i)}this.clearSelection();r.setAttribute("selected","true");if(t){this.onIssueCountClicked(i)}};l.prototype._scrollToElement=function(e,t){var r=this._treeContainer.offsetHeight-this._treeContainer.offsetTop+this._treeContainer.scrollTop;if(e.offsetTop>r||e.offsetTop<this._treeContainer.scrollTop){this._treeContainer.scrollTop=e.offsetTop-t.innerHeight/6}};l.prototype._searchInTree=function(e){var t=this._ElementTreeContainer.querySelectorAll("[data-search]");var r=e.toLocaleLowerCase();var n;for(var i=0;i<t.length;i++){n=t[i].getAttribute("data-search").toLocaleLowerCase();if(n.indexOf(r)!==-1){t[i].parentNode.setAttribute("matching",true)}else{t[i].parentNode.removeAttribute("matching")}}};l.prototype._removeAttributesFromSearch=function(){var e=this._treeContainer.querySelectorAll("[matching]");for(var t=0;t<e.length;t++){e[t].removeAttribute("matching")}};l.prototype._setSearchResultCount=function(e){this._filterContainer.querySelector("results").innerHTML="("+e+")"};l.prototype._onArrowClick=function(e){var t=jQuery(e.target);var r=t.prop("nodeName");if(r==="ARROW"){this._toggleCollapse(e.target)}else{this._selectTreeElement(e.target,true)}};l.prototype._onContextMenu=function(e){e.preventDefault();var t=jQuery(e.target).prop("nodeName");if(t!=="ARROW"){var r=u(e.target,"LI");var n=r.attributes["data-id"];if(n){this.clearSelection();r.setAttribute("selected","true");this.onContextMenu({domElementId:n.value,location:{x:e.pageX,y:e.pageY}})}}};l.prototype._onSearchInput=function(e){var t=e.target;var r;if(t.getAttribute("search")!==null){if(t.value.length!==0){this._searchInTree(t.value)}else{this._removeAttributesFromSearch("matching")}r=this._treeContainer.querySelectorAll("[matching]").length;this._setSearchResultCount(r)}};l.prototype._onSearchEvent=function(e){var t;if(e.target.value.length===0){this._removeAttributesFromSearch("matching");t=this._treeContainer.querySelectorAll("[matching]").length;this._setSearchResultCount(t)}};l.prototype._onOptionsChange=function(e){var t=e.target;if(t.getAttribute("filter")!==null){if(t.checked){this._treeContainer.setAttribute("show-filtered-elements",true)}else{this._treeContainer.removeAttribute("show-filtered-elements");var r=this._ElementTreeContainer.querySelector("[selected]");if(r){this._scrollToElement(r,window)}}}if(t.getAttribute("issues")!==null){if(t.checked){this._treeContainer.setAttribute("show-problematic-elements",true)}else{this._treeContainer.removeAttribute("show-problematic-elements")}}if(t.getAttribute("namespaces")!==null){if(t.checked){this._treeContainer.setAttribute("show-namespaces",true)}else{this._treeContainer.removeAttribute("show-namespaces")}}if(t.getAttribute("attributes")!==null){if(t.checked){this._treeContainer.setAttribute("show-attributes",true)}else{this._treeContainer.removeAttribute("show-attributes")}}};l.prototype._onTreeElementMouseHover=function(e){var t=u(e.target,"LI");var r=this._ElementTreeContainer.querySelector("[hover]");if(r){r.removeAttribute("hover")}t.setAttribute("hover","true");var n=t.attributes["data-id"];this.onHoverChanged(n&&n.value)};l.prototype._onTreeElementMouseOut=function(e){this.onMouseOut()};l.prototype._createHandlers=function(){this._treeContainer.onclick=this._onArrowClick.bind(this);this._treeContainer.oncontextmenu=this._onContextMenu.bind(this);this._filterContainer.onkeyup=this._onSearchInput.bind(this);this._filterContainer.onsearch=this._onSearchEvent.bind(this);this._filterContainer.onchange=this._onOptionsChange.bind(this);this._ElementTreeContainer.onmouseover=this._onTreeElementMouseHover.bind(this);this._ElementTreeContainer.onmouseout=this._onTreeElementMouseOut.bind(this)};l.prototype._setReferences=function(){this._filterContainer=this._ElementTreeContainer.querySelector("filter");this._treeContainer=this._ElementTreeContainer.querySelector("tree")};return l});
//# sourceMappingURL=ElementTree.js.map