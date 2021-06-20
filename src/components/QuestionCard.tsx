import React from 'react'
import {AnswerObject} from '../App';
type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number
}

const QuestionCard : React.FC<Props> = ({question, answers, callback,questionNr,totalQuestions,userAnswer}) => 
     (
        <div className="card">
            <p className="card__number">
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{__html: question}}/>
            <div className="card__answers">
                {
                    answers.map(item => (
                        <div key={item} className="card__answer">
                            <button disabled={!!userAnswer} value={item}  onClick={callback}>
                                <span dangerouslySetInnerHTML={{__html: item}}/>
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )


export default QuestionCard
