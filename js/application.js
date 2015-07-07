
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

    render: function() {
        var DOM = React.DOM;

        var sites = this.state.data.sites;
        var site = sites[Math.floor(Math.random() * sites.length)];

        var things = this.state.data.things;
        var thing = things[Math.floor(Math.random() * things.length)];

        return DOM.div({ className: 'container' }, [
            DOM.strong({ style: styles.output }, site),
            DOM.em({ style: styles.separator }, 'for'),
            DOM.strong({ style: styles.output }, thing)
        ]);
    }
});

function loadApplication(event) {
    var container = document.getElementById('application');
    var application = React.createElement(RandomizerComponent);
    React.render(application, container);
};

window.onload = loadApplication;
