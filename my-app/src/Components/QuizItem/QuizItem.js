import React from 'react';
import { Link } from 'react-router-dom';

const QuizItem = ({ quizItem,handelQuizStart }) => {
    const { logo, name, total,id } = quizItem;
    // console.log(quizItem)
    
    return (
        <div className='p-2 border rounded  m-2'>
            <img className="img-fluid rounded bg-secondary" src={logo} alt="" />
            <div className='d-flex justify-content-between pt-3'>
                <h5>{name} </h5>
                <p>Quiz : {total} </p>
                {/* <button onClick={()=> handelQuizStart(quizItem)} className='btn bg-primary text-light'>Quiz Start <i class="fas fa-arrow-right"></i> </button> */}
                <Link className='btn bg-primary text-white' to={`/quizItem/${id}`}> Quiz Start <i class="fas fa-arrow-right"></i></Link> 
               
            </div>
        </div>
    );
};

export default QuizItem;