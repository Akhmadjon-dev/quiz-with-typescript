import React from 'react';


const App = () => {

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
      start
    </button>
    <p className="quiz__score">
      Score: 
    </p>
    <p className="quiz__loader">Loading Questions ...</p>
    </div>
  );
}

export default App;
