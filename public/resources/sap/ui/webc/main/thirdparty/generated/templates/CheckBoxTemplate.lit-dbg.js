sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="ui5-checkbox-root ${(0, _LitRenderer.classMap)(context.classes.main)}" role="checkbox" aria-checked="${(0, _LitRenderer.ifDefined)(context.ariaChecked)}" aria-readonly="${(0, _LitRenderer.ifDefined)(context.ariaReadonly)}" aria-disabled="${(0, _LitRenderer.ifDefined)(context.ariaDisabled)}" aria-label="${(0, _LitRenderer.ifDefined)(context.ariaLabelText)}" aria-labelledby="${(0, _LitRenderer.ifDefined)(context.ariaLabelledBy)}" aria-describedby="${(0, _LitRenderer.ifDefined)(context.ariaDescribedBy)}" aria-required="${(0, _LitRenderer.ifDefined)(context.required)}" tabindex="${(0, _LitRenderer.ifDefined)(context.tabIndex)}" @mousedown="${context._onmousedown}" @mouseup="${context._onmouseup}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" @click="${context._onclick}" @focusout="${context._onfocusout}"><div id="${(0, _LitRenderer.ifDefined)(context._id)}-CbBg" class="ui5-checkbox-inner">${context.isCompletelyChecked ? block1(context, tags, suffix) : undefined}<input id="${(0, _LitRenderer.ifDefined)(context._id)}-CB" type='checkbox' ?checked="${context.checked}" ?readonly="${context.readonly}" ?disabled="${context.disabled}" tabindex="-1" aria-hidden="true" data-sap-no-tab-ref /></div>${context.text ? block2(context, tags, suffix) : undefined}${context.hasValueState ? block3(context, tags, suffix) : undefined}<slot name="formSupport"></slot></div>`;

  const block1 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} aria-hidden="true" name="accept" class="ui5-checkbox-icon"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-icon aria-hidden="true" name="accept" class="ui5-checkbox-icon"></ui5-icon>`;

  const block2 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-label", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(context._id)}-label" class="ui5-checkbox-label" wrapping-type="${(0, _LitRenderer.ifDefined)(context.wrappingType)}">${(0, _LitRenderer.ifDefined)(context.text)}</${(0, _LitRenderer.scopeTag)("ui5-label", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-label id="${(0, _LitRenderer.ifDefined)(context._id)}-label" class="ui5-checkbox-label" wrapping-type="${(0, _LitRenderer.ifDefined)(context.wrappingType)}">${(0, _LitRenderer.ifDefined)(context.text)}</ui5-label>`;

  const block3 = (context, tags, suffix) => (0, _LitRenderer.html)`<span id="${(0, _LitRenderer.ifDefined)(context._id)}-descr" class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(context.valueStateText)}</span>`;

  var _default = block0;
  _exports.default = _default;
});