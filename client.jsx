const React = require('react');
const ReactDOM = require('react-dom');
require('object-assign');
require('prop-types');

const WordRelay = require('./WordRelay');

ReactDOM.render(<WordRelay />, document.querySelector('#root'));
