'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _superagentPromise = require('superagent-promise');

var _superagentPromise2 = _interopRequireDefault(_superagentPromise);

var _superagent2 = require('superagent');

var _superagent3 = _interopRequireDefault(_superagent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var superagent = (0, _superagentPromise2.default)(_superagent3.default, global.Promise);

var API_ROOT = '/api/';

var encode = encodeURIComponent;
var responseBody = function responseBody(res) {
  return res.body;
};

var token = null;
var tokenPlugin = function tokenPlugin(req) {
  if (token) {
    req.set('authorization', 'Token ' + token);
  }
};

var requests = {
  del: function del(url) {
    return superagent.del('' + API_ROOT + url).use(tokenPlugin).then(responseBody);
  },
  get: function get(url) {
    return superagent.get('' + API_ROOT + url).use(tokenPlugin).then(responseBody);
  },
  put: function put(url, body) {
    return superagent.put('' + API_ROOT + url, body).use(tokenPlugin).then(responseBody);
  },
  post: function post(url, body) {
    return superagent.post('' + API_ROOT + url, body).use(tokenPlugin).then(responseBody);
  }
};

var Auth = {
  current: function current() {
    return requests.get('/user');
  },
  login: function login(email, password) {
    return requests.post('/users/login', { user: { email: email, password: password } });
  },
  register: function register(username, email, password) {
    return requests.post('/users', { user: { username: username, email: email, password: password } });
  },
  save: function save(user) {
    return requests.put('/user', { user: user });
  }
};

var Tags = {
  getAll: function getAll() {
    return requests.get('/tags');
  }
};

var limit = function limit(count, p) {
  return 'limit=' + count + '&offset=' + (p ? p * count : 0);
};
var omitSlug = function omitSlug(article) {
  return Object.assign({}, article, {});
};
var Articles = {
  all: function all(page) {
    return requests.get('/articles?' + limit(10, page));
  },
  byAuthor: function byAuthor(author, page) {
    return requests.get('/articles?author=' + encode(author) + '&' + limit(5, page));
  },
  byTag: function byTag(tag, page) {
    return requests.get('/articles?tag=' + encode(tag) + '&' + limit(10, page));
  },
  del: function del(slug) {
    return requests.del('/articles/' + slug);
  },
  favorite: function favorite(slug) {
    return requests.post('/articles/' + slug + '/favorite');
  },
  favoritedBy: function favoritedBy(author, page) {
    return requests.get('/articles?favorited=' + encode(author) + '&' + limit(5, page));
  },
  feed: function feed() {
    return requests.get('/articles/feed?limit=10&offset=0');
  },
  get: function get(slug) {
    return requests.get('/articles/' + slug);
  },
  unfavorite: function unfavorite(slug) {
    return requests.del('/articles/' + slug + '/favorite');
  },
  update: function update(article) {
    return requests.put('/articles/' + article.slug, { article: omitSlug(article) });
  },
  create: function create(article) {
    return requests.post('/articles', { article: article });
  }
};

var Comments = {
  create: function create(slug, comment) {
    return requests.post('/articles/' + slug + '/comments', { comment: comment });
  },
  delete: function _delete(slug, commentId) {
    return requests.del('/articles/' + slug + '/comments/' + commentId);
  },
  forArticle: function forArticle(slug) {
    return requests.get('/articles/' + slug + '/comments');
  }
};

var Profile = {
  follow: function follow(username) {
    return requests.post('/profiles/' + username + '/follow');
  },
  get: function get(username) {
    return requests.get('/profiles/' + username);
  },
  unfollow: function unfollow(username) {
    return requests.del('/profiles/' + username + '/follow');
  }
};

var _default = {
  Articles: Articles,
  Auth: Auth,
  Comments: Comments,
  Profile: Profile,
  Tags: Tags,
  setToken: function setToken(_token) {
    token = _token;
  },
  requests: requests
};
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(superagent, 'superagent', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(API_ROOT, 'API_ROOT', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(encode, 'encode', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(responseBody, 'responseBody', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(token, 'token', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(tokenPlugin, 'tokenPlugin', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(requests, 'requests', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(Auth, 'Auth', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(Tags, 'Tags', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(limit, 'limit', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(omitSlug, 'omitSlug', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(Articles, 'Articles', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(Comments, 'Comments', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(Profile, 'Profile', 'react-src/reduxstore/agent.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/reduxstore/agent.js');
}();

;