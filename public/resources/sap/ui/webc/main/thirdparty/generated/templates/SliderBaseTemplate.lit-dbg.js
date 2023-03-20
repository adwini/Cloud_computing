sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="ui5-slider-root ${(0, _LitRenderer.classMap)(context.classes.root)}" @mousedown="${context._onmousedown}" @touchstart="${context._ontouchstart}" @mouseover="${context._onmouseover}" @mouseout="${context._onmouseout}" @keydown="${context._onkeydown}" @keyup="${context._onkeyup}" part="root-container"><div class="ui5-slider-inner">${context.step ? block1(context, tags, suffix) : undefined}</div><span id="${(0, _LitRenderer.ifDefined)(context._id)}-accName" class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(context.accessibleName)}</span><span id="${(0, _LitRenderer.ifDefined)(context._id)}-sliderDesc" class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(context._ariaLabelledByText)}</span></div> `;

  const block1 = (context, tags, suffix) => (0, _LitRenderer.html)`${context.showTickmarks ? block2(context, tags, suffix) : undefined}`;

  const block2 = (context, tags, suffix) => (0, _LitRenderer.html)`<ul class="ui5-slider-tickmarks">${(0, _LitRenderer.repeat)(context.tickmarksObject, (item, index) => item._id || index, (item, index) => block3(item, index, context, tags, suffix))}</ul>${context.labelInterval ? block6(context, tags, suffix) : undefined}`;

  const block3 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`${item ? block4(item, index, context, tags, suffix) : block5(item, index, context, tags, suffix)}`;

  const block4 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`<li class="ui5-slider-tickmark ui5-slider-tickmark-in-range"></li>`;

  const block5 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`<li class="ui5-slider-tickmark"></li>`;

  const block6 = (context, tags, suffix) => (0, _LitRenderer.html)`<ul class="ui5-slider-labels ${(0, _LitRenderer.classMap)(context.classes.labelContainer)}" style="${(0, _LitRenderer.styleMap)(context.styles.labelContainer)}">${(0, _LitRenderer.repeat)(context._labels, (item, index) => item._id || index, (item, index) => block7(item, index, context, tags, suffix))}</ul>`;

  const block7 = (item, index, context, tags, suffix) => (0, _LitRenderer.html)`<li style="${(0, _LitRenderer.styleMap)(context.styles.label)}">${(0, _LitRenderer.ifDefined)(item)}</li>`;

  var _default = block0;
  _exports.default = _default;
});