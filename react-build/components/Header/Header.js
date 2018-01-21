'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actionTypes = require('../../reduxstore/constants/actionTypes');

var _throttleDebounce = require('throttle-debounce');

var _agent = require('../../reduxstore/agent');

var _agent2 = _interopRequireDefault(_agent);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = require('reactstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import HeaderDropdown from './HeaderDropdown';

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    console.log('Props', props);
    _this.state = {
      idcliente: props.idcliente,
      mandato: props.mandato,
      start: props.start || new Date(),
      end: props.end || new Date()
    };
    console.log('This.state', _this.state);
    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      console.log('Will Receive New Props', newProps);
      if (newProps.mandato !== this.state.mandato || newProps.idcliente !== this.state.idcliente || typeof newProps.start !== 'undefined' && newProps.start.toString() !== this.state.start.toString() || typeof newProps.end !== 'undefined' && newProps.end.toString() !== this.state.end.toString()) {
        this.setState({
          mandato: newProps.mandato || '',
          idcliente: newProps.idcliente || '',
          start: newProps.start,
          end: newProps.end
        });
      }
    }
  }, {
    key: 'sidebarToggle',
    value: function sidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-hidden');
    }
  }, {
    key: 'sidebarMinimize',
    value: function sidebarMinimize(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-minimized');
    }
  }, {
    key: 'mobileSidebarToggle',
    value: function mobileSidebarToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('sidebar-mobile-show');
    }
  }, {
    key: 'asideToggle',
    value: function asideToggle(e) {
      e.preventDefault();
      document.body.classList.toggle('aside-menu-hidden');
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'setDataset',
    value: function setDataset() {
      this.props.setDataset(_agent2.default.requests.post('/dataset', {
        mandato: this.state.mandato,
        idcliente: this.state.idcliente,
        start: this.state.start,
        end: this.state.end
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'header',
        { className: 'app-header navbar' },
        _react2.default.createElement(
          _reactstrap.NavbarToggler,
          { className: 'd-lg-none', onClick: this.mobileSidebarToggle },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        _react2.default.createElement(_reactstrap.NavbarBrand, { href: '#' }),
        _react2.default.createElement(
          _reactstrap.NavbarToggler,
          { className: 'd-md-down-none', onClick: this.sidebarToggle },
          _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
        ),
        _react2.default.createElement(
          _reactstrap.Nav,
          { className: 'd-md-down-none', navbar: true },
          _react2.default.createElement(
            _reactstrap.Form,
            { action: '', method: 'post', inline: true },
            _react2.default.createElement(
              _reactstrap.FormGroup,
              null,
              _react2.default.createElement(_reactstrap.Label, { htmlFor: 'idCliente', className: 'px-1' }),
              _react2.default.createElement(_reactstrap.Input, { value: this.state.idcliente, type: 'text', id: 'idCliente', placeholder: 'Cliente', onChange: function onChange(e) {
                  _this2.setState({
                    idcliente: e.target.value
                  });
                } })
            ),
            _react2.default.createElement(
              _reactstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactstrap.Label,
                { htmlFor: 'idLotto', className: 'px-1' },
                '\xA0'
              ),
              _react2.default.createElement(_reactstrap.Input, { value: this.state.mandato, type: 'text', id: 'idLotto', placeholder: 'Mandato', onChange: function onChange(e) {
                  _this2.setState({
                    mandato: e.target.value
                  });
                } })
            ),
            _react2.default.createElement(
              _reactstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactstrap.Label,
                { htmlFor: 'startDate', className: 'px-1' },
                'Inizio'
              ),
              _react2.default.createElement(_reactstrap.Input, { value: (0, _moment2.default)(this.state.start).format('YYYY-MM-DD'), type: 'date', name: 'start', id: 'startDate', placeholder: 'datetime placeholder', onChange: function onChange(e) {
                  console.log('Start', e.target.value);
                  var s = (0, _moment2.default)(e.target.value, 'YYYY-MM-DD').startOf('day').toDate();
                  var end = _this2.state.end;
                  if (!(0, _moment2.default)(e.target.value, 'YYYY-MM-DD').isValid()) {
                    s = '';
                    end = '';
                  } else if ((0, _moment2.default)(s).isAfter(end)) {
                    end = (0, _moment2.default)(s).endOf('day');
                  }
                  console.log('Setting start', s);
                  _this2.setState({
                    start: s,
                    end: end
                  });
                } }),
              _react2.default.createElement(
                _reactstrap.Label,
                { htmlFor: 'endDate', className: 'px-1' },
                'Fine'
              ),
              _react2.default.createElement(_reactstrap.Input, { value: (0, _moment2.default)(this.state.end).format('YYYY-MM-DD'), type: 'date', name: 'end', id: 'endDate', placeholder: 'datetime placeholder', onChange: function onChange(e) {
                  console.log('End', e.target.value);
                  var end = (0, _moment2.default)(e.target.value, 'YYYY-MM-DD').endOf('day').toDate();
                  var start = _this2.state.start;
                  if (!(0, _moment2.default)(e.target.value, 'YYYY-MM-DD').isValid()) {
                    end = '';
                    start = '';
                  } else if ((0, _moment2.default)(end).isBefore(start)) {
                    start = (0, _moment2.default)(end).startOf('day');
                  }
                  _this2.setState({
                    start: start,
                    end: end
                  });
                } })
            ),
            _react2.default.createElement(
              _reactstrap.FormGroup,
              null,
              _react2.default.createElement(
                _reactstrap.Button,
                { type: 'button', onClick: function onClick() {
                    _this2.setDataset();
                  }, style: { marginLeft: '10px' } },
                'Imposta'
              )
            )
          )
        ),
        _react2.default.createElement(_reactstrap.Nav, { className: 'ml-auto', navbar: true }),
        _react2.default.createElement(
          'span',
          null,
          '\xA0'
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

Header.propTypes = {
  setDataset: _propTypes2.default.func.isRequired,
  mandato: _propTypes2.default.any,
  idcliente: _propTypes2.default.any,
  start: _propTypes2.default.date,
  end: _propTypes2.default.date
};


var mapStateToProps = function mapStateToProps(state) {
  console.log('mapStateToProps', state);
  return {
    mandato: state.dataset.mandato,
    idcliente: state.dataset.idcliente,
    end: state.dataset.end,
    start: state.dataset.start
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setDataset: function setDataset(payload) {
      return dispatch({ type: _actionTypes.DATASET_CHANGE, payload: payload });
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Header, 'Header', 'react-src/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'react-src/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'react-src/components/Header/Header.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/components/Header/Header.js');
}();

;