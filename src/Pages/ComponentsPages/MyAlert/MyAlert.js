import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Default from "../../../Components/AlertsPageComponents/DefaultAlerts/Default";
import DefaultSolidColor from "../../../Components/AlertsPageComponents/DefaultSolidColorAlerts/DefaultSolidColor";
import HeadingSeparator from "../../../Components/AlertsPageComponents/Heading&SeparatorAlerts/HeadingSeparator";
import Outlined from "../../../Components/AlertsPageComponents/OutlinedAlerts/Outlined";
import WithIconAlerts from "../../../Components/AlertsPageComponents/WithIconAlerts/WithIconAlerts";
import MyNavbar from "../../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../../hooks/hookWindowSize/useWindowSize";

function MyAlert(){
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

                <Col md={12} xl={9} className='dashboardCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Alerts</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Components</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                            Alerts
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Row className="row-cols-1 row-cols-md-2 gy-2">
                        <Col>
                            <Default />
                            <WithIconAlerts />
                            <Outlined />
                        </Col>

                        <Col>
                            <DefaultSolidColor />
                            <HeadingSeparator />
                        </Col>
                    </Row>
                
                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyAlert;