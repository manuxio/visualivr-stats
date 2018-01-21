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

var SocialButtons = function (_Component) {
  _inherits(SocialButtons, _Component);

  function SocialButtons() {
    _classCallCheck(this, SocialButtons);

    return _possibleConstructorReturn(this, (SocialButtons.__proto__ || Object.getPrototypeOf(SocialButtons)).apply(this, arguments));
  }

  _createClass(SocialButtons, [{
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
            { xs: '12' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Social Media Button'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Usage ex.'
                ),
                _react2.default.createElement(
                  'code',
                  { style: { textTransform: 'lowercase' } },
                  '<button className="btn-facebook"><span> Facebook</span></Button>'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Small',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Add this class ',
                    _react2.default.createElement(
                      'code',
                      null,
                      '.btn-sm'
                    )
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-facebook' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-twitter' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-linkedin' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-flickr' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-tumblr' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-xing' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-github' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-html5' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-openid' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-stack-overflow' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-css3' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-youtube' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-dribbble' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-google-plus' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-instagram' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-pinterest' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vk' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-yahoo' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-behance' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-dropbox' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-reddit' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-spotify' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vine' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-foursquare' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vimeo' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Normal'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-facebook' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-twitter' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-linkedin' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-flickr' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-tumblr' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-xing' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-github' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-html5' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-openid' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-stack-overflow' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-css3' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-youtube' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-dribbble' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-google-plus' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-instagram' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-pinterest' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vk' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-yahoo' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-behance' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-dropbox' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-reddit' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-spotify' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vine' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-foursquare' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vimeo' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Large',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Add this class ',
                    _react2.default.createElement(
                      'code',
                      null,
                      '.btn-lg'
                    )
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-facebook' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-twitter' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-linkedin' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-flickr' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-tumblr' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-xing' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-github' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-html5' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-openid' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-stack-overflow' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-css3' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-youtube' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-dribbble' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-google-plus' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-instagram' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-pinterest' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vk' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-yahoo' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-behance' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-dropbox' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-reddit' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-spotify' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vine' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-foursquare' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vimeo' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Social Media Button'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Only icons. Usage ex.'
                ),
                _react2.default.createElement(
                  'code',
                  { style: { textTransform: 'lowercase' } },
                  '<button className="btn-facebook icon"><span> Facebook</span></Button>'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Small',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Add this class ',
                    _react2.default.createElement(
                      'code',
                      null,
                      '.btn-sm'
                    )
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-facebook icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-twitter icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-linkedin icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-flickr icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-tumblr icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-xing icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-github icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-html5 icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-openid icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-stack-overflow icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-css3 icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-youtube icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-dribbble icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-google-plus icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-instagram icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-pinterest icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vk icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-yahoo icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-behance icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-dropbox icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-reddit icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-spotify icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vine icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-foursquare icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vimeo icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Normal'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-facebook icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-twitter icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-linkedin icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-flickr icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-tumblr icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-xing icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-github icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-html5 icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-openid icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-stack-overflow icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-css3 icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-youtube icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-dribbble icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-google-plus icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-instagram icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-pinterest icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vk icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-yahoo icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-behance icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-dropbox icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-reddit icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-spotify icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vine icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-foursquare icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vimeo icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Large',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Add this class ',
                    _react2.default.createElement(
                      'code',
                      null,
                      '.btn-lg'
                    )
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-facebook icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-twitter icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-linkedin icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-flickr icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-tumblr icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-xing icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-github icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-html5 icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-openid icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-stack-overflow icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-css3 icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-youtube icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-dribbble icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-google-plus icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-instagram icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-pinterest icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vk icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-yahoo icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-behance icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-dropbox icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-reddit icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-spotify icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vine icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-foursquare icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vimeo icon' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Social Media Button'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  'Only text. Usage ex.'
                ),
                _react2.default.createElement(
                  'code',
                  { style: { textTransform: 'lowercase' } },
                  '<button className="btn-facebook text"><span> Facebook</span></Button>'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Small',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Add this class ',
                    _react2.default.createElement(
                      'code',
                      null,
                      '.btn-sm'
                    )
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-facebook text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-twitter text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-linkedin text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-flickr text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-tumblr text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-xing text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-github text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-html5 text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-openid text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-stack-overflow text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-css3 text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-youtube text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-dribbble text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-google-plus text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-instagram text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-pinterest text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vk text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-yahoo text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-behance text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-dropbox text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-reddit text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-spotify text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vine text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-foursquare text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'sm', className: 'btn-vimeo text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Normal'
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-facebook text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-twitter text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-linkedin text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-flickr text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-tumblr text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-xing text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-github text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-html5 text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-openid text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-stack-overflow text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-css3 text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-youtube text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-dribbble text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-google-plus text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-instagram text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-pinterest text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vk text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-yahoo text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-behance text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-dropbox text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-reddit text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-spotify text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vine text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-foursquare text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { className: 'btn-vimeo text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
                    )
                  )
                ),
                _react2.default.createElement(
                  'h6',
                  null,
                  'Size Large',
                  _react2.default.createElement(
                    'small',
                    null,
                    'Add this class ',
                    _react2.default.createElement(
                      'code',
                      null,
                      '.btn-lg'
                    )
                  )
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-facebook text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Facebook'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-twitter text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Twitter'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-linkedin text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'LinkedIn'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-flickr text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Flickr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-tumblr text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Tumblr'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-xing text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Xing'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-github text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Github'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-html5 text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'HTML5'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-openid text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'OpenID'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-stack-overflow text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'StackOverflow'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-css3 text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'CSS3'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-youtube text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'YouTube'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-dribbble text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dribbble'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-google-plus text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Google+'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-instagram text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Instagram'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-pinterest text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Pinterest'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vk text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'VK'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-yahoo text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Yahoo'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-behance text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Behance'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-dropbox text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Dropbox'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-reddit text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Reddit'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-spotify text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Spotify'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vine text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vine'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-foursquare text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Forsquare'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Button,
                    { size: 'lg', className: 'btn-vimeo text' },
                    _react2.default.createElement(
                      'span',
                      null,
                      'Vimeo'
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

  return SocialButtons;
}(_react.Component);

var _default = SocialButtons;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SocialButtons, 'SocialButtons', 'react-src/views/Components/SocialButtons/SocialButtons.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Components/SocialButtons/SocialButtons.js');
}();

;