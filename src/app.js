import Firebase from 'firebase';
import ReactFireMixin from 'reactfire';
import React from 'react';

const FIREBASE_URL = 'https://thisforthat.firebaseio.com/data/';

const inlineMixin = {
  display: 'inline-block',
  verticalAlign: 'middle'
};

const styles = {
  button: {
    border: '1px solid lightgray',
    padding: '.5em 1em',
    backgroundColor: '#39f',
    color: 'white',
    display: 'inline-block'
  },

  content: {
    marginTop: '3em',
    textAlign: 'center'
  },

  separator: Object.assign({
    margin: '0 1em',
    fontSize: '1.25rem',
    fontFamily: 'serif',
    fontStyle: 'italic'
  }, inlineMixin),

  output: Object.assign({
    border: '1px solid #39f',
    padding: '.5em .75em',
    fontSize: '1.75em',
    fontWeight: '300',
    lineHeight: '1.75rem'
  }, inlineMixin)
};

const RandomizerComponent = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function componentWillMount() {
    let sitesRef = new Firebase(FIREBASE_URL);
    this.bindAsObject(sitesRef, 'data');
  },

  componentWillUnmount: function componentWillUnmount() {
    this.unbind('items');
  },

  getInitialState: function getInitialState() {
    let data = {
      sites: ['Website'],
      things: ['Thing']
    };

    return {data: data};
  },

  getRandomValue: function getRandomValue(model) {
    var records = this.state.data[model];
    var record = records[Math.floor(Math.random() * records.length)];
    return record;
  },

  onClick: function onClick() {
    var site = this.getRandomValue('sites');
    var thing = this.getRandomValue('things');
    this.setState({site: site, thing: thing});
  },

  render: function render() {
    const site = this.getRandomValue('sites');
    const thing = this.getRandomValue('things');

    return (
      <div className="container">
        <p>
          <strong style={styles.output}>{site}</strong>
          <em style={styles.separator}>for</em>
          <strong style={styles.output}>{thing}</strong>
        </p>
        <p style={styles.content}>
          <button className="hitarea" onClick={this.onClick} style={styles.button} type="button">Try Again</button>
        </p>
      </div>
    );
  }
});

function loadApplication() {
  var container = document.getElementById('application');
  var application = React.createElement(RandomizerComponent);
  React.render(application, container);
}

window.onload = loadApplication;
