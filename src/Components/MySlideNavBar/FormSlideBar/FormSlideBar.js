import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { BiSolidSpreadsheet } from "react-icons/bi";

function FormSlideBar(){
    return(
        <>
        <Accordion defaultActiveKey="5"  >
            <Accordion.Item eventKey="0" >
                <Accordion.Header  >
                    <p><BiSolidSpreadsheet /></p>
                    <p>Forms</p>
                </Accordion.Header>
                
                <Accordion.Body>
                <Link to={'/form/formElement'}>Form Elements</Link>
                </Accordion.Body>

        

                
            </Accordion.Item>
           
    </Accordion>
        </>
    )
}
export default FormSlideBar;