'use strict';

var RandomizerComponent = React.createClass({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var sitesRef = new Firebase('https://thisforthat.firebaseio.com/data/');
    this.bindAsObject(sitesRef, 'data');
  },

  componentWillUnmount: function() {
    this.unbind('items');
  },

  getInitialState: function() {
    var data = {
      sites: ['Website'],
      things: ['Thing']
    };

    return { data: data };
  },

  getRandomValue: function(model) {
    var records = this.state.data[model];
    var record = records[Math.floor(Math.random() * records.length)];
    return record;
  },

  onClick: function() {
    var site = this.getRandomValue('sites');
    var thing = this.getRandomValue('things');
    this.setState({ site: site, thing: thing });
  },

  render: function() {
    var DOM = React.DOM;

    var site = this.getRandomValue('sites');
    var thing = this.getRandomValue('things');

    return DOM.div({ className: 'container' },
      DOM.p({ },
        DOM.strong({style: styles.output }, site),
        DOM.em({ style: styles.separator }, 'for'),
        DOM.strong({ style: styles.output }, thing)
      ),
      DOM.p({ style: styles.content },
        DOM.button({
          className: 'hitarea',
          onClick: this.onClick,
          style: styles.button,
          type: 'button'
        }, 'Try Again')
      )
    );
  }
});

function loadApplication(event) {
  var container = document.getElementById('application');
  var application = React.createElement(RandomizerComponent);
  React.render(application, container);
}

window.onload = loadApplication;
