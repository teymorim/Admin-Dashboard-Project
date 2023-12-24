import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import './TopSelling.css'
import TopSellingTableItem from './TopSellingTableItem/TopSellingTableItem';

function TopSelling(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.TopSellingDashboard) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        <div className="TopSellingContainer mt-4">
            <h4>Top Selling <span className='opacity-50 fs-5'>/Today</span></h4>
            
            <Table responsive className='mt-3 align-middle text-center' striped bordered hover size="sm">
                <thead>
                    <tr>
                    <th>Preview</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Sold</th>
                    <th>Revenue</th>
                    </tr>
                </thead>
                <tbody >
                   {datas.map(data => <tr key={data.id}><TopSellingTableItem {...data} /></tr>)}
                </tbody>
            </Table>
        </div>
        </>
    )
}
export default TopSelling;