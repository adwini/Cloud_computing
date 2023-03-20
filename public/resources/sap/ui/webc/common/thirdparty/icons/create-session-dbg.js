sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/create-session", "./v4/create-session"], function (_exports, _Theme, _createSession, _createSession2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _createSession.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _createSession.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _createSession.pathData : _createSession2.pathData;
  _exports.pathData = pathData;
  var _default = "create-session";
  _exports.default = _default;
});