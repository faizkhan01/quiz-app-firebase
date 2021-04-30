import { sampleSize, shuffle } from "react";
import firebase from "firebase/app";

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

  const database = firebase.database();
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
