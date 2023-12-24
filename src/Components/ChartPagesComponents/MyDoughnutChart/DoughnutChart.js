import axios from 'axios';
import { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



function MyDoughnutChart(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.DoughnuttChartChartjsPage) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        
        <div className="MyDoughnutChartContainer mt-4 mb-2 BackItemStyle">
            <h4>Doughnut Chart</h4>
            <div className="MyDoughnutChartBody my-4 ">
            <ResponsiveContainer width="100%" height={400}>
            <PieChart width={400} height={400}>
            <Pie dataKey="uv" data={datas} cx='50%' cy='50%' innerRadius={60}  fill="#82ca9d" />
            <Legend />
          <Tooltip />
        </PieChart>
            </ResponsiveContainer>

            </div>
        </div>
        </>
    )
}
export default MyDoughnutChart ;