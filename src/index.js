import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

global.jQuery = require('jquery');
require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
