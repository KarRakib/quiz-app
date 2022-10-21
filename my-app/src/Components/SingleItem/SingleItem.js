import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizes from '../Quizes/Quizes';

const SingleItem = () => {
    const data = useLoaderData().data;
    
    console.log(data)
    return (
        
        <div className='border-4 border-indigo-500/100 bg-zinc-400'>
        <h1 className='text-center text-5xl tracking-wide font-bold'>{data.name}</h1>
        {
            data.questions.map((data, index) => <Quizes es key={data.id} data={data} index={index} />)
        }
    </div>
    );
};

export default SingleItem;