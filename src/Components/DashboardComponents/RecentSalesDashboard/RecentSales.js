import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './RecentSales.css'
import RecentSalesTableItem from './RecentSalesTableItem/RecentSalesTableItem';
function RecentSales(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.recentSalesDashboard) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        <div className="RecentSalesContainer mt-4">
            <h4>Recent Sales <span className='opacity-50 fs-5'>/Today</span></h4>
            
            <Table responsive className='mt-3 align-middle text-center' striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                   {datas.map(data => <tr key={data.id}><RecentSalesTableItem {...data} /></tr> )}
                </tbody>
            </Table>
        </div>
        </>
    )
}
export default RecentSales;