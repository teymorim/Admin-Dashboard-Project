import axios from 'axios';
import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



function MyLineChart(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.lineChartChartjsPage) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        
        <div className="LineChartContainer BackItemStyle">
            <h4>Line Chart</h4>
            <div className="LineChartBody my-4">
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                width={500}
                height={300}
                data={datas}
                margin={{
                    top: 5,
                    right: 5,
                    left: -15,
                    bottom: 0,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

            </div>
        </div>
        </>
    )
}
export default MyLineChart ;