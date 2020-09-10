import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: 'AIzaSyAa0kJW3FV2xlEFGxTXVqrcbvHRzzNI09Q',
  authDomain: 'thisforthat.firebaseapp.com',
  databaseURL: 'https://thisforthat.firebaseio.com',
  projectId: 'project-2773411053430617956',
  storageBucket: 'project-2773411053430617956.appspot.com',
  messagingSenderId: '613479190090'
}

if (!firebase.apps.length) firebase.initializeApp(config)
else firebase.app()

// firebase.database.Reference
export default firebase.database()
