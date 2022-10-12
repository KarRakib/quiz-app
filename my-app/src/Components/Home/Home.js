import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';


const Home = () => {
    const quizItems = useLoaderData().data
    const handelQuizStart = (quizItem) =>{
        console.log(quizItem)
    }
  
    return (
        <div>
            <div>
                <h2>Web Development Quiz</h2>
                <p>this is the Web Development Quiz Website</p>
            </div>
           <div className='container d-flex bg-red p-3'>
           {
                quizItems.map(quizItem => <QuizItem handelQuizStart={handelQuizStart} quizItem={quizItem} key={quizItem.id}></QuizItem>) 
            }
           </div>
        </div>
    );
};

export default Home;