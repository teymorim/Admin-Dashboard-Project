import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import DefaultCard from "../../../Components/CardsPageComponents/DefaultCard/DefaultCard";
import HeadingFooterCard from "../../../Components/CardsPageComponents/HeaderFooterCard/HeaderFooterCard";
import ImgCard from "../../../Components/CardsPageComponents/ImgCard/ImgCard";
import MyNavbar from "../../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../../Components/MySlideNavBar/MySlideNavBar";
import useWindowSize from "../../../hooks/hookWindowSize/useWindowSize";

function MyCard(){
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

                <Col md={12} xl={9} className='MyCardCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>Buttons</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Components</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                        Cards
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>

                    <Row className="row-cols-1 row-cols-md-2 gy-4">
                        <Col>
                        <DefaultCard />
                        </Col>

                        <Col>
                           <HeadingFooterCard />
                           <ImgCard />
                        </Col>
                    </Row>
                
                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyCard;