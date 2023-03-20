sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/display-more", "./v4/display-more"], function (_exports, _Theme, _displayMore, _displayMore2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _displayMore.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _displayMore.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _displayMore.pathData : _displayMore2.pathData;
  _exports.pathData = pathData;
  var _default = "display-more";
  _exports.default = _default;
});