sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-li-custom", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(context._id)}" class="${(0, _LitRenderer.ifDefined)(context.overflowClasses)}" type="${(0, _LitRenderer.ifDefined)(context.overflowState)}" aria-disabled="${(0, _LitRenderer.ifDefined)(context.effectiveDisabled)}" aria-selected="${(0, _LitRenderer.ifDefined)(context.effectiveSelected)}" aria-labelledby="${(0, _LitRenderer.ifDefined)(context.ariaLabelledBy)}" ._realTab="${(0, _LitRenderer.ifDefined)(context)}" style="${(0, _LitRenderer.styleMap)(context._style)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${context.semanticIconName ? block1(context, tags, suffix) : undefined}${context.icon ? block2(context, tags, suffix) : undefined}${(0, _LitRenderer.ifDefined)(context.text)}${context.additionalText ? block3(context, tags, suffix) : undefined}</div></div></${(0, _LitRenderer.scopeTag)("ui5-li-custom", tags, suffix)}>${(0, _LitRenderer.repeat)(context.subTabs, (item, index) => item._id || index, (item, index) => block4(item, index, context, tags, suffix))} ` : (0, _LitRenderer.html)`<ui5-li-custom id="${(0, _LitRenderer.ifDefined)(context._id)}" class="${(0, _LitRenderer.ifDefined)(context.overflowClasses)}" type="${(0, _LitRenderer.ifDefined)(context.overflowState)}" aria-disabled="${(0, _LitRenderer.ifDefined)(context.effectiveDisabled)}" aria-selected="${(0, _LitRenderer.ifDefined)(context.effectiveSelected)}" aria-labelledby="${(0, _LitRenderer.ifDefined)(context.ariaLabelledBy)}" ._realTab="${(0, _LitRenderer.ifDefined)(context)}" style="${(0, _LitRenderer.styleMap)(context._style)}"><div class="ui5-tab-overflow-itemContent-wrapper"><div class="ui5-tab-overflow-itemContent">${context.semanticIconName ? block1(context, tags, suffix) : undefined}${context.icon ? block2(context, tags, suffix) : undefined}${(0, _LitRenderer.ifDefined)(context.text)}${context.additionalText ? block3(context, tags, suffix) : undefined}</div></div></ui5-li-custom>${(0, _LitRenderer.repeat)(context.subTabs, (item, index) => item._id || index, (item, index) => block4(item, index, context, tags, suffix))} `;

  const block1 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} class="${(0, _LitRenderer.ifDefined)(context.semanticIconClasses)}" name="${(0, _LitRenderer.ifDefined)(context.semanticIconName)}"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-icon class="${(0, _LitRenderer.ifDefined)(context.semanticIconClasses)}" name="${(0, _LitRenderer.ifDefined)(context.semanticIconName)}"></ui5-icon>`;

  const block2 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)} name="${(0, _LitRenderer.ifDefined)(context.icon)}"></${(0, _LitRenderer.scopeTag)("ui5-icon", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-icon name="${(0, _LitRenderer.ifDefined)(context.icon)}"></ui5-icon>`;

  const block3 = (context, tags, suffix) => (0, _LitRenderer.html)` (${(0, _LitRenderer.ifDefined)(context.additionalText)}) `;

  const block4 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`${(0, _LitRenderer.ifDefined)(item.overflowPresentation)}`;

  var _default = block0;
  _exports.default = _default;
});