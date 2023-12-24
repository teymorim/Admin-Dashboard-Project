import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import MyDoughnutChart from "../../../Components/ChartPagesComponents/MyDoughnutChart/DoughnutChart";
import MyBarChart from "../../../Components/ChartPagesComponents/MyBarChart/MyBarChart";
import MyLineChart from "../../../Components/ChartPagesComponents/MyLineChart/MyLineChart";
import MyPieChart from "../../../Components/ChartPagesComponents/MyPieChart/PieChart";
import MyNavbar from "../../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../../hooks/hookWindowSize/useWindowSize";

function MyChartJs(){
    const windowSize = useWindowSize()
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

                <Col md={12} xl={9} className='MyChartJsCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Chart.js</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Charts</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                         Chart.Js
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                

                    <Row className="row-cols-1 row-cols-md-2 gy-4">
                        <Col>
                           <MyLineChart />
                           <MyPieChart />
                        </Col>

                        <Col>
                            <MyBarChart />
                            <MyDoughnutChart />
                        </Col>
                    </Row>


                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyChartJs;