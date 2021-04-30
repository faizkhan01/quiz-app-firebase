import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOmV_vMNw3wynZLvwGpZdRyitgYg8n7jU",
  authDomain: "quiz-app-firebase-6889f.firebaseapp.com",
  projectId: "quiz-app-firebase-6889f",
  storageBucket: "quiz-app-firebase-6889f.appspot.com",
  messagingSenderId: "1081131713165",
  appId: "1:1081131713165:web:388b38d654ee5e63f5d8c4",
};

// firebase.initializeApp(firebaseConfig);

export const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export default firebaseConfig;
