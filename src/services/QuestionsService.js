import sampleSize from "lodash/sampleSize";
import shuffle from "lodash/shuffle";
// import firebase from "firebase/app";
import "firebase/database";
import { firebaseApp } from "../containers/FirebaseConfig/FirebaseConfig";

let cachedQuestions;

const transformToArray = (questions) =>
  Object.keys(questions).map((key) => ({
    id: key,
    ...questions[key],
  }));

const getAllQuestions = async () => {
  if (cachedQuestions) {
    return cachedQuestions;
  }

  const fbApp = firebaseApp;
  const database = fbApp.database();
  const snapshot = await database.ref("/quiz/questions").once("value");
  const questions = transformToArray(snapshot.val());
  cachedQuestions = questions;
  return questions;
};

const getRandomQuestions = async () => {
  const questions = await getAllQuestions();
  const randomQuestions = sampleSize(questions, 6);
  return randomQuestions.map((questions) => ({
    ...questions,
    choices: shuffle(questions.choices),
  }));
};

export { getRandomQuestions };
