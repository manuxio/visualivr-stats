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

var Tables = function (_Component) {
  _inherits(Tables, _Component);

  function Tables() {
    _classCallCheck(this, Tables);

    return _possibleConstructorReturn(this, (Tables.__proto__ || Object.getPrototypeOf(Tables)).apply(this, arguments));
  }

  _createClass(Tables, [{
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
            { xs: '12', lg: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-align-justify' }),
                ' Simple Table'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Table,
                  { responsive: true },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Samppa Nori'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Estavan Lykos'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Chetan Mohamed'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Derick Maximinus'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Friderik D\xE1vid'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Pagination,
                  null,
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(_reactstrap.PaginationLink, { previous: true, href: '#' })
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    { active: true },
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '1'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '2'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '4'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(_reactstrap.PaginationLink, { next: true, href: '#' })
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', lg: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-align-justify' }),
                ' Striped Table'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Table,
                  { responsive: true, striped: true },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Yiorgos Avraamu'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Avram Tarasios'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Quintin Ed'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'En\xE9as Kwadwo'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Agapetus Tade\xE1\u0161'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Pagination,
                  null,
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    { disabled: true },
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { previous: true, href: '#' },
                      'Prev'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    { active: true },
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '1'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '2'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '4'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { next: true, href: '#' },
                      'Next'
                    )
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
            { xs: '12', lg: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-align-justify' }),
                ' Condensed Table'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Table,
                  { responsive: true, size: 'sm' },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Carwyn Fachtna'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Nehemiah Tatius'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Ebbe Gemariah'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Eustorgios Amulius'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Leopold G\xE1sp\xE1r'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Pagination,
                  null,
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { previous: true, href: '#' },
                      'Prev'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    { active: true },
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '1'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '2'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '4'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { next: true, href: '#' },
                      'Next'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', lg: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-align-justify' }),
                ' Bordered Table'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Table,
                  { responsive: true, bordered: true },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Pompeius Ren\xE9'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Pa\u0109jo Jadon'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Micheal Mercurius'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Ganesha Dubhghall'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Hiroto \u0160imun'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Pagination,
                  null,
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { previous: true, href: '#' },
                      'Prev'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    { active: true },
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '1'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    { className: 'page-item' },
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '2'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { href: '#' },
                      '4'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.PaginationItem,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationLink,
                      { next: true, href: '#' },
                      'Next'
                    )
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
            null,
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-align-justify' }),
                ' Combined All Table'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Table,
                  { hover: true, bordered: true, striped: true, responsive: true, size: 'sm' },
                  _react2.default.createElement(
                    'thead',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'th',
                        null,
                        'Username'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Date registered'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Role'
                      ),
                      _react2.default.createElement(
                        'th',
                        null,
                        'Status'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'tbody',
                    null,
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Vishnu Serghei'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Zbyn\u011Bk Phoibos'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'danger' },
                          'Banned'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Einar Randall'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/02/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Admin'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'secondary' },
                          'Inactive'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'F\xE9lix Troels'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/03/01'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Member'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'warning' },
                          'Pending'
                        )
                      )
                    ),
                    _react2.default.createElement(
                      'tr',
                      null,
                      _react2.default.createElement(
                        'td',
                        null,
                        'Aulus Agmundr'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        '2012/01/21'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        'Staff'
                      ),
                      _react2.default.createElement(
                        'td',
                        null,
                        _react2.default.createElement(
                          _reactstrap.Badge,
                          { color: 'success' },
                          'Active'
                        )
                      )
                    )
                  )
                ),
                _react2.default.createElement(
                  'nav',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Pagination,
                    null,
                    _react2.default.createElement(
                      _reactstrap.PaginationItem,
                      null,
                      _react2.default.createElement(
                        _reactstrap.PaginationLink,
                        { previous: true, href: '#' },
                        'Prev'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.PaginationItem,
                      { active: true },
                      _react2.default.createElement(
                        _reactstrap.PaginationLink,
                        { href: '#' },
                        '1'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.PaginationItem,
                      null,
                      _react2.default.createElement(
                        _reactstrap.PaginationLink,
                        { href: '#' },
                        '2'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.PaginationItem,
                      null,
                      _react2.default.createElement(
                        _reactstrap.PaginationLink,
                        { href: '#' },
                        '3'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.PaginationItem,
                      null,
                      _react2.default.createElement(
                        _reactstrap.PaginationLink,
                        { href: '#' },
                        '4'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.PaginationItem,
                      null,
                      _react2.default.createElement(
                        _reactstrap.PaginationLink,
                        { next: true, href: '#' },
                        'Next'
                      )
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Tables;
}(_react.Component);

var _default = Tables;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Tables, 'Tables', 'react-src/views/Components/Tables/Tables.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Components/Tables/Tables.js');
}();

;