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
                <img src={'../../../image/header.webp'} alt="" />
                <h2>Web Development Quiz</h2>
                <p>this is the Web Development Quiz Website</p>
            </div>
           <div className='container grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2 bg-red p-3'>
           {
                quizItems.map(quizItem => <QuizItem handelQuizStart={handelQuizStart} quizItem={quizItem} key={quizItem.id}></QuizItem>) 
            }
           </div>
        </div>
    );
};

export default Home;