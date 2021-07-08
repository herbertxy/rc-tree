"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.InternalTreeNode = void 0;

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CSSMotion = _interopRequireDefault(require("rc-animate/lib/CSSMotion"));

var _toArray = _interopRequireDefault(require("rc-util/lib/Children/toArray"));

var _reactLifecyclesCompat = require("react-lifecycles-compat");

var _contextTypes = require("./contextTypes");

var _util = require("./util");

var _excluded = ["className", "style", "dragOver", "dragOverGapTop", "dragOverGapBottom", "isLeaf", "expanded", "selected", "checked", "halfChecked"];

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ICON_OPEN = 'open';
var ICON_CLOSE = 'close';
var defaultTitle = '---';

var TreeNode = /*#__PURE__*/function (_React$Component) {
  _inherits(TreeNode, _React$Component);

  var _super = _createSuper(TreeNode);

  function TreeNode() {
    var _this;

    _classCallCheck(this, TreeNode);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      dragNodeHighlight: false
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectorClick", function (e) {
      // Click trigger before select/check operation
      var onNodeClick = _this.props.context.onNodeClick;
      onNodeClick(e, _assertThisInitialized(_this));

      if (_this.isSelectable()) {
        _this.onSelect(e);
      } else {
        _this.onCheck(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onSelectorDoubleClick", function (e) {
      var onNodeDoubleClick = _this.props.context.onNodeDoubleClick;
      onNodeDoubleClick(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onSelect", function (e) {
      if (_this.isDisabled()) return;
      var onNodeSelect = _this.props.context.onNodeSelect;
      e.preventDefault();
      onNodeSelect(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onCheck", function (e) {
      if (_this.isDisabled()) return;
      var _this$props = _this.props,
          disableCheckbox = _this$props.disableCheckbox,
          checked = _this$props.checked;
      var onNodeCheck = _this.props.context.onNodeCheck;
      if (!_this.isCheckable() || disableCheckbox) return;
      e.preventDefault();
      var targetChecked = !checked;
      onNodeCheck(e, _assertThisInitialized(_this), targetChecked);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function (e) {
      var onNodeMouseEnter = _this.props.context.onNodeMouseEnter;
      onNodeMouseEnter(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
      var onNodeMouseLeave = _this.props.context.onNodeMouseLeave;
      onNodeMouseLeave(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onContextMenu", function (e) {
      var onNodeContextMenu = _this.props.context.onNodeContextMenu;
      onNodeContextMenu(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onDragStart", function (e) {
      var onNodeDragStart = _this.props.context.onNodeDragStart;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: true
      });

      onNodeDragStart(e, _assertThisInitialized(_this));

      try {
        // ie throw error
        // firefox-need-it
        e.dataTransfer.setData('text/plain', '');
      } catch (error) {// empty
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnter", function (e) {
      var onNodeDragEnter = _this.props.context.onNodeDragEnter;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragEnter(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onDragOver", function (e) {
      var onNodeDragOver = _this.props.context.onNodeDragOver;
      e.preventDefault();
      e.stopPropagation();
      onNodeDragOver(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onDragLeave", function (e) {
      var onNodeDragLeave = _this.props.context.onNodeDragLeave;
      e.stopPropagation();
      onNodeDragLeave(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onDragEnd", function (e) {
      var onNodeDragEnd = _this.props.context.onNodeDragEnd;
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDragEnd(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onDrop", function (e) {
      var onNodeDrop = _this.props.context.onNodeDrop;
      e.preventDefault();
      e.stopPropagation();

      _this.setState({
        dragNodeHighlight: false
      });

      onNodeDrop(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "onExpand", function (e) {
      var onNodeExpand = _this.props.context.onNodeExpand;
      onNodeExpand(e, _assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "setSelectHandle", function (node) {
      _this.selectHandle = node;
    });

    _defineProperty(_assertThisInitialized(_this), "getNodeChildren", function () {
      var children = _this.props.children;
      var originList = (0, _toArray["default"])(children).filter(function (node) {
        return node;
      });
      var targetList = (0, _util.getNodeChildren)(originList);

      if (originList.length !== targetList.length) {
        (0, _util.warnOnlyTreeNode)();
      }

      return targetList;
    });

    _defineProperty(_assertThisInitialized(_this), "getNodeState", function () {
      var expanded = _this.props.expanded;

      if (_this.isLeaf()) {
        return null;
      }

      return expanded ? ICON_OPEN : ICON_CLOSE;
    });

    _defineProperty(_assertThisInitialized(_this), "isLeaf", function () {
      var _this$props2 = _this.props,
          isLeaf = _this$props2.isLeaf,
          loaded = _this$props2.loaded;
      var loadData = _this.props.context.loadData;
      var hasChildren = _this.getNodeChildren().length !== 0;

      if (isLeaf === false) {
        return false;
      }

      return isLeaf || !loadData && !hasChildren || loadData && loaded && !hasChildren;
    });

    _defineProperty(_assertThisInitialized(_this), "isDisabled", function () {
      var disabled = _this.props.disabled;
      var treeDisabled = _this.props.context.disabled; // Follow the logic of Selectable

      if (disabled === false) {
        return false;
      }

      return !!(treeDisabled || disabled);
    });

    _defineProperty(_assertThisInitialized(_this), "isCheckable", function () {
      var checkable = _this.props.checkable;
      var treeCheckable = _this.props.context.checkable; // Return false if tree or treeNode is not checkable

      if (!treeCheckable || checkable === false) return false;
      return treeCheckable;
    });

    _defineProperty(_assertThisInitialized(_this), "syncLoadData", function (props) {
      var expanded = props.expanded,
          loading = props.loading,
          loaded = props.loaded;
      var _this$props$context = _this.props.context,
          loadData = _this$props$context.loadData,
          onNodeLoad = _this$props$context.onNodeLoad;
      if (loading) return; // read from state to avoid loadData at same time

      if (loadData && expanded && !_this.isLeaf()) {
        // We needn't reload data when has children in sync logic
        // It's only needed in node expanded
        var hasChildren = _this.getNodeChildren().length !== 0;

        if (!hasChildren && !loaded) {
          onNodeLoad(_assertThisInitialized(_this));
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "renderSwitcher", function () {
      var _this$props3 = _this.props,
          expanded = _this$props3.expanded,
          switcherIconFromProps = _this$props3.switcherIcon;
      var _this$props$context2 = _this.props.context,
          prefixCls = _this$props$context2.prefixCls,
          switcherIconFromCtx = _this$props$context2.switcherIcon;
      var switcherIcon = switcherIconFromProps || switcherIconFromCtx;

      if (_this.isLeaf()) {
        return /*#__PURE__*/React.createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher-noop"))
        }, typeof switcherIcon === 'function' ? switcherIcon(_objectSpread(_objectSpread({}, _this.props), {}, {
          isLeaf: true
        })) : switcherIcon);
      }

      var switcherCls = (0, _classnames["default"])("".concat(prefixCls, "-switcher"), "".concat(prefixCls, "-switcher_").concat(expanded ? ICON_OPEN : ICON_CLOSE));
      return /*#__PURE__*/React.createElement("span", {
        onClick: _this.onExpand,
        className: switcherCls
      }, typeof switcherIcon === 'function' ? switcherIcon(_objectSpread(_objectSpread({}, _this.props), {}, {
        isLeaf: false
      })) : switcherIcon);
    });

    _defineProperty(_assertThisInitialized(_this), "renderCheckbox", function () {
      var _this$props4 = _this.props,
          checked = _this$props4.checked,
          halfChecked = _this$props4.halfChecked,
          disableCheckbox = _this$props4.disableCheckbox;
      var prefixCls = _this.props.context.prefixCls;

      var disabled = _this.isDisabled();

      var checkable = _this.isCheckable();

      if (!checkable) return null; // [Legacy] Custom element should be separate with `checkable` in future

      var $custom = typeof checkable !== 'boolean' ? checkable : null;
      return /*#__PURE__*/React.createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-checkbox"), checked && "".concat(prefixCls, "-checkbox-checked"), !checked && halfChecked && "".concat(prefixCls, "-checkbox-indeterminate"), (disabled || disableCheckbox) && "".concat(prefixCls, "-checkbox-disabled")),
        onClick: _this.onCheck
      }, $custom);
    });

    _defineProperty(_assertThisInitialized(_this), "renderIcon", function () {
      var loading = _this.props.loading;
      var prefixCls = _this.props.context.prefixCls;
      return /*#__PURE__*/React.createElement("span", {
        className: (0, _classnames["default"])("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__").concat(_this.getNodeState() || 'docu'), loading && "".concat(prefixCls, "-icon_loading"))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "renderSelector", function () {
      var dragNodeHighlight = _this.state.dragNodeHighlight;
      var _this$props5 = _this.props,
          title = _this$props5.title,
          selected = _this$props5.selected,
          icon = _this$props5.icon,
          loading = _this$props5.loading;
      var _this$props$context3 = _this.props.context,
          prefixCls = _this$props$context3.prefixCls,
          showIcon = _this$props$context3.showIcon,
          treeIcon = _this$props$context3.icon,
          draggable = _this$props$context3.draggable,
          loadData = _this$props$context3.loadData;

      var disabled = _this.isDisabled();

      var wrapClass = "".concat(prefixCls, "-node-content-wrapper"); // Icon - Still show loading icon when loading without showIcon

      var $icon;

      if (showIcon) {
        var currentIcon = icon || treeIcon;
        $icon = currentIcon ? /*#__PURE__*/React.createElement("span", {
          className: (0, _classnames["default"])("".concat(prefixCls, "-iconEle"), "".concat(prefixCls, "-icon__customize"))
        }, typeof currentIcon === 'function' ? currentIcon(_this.props) : currentIcon) : _this.renderIcon();
      } else if (loadData && loading) {
        $icon = _this.renderIcon();
      } // Title


      var $title = /*#__PURE__*/React.createElement("span", {
        className: "".concat(prefixCls, "-title")
      }, title);
      return /*#__PURE__*/React.createElement("span", {
        ref: _this.setSelectHandle,
        title: typeof title === 'string' ? title : '',
        className: (0, _classnames["default"])("".concat(wrapClass), "".concat(wrapClass, "-").concat(_this.getNodeState() || 'normal'), !disabled && (selected || dragNodeHighlight) && "".concat(prefixCls, "-node-selected"), !disabled && draggable && 'draggable'),
        draggable: !disabled && draggable || undefined,
        "aria-grabbed": !disabled && draggable || undefined,
        onMouseEnter: _this.onMouseEnter,
        onMouseLeave: _this.onMouseLeave,
        onContextMenu: _this.onContextMenu,
        onClick: _this.onSelectorClick,
        onDoubleClick: _this.onSelectorDoubleClick,
        onDragStart: draggable ? _this.onDragStart : undefined
      }, $icon, $title);
    });

    _defineProperty(_assertThisInitialized(_this), "renderChildren", function () {
      var _this$props6 = _this.props,
          expanded = _this$props6.expanded,
          pos = _this$props6.pos;
      var _this$props$context4 = _this.props.context,
          prefixCls = _this$props$context4.prefixCls,
          motion = _this$props$context4.motion,
          renderTreeNode = _this$props$context4.renderTreeNode; // Children TreeNode

      var nodeList = _this.getNodeChildren();

      if (nodeList.length === 0) {
        return null;
      }

      return /*#__PURE__*/React.createElement(_CSSMotion["default"], _extends({
        visible: expanded
      }, motion), function (_ref) {
        var style = _ref.style,
            className = _ref.className;
        return /*#__PURE__*/React.createElement("ul", {
          className: (0, _classnames["default"])(className, "".concat(prefixCls, "-child-tree"), expanded && "".concat(prefixCls, "-child-tree-open")),
          style: style,
          "data-expanded": expanded,
          role: "group"
        }, (0, _util.mapChildren)(nodeList, function (node, index) {
          return renderTreeNode(node, index, pos);
        }));
      });
    });

    return _this;
  }

  _createClass(TreeNode, [{
    key: "componentDidMount",
    value: // Isomorphic needn't load data in server side
    function componentDidMount() {
      var _this$props7 = this.props,
          eventKey = _this$props7.eventKey,
          registerTreeNode = _this$props7.context.registerTreeNode;
      this.syncLoadData(this.props);
      registerTreeNode(eventKey, this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncLoadData(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props8 = this.props,
          eventKey = _this$props8.eventKey,
          registerTreeNode = _this$props8.context.registerTreeNode;
      registerTreeNode(eventKey, null);
    }
  }, {
    key: "isSelectable",
    value: function isSelectable() {
      var selectable = this.props.selectable;
      var treeSelectable = this.props.context.selectable; // Ignore when selectable is undefined or null

      if (typeof selectable === 'boolean') {
        return selectable;
      }

      return treeSelectable;
    } // Switcher

  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var loading = this.props.loading;

      var _this$props9 = this.props,
          className = _this$props9.className,
          style = _this$props9.style,
          dragOver = _this$props9.dragOver,
          dragOverGapTop = _this$props9.dragOverGapTop,
          dragOverGapBottom = _this$props9.dragOverGapBottom,
          isLeaf = _this$props9.isLeaf,
          expanded = _this$props9.expanded,
          selected = _this$props9.selected,
          checked = _this$props9.checked,
          halfChecked = _this$props9.halfChecked,
          otherProps = _objectWithoutProperties(_this$props9, _excluded);

      var _this$props$context5 = this.props.context,
          prefixCls = _this$props$context5.prefixCls,
          filterTreeNode = _this$props$context5.filterTreeNode,
          draggable = _this$props$context5.draggable;
      var disabled = this.isDisabled();
      var dataOrAriaAttributeProps = (0, _util.getDataAndAria)(otherProps);
      return /*#__PURE__*/React.createElement("li", _extends({
        className: (0, _classnames["default"])(className, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-treenode-disabled"), disabled), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-switcher-").concat(expanded ? 'open' : 'close'), !isLeaf), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-checkbox-checked"), checked), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-checkbox-indeterminate"), halfChecked), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-selected"), selected), _defineProperty(_classNames, "".concat(prefixCls, "-treenode-loading"), loading), _defineProperty(_classNames, 'drag-over', !disabled && dragOver), _defineProperty(_classNames, 'drag-over-gap-top', !disabled && dragOverGapTop), _defineProperty(_classNames, 'drag-over-gap-bottom', !disabled && dragOverGapBottom), _defineProperty(_classNames, 'filter-node', filterTreeNode && filterTreeNode(this)), _classNames)),
        style: style,
        role: "treeitem",
        onDragEnter: draggable ? this.onDragEnter : undefined,
        onDragOver: draggable ? this.onDragOver : undefined,
        onDragLeave: draggable ? this.onDragLeave : undefined,
        onDrop: draggable ? this.onDrop : undefined,
        onDragEnd: draggable ? this.onDragEnd : undefined
      }, dataOrAriaAttributeProps), this.renderSwitcher(), this.renderCheckbox(), this.renderSelector(), this.renderChildren());
    }
  }]);

  return TreeNode;
}(React.Component);

exports.InternalTreeNode = TreeNode;

_defineProperty(TreeNode, "propTypes", {
  eventKey: _propTypes["default"].string,
  // Pass by parent `cloneElement`
  prefixCls: _propTypes["default"].string,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  onSelect: _propTypes["default"].func,
  // By parent
  expanded: _propTypes["default"].bool,
  selected: _propTypes["default"].bool,
  checked: _propTypes["default"].bool,
  loaded: _propTypes["default"].bool,
  loading: _propTypes["default"].bool,
  halfChecked: _propTypes["default"].bool,
  children: _propTypes["default"].node,
  title: _propTypes["default"].node,
  pos: _propTypes["default"].string,
  dragOver: _propTypes["default"].bool,
  dragOverGapTop: _propTypes["default"].bool,
  dragOverGapBottom: _propTypes["default"].bool,
  // By user
  isLeaf: _propTypes["default"].bool,
  checkable: _propTypes["default"].bool,
  selectable: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  disableCheckbox: _propTypes["default"].bool,
  icon: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func]),
  switcherIcon: _propTypes["default"].oneOfType([_propTypes["default"].node, _propTypes["default"].func])
});

(0, _reactLifecyclesCompat.polyfill)(TreeNode);

var ContextTreeNode = function ContextTreeNode(props) {
  return /*#__PURE__*/React.createElement(_contextTypes.TreeContext.Consumer, null, function (context) {
    return /*#__PURE__*/React.createElement(TreeNode, _extends({}, props, {
      context: context
    }));
  });
};

ContextTreeNode.defaultProps = {
  title: defaultTitle
};
ContextTreeNode.isTreeNode = 1;
var _default = ContextTreeNode;
exports["default"] = _default;