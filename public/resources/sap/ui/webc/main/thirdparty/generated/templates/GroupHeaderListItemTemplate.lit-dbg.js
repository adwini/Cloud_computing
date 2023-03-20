sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/renderer/LitRenderer"], function (_exports, _LitRenderer) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /* eslint no-unused-vars: 0 */
  const block0 = (context, tags, suffix) => (0, _LitRenderer.html)`<li part="native-li" tabindex="${(0, _LitRenderer.ifDefined)(context._tabIndex)}" class="ui5-ghli-root ${(0, _LitRenderer.classMap)(context.classes.main)}" @focusin="${context._onfocusin}" @focusout="${context._onfocusout}" @keydown="${context._onkeydown}" aria-label="${(0, _LitRenderer.ifDefined)(context.ariaLabelText)}" aria-roledescription="${(0, _LitRenderer.ifDefined)(context.groupHeaderText)}" role="group"><div id="${(0, _LitRenderer.ifDefined)(context._id)}-content" class="ui5-li-content"><span class="ui5-ghli-title"><slot></slot></span></div></li>`;

  var _default = block0;
  _exports.default = _default;
});