sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)} class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement-type="Bottom" horizontal-align="Left" _hide-header @keydown="${context._onkeydown}"><${(0, _LitRenderer.scopeTag)("ui5-list", tags, suffix)} mode="SingleSelect" separators="None" @ui5-selection-change="${(0, _LitRenderer.ifDefined)(context._onOverflowListItemSelect)}">${(0, _LitRenderer.repeat)(context._overflowItemsData, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix))}</${(0, _LitRenderer.scopeTag)("ui5-list", tags, suffix)}><div slot="footer" class="ui5-breadcrumbs-popover-footer"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} design="Transparent" @click="${context._closeRespPopover}">${(0, _LitRenderer.ifDefined)(context._cancelButtonText)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></div></${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-responsive-popover class="ui5-breadcrumbs-popover" hide-arrow content-only-on-desktop placement-type="Bottom" horizontal-align="Left" _hide-header @keydown="${context._onkeydown}"><ui5-list mode="SingleSelect" separators="None" @ui5-selection-change="${(0, _LitRenderer.ifDefined)(context._onOverflowListItemSelect)}">${(0, _LitRenderer.repeat)(context._overflowItemsData, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix))}</ui5-list><div slot="footer" class="ui5-breadcrumbs-popover-footer"><ui5-button design="Transparent" @click="${context._closeRespPopover}">${(0, _LitRenderer.ifDefined)(context._cancelButtonText)}</ui5-button></div></ui5-responsive-popover>`;

  const block1 = (item, index, context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-li", tags, suffix)} id="${(0, _LitRenderer.ifDefined)(item._id)}-li" accessible-name="${(0, _LitRenderer.ifDefined)(item.accessibleName)}" data-ui5-stable="${(0, _LitRenderer.ifDefined)(item.stableDomRef)}">${(0, _LitRenderer.ifDefined)(item.textContent)}</${(0, _LitRenderer.scopeTag)("ui5-li", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-li id="${(0, _LitRenderer.ifDefined)(item._id)}-li" accessible-name="${(0, _LitRenderer.ifDefined)(item.accessibleName)}" data-ui5-stable="${(0, _LitRenderer.ifDefined)(item.stableDomRef)}">${(0, _LitRenderer.ifDefined)(item.textContent)}</ui5-li>`;

  var _default = block0;
  _exports.default = _default;
});