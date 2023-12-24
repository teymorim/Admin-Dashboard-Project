import axios from 'axios';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';


function MyPieChart(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.pieChartChartjsPage) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        
        <div className="MyPieChartContainer mt-4 BackItemStyle">
            <h4>Pie Chart</h4>
            <div className="MyPieChartBody my-4">
            <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
            <Pie data={datas} dataKey="uv" cx="50%" cy="50%"  fill="#82ca9d" />
            <Legend />
            <Tooltip />
          </PieChart>
            </ResponsiveContainer>

            </div>
        </div>
        </>
    )
}
export default MyPieChart ;