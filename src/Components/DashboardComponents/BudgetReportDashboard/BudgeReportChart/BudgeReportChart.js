import axios from 'axios';
import { useEffect, useState } from 'react';
import { Legend, PolarAngleAxis, PolarGrid,  Radar, RadarChart, ResponsiveContainer } from 'recharts';

import './BudgeReportChart.css'
function BudgeReportChart(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.budgeReportDashboaredDatas) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        <ResponsiveContainer width='100%' height={280}> 
        <RadarChart outerRadius={90} margin={{ top: 3, right: 20, left: 20, bottom: -5 }}  data={datas}>
            
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar name="Allocated Budget" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.4} />
            <Radar name="Actual Spending" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
        </ResponsiveContainer>
        </>
    )
}
export default BudgeReportChart;