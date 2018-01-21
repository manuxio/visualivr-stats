'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactHotLoader = require('react-hot-loader');

var _App = require('./containers/App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import { Provider } from 'react-redux';
var render = function render(MyComponent) {
  _reactDom2.default.render(_react2.default.createElement(
    _reactHotLoader.AppContainer,
    null,
    _react2.default.createElement(MyComponent, null)
  ), document.getElementById('root'));
};

// ReactDOM.render((
//   <AppContainer>
//     <Provider store={store}>
//       <ConnectedRouter history={history}>
//         <Switch>
//           <Route exact path="/login" name="Login Page" component={Login}/>
//           <Route exact path="/register" name="Register Page" component={Register}/>
//           <Route exact path="/404" name="Page 404" component={Page404}/>
//           <Route exact path="/500" name="Page 500" component={Page500}/>
//           <Route path="/" name="Home" component={Full}/>
//         </Switch>
//       </ConnectedRouter>
//     </Provider>
//   </AppContainer>
// ), document.getElementById('root'));

render(_App2.default);

if (module.hot) {
  module.hot.accept('./containers/App', function () {
    var NextRootContainer = require('./containers/App').default; // eslint-disable-line
    render(NextRootContainer);
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(render, 'render', 'react-src/index.js');
}();

;