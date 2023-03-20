sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`<div class="ui5-list-root" @focusin="${context._onfocusin}" @keydown="${context._onkeydown}"><div class="ui5-list-scroll-container">${context.header.length ? block1(context, tags, suffix) : undefined}${context.shouldRenderH1 ? block2(context, tags, suffix) : undefined}${context.hasData ? block3(context, tags, suffix) : undefined}<span id="${(0, _LitRenderer.ifDefined)(context._id)}-modeLabel" class="ui5-hidden-text">${(0, _LitRenderer.ifDefined)(context.ariaLabelModeText)}</span><ul id="${(0, _LitRenderer.ifDefined)(context._id)}-listUl" class="ui5-list-ul" role="${(0, _LitRenderer.ifDefined)(context.accessibleRole)}" aria-label="${(0, _LitRenderer.ifDefined)(context.ariaLabelTxt)}" aria-labelledby="${(0, _LitRenderer.ifDefined)(context.ariaLabelledBy)}"><slot></slot>${context.showNoDataText ? block4(context, tags, suffix) : undefined}</ul>${context.growsWithButton ? block5(context, tags, suffix) : undefined}${context.footerText ? block6(context, tags, suffix) : undefined}${context.hasData ? block7(context, tags, suffix) : undefined}<span tabindex="-1" aria-hidden="true" class="ui5-list-end-marker"></span></div>${context.busy ? block8(context, tags, suffix) : undefined}</div> `;

  const block1 = (context, tags, suffix) => (0, _LitRenderer.html)`<slot name="header" />`;

  const block2 = (context, tags, suffix) => (0, _LitRenderer.html)`<header id="${(0, _LitRenderer.ifDefined)(context.headerID)}" class="ui5-list-header">${(0, _LitRenderer.ifDefined)(context.headerText)}</header>`;

  const block3 = (context, tags, suffix) => (0, _LitRenderer.html)`<div id="${(0, _LitRenderer.ifDefined)(context._id)}-before" tabindex="0" class="ui5-list-focusarea"></div>`;

  const block4 = (context, tags, suffix) => (0, _LitRenderer.html)`<li id="${(0, _LitRenderer.ifDefined)(context._id)}-nodata" class="ui5-list-nodata" tabindex="${(0, _LitRenderer.ifDefined)(context.noDataTabIndex)}"><div id="${(0, _LitRenderer.ifDefined)(context._id)}-nodata-text" class="ui5-list-nodata-text">${(0, _LitRenderer.ifDefined)(context.noDataText)}</div></li>`;

  const block5 = (context, tags, suffix) => (0, _LitRenderer.html)`<div growing-button><div tabindex="0" role="button" id="${(0, _LitRenderer.ifDefined)(context._id)}-growing-btn" aria-labelledby="${(0, _LitRenderer.ifDefined)(context._id)}-growingButton-text" ?active="${context._loadMoreActive}" @click="${context._onLoadMoreClick}" @keydown="${context._onLoadMoreKeydown}" @keyup="${context._onLoadMoreKeyup}" @mousedown="${context._onLoadMoreMousedown}" @mouseup="${context._onLoadMoreMouseup}" growing-button-inner><span id="${(0, _LitRenderer.ifDefined)(context._id)}-growingButton-text" growing-button-text>${(0, _LitRenderer.ifDefined)(context._growingButtonText)}</span></div></div>`;

  const block6 = (context, tags, suffix) => (0, _LitRenderer.html)`<footer id="${(0, _LitRenderer.ifDefined)(context._id)}-footer" class="ui5-list-footer">${(0, _LitRenderer.ifDefined)(context.footerText)}</footer>`;

  const block7 = (context, tags, suffix) => (0, _LitRenderer.html)`<div id="${(0, _LitRenderer.ifDefined)(context._id)}-after" tabindex="0" class="ui5-list-focusarea"></div>`;

  const block8 = (context, tags, suffix) => suffix ? (0, _LitRenderer.html)`<div class="ui5-list-busy-row"><${(0, _LitRenderer.scopeTag)("ui5-busy-indicator", tags, suffix)} delay="${(0, _LitRenderer.ifDefined)(context.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${(0, _LitRenderer.styleMap)(context.styles.busyInd)}" data-sap-focus-ref></${(0, _LitRenderer.scopeTag)("ui5-busy-indicator", tags, suffix)}></div>` : (0, _LitRenderer.html)`<div class="ui5-list-busy-row"><ui5-busy-indicator delay="${(0, _LitRenderer.ifDefined)(context.busyDelay)}" active size="Medium" class="ui5-list-busy-ind" style="${(0, _LitRenderer.styleMap)(context.styles.busyInd)}" data-sap-focus-ref></ui5-busy-indicator></div>`;

  var _default = block0;
  _exports.default = _default;
});