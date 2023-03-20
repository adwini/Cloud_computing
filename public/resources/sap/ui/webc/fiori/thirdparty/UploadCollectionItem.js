sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/main/thirdparty/types/ListItemType","sap/ui/webc/main/thirdparty/Button","sap/ui/webc/main/thirdparty/Input","sap/ui/webc/main/thirdparty/Label","sap/ui/webc/main/thirdparty/Link","sap/ui/webc/main/thirdparty/ProgressIndicator","sap/ui/webc/main/thirdparty/ListItem","sap/ui/webc/common/thirdparty/base/types/Integer","sap/ui/webc/common/thirdparty/base/util/getFileExtension","sap/ui/webc/common/thirdparty/base/Render","sap/ui/webc/common/thirdparty/base/Keys","./types/UploadState","sap/ui/webc/common/thirdparty/icons/refresh","sap/ui/webc/common/thirdparty/icons/stop","sap/ui/webc/common/thirdparty/icons/edit","./generated/i18n/i18n-defaults","./generated/templates/UploadCollectionItemTemplate.lit","./generated/themes/UploadCollectionItem.css"],function(e,t,i,n,a,o,r,s,u,l,d,p,c,f,h,m,g,T,_,y){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;i=E(i);n=E(n);a=E(a);o=E(o);r=E(r);s=E(s);u=E(u);l=E(l);d=E(d);f=E(f);_=E(_);y=E(y);function E(e){return e&&e.__esModule?e:{default:e}}const B={tag:"ui5-upload-collection-item",languageAware:true,properties:{file:{type:Object,defaultValue:null},fileName:{type:String},fileNameClickable:{type:Boolean},disableDeleteButton:{type:Boolean},hideDeleteButton:{type:Boolean},hideRetryButton:{type:Boolean},hideTerminateButton:{type:Boolean},progress:{type:l.default,defaultValue:0},uploadState:{type:f.default,defaultValue:f.default.Ready},_editing:{type:Boolean}},slots:{default:{type:Node},thumbnail:{type:HTMLElement}},events:{"file-name-click":{},rename:{},terminate:{},retry:{},"_focus-requested":{}}};class I extends u.default{static get metadata(){return B}static get styles(){return[u.default.styles,y.default]}static get template(){return _.default}static get dependencies(){return[...u.default.dependencies,n.default,a.default,r.default,o.default,s.default]}static async onDefine(){[I.i18nFioriBundle]=await Promise.all([(0,t.getI18nBundle)("@ui5/webcomponents-fiori"),super.onDefine()])}onBeforeRendering(){}async _initInputField(){await(0,p.renderFinished)();const e=this.shadowRoot.getElementById("ui5-uci-edit-input");e.value=this._fileNameWithoutExtension;await(0,p.renderFinished)();const t=e.getFocusDomRef();if(t){t.focus();t.setSelectionRange(0,this._fileNameWithoutExtension.length)}}async onDetailClick(e){super.onDetailClick(e);this._editing=true;await this._initInputField()}_onDetailKeyup(e){if((0,c.isSpace)(e)){this.onDetailClick(e)}}_onInputFocusin(e){e.stopPropagation()}_onInputKeyDown(e){if((0,c.isEscape)(e)){this._onRenameCancel(e)}else if((0,c.isEnter)(e)){this._onRename()}else if((0,c.isSpace)(e)){e.stopImmediatePropagation()}}_onRename(e){const t=this.shadowRoot.getElementById("ui5-uci-edit-input");this.fileName=t.value+this._fileExtension;this.fireEvent("rename");this._editing=false;this._focus()}_onRenameKeyup(e){if((0,c.isSpace)(e)){this._onRename(e)}}async _onRenameCancel(e){this._editing=false;if((0,c.isEscape)(e)){await(0,p.renderFinished)();this.shadowRoot.getElementById(`${this._id}-editing-button`).focus()}else{this._focus()}}_onRenameCancelKeyup(e){if((0,c.isSpace)(e)){this._onRenameCancel(e)}}_focus(){this.fireEvent("_focus-requested")}_onFileNameClick(e){this.fireEvent("file-name-click")}_onRetry(e){this.fireEvent("retry")}_onRetryKeyup(e){if((0,c.isSpace)(e)){this._onRetry(e)}}_onTerminate(e){this.fireEvent("terminate")}_onTerminateKeyup(e){if((0,c.isSpace)(e)){this._onTerminate(e)}}getFocusDomRef(){return this.getDomRef()}get list(){return this.assignedSlot.parentElement}get classes(){const e=super.classes;return{main:{...e.main,"ui5-uci-root":true,"ui5-uci-root-editing":this._editing,"ui5-uci-root-uploading":this.uploadState===f.default.Uploading}}}get renderDeleteButton(){return!this.hideDeleteButton}get placeSelectionElementAfter(){return true}get placeSelectionElementBefore(){return false}get _fileNameWithoutExtension(){return this.fileName.substring(0,this.fileName.length-this._fileExtension.length)}get _fileExtension(){return(0,d.default)(this.fileName)}get _renameBtnText(){return I.i18nFioriBundle.getText(T.UPLOADCOLLECTIONITEM_RENAMEBUTTON_TEXT)}get _cancelRenameBtnText(){return I.i18nFioriBundle.getText(T.UPLOADCOLLECTIONITEM_CANCELBUTTON_TEXT)}get _showProgressIndicator(){return this.uploadState!==f.default.Complete}get _progressText(){if(this.uploadState===f.default.Uploading){return I.i18nFioriBundle.getText(T.UPLOADCOLLECTIONITEM_UPLOADING_STATE)}if(this.uploadState===f.default.Error){return I.i18nFioriBundle.getText(T.UPLOADCOLLECTIONITEM_ERROR_STATE)}return I.i18nFioriBundle.getText(T.UPLOADCOLLECTIONITEM_READY_STATE)}get _showRetry(){return!this.hideRetryButton&&this.uploadState===f.default.Error}get _showTerminate(){return!this.hideTerminateButton&&this.uploadState===f.default.Uploading}get _retryButtonTooltip(){return I.i18nFioriBundle.getText(T.UPLOADCOLLECTIONITEM_RETRY_BUTTON_TEXT)}get _terminateButtonTooltip(){return I.i18nFioriBundle.getText(T.UPLOADCOLLECTIONITEM_TERMINATE_BUTTON_TEXT)}get _editButtonTooltip(){return I.i18nFioriBundle.getText(T.UPLOADCOLLECTIONITEM_EDIT_BUTTON_TEXT)}get valueStateName(){if(this.uploadState===f.default.Error){return"Error"}if(this.uploadState===f.default.Ready||this.uploadState===f.default.Uploading){return"Information"}return undefined}get typeDetail(){return false}get showEditButton(){return this.type===i.default.Detail}}I.define();var R=I;e.default=R});
//# sourceMappingURL=UploadCollectionItem.js.map