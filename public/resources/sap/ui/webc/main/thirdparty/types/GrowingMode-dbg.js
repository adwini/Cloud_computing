sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/types/DataType"], function (_exports, _DataType) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _DataType = _interopRequireDefault(_DataType);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * @lends sap.ui.webcomponents.main.types.GrowingMode.prototype
   * @public
   */
  const GrowingModes = {
    /**
     * Component's <code>load-more</code> is fired upon pressing a "More" button.
     * at the bottom.
     * @public
     * @type {Button}
     */
    Button: "Button",

    /**
     * Component's <code>load-more</code> is fired upon scroll.
     * @public
     * @type {Scroll}
     */
    Scroll: "Scroll",

    /**
     * Component's growing is not enabled.
     * @public
     * @type {None}
     */
    None: "None"
  };
  /**
   * @class
   * Defines the growing mode of the component.
   * @constructor
   * @author SAP SE
   * @alias sap.ui.webcomponents.main.types.GrowingMode
   * @public
   * @enum {string}
   */

  class GrowingMode extends _DataType.default {
    static isValid(value) {
      return !!GrowingModes[value];
    }

  }

  GrowingMode.generateTypeAccessors(GrowingModes);
  var _default = GrowingMode;
  _exports.default = _default;
});