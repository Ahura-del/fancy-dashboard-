import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Stacked = ({Data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={Data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
        
          <XAxis dataKey="name" />
        
          <YAxis className='hidden md:inline-block' />
          
          <Tooltip />
          <Legend />
          <Bar dataKey="Expense" stackId="a" fill="#8884d8" />
          <Bar dataKey="Budget" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
  )
}

export default Stacked