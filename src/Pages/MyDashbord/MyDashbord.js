import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../Components/MySlideNavBar/MySlideNavBar";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import useWindowSize from "../../hooks/hookWindowSize/useWindowSize";
import './MyDashbord.css';
import CardsDashboard from "../../Components/DashboardComponents/CardsDashboard/CardsDashboard";
import ReportDashboard from "../../Components/DashboardComponents/ReportChartDashboard/ReportDashboard";
import RecentActivity from "../../Components/DashboardComponents/RecentActivityDashboard/RecentActivity";
import BudgeReport from "../../Components/DashboardComponents/BudgetReportDashboard/BudgeReport";
import WebsiteTrafic from "../../Components/DashboardComponents/WebsiteTraficDashboard/WebsiteTrafic";
import NewsUpdate from "../../Components/DashboardComponents/News&UpdateDashboard/News&Update";
import RecentSales from "../../Components/DashboardComponents/RecentSalesDashboard/RecentSales";
import TopSelling from "../../Components/DashboardComponents/TopSellingDashboard/TopSelling";
import { useEffect, useState } from "react";
import axios from "axios";

function MyDashbord(){
    const windowSize = useWindowSize()
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.cardsDashboard) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
        <MyNavbar />
        
        <Container fluid>
            
            <Row >
                {windowSize >= 1200 && 
                <Col md={0} xl={3} className='slidebarCol'>
                <MySlideNavBar />
                </Col>
                }

                <Col md={12} xl={9} className='dashboardCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Dashboard</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                            Dashbord
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                

                    <Row className="gy-2">
                        <Col md={8}  lg={8} >
                            <Row className="row-cols-1 row-cols-md-3 gy-2 justify-content-center ">
                                {datas.map(card => (
                                <Col key={card.id}> 
                                      <CardsDashboard {...card} /> 
                                </Col>
                                )
                                )}
                            </Row>

                            <ReportDashboard />
                            <RecentSales />
                            <TopSelling />
                        </Col>

                        <Col md={4}  lg={4}>
                                    <RecentActivity />
                                    <BudgeReport />
                                    <WebsiteTrafic />
                                    <NewsUpdate />
                        </Col>
                    </Row>


                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyDashbord;