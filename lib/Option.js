'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Option = _react2.default.createClass({
	displayName: 'Option',
	blockEvent: function blockEvent(event) {
		event.preventDefault();
		event.stopPropagation();
		if (event.target.tagName !== 'A' || !('href' in event.target)) {
			return;
		}
		if (event.target.target) {
			window.open(event.target.href, event.target.target);
		} else {
			window.location.href = event.target.href;
		}
	},
	handleMouseDown: function handleMouseDown(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onSelect(this.props.option, event);
	},
	handleMouseEnter: function handleMouseEnter(event) {
		this.onFocus(event);
	},
	handleMouseMove: function handleMouseMove(event) {
		this.onFocus(event);
	},
	handleTouchEnd: function handleTouchEnd(event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if (this.dragging) return;

		this.handleMouseDown(event);
	},
	handleTouchMove: function handleTouchMove(event) {
		// Set a flag that the view is being dragged
		this.dragging = true;
	},
	handleTouchStart: function handleTouchStart(event) {
		// Set a flag that the view is not being dragged
		this.dragging = false;
	},
	onFocus: function onFocus(event) {
		if (!this.props.isFocused) {
			this.props.onFocus(this.props.option, event);
		}
	},
	render: function render() {
		var _props = this.props,
		    option = _props.option,
		    instancePrefix = _props.instancePrefix,
		    optionIndex = _props.optionIndex;

		var className = (0, _classnames2.default)(this.props.className, option.className);

		return option.disabled ? _jsx('div', {
			className: className,
			onMouseDown: this.blockEvent,
			onClick: this.blockEvent
		}, void 0, this.props.children) : _jsx('div', {
			className: className,
			style: option.style,
			role: 'option',
			onMouseDown: this.handleMouseDown,
			onMouseEnter: this.handleMouseEnter,
			onMouseMove: this.handleMouseMove,
			onTouchStart: this.handleTouchStart,
			onTouchMove: this.handleTouchMove,
			onTouchEnd: this.handleTouchEnd,
			id: instancePrefix + '-option-' + optionIndex,
			title: option.title
		}, void 0, this.props.children);
	}
});

module.exports = Option;