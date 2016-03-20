import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import RandomizerComponent from './component';

function loadApplication() {
  var container = document.getElementById('application');
  var component = React.createElement(RandomizerComponent);
  ReactDOM.render(component, container);
}

window.onload = loadApplication;
