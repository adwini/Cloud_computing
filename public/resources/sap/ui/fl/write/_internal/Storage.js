/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/fl/initial/_internal/StorageUtils","sap/ui/fl/write/_internal/StorageFeaturesMerger","sap/ui/fl/apply/_internal/flexObjects/States","sap/base/util/ObjectPath"],function(e,t,n,r){"use strict";var i="sap/ui/fl/write/_internal/connectors/";function a(){return e.getConnectors(i,false)}function o(e,t){var n=t.filter(function(t){return t.layers.indexOf("ALL")!==-1||t.layers.indexOf(e)!==-1});if(n.length===1){return n[0]}if(n.length===0){throw new Error("No Connector configuration could be found to write into layer: "+e)}if(n.length>1){throw new Error("sap.ui.core.Configuration 'flexibilityServices' has a misconfiguration: Multiple Connector configurations were found to write into layer: "+e)}}function u(t){var n=t.map(function(t){return t.writeConnectorModule.loadFeatures({url:t.url}).then(function(e){return{features:e,layers:t.layers}}).catch(e.logAndResolveDefault.bind(null,{features:{},layers:t.layers},t,"loadFeatures"))});return Promise.all(n)}function s(e){if(!e){return Promise.reject("No layer was provided")}return a().then(o.bind(this,e))}function d(e){if(e.draft){return new Promise(function(t,n){sap.ui.require(["sap/ui/fl/write/api/FeaturesAPI"],function(r){r.isVersioningEnabled(e.layer).then(function(r){if(r){t()}else{n("Draft is not supported for the given layer: "+e.layer)}})})})}return Promise.resolve()}function l(e,t){var r=t.filter(function(t){return t.getState()===n.NEW&&t.getFileType()===e.getFileType()});var i=r.findIndex(function(t){return t.getId()===e.getId()});return i}function c(e){var t;if(e.allChanges&&e.allChanges.length&&e.condensedChanges){t={namespace:e.allChanges[0].convertToFileContent().namespace,layer:e.layer};var r=0;var i=false;e.allChanges.forEach(function(a,o){var u=a.getFileType();if(u==="ctrl_variant"){return}var s=l(a,e.condensedChanges);if(a.condenserState){var d=false;if(a.condenserState==="delete"){if(a.getState()===n.PERSISTED){if(!t.delete){t.delete={}}if(!t.delete[u]){t.delete[u]=[]}t.delete[u].push(a.getId())}r++}else if(e.condensedChanges.length){d=e.allChanges[o].getId()!==e.condensedChanges[o-r].getId()}if((a.condenserState==="select"&&a.getState()!==n.NEW||a.condenserState==="update")&&d&&!i){var c=e.condensedChanges.slice(o-r).map(function(e){return e.getId()});if(!t.reorder){t.reorder={}}if(!t.reorder[u]){t.reorder[u]=[]}t.reorder[u]=c;i=true}if(a.condenserState==="select"&&a.getState()===n.NEW){if(!t.create){t.create={}}if(!t.create[u]){t.create[u]=[]}t.create[u][s]={};t.create[u][s][a.getId()]=a.convertToFileContent()}else if(a.condenserState==="update"){if(!t.update){t.update={}}if(!t.update[u]){t.update[u]=[]}var f=t.update[u].length;t.update[u][f]={};t.update[u][f][a.getId()]={content:a.getContent()}}delete a.condenserState}else if(a.getState()===n.NEW){if(!t.create){t.create={}}if(!t.create[u]){t.create[u]=[]}t.create[u][s]={};t.create[u][s][a.getId()]=a.convertToFileContent()}})}return t}function f(e,t){return d(t).then(s.bind(undefined,t.layer)).then(function(n){t.url=n.url;var i=r.get(e,n.writeConnectorModule);return i.call(n.writeConnectorModule,t)})}var g={};g.write=function(e){return f("write",e)};g.condense=function(e){var t=c(e);if(!t){return Promise.reject("No changes were provided")}if(t.create||t.reorder||t.update||t.delete){e.flexObjects=t;return f("condense",e)}return Promise.resolve()};g.remove=function(e){return f("remove",e)};g.update=function(e){return f("update",e)};g.reset=function(e){return f("reset",e)};g.getFlexInfo=function(e){return f("getFlexInfo",e)};g.getContexts=function(e){return f("getContexts",e)};g.loadContextDescriptions=function(e){return f("loadContextDescriptions",e)};g.isContextSharingEnabled=function(e){return f("isContextSharingEnabled",e)};g.loadFeatures=function(){return a().then(u).then(t.mergeResults)};g.publish=function(e){return f("publish",e)};g.contextBasedAdaptation={create:function(e){return a().then(f.bind(undefined,"contextBasedAdaptation.create",e))}};g.versions={load:function(e){return a().then(f.bind(undefined,"versions.load",e))},activate:function(e){return a().then(f.bind(undefined,"versions.activate",e))},discardDraft:function(e){return a().then(f.bind(undefined,"versions.discardDraft",e))},publish:function(e){return a().then(f.bind(undefined,"versions.publish",e))}};g.translation={getSourceLanguages:function(e){return a().then(f.bind(undefined,"translation.getSourceLanguages",e))},getTexts:function(e){return a().then(f.bind(undefined,"translation.getTexts",e))},postTranslationTexts:function(e){return a().then(f.bind(undefined,"translation.postTranslationTexts",e))}};return g});
//# sourceMappingURL=Storage.js.map