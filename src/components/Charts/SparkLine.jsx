import React from 'react'
import { LineChart, Line, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const SparkLine = ({Data , color}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <LineChart
      width={500}
      height={300}
      data={Data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
 
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Expense" stroke={color} activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="Budget" stroke="#000" />
    </LineChart>
  </ResponsiveContainer>
  )
}

export default SparkLine