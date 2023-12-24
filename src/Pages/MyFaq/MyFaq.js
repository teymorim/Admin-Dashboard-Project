import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import BasicQuestions from "../../Components/FrequentllyQCompoonents/BasicQuestions/BasicQuestions";
import Deserunt from "../../Components/FrequentllyQCompoonents/Deserunt/Deserunt";
import Dolore from "../../Components/FrequentllyQCompoonents/Dolore/Dolore";
import Laborum from "../../Components/FrequentllyQCompoonents/Laborum/Laborum";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../hooks/hookWindowSize/useWindowSize";

function MyFaq(){
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
                        <h4>Frequently Asked Questions</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Pages</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                        Frequently Asked Questions
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                

                    <Row className="row-cols-1 row-cols-md-2 gy-4">
                        <Col  >
                            <BasicQuestions />
                            <Dolore />
                        </Col>

                        <Col >
                              <Deserunt />  
                              <Laborum />  
                        </Col>
                    </Row>


                </Col> 
            </Row>
        </Container>
        </>
    )
}


export default MyFaq;