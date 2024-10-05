import React from 'react';
import  Quiz  from 'react-quiz-component';
import Header from './Header';

import { Link } from 'react-router-dom';

const quizData = {
  quizTitle: "SDG 14 Quiz",
  quizSynopsis: "Test your knowledge on SDG 14!",
  questions: [
    {
      question: "What is SDG 14 about?",
      questionType: "text",
      answers: ["Life on land", "Life below water", "Climate action", "Zero hunger"],
      correctAnswer: "2",
    },
    {
      question: "Which of the following is a goal of SDG 14?",
      questionType: "text",
      answers: ["Protect ocean ecosystems", "Reduce poverty", "Improve land quality"],
      correctAnswer: "1",
    }
  ]
};

const QuizComponent = () => {
  return (
    <>
    <Header/>
    <Quiz quiz={quizData} />
    <div className="navigation">
        <Link to="/interactive-learning/slide2" className="prev-button">Previous</Link>
    </div>


    </>
  );
};

export default QuizComponent;
