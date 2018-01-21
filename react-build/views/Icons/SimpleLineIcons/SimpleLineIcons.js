'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleLineIcons = function (_Component) {
  _inherits(SimpleLineIcons, _Component);

  function SimpleLineIcons() {
    _classCallCheck(this, SimpleLineIcons);

    return _possibleConstructorReturn(this, (SimpleLineIcons.__proto__ || Object.getPrototypeOf(SimpleLineIcons)).apply(this, arguments));
  }

  _createClass(SimpleLineIcons, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.Card,
          null,
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            _react2.default.createElement('i', { className: 'fa fa-picture-o' }),
            ' Simple Line Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-user icons font-2xl d-block mt-4' }),
                'icon-user'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-people icons font-2xl d-block mt-4' }),
                'icon-people'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-user-female icons font-2xl d-block mt-4' }),
                'icon-user-female'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-user-follow icons font-2xl d-block mt-4' }),
                'icon-user-follow'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-user-following icons font-2xl d-block mt-4' }),
                'icon-user-following'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-user-unfollow icons font-2xl d-block mt-4' }),
                'icon-user-unfollow'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-login icons font-2xl d-block mt-4' }),
                'icon-login'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-logout icons font-2xl d-block mt-4' }),
                'icon-logout'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-emotsmile icons font-2xl d-block mt-4' }),
                'icon-emotsmile'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-phone icons font-2xl d-block mt-4' }),
                'icon-phone'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-call-end icons font-2xl d-block mt-4' }),
                'icon-call-end'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-call-in icons font-2xl d-block mt-4' }),
                'icon-call-in'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-call-out icons font-2xl d-block mt-4' }),
                'icon-call-out'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-map icons font-2xl d-block mt-4' }),
                'icon-map'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-location-pin icons font-2xl d-block mt-4' }),
                'icon-location-pin'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-direction icons font-2xl d-block mt-4' }),
                'icon-direction'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-directions icons font-2xl d-block mt-4' }),
                'icon-directions'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-compass icons font-2xl d-block mt-4' }),
                'icon-compass'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-layers icons font-2xl d-block mt-4' }),
                'icon-layers'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-menu icons font-2xl d-block mt-4' }),
                'icon-menu'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-list icons font-2xl d-block mt-4' }),
                'icon-list'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-options-vertical icons font-2xl d-block mt-4' }),
                'icon-options-vertical'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-options icons font-2xl d-block mt-4' }),
                'icon-options'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-arrow-down icons font-2xl d-block mt-4' }),
                'icon-arrow-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-arrow-left icons font-2xl d-block mt-4' }),
                'icon-arrow-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-arrow-right icons font-2xl d-block mt-4' }),
                'icon-arrow-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-arrow-up icons font-2xl d-block mt-4' }),
                'icon-arrow-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-arrow-up-circle icons font-2xl d-block mt-4' }),
                'icon-arrow-up-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-arrow-left-circle icons font-2xl d-block mt-4' }),
                'icon-arrow-left-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-arrow-right-circle icons font-2xl d-block mt-4' }),
                'icon-arrow-right-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-arrow-down-circle icons font-2xl d-block mt-4' }),
                'icon-arrow-down-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-check icons font-2xl d-block mt-4' }),
                'icon-check'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-clock icons font-2xl d-block mt-4' }),
                'icon-clock'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-plus icons font-2xl d-block mt-4' }),
                'icon-plus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-close icons font-2xl d-block mt-4' }),
                'icon-close'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-trophy icons font-2xl d-block mt-4' }),
                'icon-trophy'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-screen-smartphone icons font-2xl d-block mt-4' }),
                'icon-screen-smartphone'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-screen-desktop icons font-2xl d-block mt-4' }),
                'icon-screen-desktop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-plane icons font-2xl d-block mt-4' }),
                'icon-plane'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-notebook icons font-2xl d-block mt-4' }),
                'icon-notebook'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-mustache icons font-2xl d-block mt-4' }),
                'icon-mustache'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-mouse icons font-2xl d-block mt-4' }),
                'icon-mouse'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-magnet icons font-2xl d-block mt-4' }),
                'icon-magnet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-energy icons font-2xl d-block mt-4' }),
                'icon-energy'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-disc icons font-2xl d-block mt-4' }),
                'icon-disc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-cursor icons font-2xl d-block mt-4' }),
                'icon-cursor'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-cursor-move icons font-2xl d-block mt-4' }),
                'icon-cursor-move'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-crop icons font-2xl d-block mt-4' }),
                'icon-crop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-chemistry icons font-2xl d-block mt-4' }),
                'icon-chemistry'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-speedometer icons font-2xl d-block mt-4' }),
                'icon-speedometer'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-shield icons font-2xl d-block mt-4' }),
                'icon-shield'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-screen-tablet icons font-2xl d-block mt-4' }),
                'icon-screen-tablet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-magic-wand icons font-2xl d-block mt-4' }),
                'icon-magic-wand'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-hourglass icons font-2xl d-block mt-4' }),
                'icon-hourglass'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-graduation icons font-2xl d-block mt-4' }),
                'icon-graduation'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-ghost icons font-2xl d-block mt-4' }),
                'icon-ghost'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-game-controller icons font-2xl d-block mt-4' }),
                'icon-game-controller'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-fire icons font-2xl d-block mt-4' }),
                'icon-fire'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-eyeglass icons font-2xl d-block mt-4' }),
                'icon-eyeglass'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-envelope-open icons font-2xl d-block mt-4' }),
                'icon-envelope-open'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-envelope-letter icons font-2xl d-block mt-4' }),
                'icon-envelope-letter'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-bell icons font-2xl d-block mt-4' }),
                'icon-bell'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-badge icons font-2xl d-block mt-4' }),
                'icon-badge'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-anchor icons font-2xl d-block mt-4' }),
                'icon-anchor'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-wallet icons font-2xl d-block mt-4' }),
                'icon-wallet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-vector icons font-2xl d-block mt-4' }),
                'icon-vector'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-speech icons font-2xl d-block mt-4' }),
                'icon-speech'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-puzzle icons font-2xl d-block mt-4' }),
                'icon-puzzle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-printer icons font-2xl d-block mt-4' }),
                'icon-printer'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-present icons font-2xl d-block mt-4' }),
                'icon-present'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-playlist icons font-2xl d-block mt-4' }),
                'icon-playlist'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-pin icons font-2xl d-block mt-4' }),
                'icon-pin'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-picture icons font-2xl d-block mt-4' }),
                'icon-picture'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-handbag icons font-2xl d-block mt-4' }),
                'icon-handbag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-globe-alt icons font-2xl d-block mt-4' }),
                'icon-globe-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-globe icons font-2xl d-block mt-4' }),
                'icon-globe'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-folder-alt icons font-2xl d-block mt-4' }),
                'icon-folder-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-folder icons font-2xl d-block mt-4' }),
                'icon-folder'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-film icons font-2xl d-block mt-4' }),
                'icon-film'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-feed icons font-2xl d-block mt-4' }),
                'icon-feed'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-drop icons font-2xl d-block mt-4' }),
                'icon-drop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-drawer icons font-2xl d-block mt-4' }),
                'icon-drawer'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-docs icons font-2xl d-block mt-4' }),
                'icon-docs'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-doc icons font-2xl d-block mt-4' }),
                'icon-doc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-diamond icons font-2xl d-block mt-4' }),
                'icon-diamond'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-cup icons font-2xl d-block mt-4' }),
                'icon-cup'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-calculator icons font-2xl d-block mt-4' }),
                'icon-calculator'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-bubbles icons font-2xl d-block mt-4' }),
                'icon-bubbles'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-briefcase icons font-2xl d-block mt-4' }),
                'icon-briefcase'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-book-open icons font-2xl d-block mt-4' }),
                'icon-book-open'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-basket-loaded icons font-2xl d-block mt-4' }),
                'icon-basket-loaded'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-basket icons font-2xl d-block mt-4' }),
                'icon-basket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-bag icons font-2xl d-block mt-4' }),
                'icon-bag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-action-undo icons font-2xl d-block mt-4' }),
                'icon-action-undo'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-action-redo icons font-2xl d-block mt-4' }),
                'icon-action-redo'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-wrench icons font-2xl d-block mt-4' }),
                'icon-wrench'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-umbrella icons font-2xl d-block mt-4' }),
                'icon-umbrella'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-trash icons font-2xl d-block mt-4' }),
                'icon-trash'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-tag icons font-2xl d-block mt-4' }),
                'icon-tag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-support icons font-2xl d-block mt-4' }),
                'icon-support'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-frame icons font-2xl d-block mt-4' }),
                'icon-frame'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-size-fullscreen icons font-2xl d-block mt-4' }),
                'icon-size-fullscreen'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-size-actual icons font-2xl d-block mt-4' }),
                'icon-size-actual'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-shuffle icons font-2xl d-block mt-4' }),
                'icon-shuffle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-share-alt icons font-2xl d-block mt-4' }),
                'icon-share-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-share icons font-2xl d-block mt-4' }),
                'icon-share'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-rocket icons font-2xl d-block mt-4' }),
                'icon-rocket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-question icons font-2xl d-block mt-4' }),
                'icon-question'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-pie-chart icons font-2xl d-block mt-4' }),
                'icon-pie-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-pencil icons font-2xl d-block mt-4' }),
                'icon-pencil'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-note icons font-2xl d-block mt-4' }),
                'icon-note'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-loop icons font-2xl d-block mt-4' }),
                'icon-loop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-home icons font-2xl d-block mt-4' }),
                'icon-home'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-grid icons font-2xl d-block mt-4' }),
                'icon-grid'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-graph icons font-2xl d-block mt-4' }),
                'icon-graph'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-microphone icons font-2xl d-block mt-4' }),
                'icon-microphone'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-music-tone-alt icons font-2xl d-block mt-4' }),
                'icon-music-tone-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-music-tone icons font-2xl d-block mt-4' }),
                'icon-music-tone'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-earphones-alt icons font-2xl d-block mt-4' }),
                'icon-earphones-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-earphones icons font-2xl d-block mt-4' }),
                'icon-earphones'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-equalizer icons font-2xl d-block mt-4' }),
                'icon-equalizer'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-like icons font-2xl d-block mt-4' }),
                'icon-like'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-dislike icons font-2xl d-block mt-4' }),
                'icon-dislike'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-control-start icons font-2xl d-block mt-4' }),
                'icon-control-start'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-control-rewind icons font-2xl d-block mt-4' }),
                'icon-control-rewind'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-control-play icons font-2xl d-block mt-4' }),
                'icon-control-play'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-control-pause icons font-2xl d-block mt-4' }),
                'icon-control-pause'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-control-forward icons font-2xl d-block mt-4' }),
                'icon-control-forward'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-control-end icons font-2xl d-block mt-4' }),
                'icon-control-end'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-volume-1 icons font-2xl d-block mt-4' }),
                'icon-volume-1'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-volume-2 icons font-2xl d-block mt-4' }),
                'icon-volume-2'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-volume-off icons font-2xl d-block mt-4' }),
                'icon-volume-off'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-calendar icons font-2xl d-block mt-4' }),
                'icon-calendar'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-bulb icons font-2xl d-block mt-4' }),
                'icon-bulb'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-chart icons font-2xl d-block mt-4' }),
                'icon-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-ban icons font-2xl d-block mt-4' }),
                'icon-ban'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-bubble icons font-2xl d-block mt-4' }),
                'icon-bubble'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-camrecorder icons font-2xl d-block mt-4' }),
                'icon-camrecorder'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-camera icons font-2xl d-block mt-4' }),
                'icon-camera'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-cloud-download icons font-2xl d-block mt-4' }),
                'icon-cloud-download'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-cloud-upload icons font-2xl d-block mt-4' }),
                'icon-cloud-upload'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-envelope icons font-2xl d-block mt-4' }),
                'icon-envelope'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-eye icons font-2xl d-block mt-4' }),
                'icon-eye'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-flag icons font-2xl d-block mt-4' }),
                'icon-flag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-heart icons font-2xl d-block mt-4' }),
                'icon-heart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-info icons font-2xl d-block mt-4' }),
                'icon-info'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-key icons font-2xl d-block mt-4' }),
                'icon-key'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-link icons font-2xl d-block mt-4' }),
                'icon-link'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-lock icons font-2xl d-block mt-4' }),
                'icon-lock'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-lock-open icons font-2xl d-block mt-4' }),
                'icon-lock-open'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-magnifier icons font-2xl d-block mt-4' }),
                'icon-magnifier'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-magnifier-add icons font-2xl d-block mt-4' }),
                'icon-magnifier-add'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-magnifier-remove icons font-2xl d-block mt-4' }),
                'icon-magnifier-remove'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-paper-clip icons font-2xl d-block mt-4' }),
                'icon-paper-clip'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-paper-plane icons font-2xl d-block mt-4' }),
                'icon-paper-plane'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-power icons font-2xl d-block mt-4' }),
                'icon-power'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-refresh icons font-2xl d-block mt-4' }),
                'icon-refresh'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-reload icons font-2xl d-block mt-4' }),
                'icon-reload'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-settings icons font-2xl d-block mt-4' }),
                'icon-settings'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-star icons font-2xl d-block mt-4' }),
                'icon-star'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-symbol-female icons font-2xl d-block mt-4' }),
                'icon-symbol-female'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-symbol-male icons font-2xl d-block mt-4' }),
                'icon-symbol-male'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-target icons font-2xl d-block mt-4' }),
                'icon-target'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-credit-card icons font-2xl d-block mt-4' }),
                'icon-credit-card'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-paypal icons font-2xl d-block mt-4' }),
                'icon-paypal'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-tumblr icons font-2xl d-block mt-4' }),
                'icon-social-tumblr'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-twitter icons font-2xl d-block mt-4' }),
                'icon-social-twitter'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-facebook icons font-2xl d-block mt-4' }),
                'icon-social-facebook'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-instagram icons font-2xl d-block mt-4' }),
                'icon-social-instagram'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-linkedin icons font-2xl d-block mt-4' }),
                'icon-social-linkedin'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-pinterest icons font-2xl d-block mt-4' }),
                'icon-social-pinterest'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-github icons font-2xl d-block mt-4' }),
                'icon-social-github'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-gplus icons font-2xl d-block mt-4' }),
                'icon-social-gplus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-reddit icons font-2xl d-block mt-4' }),
                'icon-social-reddit'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-skype icons font-2xl d-block mt-4' }),
                'icon-social-skype'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-dribbble icons font-2xl d-block mt-4' }),
                'icon-social-dribbble'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-behance icons font-2xl d-block mt-4' }),
                'icon-social-behance'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-foursqare icons font-2xl d-block mt-4' }),
                'icon-social-foursqare'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-soundcloud icons font-2xl d-block mt-4' }),
                'icon-social-soundcloud'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-spotify icons font-2xl d-block mt-4' }),
                'icon-social-spotify'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-stumbleupon icons font-2xl d-block mt-4' }),
                'icon-social-stumbleupon'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-youtube icons font-2xl d-block mt-4' }),
                'icon-social-youtube'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3' },
                _react2.default.createElement('i', { className: 'icon-social-dropbox icons font-2xl d-block mt-4' }),
                'icon-social-dropbox'
              )
            )
          )
        )
      );
    }
  }]);

  return SimpleLineIcons;
}(_react.Component);

var _default = SimpleLineIcons;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SimpleLineIcons, 'SimpleLineIcons', 'react-src/views/Icons/SimpleLineIcons/SimpleLineIcons.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Icons/SimpleLineIcons/SimpleLineIcons.js');
}();

;