import firebase from "firebase";

const config = {
  apiKey: "AIzaSyABqajVZMjeA7QQYbAKxVv65hbGAnh58_I",
  authDomain: "learning-stamp.firebaseapp.com",
  databaseURL: "https://learning-stamp.firebaseio.com",
};

const app = firebase.apps[0] || firebase.initializeApp(config);

// if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }
// firebase.initializeApp(config);
export const database = app.database();
export const databaseRef = app.database().ref();
