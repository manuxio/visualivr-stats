import React from 'react';
import ReactDOM from 'react-dom';
// import { Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';

const render = MyComponent => {
  ReactDOM.render(
    <AppContainer>
      <MyComponent />
    </AppContainer>,
    document.getElementById('root'),
  );
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

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextRootContainer = require('./containers/App').default; // eslint-disable-line
    render(NextRootContainer);
  });
}
