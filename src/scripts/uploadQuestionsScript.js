const fs = require("fs").promises;
const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyCOmV_vMNw3wynZLvwGpZdRyitgYg8n7jU",
  authDomain: "quiz-app-firebase-6889f.firebaseapp.com",
  projectId: "quiz-app-firebase-6889f",
  storageBucket: "quiz-app-firebase-6889f.appspot.com",
  messagingSenderId: "1081131713165",
  appId: "1:1081131713165:web:388b38d654ee5e63f5d8c4",
};

firebase.initializeApp(firebaseConfig);

const upload = async () => {
  const questionsJson = await fs.readFile("questions.json");
  const questions = JSON.parse(questionsJson);
  console.log(`${questions.length} questions will be uploaded to firebase! `);
  const database = firebase.database();
  const ref = database.ref("/quiz/questions");
  questions.forEach((q) => {
    ref.push(q);
  });

  console.log("Upload Complete!!");
};

upload();
