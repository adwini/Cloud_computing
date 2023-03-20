/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/Log","sap/base/util/Version","sap/ui/thirdparty/jquery","sap/m/library","sap/ui/VersionInfo"],function(i,t,jQuery,n,r){"use strict";var e={openTopic:function(i){r.load({library:"sap.ui.core"}).then(function(n){var r="",e="",o=n.version,a=t(o).getMajor(),s=t(o).getMinor(),u=window.location.origin;if(s%2!==0){s--}e+=String(a)+"."+String(s);if(u.indexOf("veui5infra")!==-1){r=u+"/sapui5-sdk-internal/#/topic/"+i}else{r=u+"/demokit-"+e+"/#/topic/"+i}this._redirectToUrlWithFallback(r,i)}.bind(this))},_redirectToUrlWithFallback:function(t,r){this._pingUrl(t).then(function i(){n.URLHelper.redirect(t,true)},function e(){i.info("Support Assistant tried to load documentation link in "+t+"but fail");t="https://ui5.sap.com/#/topic/"+r;n.URLHelper.redirect(t,true)})},_pingUrl:function(i){return jQuery.ajax({type:"HEAD",async:true,context:this,url:i})}};return e});
//# sourceMappingURL=Documentation.js.map