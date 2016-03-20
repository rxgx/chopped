import ReactDOM from 'react-dom';
import RandomizerComponent from './component';

function loadApplication() {
  var container = document.getElementById('application');
  var component = <RandomizerComponent />;
  ReactDOM.render(component, container);
}

window.onload = loadApplication;
