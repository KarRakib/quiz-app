import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'



const Quiz = ({quiz}) => {
    // console.log(quiz)
   
    const {id, name ,logo, } = quiz;
    return (
        <div className='quiz'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
            <p> {name}</p>
            <button className='button'>
            
            <Link to={`/quiz/${id}`}> Learing {name} </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
            </button>
            </div>
        </div>
    );
};

export default Quiz;