import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuestionSingle from '../QuestionSingle/QuestionSingle';
import './QuizDetails.css'

const Question = () => {
    const quizDetails = useLoaderData().data;
    const name = quizDetails.name;
    const quizTotal =quizDetails.total;
    const questions = quizDetails.questions;

    console.log(quizDetails)
    return (
        <div className='quiz-details'>
            <div className='quiz-header'>
            <h2 className='head-1'> Quiz Of  {name}</h2>
            <p className='cout-quiz'> Total Quiz : {quizTotal}</p>
            </div>
            {
                questions.map(questionSingle =><QuestionSingle
                key={questionSingle.id}
                questionSingle ={questionSingle}
                ></QuestionSingle>)

            }
        </div>
    );
};

export default Question;