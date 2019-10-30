import React, { useEffect, useState } from "react";
import firebase from "firebase";
import ThisForThat from './ThisForThat';

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

export default function App () {
  const [data, setData] = useState({
    sites: ["Website"],
    things: ["Thing"]
  });

  useEffect(() => {
    app.on("value", snapshot => {
      const values = snapshot.val();
      const data = {
        sites: values.sites.filter(item => !!item),
        things: values.things.filter(item => !!item),
      };
      setData(data);
    });
  }, []);

  return <ThisForThat sites={data.sites} things={data.things} />
}