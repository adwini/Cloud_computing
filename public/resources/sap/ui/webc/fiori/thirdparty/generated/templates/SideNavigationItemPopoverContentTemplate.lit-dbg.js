sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)} vertical-align="Top" class="ui5-side-navigation-popover"><${(0, _LitRenderer.scopeTag)("ui5-list", tags, suffix)} mode="None" @ui5-item-click="${(0, _LitRenderer.ifDefined)(context.handleListItemClick)}"><${(0, _LitRenderer.scopeTag)("ui5-li", tags, suffix)} title="${(0, _LitRenderer.ifDefined)(context._popoverContent.mainItem._tooltip)}" ?selected="${context._popoverContent.mainItemSelected}" .associatedItem="${(0, _LitRenderer.ifDefined)(context._popoverContent.mainItem)}">${(0, _LitRenderer.ifDefined)(context._popoverContent.mainItem.text)}</${(0, _LitRenderer.scopeTag)("ui5-li", tags, suffix)}>${(0, _LitRenderer.repeat)(context._popoverContent.subItems, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix))}</${(0, _LitRenderer.scopeTag)("ui5-list", tags, suffix)}></${(0, _LitRenderer.scopeTag)("ui5-responsive-popover", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-responsive-popover vertical-align="Top" class="ui5-side-navigation-popover"><ui5-list mode="None" @ui5-item-click="${(0, _LitRenderer.ifDefined)(context.handleListItemClick)}"><ui5-li title="${(0, _LitRenderer.ifDefined)(context._popoverContent.mainItem._tooltip)}" ?selected="${context._popoverContent.mainItemSelected}" .associatedItem="${(0, _LitRenderer.ifDefined)(context._popoverContent.mainItem)}">${(0, _LitRenderer.ifDefined)(context._popoverContent.mainItem.text)}</ui5-li>${(0, _LitRenderer.repeat)(context._popoverContent.subItems, (item, index) => item._id || index, (item, index) => block1(item, index, context, tags, suffix))}</ui5-list></ui5-responsive-popover>`;

  const block1 = (item, index, context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-li", tags, suffix)} title="${(0, _LitRenderer.ifDefined)(item._tooltip)}" ?selected="${item.selected}" .associatedItem="${(0, _LitRenderer.ifDefined)(item)}">${(0, _LitRenderer.ifDefined)(item.text)}</${(0, _LitRenderer.scopeTag)("ui5-li", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-li title="${(0, _LitRenderer.ifDefined)(item._tooltip)}" ?selected="${item.selected}" .associatedItem="${(0, _LitRenderer.ifDefined)(item)}">${(0, _LitRenderer.ifDefined)(item.text)}</ui5-li>`;

  var _default = block0;
  _exports.default = _default;
});