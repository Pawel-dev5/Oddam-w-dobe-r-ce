import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBQjsK9Iukx7DZQlvBFE3RlQGAZ0HzNJwI",
    authDomain: "oddamwdobrerece-63809.firebaseapp.com",
    databaseURL: "https://oddamwdobrerece-63809.firebaseio.com",
    projectId: "oddamwdobrerece-63809",
    storageBucket: "oddamwdobrerece-63809.appspot.com",
    messagingSenderId: "147958191501",
    appId: "1:147958191501:web:0d8873fc582293abfed9c4"
  };

 const fire = firebase.initializeApp(firebaseConfig);
 export default fire;