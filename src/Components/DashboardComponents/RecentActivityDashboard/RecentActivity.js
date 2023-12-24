import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './RecentActivity.css'
import RecentActivityItem from './RecentActivityItem/RecentActivityItem';

function RecentActivity(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.recentActivityDashboard) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        <div className="activityContainer ">
            <div className="activitHeader">
                <h4>Recent Activity <span className='opacity-25 fs-5'>|Today</span></h4>
            </div>
                <Row className='row-cols-1 '>
                {datas.map(activtyItem => <Col key={activtyItem.id} > <RecentActivityItem {...activtyItem} />  </Col> )}
                </Row>
        </div>
        </>
    )
}
export default RecentActivity ;