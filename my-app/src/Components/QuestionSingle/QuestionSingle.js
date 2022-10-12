import React from 'react';
import './QuestionSingle.css'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuestionSingle = ({questionSingle}) => {
    console.log(questionSingle)
    const { question ,options} =questionSingle;
    const clickHandel =(ans)=>{
        if(questionSingle.correctAnswer===ans) {
         toast('Right answer')
        }
        else{
         toast('Wrong answer')
        }
        
     }
    return (
        <div className='single-quiz-body'>
           <div className='quiz-info-quiz'>
           <div className='qustion-body'>
           <p className='qustion-learn'> Quiz : {question.slice(3 , -4)}</p>
           
           </div>
           <div className='parent-ans'>
           {
            options.map( option => <p className='answer'><input type="radio" id="html" name="fav_language" value="HTML" onClick={() => clickHandel(option)}></input>{option}</p>)
           }
           </div>
           
           </div>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default QuestionSingle;