import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import GroupButtons from "../../../Components/ButtonsPageComponents/ButtonsGroups/ButtonsGroup";
import DefaultButtons from "../../../Components/ButtonsPageComponents/DefaultButtons/DefaultButtons";
import OutlineButtons from "../../../Components/ButtonsPageComponents/OutlineButtons/OutlineButtons";
import RoundedButtons from "../../../Components/ButtonsPageComponents/RoundedButtons/RoundedButtons";
import MyNavbar from "../../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../../hooks/hookWindowSize/useWindowSize";

function MyButtons(){
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

                <Col md={12} xl={9} className='MyButtonsCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Buttons</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Components</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                         Buttons
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Row className="row-cols-1 row-cols-md-2 gy-4">
                        <Col>
                         <DefaultButtons />
                         <GroupButtons />
                        </Col>

                        <Col>
                           <OutlineButtons />
                           <RoundedButtons />
                        </Col>
                    </Row>
                
                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyButtons;