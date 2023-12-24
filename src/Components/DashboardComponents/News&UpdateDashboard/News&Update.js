import axios from 'axios';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './News&Update.css'
import NewsUpdateItem from './News&UpdateItems/News&UpdateItems';


function NewsUpdate(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.newsUpdatesDashboard) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        <div className="newsUpdateContainer my-3 ">
            <div className="NewstHeader mb-3">
                <h4>News & Updates <span className='opacity-25 fs-5'>|Today</span></h4>
            </div>
                <Row className='row-cols-1 '>
                    {datas.map(news => <Col key={news.id}><NewsUpdateItem {...news} /></Col>)}
                </Row>
        </div>
        </>
    )
}
export default NewsUpdate ;