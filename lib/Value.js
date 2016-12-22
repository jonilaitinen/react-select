'use strict';

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Value = _react2.default.createClass({

	displayName: 'Value',

	handleMouseDown: function handleMouseDown(event) {
		if (event.type === 'mousedown' && event.button !== 0) {
			return;
		}
		if (this.props.onClick) {
			event.stopPropagation();
			this.props.onClick(this.props.value, event);
			return;
		}
		if (this.props.value.href) {
			event.stopPropagation();
		}
	},
	onRemove: function onRemove(event) {
		event.preventDefault();
		event.stopPropagation();
		this.props.onRemove(this.props.value);
	},
	handleTouchEndRemove: function handleTouchEndRemove(event) {
		// Check if the view is being dragged, In this case
		// we don't want to fire the click event (because the user only wants to scroll)
		if (this.dragging) return;

		// Fire the mouse events
		this.onRemove(event);
	},
	handleTouchMove: function handleTouchMove(event) {
		// Set a flag that the view is being dragged
		this.dragging = true;
	},
	handleTouchStart: function handleTouchStart(event) {
		// Set a flag that the view is not being dragged
		this.dragging = false;
	},
	renderRemoveIcon: function renderRemoveIcon() {
		if (this.props.disabled || !this.props.onRemove) return;
		return _jsx('span', {
			className: 'Select-value-icon',
			'aria-hidden': 'true',
			onMouseDown: this.onRemove,
			onTouchEnd: this.handleTouchEndRemove,
			onTouchStart: this.handleTouchStart,
			onTouchMove: this.handleTouchMove
		}, void 0, '\xD7');
	},
	renderLabel: function renderLabel() {
		var className = 'Select-value-label';
		return this.props.onClick || this.props.value.href ? _jsx('a', {
			className: className,
			href: this.props.value.href,
			target: this.props.value.target,
			onMouseDown: this.handleMouseDown,
			onTouchEnd: this.handleMouseDown
		}, void 0, this.props.children) : _jsx('span', {
			className: className,
			role: 'option',
			'aria-selected': 'true',
			id: this.props.id
		}, void 0, this.props.children);
	},
	render: function render() {
		return _jsx('div', {
			className: (0, _classnames2.default)('Select-value', this.props.value.className),
			style: this.props.value.style,
			title: this.props.value.title
		}, void 0, this.renderRemoveIcon(), this.renderLabel());
	}
});

module.exports = Value;