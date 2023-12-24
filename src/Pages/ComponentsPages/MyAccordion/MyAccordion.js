import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import WithoutOutline from "../../../Components/AccordionPageComponents/AccordionWithoutOutline/WithoutOutline";
import DefaultAccordion from "../../../Components/AccordionPageComponents/DefaultAccordion/DefaultAccordion";
import MyNavbar from "../../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../../hooks/hookWindowSize/useWindowSize";

function MyAccordion(){
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

                <Col md={12} xl={9} className='MyAccordionCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Accordion</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Components</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                            Accordion
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Row className="row-cols-1 row-cols-md-2 gy-2">
                        <Col>
                           <DefaultAccordion />
                        </Col>

                        <Col>
                            <WithoutOutline />
                        </Col>
                    </Row>
                
                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyAccordion;