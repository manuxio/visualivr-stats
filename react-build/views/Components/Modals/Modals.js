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

var Modals = function (_Component) {
  _inherits(Modals, _Component);

  function Modals(props) {
    _classCallCheck(this, Modals);

    var _this = _possibleConstructorReturn(this, (Modals.__proto__ || Object.getPrototypeOf(Modals)).call(this, props));

    _this.state = {
      modal: false,
      large: false,
      small: false,
      primary: false,
      success: false,
      warning: false,
      danger: false,
      info: false
    };

    _this.toggle = _this.toggle.bind(_this);
    _this.toggleLarge = _this.toggleLarge.bind(_this);
    _this.toggleSmall = _this.toggleSmall.bind(_this);
    _this.togglePrimary = _this.togglePrimary.bind(_this);
    _this.toggleSuccess = _this.toggleSuccess.bind(_this);
    _this.toggleWarning = _this.toggleWarning.bind(_this);
    _this.toggleDanger = _this.toggleDanger.bind(_this);
    _this.toggleInfo = _this.toggleInfo.bind(_this);
    return _this;
  }

  _createClass(Modals, [{
    key: 'toggle',
    value: function toggle() {
      this.setState({
        modal: !this.state.modal
      });
    }
  }, {
    key: 'toggleLarge',
    value: function toggleLarge() {
      this.setState({
        large: !this.state.large
      });
    }
  }, {
    key: 'toggleSmall',
    value: function toggleSmall() {
      this.setState({
        small: !this.state.small
      });
    }
  }, {
    key: 'togglePrimary',
    value: function togglePrimary() {
      this.setState({
        primary: !this.state.primary
      });
    }
  }, {
    key: 'toggleSuccess',
    value: function toggleSuccess() {
      this.setState({
        success: !this.state.success
      });
    }
  }, {
    key: 'toggleWarning',
    value: function toggleWarning() {
      this.setState({
        warning: !this.state.warning
      });
    }
  }, {
    key: 'toggleDanger',
    value: function toggleDanger() {
      this.setState({
        danger: !this.state.danger
      });
    }
  }, {
    key: 'toggleInfo',
    value: function toggleInfo() {
      this.setState({
        info: !this.state.info
      });
    }
  }, {
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
            null,
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-align-justify' }),
                ' Bootstrap Modals'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { onClick: this.toggle },
                  'Launch demo modal'
                ),
                _react2.default.createElement(
                  _reactstrap.Modal,
                  { isOpen: this.state.modal, toggle: this.toggle, className: this.props.className },
                  _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.toggle },
                    'Modal title'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'primary', onClick: this.toggle },
                      'Do Something'
                    ),
                    ' ',
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary', onClick: this.toggle },
                      'Cancel'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { onClick: this.toggleLarge },
                  'Launch large modal'
                ),
                _react2.default.createElement(
                  _reactstrap.Modal,
                  { isOpen: this.state.large, toggle: this.toggleLarge,
                    className: 'modal-lg ' + this.props.className },
                  _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.toggleLarge },
                    'Modal title'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'primary', onClick: this.toggleLarge },
                      'Do Something'
                    ),
                    ' ',
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary', onClick: this.toggleLarge },
                      'Cancel'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { onClick: this.toggleSmall },
                  'Launch small modal'
                ),
                _react2.default.createElement(
                  _reactstrap.Modal,
                  { isOpen: this.state.small, toggle: this.toggleSmall,
                    className: 'modal-sm ' + this.props.className },
                  _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.toggleSmall },
                    'Modal title'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'primary', onClick: this.toggleSmall },
                      'Do Something'
                    ),
                    ' ',
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary', onClick: this.toggleSmall },
                      'Cancel'
                    )
                  )
                ),
                _react2.default.createElement('hr', null),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'primary', onClick: this.togglePrimary },
                  'Primary modal'
                ),
                _react2.default.createElement(
                  _reactstrap.Modal,
                  { isOpen: this.state.primary, toggle: this.togglePrimary,
                    className: 'modal-primary ' + this.props.className },
                  _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.togglePrimary },
                    'Modal title'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'primary', onClick: this.togglePrimary },
                      'Do Something'
                    ),
                    ' ',
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary', onClick: this.togglePrimary },
                      'Cancel'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'success', onClick: this.toggleSuccess },
                  'Success modal'
                ),
                _react2.default.createElement(
                  _reactstrap.Modal,
                  { isOpen: this.state.success, toggle: this.toggleSuccess,
                    className: 'modal-success ' + this.props.className },
                  _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.toggleSuccess },
                    'Modal title'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'success', onClick: this.toggleSuccess },
                      'Do Something'
                    ),
                    ' ',
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary', onClick: this.toggleSuccess },
                      'Cancel'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'warning', onClick: this.toggleWarning },
                  'Warning modal'
                ),
                _react2.default.createElement(
                  _reactstrap.Modal,
                  { isOpen: this.state.warning, toggle: this.toggleWarning,
                    className: 'modal-warning ' + this.props.className },
                  _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.toggleWarning },
                    'Modal title'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'warning', onClick: this.toggleWarning },
                      'Do Something'
                    ),
                    ' ',
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary', onClick: this.toggleWarning },
                      'Cancel'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'danger', onClick: this.toggleDanger },
                  'Danger modal'
                ),
                _react2.default.createElement(
                  _reactstrap.Modal,
                  { isOpen: this.state.danger, toggle: this.toggleDanger,
                    className: 'modal-danger ' + this.props.className },
                  _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.toggleDanger },
                    'Modal title'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'danger', onClick: this.toggleDanger },
                      'Do Something'
                    ),
                    ' ',
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary', onClick: this.toggleDanger },
                      'Cancel'
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { color: 'info', onClick: this.toggleInfo },
                  'Info modal'
                ),
                _react2.default.createElement(
                  _reactstrap.Modal,
                  { isOpen: this.state.info, toggle: this.toggleInfo,
                    className: 'modal-info ' + this.props.className },
                  _react2.default.createElement(
                    _reactstrap.ModalHeader,
                    { toggle: this.toggleInfo },
                    'Modal title'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalBody,
                    null,
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                  ),
                  _react2.default.createElement(
                    _reactstrap.ModalFooter,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'primary', onClick: this.toggleInfo },
                      'Do Something'
                    ),
                    ' ',
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary', onClick: this.toggleInfo },
                      'Cancel'
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

  return Modals;
}(_react.Component);

var _default = Modals;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Modals, 'Modals', 'react-src/views/Components/Modals/Modals.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Components/Modals/Modals.js');
}();

;