'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _reactstrap = require('reactstrap');

var _reactRedux = require('react-redux');

var _Header = require('../../components/Header/');

var _Header2 = _interopRequireDefault(_Header);

var _Sidebar = require('../../components/Sidebar/');

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _Breadcrumb = require('../../components/Breadcrumb/');

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _Footer = require('../../components/Footer/');

var _Footer2 = _interopRequireDefault(_Footer);

var _Dashboard = require('../../views/Dashboard/');

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _StatsDashboard = require('../../views/StatsDashboard/');

var _StatsDashboard2 = _interopRequireDefault(_StatsDashboard);

var _Charts = require('../../views/Charts/');

var _Charts2 = _interopRequireDefault(_Charts);

var _Widgets = require('../../views/Widgets/');

var _Widgets2 = _interopRequireDefault(_Widgets);

var _actionTypes = require('../../reduxstore/constants/actionTypes');

var _agent = require('../../reduxstore/agent');

var _agent2 = _interopRequireDefault(_agent);

var _Buttons = require('../../views/Components/Buttons/');

var _Buttons2 = _interopRequireDefault(_Buttons);

var _Cards = require('../../views/Components/Cards/');

var _Cards2 = _interopRequireDefault(_Cards);

var _Forms = require('../../views/Components/Forms/');

var _Forms2 = _interopRequireDefault(_Forms);

var _Modals = require('../../views/Components/Modals/');

var _Modals2 = _interopRequireDefault(_Modals);

var _SocialButtons = require('../../views/Components/SocialButtons/');

var _SocialButtons2 = _interopRequireDefault(_SocialButtons);

var _Switches = require('../../views/Components/Switches/');

var _Switches2 = _interopRequireDefault(_Switches);

var _Tables = require('../../views/Components/Tables/');

var _Tables2 = _interopRequireDefault(_Tables);

var _Tabs = require('../../views/Components/Tabs/');

var _Tabs2 = _interopRequireDefault(_Tabs);

var _FontAwesome = require('../../views/Icons/FontAwesome/');

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

var _SimpleLineIcons = require('../../views/Icons/SimpleLineIcons/');

var _SimpleLineIcons2 = _interopRequireDefault(_SimpleLineIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Aside from '../../components/Aside/';


// Components


// Icons


var Full = function (_Component) {
  _inherits(Full, _Component);

  function Full() {
    _classCallCheck(this, Full);

    return _possibleConstructorReturn(this, (Full.__proto__ || Object.getPrototypeOf(Full)).apply(this, arguments));
  }

  _createClass(Full, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('this.props', this.props);
      this.props.getDataset(_agent2.default.requests.get('/dataset'));
    }
  }, {
    key: 'render',
    value: function render() {
      var props = this.props;
      return _react2.default.createElement(
        'div',
        { className: 'app ' + (props.datasetLoading ? 'spinning' : '') },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'app-body ' + (props.datasetLoading ? 'opacity50' : '') },
          _react2.default.createElement(_Sidebar2.default, this.props),
          _react2.default.createElement(
            'main',
            { className: 'main' },
            _react2.default.createElement(_Breadcrumb2.default, null),
            _react2.default.createElement(
              _reactstrap.Container,
              { fluid: true },
              _react2.default.createElement(
                _reactRouterDom.Switch,
                null,
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard', name: 'Dashboard', component: _Dashboard2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/dashboard2', name: 'Dashboard2', component: _StatsDashboard2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/buttons', name: 'Buttons', component: _Buttons2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/cards', name: 'Cards', component: _Cards2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/forms', name: 'Forms', component: _Forms2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/modals', name: 'Modals', component: _Modals2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/social-buttons', name: 'Social Buttons', component: _SocialButtons2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/switches', name: 'Swithces', component: _Switches2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/tables', name: 'Tables', component: _Tables2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/components/tabs', name: 'Tabs', component: _Tabs2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/icons/font-awesome', name: 'Font Awesome', component: _FontAwesome2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: _SimpleLineIcons2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/widgets', name: 'Widgets', component: _Widgets2.default }),
                _react2.default.createElement(_reactRouterDom.Route, { path: '/charts', name: 'Charts', component: _Charts2.default }),
                _react2.default.createElement(_reactRouterDom.Redirect, { from: '/', to: '/dashboard' })
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'app-spinner ' + (props.datasetLoading ? 'd-block' : 'd-none') },
          _react2.default.createElement(
            'div',
            { className: 'sk-cube-grid' },
            _react2.default.createElement('div', { className: 'sk-cube sk-cube1' }),
            _react2.default.createElement('div', { className: 'sk-cube sk-cube2' }),
            _react2.default.createElement('div', { className: 'sk-cube sk-cube3' }),
            _react2.default.createElement('div', { className: 'sk-cube sk-cube4' }),
            _react2.default.createElement('div', { className: 'sk-cube sk-cube5' }),
            _react2.default.createElement('div', { className: 'sk-cube sk-cube6' }),
            _react2.default.createElement('div', { className: 'sk-cube sk-cube7' }),
            _react2.default.createElement('div', { className: 'sk-cube sk-cube8' }),
            _react2.default.createElement('div', { className: 'sk-cube sk-cube9' })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Full;
}(_react.Component);

Full.propTypes = {
  datasetLoading: _propTypes2.default.bool,
  getDataset: _propTypes2.default.func.isRequired
};


var mapStateToProps = function mapStateToProps(state /* , ownProps*/) {
  return {
    datasetLoading: state.dataset.changing
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getDataset: function getDataset(payload) {
      return dispatch({ type: _actionTypes.DATASET_CHANGE, payload: payload });
    }
  };
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Full);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Full, 'Full', 'react-src/containers/Full/Full.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'react-src/containers/Full/Full.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'react-src/containers/Full/Full.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/containers/Full/Full.js');
}();

;