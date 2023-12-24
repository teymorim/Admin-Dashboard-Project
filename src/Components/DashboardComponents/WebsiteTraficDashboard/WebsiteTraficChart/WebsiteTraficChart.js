import axios from "axios";
import { useEffect, useState } from "react";
import { Tooltip } from "react-bootstrap";
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from "recharts";


function WebsiteTraficChart(){
  const[datas , setDatas] = useState([])
  useEffect(() => {
      axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
      .then(res => setDatas(res.data.websiteTraficDashboardDatas) )
      .catch(err => console.log('error page'))
      
  } , [])
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    return(
        <>
        <ResponsiveContainer width='100%' height={300}> 
        <PieChart width={400} height={400}>
        <Pie
          data={datas}
          cx='50%'
          cy={120}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {datas.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
       
        <Legend />
        
        </PieChart>
        </ResponsiveContainer>
        </>
    )
}
export default WebsiteTraficChart;