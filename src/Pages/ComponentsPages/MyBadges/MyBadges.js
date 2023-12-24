import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import WithoutOutline from "../../../Components/AccordionPageComponents/AccordionWithoutOutline/WithoutOutline";
import DefaultAccordion from "../../../Components/AccordionPageComponents/DefaultAccordion/DefaultAccordion";
import BorderBadges from "../../../Components/BadgesPageComponents/BorderBadges/BorderBadges";
import ButtonBadges from "../../../Components/BadgesPageComponents/ButtonBadges/ButtonBadges";
import DefaultBadges from "../../../Components/BadgesPageComponents/DefaultBages/DefaultBadges";
import HeadingBadges from "../../../Components/BadgesPageComponents/HeadingBadges/HeadingBadges";
import PillBadges from "../../../Components/BadgesPageComponents/PillBadges/PillBadges";
import MyNavbar from "../../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../../hooks/hookWindowSize/useWindowSize";

function MyBadges(){
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

                <Col md={12} xl={9} className='MyBadgesCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Badges</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Components</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                        Badges
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Row className="row-cols-1 row-cols-md-2 gy-4">
                        <Col>
                           <DefaultBadges />
                           <PillBadges />
                        </Col>

                        <Col>
                            <BorderBadges />
                            <ButtonBadges />
                            <HeadingBadges />
                        </Col>
                    </Row>
                
                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyBadges;