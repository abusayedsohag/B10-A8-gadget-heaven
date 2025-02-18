import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Line, Scatter, ResponsiveContainer } from "recharts";

const Statistics = () => {

    useEffect(() => {
        document.title = "Gadget Heaven || Statistics";
    }, []);


    const data = useLoaderData()


    return (
        <div>
            <div className="bg-purple-600 py-8 flex justify-center flex-col items-center gap-4">
                <h1 className="font-bold text-4xl text-white">Statistics</h1>
                <p className="text-white w-1/2 text-center">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>

            <div className='pt-10'>
                <div className="w-full h-96 flex justify-center items-center">
                    <ResponsiveContainer width="90%" height={400}>
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
                            <XAxis dataKey="name" angle={-20} textAnchor="end" />
                            <YAxis/>
                            <Tooltip />
                            <Legend />

                            {/* Price as Blue Bars */}
                            <Bar dataKey="price" fill="navy" />

                            {/* Category as an Orange Line */}
                            <Line type="monotone" dataKey="category" stroke="orange" strokeWidth={2} dot={false} />

                            {/* Rating as Red Dots */}
                            <Scatter dataKey="rating" fill="red" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Statistics;