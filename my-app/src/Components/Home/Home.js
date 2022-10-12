import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizItem from '../QuizItem/QuizItem';

const Home = () => {
    const quizItems = useLoaderData().data
  
    return (
        <div>
            
           <div className='container d-flex bg-secondary'>
           {
                quizItems.map(quizItem => <QuizItem quizItem={quizItem} key={quizItem.id}></QuizItem>) 
            }
           </div>
        </div>
    );
};

export default Home;