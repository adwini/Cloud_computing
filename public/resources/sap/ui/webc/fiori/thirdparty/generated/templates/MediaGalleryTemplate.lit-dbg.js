sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="ui5-media-gallery-root"><div class="ui5-media-gallery-display-wrapper"><div class="ui5-media-gallery-display" @click="${context._onDisplayAreaClick}">${context._isPhonePlatform ? block1(context, tags, suffix) : block3(context, tags, suffix)}</div></div>${context._showThumbnails ? block4(context, tags, suffix) : undefined}</div>`;

  const block1 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-carousel", tags, suffix)} @ui5-navigate="${(0, _LitRenderer.ifDefined)(context._onCarouselNavigate)}" hide-navigation-arrows>${(0, _LitRenderer.repeat)(context._selectableItems, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix))}</${(0, _LitRenderer.scopeTag)("ui5-carousel", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-carousel @ui5-navigate="${(0, _LitRenderer.ifDefined)(context._onCarouselNavigate)}" hide-navigation-arrows>${(0, _LitRenderer.repeat)(context._selectableItems, (item, index) => item._id || index, (item, index) => block2(item, index, context, tags, suffix))}</ui5-carousel>`;

  const block2 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`<slot name="${(0, _LitRenderer.ifDefined)(item._individualSlot)}"></slot>`;

  const block3 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<${(0, _LitRenderer.scopeTag)("ui5-media-gallery-item", tags, suffix)} ?_interactive="${(0, _LitRenderer.ifDefined)(context.interactiveDisplayArea)}" ?_square="${(0, _LitRenderer.ifDefined)(context._shouldHaveSquareDisplay)}" _tab-index="${(0, _LitRenderer.ifDefined)(context._mainItemTabIndex)}"></${(0, _LitRenderer.scopeTag)("ui5-media-gallery-item", tags, suffix)}>` : (0, _LitRenderer.html)`<ui5-media-gallery-item ?_interactive="${(0, _LitRenderer.ifDefined)(context.interactiveDisplayArea)}" ?_square="${(0, _LitRenderer.ifDefined)(context._shouldHaveSquareDisplay)}" _tab-index="${(0, _LitRenderer.ifDefined)(context._mainItemTabIndex)}"></ui5-media-gallery-item>`;

  const block4 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="ui5-media-gallery-thumbnails-wrapper"><ul>${(0, _LitRenderer.repeat)(context._visibleItems, (item, index) => item._id || index, (item, index) => block5(item, index, context, tags, suffix))}${context._showOverflowBtn ? block6(context, tags, suffix) : undefined}</ul></div>`;

  const block5 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`<li id="${(0, _LitRenderer.ifDefined)(item.id)}" class="ui5-media-gallery-thumbnail" role="option" @click="${context._onThumbnailClick}" @ui5-click="${(0, _LitRenderer.ifDefined)(context._onThumbnailClick)}"><slot name="${(0, _LitRenderer.ifDefined)(item._individualSlot)}"></slot></li>`;

  const block6 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<li class="ui5-media-gallery-overflow"><${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)} @click="${context._onOverflowBtnClick}">+${(0, _LitRenderer.ifDefined)(context._overflowSize)}</${(0, _LitRenderer.scopeTag)("ui5-button", tags, suffix)}></li>` : (0, _LitRenderer.html)`<li class="ui5-media-gallery-overflow"><ui5-button @click="${context._onOverflowBtnClick}">+${(0, _LitRenderer.ifDefined)(context._overflowSize)}</ui5-button></li>`;

  var _default = block0;
  _exports.default = _default;
});