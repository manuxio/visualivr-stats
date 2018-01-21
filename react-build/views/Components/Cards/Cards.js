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

var Cards = function (_Component) {
  _inherits(Cards, _Component);

  function Cards() {
    _classCallCheck(this, Cards);

    return _possibleConstructorReturn(this, (Cards.__proto__ || Object.getPrototypeOf(Cards)).apply(this, arguments));
  }

  _createClass(Cards, [{
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
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card title'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                'Card footer'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-check float-right' }),
                'Card with icon'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with switch',
                _react2.default.createElement(
                  _reactstrap.Label,
                  { className: 'switch switch-sm switch-text switch-info float-right mb-0' },
                  _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', className: 'switch-input' }),
                  _react2.default.createElement('span', { className: 'switch-label', 'data-on': 'On', 'data-off': 'Off' }),
                  _react2.default.createElement('span', { className: 'switch-handle' })
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with label',
                _react2.default.createElement(
                  _reactstrap.Badge,
                  { color: 'success', className: 'float-right' },
                  'Success'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with label',
                _react2.default.createElement(
                  _reactstrap.Badge,
                  { pill: true, color: 'danger', className: 'float-right' },
                  '42'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'border-primary' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card outline primary'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'border-secondary' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card outline secondary'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'border-success' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card outline success'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'border-info' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card outline info'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'border-warning' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card outline warning'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'border-danger' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card outline danger'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'card-accent-primary' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with accent'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'card-accent-secondary' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with accent'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'card-accent-success' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with accent'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'card-accent-info' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with accent'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'card-accent-warning' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with accent'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'card-accent-danger' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card with accent'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-primary text-center' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'blockquote',
                  { className: 'card-bodyquote' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  ),
                  _react2.default.createElement(
                    'footer',
                    null,
                    'Someone famous in ',
                    _react2.default.createElement(
                      'cite',
                      { title: 'Source Title' },
                      'Source Title'
                    ),
                    ' '
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-success text-center' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'blockquote',
                  { className: 'card-bodyquote' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  ),
                  _react2.default.createElement(
                    'footer',
                    null,
                    'Someone famous in ',
                    _react2.default.createElement(
                      'cite',
                      { title: 'Source Title' },
                      'Source Title'
                    ),
                    ' '
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-info text-center' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'blockquote',
                  { className: 'card-bodyquote' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  ),
                  _react2.default.createElement(
                    'footer',
                    null,
                    'Someone famous in ',
                    _react2.default.createElement(
                      'cite',
                      { title: 'Source Title' },
                      'Source Title'
                    ),
                    ' '
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-warning text-center' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'blockquote',
                  { className: 'card-bodyquote' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  ),
                  _react2.default.createElement(
                    'footer',
                    null,
                    'Someone famous in ',
                    _react2.default.createElement(
                      'cite',
                      { title: 'Source Title' },
                      'Source Title'
                    ),
                    ' '
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-danger text-center' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'blockquote',
                  { className: 'card-bodyquote' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  ),
                  _react2.default.createElement(
                    'footer',
                    null,
                    'Someone famous in ',
                    _react2.default.createElement(
                      'cite',
                      { title: 'Source Title' },
                      'Source Title'
                    ),
                    ' '
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-primary text-center' },
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'blockquote',
                  { className: 'card-bodyquote' },
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
                  ),
                  _react2.default.createElement(
                    'footer',
                    null,
                    'Someone famous in ',
                    _react2.default.createElement(
                      'cite',
                      { title: 'Source Title' },
                      'Source Title'
                    ),
                    ' '
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-primary' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card title'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-success' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card title'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-info' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card title'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-warning' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card title'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              { className: 'text-white bg-danger' },
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Card title'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
              )
            )
          )
        )
      );
    }
  }]);

  return Cards;
}(_react.Component);

var _default = Cards;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Cards, 'Cards', 'react-src/views/Components/Cards/Cards.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Components/Cards/Cards.js');
}();

;