"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TreeContext = void 0;

var _createReactContext = _interopRequireDefault(require("@ant-design/create-react-context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Webpack has bug for import loop, which is not the same behavior as ES module.
 * When util.js imports the TreeNode for tree generate will cause treeContextTypes be empty.
 */
var TreeContext = (0, _createReactContext["default"])(null);
exports.TreeContext = TreeContext;