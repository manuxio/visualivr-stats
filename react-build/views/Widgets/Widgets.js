'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactstrap = require('reactstrap');

var _Widget = require('./Widget01');

var _Widget2 = _interopRequireDefault(_Widget);

var _Widget3 = require('./Widget02');

var _Widget4 = _interopRequireDefault(_Widget3);

var _Widget5 = require('./Widget03');

var _Widget6 = _interopRequireDefault(_Widget5);

var _Widget7 = require('./Widget04');

var _Widget8 = _interopRequireDefault(_Widget7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Widgets = function (_Component) {
  _inherits(Widgets, _Component);

  function Widgets() {
    _classCallCheck(this, Widgets);

    return _possibleConstructorReturn(this, (Widgets.__proto__ || Object.getPrototypeOf(Widgets)).apply(this, arguments));
  }

  _createClass(Widgets, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget2.default, { color: 'success', header: '89.9%' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget2.default, { color: 'info', header: '12.124' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(
              _Widget2.default,
              { color: 'warning', header: '$98.111,00', smallText: '' },
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                'Excepteur sint occaecat...'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget2.default, { color: 'danger', value: '95', header: '1.9 TB', mainText: 'Danger!',
              smallText: 'This is your final warning...' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget2.default, { color: 'primary', variant: 'inverse', header: '89.9%' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget2.default, { color: 'warning', variant: 'inverse', header: '12.124' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(
              _Widget2.default,
              { color: 'danger', variant: 'inverse', header: '$98.111,00', smallText: '' },
              _react2.default.createElement(
                'small',
                { className: 'text-muted' },
                'Excepteur sint occaecat...'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget2.default, { color: 'info', variant: 'inverse', value: '95', header: '1.9 TB', mainText: 'Danger!',
              smallText: 'This is your final warning...' })
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-cogs', color: 'primary' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-laptop', color: 'info' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-moon-o', color: 'warning' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-bell', color: 'danger' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-cogs', color: 'primary', footer: true, link: '#/charts' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-laptop', color: 'info', footer: true })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-moon-o', color: 'warning', footer: true })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-bell', color: 'danger', footer: true })
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-cogs', color: 'primary', variant: '1' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-laptop', color: 'info', variant: '1' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-moon-o', color: 'warning', variant: '1' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-bell', color: 'danger', variant: '1' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-cogs', color: 'primary', variant: '2' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-laptop', color: 'info', variant: '2' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-moon-o', color: 'warning', variant: '2' })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', lg: '3' },
            _react2.default.createElement(_Widget4.default, { header: '$1.999,50', mainText: 'Income', icon: 'fa fa-bell', color: 'danger', variant: '2' })
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: 12, sm: 6, md: 3 },
            _react2.default.createElement(_Widget6.default, { dataBox: function dataBox() {
                return { variant: "facebook", friends: "89k", feeds: "459" };
              } })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: 12, sm: 6, md: 3 },
            _react2.default.createElement(_Widget6.default, { dataBox: function dataBox() {
                return { variant: "twitter", followers: "973k", tweets: "1.792" };
              } })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: 12, sm: 6, md: 3 },
            _react2.default.createElement(_Widget6.default, { dataBox: function dataBox() {
                return { variant: "linkedin", contacts: "500+", feeds: "292" };
              } })
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: 12, sm: 6, md: 3 },
            _react2.default.createElement(_Widget6.default, { dataBox: function dataBox() {
                return { variant: "google-plus", followers: "894", circles: "92" };
              } })
          )
        ),
        _react2.default.createElement(
          _reactstrap.CardGroup,
          { className: 'mb-4' },
          _react2.default.createElement(
            _Widget8.default,
            { icon: 'icon-people', color: 'info', header: '87.500', value: '25' },
            'Visitors'
          ),
          _react2.default.createElement(
            _Widget8.default,
            { icon: 'icon-user-follow', color: 'success', header: '385', value: '25' },
            'New Clients'
          ),
          _react2.default.createElement(
            _Widget8.default,
            { icon: 'icon-basket-loaded', color: 'warning', header: '1238', value: '25' },
            'Products sold'
          ),
          _react2.default.createElement(
            _Widget8.default,
            { icon: 'icon-pie-chart', color: 'primary', header: '28%', value: '25' },
            'Returning Visitors'
          ),
          _react2.default.createElement(
            _Widget8.default,
            { icon: 'icon-speedometer', color: 'danger', header: '5:34:11', value: '25' },
            'Avg. Time'
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-people', color: 'info', header: '87.500', value: '25' },
              'Visitors'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-user-follow', color: 'success', header: '385', value: '25' },
              'New Clients'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-basket-loaded', color: 'warning', header: '1238', value: '25' },
              'Products sold'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-pie-chart', color: 'primary', header: '28%', value: '25' },
              'Returning Visitors'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-speedometer', color: 'danger', header: '5:34:11', value: '25' },
              'Avg. Time'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-speech', color: 'info', header: '972', value: '25' },
              'Comments'
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-people', color: 'info', header: '87.500', value: '25', invert: true },
              'Visitors'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-user-follow', color: 'success', header: '385', value: '25', invert: true },
              'New Clients'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-basket-loaded', color: 'warning', header: '1238', value: '25', invert: true },
              'Products sold'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-pie-chart', color: 'primary', header: '28%', value: '25', invert: true },
              'Returning Visitors'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-speedometer', color: 'danger', header: '5:34:11', value: '25', invert: true },
              'Avg. Time'
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { sm: '6', md: '2' },
            _react2.default.createElement(
              _Widget8.default,
              { icon: 'icon-speech', color: 'info', header: '972', value: '25', invert: true },
              'Comments'
            )
          )
        )
      );
    }
  }]);

  return Widgets;
}(_react.Component);

var _default = Widgets;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Widgets, 'Widgets', 'react-src/views/Widgets/Widgets.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Widgets/Widgets.js');
}();

;