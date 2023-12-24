import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import MyNavbar from "../../../Components/MyNavbar/MyNavbar";
import MySlideNavBar from "../../../Components/MySlideNavBar/MySlideNavBar";
import DarkTable from "../../../Components/TablesPageComponents/DarkTable/DarkTable";
import DefaultTable from "../../../Components/TablesPageComponents/DefaultTable/DefaultTable";
import HoverableRowsTable from "../../../Components/TablesPageComponents/HoverableRowsTable/HoverableRowsTable";
import StrippedRowsTable from "../../../Components/TablesPageComponents/StrippedRowsTable/StrippedRowsTable";
import useWindowSize from "../../../hooks/hookWindowSize/useWindowSize";




function MyGeneralTables(){
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

                <Col md={12} xl={9} className='MyGenralTablesCol'>
                    
                 
                    <div className="breadcrumbContainer py-2">
                        <h4>General Tables</h4>  
                        <Breadcrumb>
                        <Breadcrumb.Item  href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item  href="#">Tables</Breadcrumb.Item>
                        <Breadcrumb.Item active >
                            General
                        </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                

                    <Row className="row-cols-1 row-cols-md-2 gy-2">
                        <Col>
                           <DefaultTable />
                           <DarkTable />
                        </Col>

                        <Col>
                              <StrippedRowsTable /> 
                              <HoverableRowsTable /> 
                        </Col>
                    </Row>


                </Col> 
            </Row>
        </Container>
        </>
    )
}
export default MyGeneralTables;