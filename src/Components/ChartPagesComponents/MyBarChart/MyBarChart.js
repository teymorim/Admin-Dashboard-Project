import axios from 'axios';
import { useEffect, useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function MyBarChart(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.barChartChartjsPage) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        <div className="MyBarChartContainer BackItemStyle">
            <h4>Bar Chart</h4>
            <div className="MyBarChartBody my-4">
            <ResponsiveContainer width="100%" height={400}>
            <BarChart
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
                <Legend  />
                <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
            </BarChart>
            </ResponsiveContainer>

            </div>
        </div>
        </>
    )
}
export default MyBarChart ;