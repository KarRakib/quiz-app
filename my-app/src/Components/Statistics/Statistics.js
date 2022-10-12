import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
const Statistics = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
            .then(data => {
                const dataLoaded = data.data.data;
                const quizData = dataLoaded.map(quiz => {
                    const { total, name } = quiz;
                    const dataUseLoaded = {
                        total: total,
                        name: name
                    }
                    console.log(dataUseLoaded)
                    return dataUseLoaded;
                })
                setData(quizData)
            })
    }, [])

    return (
        <div className='flex justify-center'>
            <AreaChart
                width={500}
                height={500}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="total" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </div>
    );

};

export default Statistics;