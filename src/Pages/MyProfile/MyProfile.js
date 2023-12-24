import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../Components/MySlideNavBar/MySlideNavBar";
import MyProfileComponent from "../../Components/ProfileComponents/MyProfileComponent/MyProfileComponent";
import ProfileDetails from "../../Components/ProfileComponents/ProfieDetails/ProfileDetails";

import useWindowSize from "../../hooks/hookWindowSize/useWindowSize";


function MyProfile(){
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
                        <h4>Dashboard</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Users</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                            Profile
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                

                    <Row className="gy-2">
                        <Col md={4}   >
                           <MyProfileComponent />
                        </Col>

                        <Col md={8} >
                             <ProfileDetails />     
                        </Col>
                    </Row>


                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyProfile;