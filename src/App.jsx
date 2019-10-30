import firebase from "firebase";
import React from "react";
import AppStyled from './AppStyled';

class ReactComponent extends React.Component {
  constructor(props) {
    super(props);

    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAa0kJW3FV2xlEFGxTXVqrcbvHRzzNI09Q",
      authDomain: "thisforthat.firebaseapp.com",
      databaseURL: "https://thisforthat.firebaseio.com",
      projectId: "project-2773411053430617956",
      storageBucket: "project-2773411053430617956.appspot.com",
      messagingSenderId: "613479190090"
    };

    firebase.initializeApp(config);

    let app = firebase.database().ref("data");

    app.on("value", snapshot => {
      this.getData(snapshot.val());
    });

    this.state = this.getInitialState();
  }

  getData(values) {
    const data = {};
    data.sites = values.sites.filter(item => !!item);
    data.things = values.things.filter(item => !!item);
    this.setState({ data });
  }

  getInitialState() {
    const data = {
      sites: ["Website"],
      things: ["Thing"]
    };

    return { data };
  }

  getRandomValue(model) {
    const records = this.state.data[model];
    const record = records[Math.floor(Math.random() * records.length)];
    return record;
  }

  handleClickEvent() {
    const site = this.getRandomValue("sites");
    const thing = this.getRandomValue("things");
    this.setState({ site, thing });
  }

  render() {
    const site = this.getRandomValue("sites");
    const thing = this.getRandomValue("things");

    return (
      <AppStyled className="container">
        <p>
          <strong className="output">{site}</strong>
          <em className="separator">for</em>
          <strong className="output">{thing}</strong>
        </p>
        <p className="content">
          <button
            className="button hitarea"
            onClick={this.handleClickEvent.bind(this)}
            type="button"
          >
            Try Again
          </button>
        </p>
      </AppStyled>
    );
  }
}

export default ReactComponent;
