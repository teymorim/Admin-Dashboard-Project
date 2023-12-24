import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../hooks/hookWindowSize/useWindowSize";

import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { TbClockHour4 } from "react-icons/tb";
import ContactItem from "../../Components/ContactPageComponents/ContactItem/ContactItem";
import ContacMessage from "../../Components/ContactPageComponents/ContactMessage/ContactMessage";

function MyContact(){
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

                <Col md={12} xl={9} className='MyContactCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Frequently Asked Questions</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Pages</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                         Contact
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                

                    <Row className="row-cols-1 row-cols-md-2 gy-4">
                        <Col  >
                           <Row className="row-cols-1 row-cols-md-2 gy-2">
                              <Col>
                                    <ContactItem title='Address' description='A108 Adam Street,New York, NY 535022' >
                                        <CiLocationOn size='30px' color='rgb(9, 42, 255)' />
                                    </ContactItem>
                              </Col>

                              <Col>
                                    <ContactItem title='Call Us' description='+1 5589 55488 55 +16678254445 41' >
                                        <IoCallOutline size='30px' color='rgb(9, 42, 255)' />
                                    </ContactItem>
                              </Col>

                              <Col>
                                    <ContactItem title='Email Us' description='info@example.com contact@example.com' >
                                        <MdOutlineEmail size='30px' color='rgb(9, 42, 255)' />
                                    </ContactItem>
                              </Col>

                              <Col>
                                    <ContactItem title='Open Hours' description='Monday - Friday  9:00AM - 05:00PM' >
                                        <TbClockHour4 size='30px' color='rgb(9, 42, 255)'  />
                                    </ContactItem>
                              </Col>
                           </Row>
                        </Col>

                        <Col >
                              <ContacMessage />
                        </Col>
                    </Row>


                </Col> 
            </Row>
        </Container>
        </>
    )
}


export default MyContact;