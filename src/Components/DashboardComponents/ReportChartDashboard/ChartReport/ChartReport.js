import axios from 'axios';
import React, { PureComponent, useEffect, useState } from 'react';
import {  XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer, AreaChart, Area } from 'recharts';
import './ChartReport.css'
function ChartReport(){

    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.reportChartDashboardDatas) )
        .catch(err => console.log('error page'))
        
    } , [])
  
   
    
    return(
        <>
        <ResponsiveContainer width='100%' height={400}> 
        <AreaChart width='100%' height='100%' data={datas}
        margin={{ top: 15, right: 20, left: -25, bottom: 5 }}>
        <defs>
            <linearGradient id="colorCustomers" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9e" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9e" stopOpacity={0}/>
            </linearGradient>
        </defs>
        <XAxis className='opacity-75' dataKey="name" interval={0} domain={[0, 24]}  />
        <YAxis  axisLine={false} dot={false} />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Customers" stroke="#8884d8" fillOpacity={1} fill="url(#colorCustomers)" />
        <Area type="monotone" dataKey="Sales" stroke="#82ca9d" fillOpacity={1} fill="url(#colorSales)" />
        <Area type="monotone" dataKey="Revenue" stroke="#82ca9e" fillOpacity={1} fill="url(#colorRevenue)" />
        </AreaChart>
        </ResponsiveContainer>
        </>
    )
}
export default ChartReport;