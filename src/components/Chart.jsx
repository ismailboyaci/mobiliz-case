import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Chart(props) {
  return (
    <BarChart
      width={1500}
      height={300}
      data={props.cars}
      margin={{
        top: 5,
        
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="brand" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Number Of Cars" fill="#8884d8" />
    </BarChart>
  )
}

export default Chart