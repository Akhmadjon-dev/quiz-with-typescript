import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';


const TOTAL_QUESTIONS = 10;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion =  () =>{

  }

  return (
    <div className="quiz">
      <h1 className="quiz__title">MyQuiz</h1>
    <button onClick={startTrivia} className="quiz__start">
      Start
    </button>
    <p className="quiz__score">
      Score: 
    </p>
    <p className="quiz__loader">Loading Questions ...</p>
    <QuestionCard
     questionNr={number+1}
     totalQuestions={TOTAL_QUESTIONS}
     question={questions[number].question}
     answers={questions[number].answers}
     userAnswer={userAnswers? userAnswers[number]: undefined}
     callback={checkAnswer}
    />
    <button onClick={nextQuestion} className="quiz__next">Next </button>
    </div>
  );
}

export default App;
