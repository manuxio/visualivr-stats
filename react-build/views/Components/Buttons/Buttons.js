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

var Buttons = function (_Component) {
  _inherits(Buttons, _Component);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
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
            { xs: '12', md: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Options'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary' },
                  'Primary'
                ),
                ' ',
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'secondary' },
                  'Secondary'
                ),
                ' ',
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success' },
                  'Success'
                ),
                ' ',
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'warning' },
                  'Warning'
                ),
                ' ',
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'danger' },
                  'Danger'
                ),
                ' ',
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'link' },
                  'Link'
                ),
                ' '
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'With Icons'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary' },
                  _react2.default.createElement('i', { className: 'fa fa-star' }),
                  '\xA0',
                  ' Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'secondary' },
                  _react2.default.createElement('i', { className: 'fa fa-lightbulb-o' }),
                  '\xA0 Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success' },
                  _react2.default.createElement('i', { className: 'fa fa-magic' }),
                  '\xA0 Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'warning' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker' }),
                  '\xA0 Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-rss' }),
                  '\xA0 Danger'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'link' },
                  _react2.default.createElement('i', { className: 'fa fa-link' }),
                  '\xA0 Link'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Size Large'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this class ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.btn-lg'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary', size: 'lg' },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'secondary', size: 'lg' },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success', size: 'lg' },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'info', size: 'lg' },
                  'Info'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'warning', size: 'lg' },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'danger', size: 'lg' },
                  'Danger'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'link', size: 'lg' },
                  'Link'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Size Small'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this class ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.btn-sm'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary', size: 'sm' },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'secondary', size: 'sm' },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success', size: 'sm' },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'info', size: 'sm' },
                  'Info'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'warning', size: 'sm' },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'danger', size: 'sm' },
                  'Danger'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'link', size: 'sm' },
                  'Link'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Disabled state'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this ',
                  _react2.default.createElement(
                    'code',
                    null,
                    'disabled="disabled"'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary', disabled: true },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'secondary', disabled: true },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success', disabled: true },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'info', disabled: true },
                  'Info'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'warning', disabled: true },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'danger', disabled: true },
                  'Danger'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'link', disabled: true },
                  'Link'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Active state'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this class ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.active'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary', active: true },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'secondary', active: true },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success', active: true },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'info', active: true },
                  'Info'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'warning', active: true },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'danger', active: true },
                  'Danger'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'link', active: true },
                  'Link'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Block Level Buttons'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this class ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.btn-block'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'secondary', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'info', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'warning', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'danger', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'link', size: 'lg', block: true },
                  'Block level button'
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', md: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Options'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'primary' },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'secondary' },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'success' },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'warning' },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'danger' },
                  'Danger'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'With Icons'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'primary' },
                  _react2.default.createElement('i', { className: 'fa fa-star' }),
                  '\xA0 Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'secondary' },
                  _react2.default.createElement('i', { className: 'fa fa-lightbulb-o' }),
                  '\xA0 Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'success' },
                  _react2.default.createElement('i', { className: 'fa fa-magic' }),
                  '\xA0 Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'warning' },
                  _react2.default.createElement('i', { className: 'fa fa-map-marker' }),
                  '\xA0 Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-rss' }),
                  '\xA0 Danger'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Size Large'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this class ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.btn-lg'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'primary', size: 'lg' },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'secondary', size: 'lg' },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'success', size: 'lg' },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'info', size: 'lg' },
                  'Info'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'warning', size: 'lg' },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'danger', size: 'lg' },
                  'Danger'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Size Small'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this class ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.btn-sm'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'primary', size: 'sm' },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'secondary', size: 'sm' },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'success', size: 'sm' },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'info', size: 'sm' },
                  'Info'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'warning', size: 'sm' },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'danger', size: 'sm' },
                  'Danger'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Disabled state'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this ',
                  _react2.default.createElement(
                    'code',
                    null,
                    'disabled="disabled"'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'primary', disabled: true },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'secondary', disabled: true },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success', disabled: true },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'info', disabled: true },
                  'Info'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'warning', disabled: true },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'danger', disabled: true },
                  'Danger'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Active state'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this class ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.active'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'primary', active: true },
                  'Primary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'secondary', active: true },
                  'Secondary'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'success', active: true },
                  'Success'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'info', active: true },
                  'Info'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'warning', active: true },
                  'Warning'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'danger', active: true },
                  'Danger'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Block Level Buttons'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Add this class ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.btn-block'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'secondary', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'primary', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'success', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'info', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'warning', size: 'lg', block: true },
                  'Block level button'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { outline: true, color: 'danger', size: 'lg', block: true },
                  'Block level button'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Buttons;
}(_react.Component);

var _default = Buttons;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Buttons, 'Buttons', 'react-src/views/Components/Buttons/Buttons.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Components/Buttons/Buttons.js');
}();

;