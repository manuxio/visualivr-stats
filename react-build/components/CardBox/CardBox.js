'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactstrap = require('reactstrap');

var _agent = require('../../reduxstore/agent.js');

var _agent2 = _interopRequireDefault(_agent);

var _datasetHelper = require('../../tools/datasetHelper.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import { Bar, Line } from 'react-chartjs-2';


var CardBox = function (_Component) {
  _inherits(CardBox, _Component);

  function CardBox(props) {
    _classCallCheck(this, CardBox);

    var _this = _possibleConstructorReturn(this, (CardBox.__proto__ || Object.getPrototypeOf(CardBox)).call(this, props));

    _this.state = _extends({}, props, {
      data: null,
      datasetReady: (0, _datasetHelper.isDatasetReady)(props),
      datasetChanged: false,
      error: false
    });
    return _this;
  }

  _createClass(CardBox, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.dataReloader) {
        clearTimeout(this.dataReloader);
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var datasetReady = this.state.datasetReady;

      if (datasetReady) {
        this.setState({
          error: false,
          data: null,
          datasetChanged: false
        }, function () {
          _this2.reloadData();
        });
      }
    }
  }, {
    key: 'reloadData',
    value: function reloadData() {
      var _this3 = this;

      console.log('CardBox', 'Loading data');
      var urlsToLoad = [this.props.dataUrl];
      var webRequests = urlsToLoad.map(function (url) {
        return _agent2.default.requests.get(url);
      });
      if (this.dataReloader) {
        clearTimeout(this.dataReloader);
      }
      Promise.all(webRequests).then(function (copyOfReplies) {
        var replies = copyOfReplies;
        _this3.setState({
          error: false,
          data: replies[0]
        }, function () {
          if (_this3.props.refreshInterval > 0) {
            _this3.dataReloader = setTimeout(function () {
              var datasetReady = _this3.state.datasetReady;

              if (datasetReady) {
                _this3.reloadData();
              }
            }, _this3.props.refreshInterval);
          }
        });
      }, function (e) {
        _this3.setState({
          error: true,
          errorMessage: e
        });
      });
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var _this4 = this;

      if ((0, _datasetHelper.isDatasetChanged)(newProps, this.state) || JSON.stringify(this.props.dataUrl) === JSON.stringify(newProps.dataUrl)) {
        this.setState(_extends({}, newProps, {
          datasetChanged: true,
          datasetReady: (0, _datasetHelper.isDatasetReady)(newProps)
        }), function () {
          if ((0, _datasetHelper.isDatasetReady)(newProps)) {
            _this4.reloadData();
          }
        });
      } else {
        this.setState(_extends({}, newProps, {
          datasetChanged: false,
          datasetReady: (0, _datasetHelper.isDatasetReady)(newProps)
        }));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.state.data;

      console.log('CardBox data', data);
      return _react2.default.createElement(
        _reactstrap.Card,
        { className: this.props.className },
        _react2.default.createElement(
          _reactstrap.CardBody,
          null,
          _react2.default.createElement(
            'div',
            { className: 'h1 text-muted text-right mb-2' },
            _react2.default.createElement('i', { className: this.props.icon })
          ),
          _react2.default.createElement(
            'div',
            { className: 'h4 mb-0' },
            data
          ),
          _react2.default.createElement(
            'small',
            { className: 'text-muted text-uppercase font-weight-bold' },
            this.props.title
          )
        )
      );
    }
  }]);

  return CardBox;
}(_react.Component);

CardBox.propTypes = {
  icon: _propTypes2.default.string,
  type: _propTypes2.default.string,
  refreshInterval: _propTypes2.default.number,
  height: _propTypes2.default.number.isRequired,
  value: _propTypes2.default.string,
  title: _propTypes2.default.string,
  dataUrl: _propTypes2.default.string,
  className: _propTypes2.default.string
};
CardBox.defaultProps = {
  refreshInterval: 0,
  dataUrl: '',
  className: ''
};

var _default = (0, _reactRedux.connect)(_datasetHelper.datasetMapStateToProps)(CardBox);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CardBox, 'CardBox', 'react-src/components/CardBox/CardBox.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/components/CardBox/CardBox.js');
}();

;