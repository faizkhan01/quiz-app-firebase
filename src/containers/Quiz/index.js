import React, { useState, useEffect } from "react";
import { getRandomQuestions } from "../../services/QuestionsService";
import Question from "./Question";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nextButton: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  result: {
    textAlign: "center",
  },
}));

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [nextQuestionVisible, setNextQuestionVisible] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [score, setScore] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await getRandomQuestions();
      setQuestions(questions);
    };
    fetchQuestions();
  }, []);

  const selectAnswer = (choiceId) => {
    if (currentQuestion.correctAnswer === choiceId) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 !== questions.length) {
      setNextQuestionVisible(true);
    } else {
      setResultsVisible(true);
    }
  };

  const renderQuizResults = () => {
    if (resultsVisible) {
      const percentage = ((score / questions.length) * 100).toFixed(1);
      return (
        <div>
          <Typography variant="h4" component="h1" className={classes.result}>
            All Done!! You got {score} out of {questions.lenght} ({percentage}%)
            correct!!
          </Typography>
        </div>
      );
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setNextQuestionVisible(false);
  };

  const renderNextQuestionButton = () => {
    if (!nextQuestionVisible) {
      return null;
    }

    return (
      <Button
        variant="outlined"
        onClick={nextQuestion}
        className={classes.nextButton}
      >
        Next Question
      </Button>
    );
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Question
        data={currentQuestion}
        selectAnswer={selectAnswer}
        currentQuestionIndex={currentQuestionIndex + 1}
      />
      {renderNextQuestionButton()}
      {renderQuizResults()}
    </div>
  );
};

export default Quiz;
