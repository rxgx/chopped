import React from 'react';
import ReactDOM from 'react-dom';
import ReactComponent from './component';

function loadApplication() {
  const container = document.getElementById('application');
  const component = React.createElement(ReactComponent);
  ReactDOM.render(component, container);
}

window.onload = loadApplication;
