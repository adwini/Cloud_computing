sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="${(0, _LitRenderer.classMap)(context.classes.colorPaletteRoot)}" @click=${context._onclick} @keyup=${context._onkeyup} @keydown=${context._onkeydown}>${context.showDefaultColor ? block1(context, tags, suffix) : undefined}<div class="ui5-cp-item-container" role="region" aria-label="${(0, _LitRenderer.ifDefined)(context.colorContainerLabel)}" @keydown="${context._onColorContainerKeyDown}">${(0, _LitRenderer.repeat)(context.displayedColors, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix))}</div>${context._showMoreColors ? block3(context, tags, suffix) : undefined}${context.showRecentColors ? block4(context, tags, suffix) : undefined}</div>`;

  const block1 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="ui5-cp-default-color-button-wrapper"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} class="ui5-cp-default-color-button" design="Transparent" @click=${context._onDefaultColorClick} @keydown=${context._onDefaultColorKeyDown}>Default color</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}><div class="ui5-cp-separator"></div></div>` : (0, _LitRenderer.html)`<div class="ui5-cp-default-color-button-wrapper"><ui5-button class="ui5-cp-default-color-button" design="Transparent" @click=${context._onDefaultColorClick} @keydown=${context._onDefaultColorKeyDown}>Default color</ui5-button><div class="ui5-cp-separator"></div></div>`;

  const block2 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`<slot name="${(0, _LitRenderer.ifDefined)(item._individualSlot)}"></slot>`;

  const block3 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} design="Transparent" class="ui5-cp-more-colors" @click="${context._openMoreColorsDialog}" @keydown=${context._onMoreColorsKeyDown}>${(0, _LitRenderer.ifDefined)(context.colorPaleteMoreColorsText)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div>` : (0, _LitRenderer.html)`<div class="ui5-cp-more-colors-wrapper"><div class="ui5-cp-separator"></div><ui5-button design="Transparent" class="ui5-cp-more-colors" @click="${context._openMoreColorsDialog}" @keydown=${context._onMoreColorsKeyDown}>${(0, _LitRenderer.ifDefined)(context.colorPaleteMoreColorsText)}</ui5-button></div>`;

  const block4 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="ui5-cp-recent-colors-wrapper"><div class="ui5-cp-separator"></div><div class="ui5-cp-recent-colors-container" @keydown="${context._onRecentColorsContainerKeyDown}">${(0, _LitRenderer.repeat)(context.recentColors, (item, index) => item._id || index, (item, index) => block5(item, index, context, tags, suffix))}</div></div>`;

  const block5 = (item, index, context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-color-palette-item", tags, suffix)} value="${(0, _LitRenderer.ifDefined)(item)}"></${(0, _LitRenderer.scopeTag)("ui5-color-palette-item", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-color-palette-item value="${(0, _LitRenderer.ifDefined)(item)}"></ui5-color-palette-item>`;

  var _default = block0;
  _exports.default = _default;
});