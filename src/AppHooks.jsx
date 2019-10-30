import React, { useEffect, useState } from "react";
import firebase from "firebase";
import AppStyled from './AppStyled';

export default function App (props) {
  const [data, setData] = useState({
    sites: ["Website"],
    things: ["Thing"]
  });

  const [site, setSite] = useState("Website");
  const [thing, setThing] = useState("Thing");

  useEffect(() => {
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
      const values = snapshot.val();
      const data = {};
      data.sites = values.sites.filter(item => !!item);
      data.things = values.things.filter(item => !!item);
      setData(data);
    });
  }, []);

  function getRandomValue(model) {
    const records = data[model];
    const record = records[Math.floor(Math.random() * records.length)];
    return record;
  }

  function handleClickEvent() {
    const site = getRandomValue("sites");
    const thing = getRandomValue("things");
    setSite(site);
    setThing(thing);
  }

  // const site = getRandomValue("sites");
  // const thing = getRandomValue("things");

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
          onClick={handleClickEvent}
          type="button"
        >
          Try Again
        </button>
      </p>
    </AppStyled>
  );
}

