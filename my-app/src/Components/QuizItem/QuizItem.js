import React from 'react';

const QuizItem = ({ quizItem }) => {
    const { logo, name, total } = quizItem;
    console.log(quizItem)
    return (
        <div className='p-2 border rounded  m-2'>
            <img className="img-fluid rounded bg-secondary" src={logo} alt="" />
            <div className='d-flex justify-content-between pt-3'>
                <h5>{name} </h5>
                <p>Quiz : {total} </p>
                <button className='btn bg-primary text-light'>Quiz Start <i class="fas fa-arrow-right"></i> </button>
            </div>
        </div>
    );
};

export default QuizItem;