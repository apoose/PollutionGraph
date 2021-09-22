import React, { Component, useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import '../Graph/style.css';

const LineChartGraph = (props) => {
    return (
        <LineChart
            width={1000}
            height={900}
            data={props.pollutionData}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="parameter" />
            <YAxis tickCount={10} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
        </LineChart>

    )
}
export default LineChartGraph