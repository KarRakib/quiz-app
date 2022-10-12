import React from 'react';

const QuizItem = ({quizItem}) => {
    const{logo,name} = quizItem;
    console.log(quizItem)
    return (
        <div className=''>
            <img className="img-fluid" src={logo} alt="" />
            <h4>{name} </h4>
        </div>
    );
};

export default QuizItem;