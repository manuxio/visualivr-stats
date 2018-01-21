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

var FontAwesome = function (_Component) {
  _inherits(FontAwesome, _Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    return _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).apply(this, arguments));
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'new47' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            '55 New Icons in 4.7'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { className: 'fa-hover', xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-address-book fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'address-book'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-address-book-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'address-book-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-address-card fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'address-card'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-address-card-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'address-card-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bandcamp fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bandcamp'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bath fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bath'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bathtub fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bathtub ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-drivers-license fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'drivers-license ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-drivers-license-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'drivers-license-o ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-eercast fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'eercast'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-envelope-open fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'envelope-open'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-envelope-open-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'envelope-open-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-etsy fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'etsy'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-free-code-camp fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'free-code-camp'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-grav fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'grav'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-handshake-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'handshake-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-id-badge fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'id-badge'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-id-card fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'id-card'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-id-card-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'id-card-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-imdb fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'imdb'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-linode fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'linode'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-meetup fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'meetup'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-microchip fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'microchip'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-podcast fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'podcast'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-quora fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'quora'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ravelry fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ravelry'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-s15 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                's15 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shower fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shower'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-snowflake-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'snowflake-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-superpowers fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'superpowers'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-telegram fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'telegram'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-0 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-0 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-1 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-1 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-2 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-2 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-3 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-3 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-4 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-4 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-empty fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-empty'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-full fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-full'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-half fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-half'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-quarter fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-quarter'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thermometer-three-quarters fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thermometer-three-quarters'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-times-rectangle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'times-rectangle ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-times-rectangle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'times-rectangle-o ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-user-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'user-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-user-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'user-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-user-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'user-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-vcard fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'vcard ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-vcard-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'vcard-o ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-window-close fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'window-close'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-window-close-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'window-close-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-window-maximize fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'window-maximize'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-window-minimize fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'window-minimize'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-window-restore fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'window-restore'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wpexplorer fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wpexplorer'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'new' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            '20 New Icons in 4.5'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bluetooth fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bluetooth'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bluetooth-b fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bluetooth-b'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-codiepie fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'codiepie'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-credit-card-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'credit-card-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-edge fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'edge'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fort-awesome fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fort-awesome'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hashtag fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hashtag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mixcloud fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mixcloud'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-modx fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'modx'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pause-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pause-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pause-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pause-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-percent fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'percent'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-product-hunt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'product-hunt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-reddit-alien fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'reddit-alien'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-scribd fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'scribd'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shopping-bag fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shopping-bag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shopping-basket fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shopping-basket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stop-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stop-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stop-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stop-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-usb fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'usb'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'web-application' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Web Application Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-adjust fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'adjust'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-anchor fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'anchor'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-archive fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'archive'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-area-chart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'area-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrows fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrows'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrows-h fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrows-h'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrows-v fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrows-v'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-asterisk fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'asterisk'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-at fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'at'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-automobile fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'automobile ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-balance-scale fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'balance-scale'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ban fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ban'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bank fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bank ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bar-chart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bar-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bar-chart-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-barcode fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'barcode'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bars fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bars'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-0 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-0 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-1 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-1 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-2 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-2 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-3 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-3 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-4 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-4 ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-empty fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-empty'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-full fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-full'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-half fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-half'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-quarter fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-quarter'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-battery-three-quarters fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'battery-three-quarters'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bed fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bed'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-beer fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'beer'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bell fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bell'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bell-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bell-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bell-slash fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bell-slash'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bell-slash-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bell-slash-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bicycle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bicycle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-binoculars fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'binoculars'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-birthday-cake fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'birthday-cake'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bluetooth fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bluetooth'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bluetooth-b fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bluetooth-b'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bolt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bolt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bomb fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bomb'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-book fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'book'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bookmark fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bookmark'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bookmark-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bookmark-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-briefcase fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'briefcase'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bug fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bug'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-building fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'building'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-building-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'building-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bullhorn fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bullhorn'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bullseye fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bullseye'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cab fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cab ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-calculator fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'calculator'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-calendar fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'calendar'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-calendar-check-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'calendar-check-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-calendar-minus-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'calendar-minus-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-calendar-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'calendar-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-calendar-plus-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'calendar-plus-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-calendar-times-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'calendar-times-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-camera fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'camera'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-camera-retro fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'camera-retro'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-car fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'car'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-square-o-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-square-o-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-square-o-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-square-o-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cart-arrow-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cart-arrow-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cart-plus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cart-plus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-certificate fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'certificate'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-check fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'check'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-check-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'check-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-check-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'check-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-check-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'check-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-check-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'check-square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-child fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'child'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'circle-o-notch'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-circle-thin fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'circle-thin'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-clock-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'clock-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-clone fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'clone'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-close fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'close ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cloud fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cloud'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cloud-download fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cloud-download'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cloud-upload fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cloud-upload'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-code fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'code'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-code-fork fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'code-fork'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-coffee fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'coffee'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cog fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cog'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cogs fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cogs'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-comment fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'comment'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-comment-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'comment-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-commenting fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'commenting'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-commenting-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'commenting-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-comments fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'comments'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-comments-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'comments-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-compass fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'compass'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-copyright fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'copyright'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-creative-commons fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'creative-commons'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-credit-card fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'credit-card'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-credit-card-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'credit-card-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-crop fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'crop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-crosshairs fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'crosshairs'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cube fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cube'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cubes fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cubes'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cutlery fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cutlery'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-dashboard fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'dashboard ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-database fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'database'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-desktop fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'desktop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-diamond fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'diamond'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-dot-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'dot-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-download fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'download'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-edit fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'edit ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ellipsis-h fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ellipsis-h'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ellipsis-v fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ellipsis-v'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-envelope fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'envelope'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-envelope-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'envelope-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-envelope-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'envelope-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-eraser fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'eraser'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-exchange fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'exchange'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-exclamation fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'exclamation'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-exclamation-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'exclamation-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-exclamation-triangle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'exclamation-triangle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-external-link fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'external-link'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-external-link-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'external-link-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-eye fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'eye'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-eye-slash fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'eye-slash'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-eyedropper fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'eyedropper'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fax fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fax'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-feed fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'feed ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-female fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'female'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fighter-jet fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fighter-jet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-archive-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-archive-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-audio-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-audio-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-code-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-code-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-excel-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-excel-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-image-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-image-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-movie-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-movie-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-pdf-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-pdf-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-photo-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-photo-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-picture-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-picture-o ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-powerpoint-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-powerpoint-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-sound-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-sound-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-video-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-video-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-word-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-word-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-zip-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-zip-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-film fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'film'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-filter fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'filter'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fire fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fire'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fire-extinguisher fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fire-extinguisher'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-flag fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'flag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-flag-checkered fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'flag-checkered'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-flag-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'flag-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-flash fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'flash ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-flask fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'flask'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-folder fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'folder'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-folder-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'folder-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-folder-open fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'folder-open'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-folder-open-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'folder-open-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-frown-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'frown-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-futbol-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'futbol-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gamepad fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gamepad'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gavel fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gavel'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gear fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gear ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gears fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gears ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gift fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gift'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-glass fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'glass'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-globe fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'globe'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-graduation-cap fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'graduation-cap'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-group fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'group ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-grab-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-grab-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-lizard-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-lizard-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-paper-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-paper-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-peace-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-peace-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-pointer-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-pointer-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-rock-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-rock-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-scissors-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-scissors-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-spock-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-spock-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-stop-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-stop-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hashtag fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hashtag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hdd-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hdd-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-headphones fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'headphones'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-heart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'heart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-heart-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'heart-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-heartbeat fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'heartbeat'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-history fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'history'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-home fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'home'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hotel fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hotel ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hourglass fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hourglass'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hourglass-1 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hourglass-1 ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hourglass-2 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hourglass-2 ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hourglass-3 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hourglass-3 ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hourglass-end fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hourglass-end'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hourglass-half fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hourglass-half'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hourglass-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hourglass-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hourglass-start fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hourglass-start'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-i-cursor fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'i-cursor'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-image fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'image ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-inbox fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'inbox'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-industry fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'industry'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-info fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'info'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-info-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'info-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-institution fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'institution ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-key fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'key'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-keyboard-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'keyboard-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-language fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'language'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-laptop fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'laptop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-leaf fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'leaf'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-legal fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'legal ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-lemon-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'lemon-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-level-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'level-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-level-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'level-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-life-bouy fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'life-bouy ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-life-buoy fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'life-buoy ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-life-ring fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'life-ring'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-life-saver fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'life-saver ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-lightbulb-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'lightbulb-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-line-chart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'line-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-location-arrow fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'location-arrow'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-lock fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'lock'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-magic fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'magic'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-magnet fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'magnet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mail-forward fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mail-forward ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mail-reply fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mail-reply ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mail-reply-all fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mail-reply-all ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-male fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'male'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-map fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'map'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-map-marker fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'map-marker'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-map-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'map-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-map-pin fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'map-pin'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-map-signs fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'map-signs'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-meh-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'meh-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-microphone fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'microphone'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-microphone-slash fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'microphone-slash'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-minus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'minus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-minus-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'minus-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-minus-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'minus-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-minus-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'minus-square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mobile fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mobile'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mobile-phone fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mobile-phone ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-money fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'money'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-moon-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'moon-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mortar-board fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mortar-board ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-motorcycle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'motorcycle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mouse-pointer fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mouse-pointer'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-music fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'music'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-navicon fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'navicon ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-newspaper-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'newspaper-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-object-group fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'object-group'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-object-ungroup fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'object-ungroup'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paint-brush fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paint-brush'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paper-plane fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paper-plane'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paper-plane-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paper-plane-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paw fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paw'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pencil fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pencil'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pencil-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pencil-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pencil-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pencil-square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-percent fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'percent'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-phone fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'phone'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-phone-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'phone-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-photo fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'photo ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-picture-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'picture-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pie-chart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pie-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plane fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plane'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plug fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plug'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plus-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plus-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plus-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plus-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plus-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plus-square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-power-off fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'power-off'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-print fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'print'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-puzzle-piece fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'puzzle-piece'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-qrcode fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'qrcode'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-question fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'question'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-question-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'question-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-quote-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'quote-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-quote-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'quote-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-random fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'random'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-recycle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'recycle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-refresh fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'refresh'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-registered fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'registered'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-remove fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'remove ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-reorder fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'reorder ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-reply fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'reply'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-reply-all fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'reply-all'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-retweet fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'retweet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-road fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'road'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rocket fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rocket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rss fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rss'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rss-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rss-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-search fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'search'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-search-minus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'search-minus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-search-plus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'search-plus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-send fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'send ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-send-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'send-o ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-server fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'server'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-share fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'share'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-share-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'share-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-share-alt-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'share-alt-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-share-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'share-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-share-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'share-square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shield fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shield'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ship fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ship'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shopping-bag fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shopping-bag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shopping-basket fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shopping-basket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shopping-cart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shopping-cart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sign-in fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sign-in'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sign-out fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sign-out'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-signal fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'signal'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sitemap fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sitemap'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sliders fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sliders'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-smile-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'smile-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-soccer-ball-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'soccer-ball-o ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-alpha-asc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-alpha-asc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-alpha-desc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-alpha-desc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-amount-asc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-amount-asc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-amount-desc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-amount-desc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-asc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-asc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-desc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-desc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-down ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-numeric-asc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-numeric-asc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-numeric-desc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-numeric-desc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sort-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sort-up ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-space-shuttle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'space-shuttle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-spinner fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'spinner'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-spoon fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'spoon'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-star fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'star'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-star-half fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'star-half'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-star-half-empty fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'star-half-empty ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-star-half-full fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'star-half-full ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-star-half-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'star-half-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-star-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'star-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sticky-note fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sticky-note'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sticky-note-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sticky-note-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-street-view fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'street-view'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-suitcase fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'suitcase'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sun-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sun-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-support fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'support ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tablet fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tablet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tachometer fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tachometer'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tag fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tag'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tags fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tags'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tasks fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tasks'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-taxi fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'taxi'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-television fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'television'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-terminal fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'terminal'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumb-tack fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumb-tack'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumbs-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumbs-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumbs-o-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumbs-o-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumbs-o-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumbs-o-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumbs-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumbs-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ticket fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ticket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-times fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'times'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-times-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'times-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-times-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'times-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tint fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tint'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-down ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-left ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-off fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-off'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-on fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-on'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-right ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-up ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-trademark fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'trademark'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-trash fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'trash'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-trash-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'trash-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tree fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tree'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-trophy fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'trophy'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-truck fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'truck'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tty fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tty'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tv fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tv ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-umbrella fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'umbrella'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-university fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'university'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-unlock fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'unlock'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-unlock-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'unlock-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-unsorted fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'unsorted ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-upload fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'upload'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-user fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'user'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-user-plus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'user-plus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-user-secret fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'user-secret'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-user-times fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'user-times'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-users fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'users'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-video-camera fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'video-camera'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-volume-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'volume-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-volume-off fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'volume-off'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-volume-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'volume-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-warning fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'warning ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wheelchair fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wheelchair'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wifi fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wifi'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wrench fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wrench'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'hand' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Hand Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-grab-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-grab-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-lizard-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-lizard-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-o-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-o-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-o-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-o-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-o-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-o-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-o-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-o-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-paper-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-paper-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-peace-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-peace-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-pointer-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-pointer-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-rock-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-rock-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-scissors-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-scissors-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-spock-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-spock-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-stop-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-stop-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumbs-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumbs-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumbs-o-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumbs-o-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumbs-o-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumbs-o-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-thumbs-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'thumbs-up'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'transportation' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Transportation Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ambulance fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ambulance'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-automobile fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'automobile ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bicycle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bicycle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cab fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cab ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-car fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'car'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fighter-jet fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fighter-jet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-motorcycle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'motorcycle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plane fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plane'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rocket fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rocket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ship fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ship'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-space-shuttle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'space-shuttle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-subway fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'subway'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-taxi fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'taxi'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-train fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'train'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-truck fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'truck'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wheelchair fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wheelchair'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'gender' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Gender Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-genderless fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'genderless'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-intersex fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'intersex ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mars fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mars'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mars-double fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mars-double'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mars-stroke fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mars-stroke'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mars-stroke-h fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mars-stroke-h'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mars-stroke-v fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mars-stroke-v'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mercury fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mercury'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-neuter fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'neuter'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-transgender fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'transgender'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-transgender-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'transgender-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-venus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'venus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-venus-double fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'venus-double'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-venus-mars fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'venus-mars'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'file-type' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'File Type Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-archive-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-archive-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-audio-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-audio-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-code-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-code-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-excel-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-excel-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-image-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-image-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-movie-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-movie-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-pdf-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-pdf-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-photo-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-photo-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-picture-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-picture-o ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-powerpoint-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-powerpoint-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-sound-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-sound-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-text fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-text'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-text-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-text-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-video-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-video-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-word-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-word-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-zip-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-zip-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'spinner' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Spinner Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Alert,
              { color: 'success' },
              _react2.default.createElement(
                'ul',
                { className: 'fa-ul' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement('i', { className: 'fa fa-info-circle fa-li' }),
                  'These icons work great with the ',
                  _react2.default.createElement(
                    'code',
                    null,
                    'fa-spin'
                  ),
                  ' class.'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-circle-o-notch fa-lg fa-spin mt-4' }),
                _react2.default.createElement('br', null),
                'circle-o-notch'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cog fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cog'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gear fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gear ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-refresh fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'refresh'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-spinner fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'spinner'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'form-control' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Form Control Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-check-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'check-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-check-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'check-square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-dot-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'dot-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-minus-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'minus-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-minus-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'minus-square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plus-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plus-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plus-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plus-square-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-square-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'square-o'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'payment' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Payment Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-amex fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-amex'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-diners-club fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-diners-club'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-discover fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-discover'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-jcb fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-jcb'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-mastercard fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-mastercard'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-paypal fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-paypal'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-stripe fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-stripe'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-visa fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-visa'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-credit-card fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'credit-card'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-credit-card-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'credit-card-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-google-wallet fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'google-wallet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paypal fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paypal'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'chart' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Chart Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-area-chart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'area-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bar-chart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bar-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bar-chart-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bar-chart-o ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-line-chart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'line-chart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pie-chart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pie-chart'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'currency' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Currency Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bitcoin fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bitcoin ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-btc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'btc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cny fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cny ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-dollar fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'dollar ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-eur fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'eur'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-euro fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'euro ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gbp fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gbp'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gg fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gg'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gg-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gg-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ils fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ils'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-inr fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'inr'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-jpy fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'jpy'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-krw fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'krw'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-money fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'money'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rmb fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rmb ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rouble fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rouble ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rub fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rub'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ruble fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ruble ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rupee fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rupee ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shekel fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shekel ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sheqel fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sheqel ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-try fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'try'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-turkish-lira fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'turkish-lira ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-usd fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'usd'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-won fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'won ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-yen fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'yen ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'text-editor' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Text Editor Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-align-center fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'align-center'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-align-justify fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'align-justify'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-align-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'align-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-align-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'align-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bold fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bold'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chain fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chain ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chain-broken fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chain-broken'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-clipboard fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'clipboard'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-columns fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'columns'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-copy fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'copy ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cut fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cut ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-dedent fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'dedent ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-eraser fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'eraser'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-text fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-text'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-file-text-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'file-text-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-files-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'files-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-floppy-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'floppy-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-font fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'font'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-header fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'header'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-indent fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'indent'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-italic fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'italic'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-link fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'link'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-list fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'list'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-list-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'list-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-list-ol fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'list-ol'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-list-ul fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'list-ul'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-outdent fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'outdent'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paperclip fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paperclip'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paragraph fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paragraph'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paste fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paste ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-repeat fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'repeat'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rotate-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rotate-left ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rotate-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rotate-right ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-save fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'save ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-scissors fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'scissors'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-strikethrough fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'strikethrough'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-subscript fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'subscript'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-superscript fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'superscript'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-table fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'table'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-text-height fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'text-height'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-text-width fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'text-width'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-th fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'th'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-th-large fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'th-large'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-th-list fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'th-list'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-underline fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'underline'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-undo fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'undo'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-unlink fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'unlink ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'directional' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Directional Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angle-double-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angle-double-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angle-double-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angle-double-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angle-double-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angle-double-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angle-double-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angle-double-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angle-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angle-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angle-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angle-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angle-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angle-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angle-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angle-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-circle-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-circle-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-circle-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-circle-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-circle-o-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-circle-o-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-circle-o-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-circle-o-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-circle-o-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-circle-o-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-circle-o-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-circle-o-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-circle-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-circle-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-circle-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-circle-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrow-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrow-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrows fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrows'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrows-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrows-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrows-h fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrows-h'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrows-v fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrows-v'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-square-o-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-square-o-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-square-o-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-square-o-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-square-o-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-caret-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'caret-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-circle-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chevron-circle-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-circle-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chevron-circle-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-circle-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chevron-circle-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-circle-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chevron-circle-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chevron-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chevron-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chevron-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chevron-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chevron-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-exchange fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'exchange'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-o-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-o-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-o-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-o-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-o-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-o-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hand-o-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hand-o-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-long-arrow-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'long-arrow-down'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-long-arrow-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'long-arrow-left'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-long-arrow-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'long-arrow-right'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-long-arrow-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'long-arrow-up'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-down fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-down ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-left fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-left ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-right fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-right ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-toggle-up fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'toggle-up ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'video-player' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Video Player Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-arrows-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'arrows-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-backward fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'backward'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-compress fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'compress'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-eject fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'eject'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-expand fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'expand'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fast-backward fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fast-backward'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fast-forward fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fast-forward'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-forward fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'forward'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pause fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pause'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pause-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pause-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pause-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pause-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-play fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'play'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-play-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'play-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-play-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'play-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-random fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'random'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-step-backward fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'step-backward'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-step-forward fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'step-forward'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stop fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stop-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stop-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stop-circle-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stop-circle-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-youtube-play fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'youtube-play'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'brand' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Brand Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Alert,
              { color: 'warning' },
              _react2.default.createElement(
                'h4',
                null,
                _react2.default.createElement('i', { className: 'fa fa-warning' }),
                ' Warning!'
              ),
              'Apparently, Adblock Plus can remove Font Awesome brand icons with their "Remove Social Media Buttons" setting. We will not use hacks to force them to display. Please',
              _react2.default.createElement(
                'a',
                { href: 'https://adblockplus.org/en/bugs', className: 'alert-link' },
                ' report an issue with Adblock Plus'
              ),
              ' if you believe this to be an error. To work around this, you\'ll need to modify the social icon class names.'
            ),
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-500px fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                '500px'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-adn fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'adn'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-amazon fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'amazon'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-android fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'android'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-angellist fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'angellist'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-apple fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'apple'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-behance fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'behance'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-behance-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'behance-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bitbucket fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bitbucket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bitbucket-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bitbucket-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bitcoin fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bitcoin ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-black-tie fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'black-tie'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bluetooth fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bluetooth'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-bluetooth-b fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'bluetooth-b'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-btc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'btc'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-buysellads fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'buysellads'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-amex fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-amex'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-diners-club fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-diners-club'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-discover fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-discover'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-jcb fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-jcb'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-mastercard fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-mastercard'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-paypal fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-paypal'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-stripe fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-stripe'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-cc-visa fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'cc-visa'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-chrome fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'chrome'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-codepen fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'codepen'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-codiepie fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'codiepie'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-connectdevelop fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'connectdevelop'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-contao fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'contao'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-css3 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'css3'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-dashcube fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'dashcube'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-delicious fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'delicious'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-deviantart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'deviantart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-digg fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'digg'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-dribbble fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'dribbble'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-dropbox fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'dropbox'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-drupal fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'drupal'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-edge fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'edge'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-empire fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'empire'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-expeditedssl fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'expeditedssl'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-facebook fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'facebook'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-facebook-f fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'facebook-f ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-facebook-official fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'facebook-official'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-facebook-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'facebook-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-firefox fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'firefox'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-flickr fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'flickr'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fonticons fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fonticons'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-fort-awesome fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'fort-awesome'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-forumbee fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'forumbee'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-foursquare fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'foursquare'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ge fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ge ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-get-pocket fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'get-pocket'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gg fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gg'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gg-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gg-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-git fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'git'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-git-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'git-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-github fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'github'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-github-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'github-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-github-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'github-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gittip fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gittip ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-google fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'google'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-google-plus fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'google-plus'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-google-plus-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'google-plus-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-google-wallet fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'google-wallet'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-gratipay fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'gratipay'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hacker-news fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hacker-news'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-houzz fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'houzz'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-html5 fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'html5'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-instagram fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'instagram'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-internet-explorer fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'internet-explorer'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ioxhost fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ioxhost'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-joomla fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'joomla'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-jsfiddle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'jsfiddle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-lastfm fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'lastfm'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-lastfm-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'lastfm-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-leanpub fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'leanpub'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-linkedin fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'linkedin'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-linkedin-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'linkedin-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-linux fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'linux'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-maxcdn fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'maxcdn'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-meanpath fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'meanpath'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-medium fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'medium'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-mixcloud fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'mixcloud'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-modx fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'modx'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-odnoklassniki fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'odnoklassniki'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-odnoklassniki-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'odnoklassniki-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-opencart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'opencart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-openid fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'openid'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-opera fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'opera'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-optin-monster fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'optin-monster'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pagelines fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pagelines'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-paypal fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'paypal'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pied-piper fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pied-piper'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pied-piper-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pied-piper-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pinterest fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pinterest'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pinterest-p fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pinterest-p'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-pinterest-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'pinterest-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-product-hunt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'product-hunt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-qq fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'qq'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ra fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ra ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-rebel fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'rebel'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-reddit fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'reddit'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-reddit-alien fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'reddit-alien'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-reddit-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'reddit-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-renren fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'renren'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-safari fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'safari'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-scribd fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'scribd'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-sellsy fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'sellsy'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-share-alt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'share-alt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-share-alt-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'share-alt-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-shirtsinbulk fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'shirtsinbulk'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-simplybuilt fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'simplybuilt'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-skyatlas fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'skyatlas'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-skype fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'skype'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-slack fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'slack'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-slideshare fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'slideshare'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-soundcloud fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'soundcloud'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-spotify fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'spotify'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stack-exchange fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stack-exchange'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stack-overflow fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stack-overflow'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-steam fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'steam'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-steam-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'steam-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stumbleupon fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stumbleupon'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stumbleupon-circle fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stumbleupon-circle'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tencent-weibo fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tencent-weibo'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-trello fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'trello'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tripadvisor fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tripadvisor'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tumblr fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tumblr'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-tumblr-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'tumblr-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-twitch fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'twitch'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-twitter fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'twitter'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-twitter-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'twitter-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-usb fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'usb'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-viacoin fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'viacoin'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-vimeo fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'vimeo'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-vimeo-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'vimeo-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-vine fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'vine'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-vk fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'vk'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wechat fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wechat ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-weibo fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'weibo'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-weixin fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'weixin'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-whatsapp fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'whatsapp'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wikipedia-w fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wikipedia-w'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-windows fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'windows'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wordpress fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wordpress'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-xing fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'xing'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-xing-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'xing-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-y-combinator fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'y-combinator'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-y-combinator-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'y-combinator-square ',
                _react2.default.createElement(
                  'span',
                  {
                    className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-yahoo fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'yahoo'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-yc fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'yc ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-yc-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'yc-square ',
                _react2.default.createElement(
                  'span',
                  { className: 'text-muted' },
                  '(alias)'
                )
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-yelp fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'yelp'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-youtube fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'youtube'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-youtube-play fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'youtube-play'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-youtube-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'youtube-square'
              )
            ),
            _react2.default.createElement(
              _reactstrap.Alert,
              { color: 'success', className: 'mt-4' },
              _react2.default.createElement(
                'ul',
                { className: 'margin-bottom-none padding-left-lg' },
                _react2.default.createElement(
                  'li',
                  null,
                  'All brand icons are trademarks of their respective owners.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'The use of these trademarks does not indicate endorsement of the trademark holder by Font Awesome, nor vice versa.'
                ),
                _react2.default.createElement(
                  'li',
                  null,
                  'Brand icons should only be used to represent the company or product to which they refer.'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Card,
          { id: 'medical' },
          _react2.default.createElement(
            _reactstrap.CardHeader,
            null,
            'Medical Icons'
          ),
          _react2.default.createElement(
            _reactstrap.CardBody,
            null,
            _react2.default.createElement(
              _reactstrap.Row,
              { className: 'text-center' },
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-ambulance fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'ambulance'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-h-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'h-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-heart fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'heart'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-heart-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'heart-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-heartbeat fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'heartbeat'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-hospital-o fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'hospital-o'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-medkit fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'medkit'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-plus-square fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'plus-square'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-stethoscope fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'stethoscope'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-user-md fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'user-md'
              ),
              _react2.default.createElement(
                _reactstrap.Col,
                { xs: '6', sm: '4', md: '3', lg: '2' },
                _react2.default.createElement('i', { className: 'fa fa-wheelchair fa-lg mt-4' }),
                _react2.default.createElement('br', null),
                'wheelchair'
              )
            )
          )
        )
      );
    }
  }]);

  return FontAwesome;
}(_react.Component);

var _default = FontAwesome;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FontAwesome, 'FontAwesome', 'react-src/views/Icons/FontAwesome/FontAwesome.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Icons/FontAwesome/FontAwesome.js');
}();

;