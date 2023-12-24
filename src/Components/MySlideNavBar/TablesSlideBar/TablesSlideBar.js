import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { BiSpreadsheet } from "react-icons/bi";
function TablesSlideBar(){
    return(
        <>
        <Accordion defaultActiveKey="5" >
            <Accordion.Item eventKey="0" >
                <Accordion.Header >
                    <p><BiSpreadsheet /></p>
                    <p>Tables</p>
                </Accordion.Header>
                
                <Accordion.Body>
                <Link to={'/tables/generalTables'}>General Tables</Link>
                </Accordion.Body>

               

                
            </Accordion.Item>
    </Accordion>
        </>
    )
}
export default TablesSlideBar;