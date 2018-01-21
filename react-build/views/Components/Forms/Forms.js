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

var Forms = function (_Component) {
  _inherits(Forms, _Component);

  function Forms(props) {
    _classCallCheck(this, Forms);

    var _this = _possibleConstructorReturn(this, (Forms.__proto__ || Object.getPrototypeOf(Forms)).call(this, props));

    _this.state = {};
    return _this;
  }

  _createClass(Forms, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'animated fadeIn' },
        _react2.default.createElement(
          _reactstrap.Row,
          null,
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Credit Card'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  ' Form'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '12' },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'name' },
                        'Name'
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'name', placeholder: 'Enter your name', required: true })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '12' },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'ccnumber' },
                        'Credit Card Number'
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'ccnumber', placeholder: '0000 0000 0000 0000', required: true })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '4' },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'ccmonth' },
                        'Month'
                      ),
                      _react2.default.createElement(
                        _reactstrap.Input,
                        { type: 'select', name: 'ccmonth', id: 'ccmonth' },
                        _react2.default.createElement(
                          'option',
                          { value: '1' },
                          '1'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2' },
                          '2'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '3' },
                          '3'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '4' },
                          '4'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '5' },
                          '5'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '6' },
                          '6'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '7' },
                          '7'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '8' },
                          '8'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '9' },
                          '9'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '10' },
                          '10'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '11' },
                          '11'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '12' },
                          '12'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '4' },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'ccyear' },
                        'Year'
                      ),
                      _react2.default.createElement(
                        _reactstrap.Input,
                        { type: 'select', name: 'ccyear', id: 'ccyear' },
                        _react2.default.createElement(
                          'option',
                          null,
                          '2017'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2018'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2019'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2020'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2021'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2022'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2023'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2024'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2025'
                        ),
                        _react2.default.createElement(
                          'option',
                          null,
                          '2026'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '4' },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'cvv' },
                        'CVV/CVC'
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'cvv', placeholder: '123', required: true })
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Company'
                ),
                _react2.default.createElement(
                  'small',
                  null,
                  ' Form'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: 'company' },
                    'Company'
                  ),
                  _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'company', placeholder: 'Enter your company name' })
                ),
                _react2.default.createElement(
                  _reactstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: 'vat' },
                    'VAT'
                  ),
                  _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'vat', placeholder: 'DE1234567890' })
                ),
                _react2.default.createElement(
                  _reactstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: 'street' },
                    'Street'
                  ),
                  _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'street', placeholder: 'Enter street name' })
                ),
                _react2.default.createElement(
                  _reactstrap.FormGroup,
                  { row: true },
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '8' },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'city' },
                        'City'
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'city', placeholder: 'Enter your city' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.Col,
                    { xs: '8' },
                    _react2.default.createElement(
                      _reactstrap.FormGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'postal-code' },
                        'Postal Code'
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'postal-code', placeholder: 'Postal Code' })
                    )
                  )
                ),
                _react2.default.createElement(
                  _reactstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: 'country' },
                    'Country'
                  ),
                  _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'country', placeholder: 'Country name' })
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
            { xs: '12', md: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Basic Form'
                ),
                ' Elements'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', encType: 'multipart/form-data', className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Static'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(
                        'p',
                        { className: 'form-control-static' },
                        'Username'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'text-input' },
                        'Text Input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'text-input', name: 'text-input', placeholder: 'Text' }),
                      _react2.default.createElement(
                        _reactstrap.FormText,
                        { color: 'muted' },
                        'This is a help text'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'email-input' },
                        'Email Input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'email-input', name: 'email-input', placeholder: 'Enter Email' }),
                      _react2.default.createElement(
                        _reactstrap.FormText,
                        { className: 'help-block' },
                        'Please enter your email'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'password-input' },
                        'Password'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'password', id: 'password-input', name: 'password-input', placeholder: 'Password' }),
                      _react2.default.createElement(
                        _reactstrap.FormText,
                        { className: 'help-block' },
                        'Please enter a complex password'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'disabled-input' },
                        'Disabled Input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'disabled-input', name: 'disabled-input', placeholder: 'Disabled', disabled: true })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'textarea-input' },
                        'Textarea'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'textarea', name: 'textarea-input', id: 'textarea-input', rows: '9',
                        placeholder: 'Content...' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'select' },
                        'Select'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(
                        _reactstrap.Input,
                        { type: 'select', name: 'select', id: 'select' },
                        _react2.default.createElement(
                          'option',
                          { value: '0' },
                          'Please select'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'selectLg' },
                        'Select Large'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9', size: 'lg' },
                      _react2.default.createElement(
                        _reactstrap.Input,
                        { type: 'select', name: 'selectLg', id: 'selectLg', bsSize: 'lg' },
                        _react2.default.createElement(
                          'option',
                          { value: '0' },
                          'Please select'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'selectSm' },
                        'Select Small'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(
                        _reactstrap.Input,
                        { type: 'select', name: 'selectSm', id: 'SelectLm', bsSize: 'sm' },
                        _react2.default.createElement(
                          'option',
                          { value: '0' },
                          'Please select'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '4' },
                          'Option #4'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '5' },
                          'Option #5'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'disabledSelect' },
                        'Disabled Select'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(
                        _reactstrap.Input,
                        { type: 'select', name: 'disabledSelect', id: 'disabledSelect', disabled: true },
                        _react2.default.createElement(
                          'option',
                          { value: '0' },
                          'Please select'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'multiple-select' },
                        'Multiple select'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '9' },
                      _react2.default.createElement(
                        _reactstrap.Input,
                        { type: 'select', name: 'multiple-select', id: 'multiple-select', multiple: true },
                        _react2.default.createElement(
                          'option',
                          { value: '1' },
                          'Option #1'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '2' },
                          'Option #2'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '3' },
                          'Option #3'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '4' },
                          'Option #4'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '5' },
                          'Option #5'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '6' },
                          'Option #6'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '7' },
                          'Option #7'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '8' },
                          'Option #8'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '9' },
                          'Option #9'
                        ),
                        _react2.default.createElement(
                          'option',
                          { value: '10' },
                          'Option #10'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Radios'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '9' },
                      _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                          'div',
                          { className: 'radio' },
                          _react2.default.createElement(
                            _reactstrap.Label,
                            { check: true, htmlFor: 'radio1' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'radio', id: 'radio1', name: 'radios', value: 'option1' }),
                            ' Option 1'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'radio' },
                          _react2.default.createElement(
                            _reactstrap.Label,
                            { check: true, htmlFor: 'radio2' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'radio', id: 'radio2', name: 'radios', value: 'option2' }),
                            ' Option 2'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'radio' },
                          _react2.default.createElement(
                            _reactstrap.Label,
                            { check: true, htmlFor: 'radio3' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'radio', id: 'radio3', name: 'radios', value: 'option3' }),
                            ' Option 3'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Inline Radios'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '9' },
                      _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'form-check-inline' },
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { check: true, htmlFor: 'inline-radio1' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'radio', id: 'inline-radio1', name: 'inline-radios', value: 'option1' }),
                          ' One'
                        ),
                        ' ',
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { check: true, htmlFor: 'inline-radio2' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'radio', id: 'inline-radio2', name: 'inline-radios', value: 'option2' }),
                          ' Two'
                        ),
                        ' ',
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { check: true, htmlFor: 'inline-radio3' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'radio', id: 'inline-radio3', name: 'inline-radios', value: 'option3' }),
                          ' Three'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Checkboxes'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '9' },
                      _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true },
                        _react2.default.createElement(
                          'div',
                          { className: 'checkbox' },
                          _react2.default.createElement(
                            _reactstrap.Label,
                            { check: true, htmlFor: 'checkbox1' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', id: 'checkbox1', name: 'checkbox1', value: 'option1' }),
                            ' Option 1'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'checkbox' },
                          _react2.default.createElement(
                            _reactstrap.Label,
                            { check: true, htmlFor: 'checkbox2' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', id: 'checkbox2', name: 'checkbox2', value: 'option2' }),
                            ' Option 2'
                          )
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'checkbox' },
                          _react2.default.createElement(
                            _reactstrap.Label,
                            { check: true, htmlFor: 'checkbox3' },
                            _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', id: 'checkbox3', name: 'checkbox3', value: 'option3' }),
                            ' Option 3'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        null,
                        'Inline Checkboxes'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '9' },
                      _react2.default.createElement(
                        _reactstrap.FormGroup,
                        { check: true, className: 'form-check-inline' },
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { check: true, htmlFor: 'inline-checkbox1' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', id: 'inline-checkbox1', name: 'inline-checkbox1', value: 'option1' }),
                          ' One'
                        ),
                        ' ',
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { check: true, htmlFor: 'inline-checkbox2' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', id: 'inline-checkbox2', name: 'inline-checkbox2', value: 'option2' }),
                          ' Two'
                        ),
                        ' ',
                        _react2.default.createElement(
                          _reactstrap.Label,
                          { check: true, htmlFor: 'inline-checkbox3' },
                          _react2.default.createElement(_reactstrap.Input, { type: 'checkbox', id: 'inline-checkbox3', name: 'inline-checkbox3', value: 'option3' }),
                          ' Three'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'file-input' },
                        'File input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'file', id: 'file-input', name: 'file-input' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'file-multiple-input' },
                        'Multiple File input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'file', id: 'file-multiple-input', name: 'file-multiple-input', multiple: true })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true, hidden: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { className: 'custom-file', htmlFor: 'file-input' },
                        'Custom file input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { className: 'custom-file' },
                        _react2.default.createElement(_reactstrap.Input, { className: 'custom-file', type: 'file', id: 'file-input', name: 'file-input' }),
                        _react2.default.createElement('span', { className: 'custom-file-control' })
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'primary' },
                  _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Inline'
                ),
                ' Form'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', inline: true },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'exampleInputName2', className: 'pr-1' },
                      'Name'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'exampleInputName2', placeholder: 'Jane Doe', required: true })
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'exampleInputEmail2', className: 'px-1' },
                      'Email'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'exampleInputEmail2', placeholder: 'jane.doe@example.com', required: true })
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'primary' },
                  _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', md: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Horizontal'
                ),
                ' Form'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'hf-email' },
                        'Email'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'hf-email', name: 'hf-email', placeholder: 'Enter Email...' }),
                      _react2.default.createElement(
                        'span',
                        { className: 'help-block' },
                        'Please enter your email'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '3' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'hf-password' },
                        'Password'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '12', md: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'password', id: 'hf-password', name: 'hf-password', placeholder: 'Enter Password...' }),
                      _react2.default.createElement(
                        'span',
                        { className: 'help-block' },
                        'Please enter your password'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'primary' },
                  _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Normal'
                ),
                ' Form'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'nf-email' },
                      'Email'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'nf-email', name: 'nf-email', placeholder: 'Enter Email..' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      'Please enter your email'
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'nf-password' },
                      'Password'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'password', id: 'nf-password', name: 'nf-password', placeholder: 'Enter Password..' }),
                    _react2.default.createElement(
                      'span',
                      { className: 'help-block' },
                      'Please enter your password'
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'primary' },
                  _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Input ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Grid'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '3' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-3' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '4' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-4' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '5' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-5' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '6' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-6' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '7' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-7' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '8' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-8' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '9' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-9' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '10' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-10' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '11' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-11' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '12' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-sm-12' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'primary' },
                  _react2.default.createElement('i', { className: 'fa fa-user' }),
                  ' Login'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            ),
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Input ',
                _react2.default.createElement(
                  'strong',
                  null,
                  'Sizes'
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '5' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'input-small' },
                        'Small Input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '6' },
                      _react2.default.createElement(_reactstrap.Input, { bsSize: 'sm', type: 'text', id: 'input-small', name: 'input-small', className: 'input-sm', placeholder: '.form-control-sm' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '5' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'input-normal' },
                        'Normal Input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '6' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'input-normal', name: 'input-normal', placeholder: 'Normal' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '5' },
                      _react2.default.createElement(
                        _reactstrap.Label,
                        { htmlFor: 'input-large' },
                        'Large Input'
                      )
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { sm: '6' },
                      _react2.default.createElement(_reactstrap.Input, { bsSize: 'lg', type: 'text', id: 'input-large', name: 'input-large', className: 'input-lg', placeholder: '.form-control-lg' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'primary' },
                  _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
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
            { xs: '12', sm: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Validation feedback'
                ),
                ' Form'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: 'inputIsValid' },
                    'Input is valid'
                  ),
                  _react2.default.createElement(_reactstrap.Input, { type: 'text', className: 'is-valid', id: 'inputIsValid' })
                ),
                _react2.default.createElement(
                  _reactstrap.FormGroup,
                  null,
                  _react2.default.createElement(
                    _reactstrap.Label,
                    { htmlFor: 'inputIsInvalid' },
                    'Input is invalid'
                  ),
                  _react2.default.createElement(_reactstrap.Input, { type: 'text', className: 'is-invalid', id: 'inputIsInvalid' })
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Validation feedback'
                ),
                ' Form'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { className: 'was-validated' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'inputSuccess2i' },
                      'Non-required input'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text', className: 'form-control-success', id: 'inputSuccess2i' })
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'inputWarning2i' },
                      'Required input'
                    ),
                    _react2.default.createElement(_reactstrap.Input, { type: 'text', className: 'form-control-warning', id: 'inputWarning2i', required: true })
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
            { xs: '12', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Icon/Text'
                ),
                ' Groups'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(
                          _reactstrap.InputGroupAddon,
                          null,
                          _react2.default.createElement('i', { className: 'fa fa-user' })
                        ),
                        _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'input1-group1', name: 'input1-group1', placeholder: 'Username' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'input2-group1', name: 'input2-group1', placeholder: 'Email' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupAddon,
                          null,
                          _react2.default.createElement('i', { className: 'fa fa-envelope-o' })
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(
                          _reactstrap.InputGroupAddon,
                          null,
                          _react2.default.createElement('i', { className: 'fa fa-euro' })
                        ),
                        _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'input3-group1', name: 'input3-group1', placeholder: '..' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupAddon,
                          null,
                          '.00'
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'success' },
                  _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Buttons'
                ),
                ' Groups'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'primary' },
                            _react2.default.createElement('i', { className: 'fa fa-search' }),
                            ' Search'
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'input1-group2', name: 'input1-group2', placeholder: 'Username' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'input2-group2', name: 'input2-group2', placeholder: 'Email' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'primary' },
                            'Submit'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'primary' },
                            _react2.default.createElement('i', { className: 'fa fa-facebook' })
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'input3-group2', name: 'input3-group2', placeholder: 'Search' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'primary' },
                            _react2.default.createElement('i', { className: 'fa fa-twitter' })
                          )
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'success' },
                  _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', md: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement(
                  'strong',
                  null,
                  'Dropdowns'
                ),
                ' Groups'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.ButtonDropdown,
                            { isOpen: this.state.first,
                              toggle: function toggle() {
                                _this2.setState({ first: !_this2.state.first });
                              } },
                            _react2.default.createElement(
                              _reactstrap.DropdownToggle,
                              { caret: true, color: 'primary' },
                              'Dropdown'
                            ),
                            _react2.default.createElement(
                              _reactstrap.DropdownMenu,
                              { className: this.state.first ? "show" : "" },
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Action'
                              ),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Another Action'
                              ),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Something else here'
                              ),
                              _react2.default.createElement(_reactstrap.DropdownItem, { divider: true }),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Separated link'
                              )
                            )
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'input1-group3', name: 'input1-group3', placeholder: 'Username' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'input2-group3', name: 'input2-group3', placeholder: 'Email' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.ButtonDropdown,
                            { isOpen: this.state.second,
                              toggle: function toggle() {
                                _this2.setState({ second: !_this2.state.second });
                              } },
                            _react2.default.createElement(
                              _reactstrap.DropdownToggle,
                              { caret: true, color: 'primary' },
                              'Dropdown'
                            ),
                            _react2.default.createElement(
                              _reactstrap.DropdownMenu,
                              { className: this.state.second ? "show" : "" },
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Action'
                              ),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Another Action'
                              ),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Something else here'
                              ),
                              _react2.default.createElement(_reactstrap.DropdownItem, { divider: true }),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Separated link'
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '12' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.ButtonDropdown,
                            { isOpen: this.state.third,
                              toggle: function toggle() {
                                _this2.setState({ third: !_this2.state.third });
                              } },
                            _react2.default.createElement(
                              _reactstrap.DropdownToggle,
                              { caret: true, color: 'primary' },
                              'Action'
                            ),
                            _react2.default.createElement(
                              _reactstrap.DropdownMenu,
                              { className: this.state.third ? "show" : "" },
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Action'
                              ),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Another Action'
                              ),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Something else here'
                              ),
                              _react2.default.createElement(_reactstrap.DropdownItem, { divider: true }),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Separated link'
                              )
                            )
                          )
                        ),
                        _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'input3-group3', name: 'input3-group3', placeholder: '..' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.ButtonDropdown,
                            { isOpen: this.state.fourth,
                              toggle: function toggle() {
                                _this2.setState({ fourth: !_this2.state.fourth });
                              } },
                            _react2.default.createElement(
                              _reactstrap.DropdownToggle,
                              { caret: true, color: 'primary' },
                              'Dropdown'
                            ),
                            _react2.default.createElement(
                              _reactstrap.DropdownMenu,
                              { className: this.state.fourth ? "show" : "" },
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Action'
                              ),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Another Action'
                              ),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Something else here'
                              ),
                              _react2.default.createElement(_reactstrap.DropdownItem, { divider: true }),
                              _react2.default.createElement(
                                _reactstrap.DropdownItem,
                                null,
                                'Separated link'
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'success' },
                  _react2.default.createElement('i', { className: 'fa fa-dot-circle-o' }),
                  ' Submit'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'reset', size: 'sm', color: 'danger' },
                  _react2.default.createElement('i', { className: 'fa fa-ban' }),
                  ' Reset'
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
            { xs: '12', md: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Use the grid for big devices!',
                _react2.default.createElement(
                  'small',
                  null,
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-lg-*'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-md-*'
                  ),
                  ' ',
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-sm-*'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '8' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-8' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '4' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-4' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '7' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-7' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '5' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-5' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '6' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-6' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '6' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-6' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '5' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-5' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '7' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-7' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '4' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-4' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { md: '8' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-md-8' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'primary' },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { size: 'sm', color: 'danger' },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { size: 'sm', color: 'warning' },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { size: 'sm', color: 'info' },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { size: 'sm', color: 'success' },
                  'Action'
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', md: '6' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Input Grid for small devices!',
                _react2.default.createElement(
                  'small',
                  null,
                  _react2.default.createElement(
                    'code',
                    null,
                    '.col-*'
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post', className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '4' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-4' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '8' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-8' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '5' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-5' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '7' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-7' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '6' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-6' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '6' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-6' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '7' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-5' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '5' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-5' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { row: true },
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '8' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-8' })
                    ),
                    _react2.default.createElement(
                      _reactstrap.Col,
                      { xs: '4' },
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', placeholder: '.col-4' })
                    )
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardFooter,
                null,
                _react2.default.createElement(
                  _reactstrap.Button,
                  { type: 'submit', size: 'sm', color: 'primary' },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { size: 'sm', color: 'danger' },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { size: 'sm', color: 'warning' },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { size: 'sm', color: 'info' },
                  'Action'
                ),
                _react2.default.createElement(
                  _reactstrap.Button,
                  { size: 'sm', color: 'success' },
                  'Action'
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
            { xs: '12', sm: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Example Form'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        'Username'
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'username3', name: 'username3' }),
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-user' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        'Email'
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'email3', name: 'email3' }),
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-envelope' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        'Password'
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'password', id: 'password3', name: 'password3' }),
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-asterisk' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { className: 'form-actions' },
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { type: 'submit', size: 'sm', color: 'primary' },
                      'Submit'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Example Form'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'username2', name: 'username2', placeholder: 'Username' }),
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-user' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'email2', name: 'email2', placeholder: 'Email' }),
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-envelope' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(_reactstrap.Input, { type: 'password', id: 'password2', name: 'password2', placeholder: 'Password' }),
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-asterisk' })
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { className: 'form-actions' },
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { type: 'submit', size: 'sm', color: 'secondary' },
                      'Submit'
                    )
                  )
                )
              )
            )
          ),
          _react2.default.createElement(
            _reactstrap.Col,
            { xs: '12', sm: '4' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                'Example Form'
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { action: '', method: 'post' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-user' })
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'text', id: 'username', name: 'username', placeholder: 'Username' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-envelope' })
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'email', id: 'email', name: 'email', placeholder: 'Email' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.InputGroup,
                      null,
                      _react2.default.createElement(
                        _reactstrap.InputGroupAddon,
                        null,
                        _react2.default.createElement('i', { className: 'fa fa-asterisk' })
                      ),
                      _react2.default.createElement(_reactstrap.Input, { type: 'password', id: 'password', name: 'password', placeholder: 'Password' })
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    { className: 'form-actions' },
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { type: 'submit', size: 'sm', color: 'success' },
                      'Submit'
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
            { xs: '12' },
            _react2.default.createElement(
              _reactstrap.Card,
              null,
              _react2.default.createElement(
                _reactstrap.CardHeader,
                null,
                _react2.default.createElement('i', { className: 'fa fa-edit' }),
                'Form Elements',
                _react2.default.createElement(
                  'div',
                  { className: 'card-actions' },
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn-setting' },
                    _react2.default.createElement('i', { className: 'icon-settings' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn-minimize' },
                    _react2.default.createElement('i', { className: 'icon-arrow-up' })
                  ),
                  _react2.default.createElement(
                    'a',
                    { href: '#', className: 'btn-close' },
                    _react2.default.createElement('i', { className: 'icon-close' })
                  )
                )
              ),
              _react2.default.createElement(
                _reactstrap.CardBody,
                null,
                _react2.default.createElement(
                  _reactstrap.Form,
                  { className: 'form-horizontal' },
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'prependedInput' },
                      'Prepended text'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'controls' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        { className: 'input-prepend' },
                        _react2.default.createElement(
                          _reactstrap.InputGroupAddon,
                          null,
                          '@'
                        ),
                        _react2.default.createElement(_reactstrap.Input, { id: 'prependedInput', size: '16', type: 'text' })
                      ),
                      _react2.default.createElement(
                        'p',
                        { className: 'help-block' },
                        'Here\'s some help text'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'appendedInput' },
                      'Appended text'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'controls' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(_reactstrap.Input, { id: 'appendedInput', size: '16', type: 'text' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupAddon,
                          null,
                          '.00'
                        )
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'help-block' },
                        'Here\'s more help text'
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'appendedPrependedInput' },
                      'Append and prepend'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'controls' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        { className: 'input-prepend' },
                        _react2.default.createElement(
                          _reactstrap.InputGroupAddon,
                          null,
                          '$'
                        ),
                        _react2.default.createElement(_reactstrap.Input, { id: 'appendedPrependedInput', size: '16', type: 'text' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupAddon,
                          null,
                          '.00'
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'appendedInputButton' },
                      'Append with button'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'controls' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(_reactstrap.Input, { id: 'appendedInputButton', size: '16', type: 'text' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'secondary' },
                            'Go!'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    _reactstrap.FormGroup,
                    null,
                    _react2.default.createElement(
                      _reactstrap.Label,
                      { htmlFor: 'appendedInputButtons' },
                      'Two-button append'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'controls' },
                      _react2.default.createElement(
                        _reactstrap.InputGroup,
                        null,
                        _react2.default.createElement(_reactstrap.Input, { id: 'appendedInputButtons', size: '16', type: 'text' }),
                        _react2.default.createElement(
                          _reactstrap.InputGroupButton,
                          null,
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'secondary' },
                            'Search'
                          ),
                          _react2.default.createElement(
                            _reactstrap.Button,
                            { color: 'secondary' },
                            'Options'
                          )
                        )
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-actions' },
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { type: 'submit', color: 'primary' },
                      'Save changes'
                    ),
                    _react2.default.createElement(
                      _reactstrap.Button,
                      { color: 'secondary' },
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

  return Forms;
}(_react.Component);

var _default = Forms;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Forms, 'Forms', 'react-src/views/Components/Forms/Forms.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'react-src/views/Components/Forms/Forms.js');
}();

;