'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var routes = {
  '/': 'Home',
  '/dashboard': 'Dashboard',
  '/components': 'Components',
  '/charts': 'Charts',
  '/components/buttons': 'Buttons',
  '/components/social-buttons': 'Social Buttons',
  '/components/cards': 'Cards',
  '/components/forms': 'Forms',
  '/components/modals': 'Modals',
  '/components/switches': 'Switches',
  '/components/tables': 'Tables',
  '/components/tabs': 'Tabs',
  '/icons': 'Icons',
  '/icons/font-awesome': 'Font Awesome',
  '/icons/simple-line-icons': 'Simple Line Icons',
  '/widgets': 'Widgets'
};
var _default = routes;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(routes, 'routes', 'react-src/routes.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/routes.js');
}();

;