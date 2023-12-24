import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import GeneralFormElements from "../../../Components/FormPageComponents/GeneralFormElements.js/GeneralFormElements";
import MyNavbar from "../../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../../hooks/hookWindowSize/useWindowSize";




function MyFormElements(){
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

                <Col md={12} xl={9} className='MyFormElementsdCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Form Elements</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Forms</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                            Elements
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                

                   
                         <GeneralFormElements />
                    


                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyFormElements;