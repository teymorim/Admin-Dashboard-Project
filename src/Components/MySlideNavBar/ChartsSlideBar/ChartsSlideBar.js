import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { BiSignal3 } from "react-icons/bi";
function ChartsSlideBar(){
    return(
        <>
        <Accordion defaultActiveKey="5"  >
            <Accordion.Item eventKey="0" >
                <Accordion.Header  >
                    <p><BiSignal3 /></p>
                    <p>Charts</p>
                </Accordion.Header>
                
                <Accordion.Body>
                <Link to={'/charts/chartJs'}>Charts.js</Link>
                </Accordion.Body>

                

            

            </Accordion.Item>
           
    </Accordion>
        </>
    )
}
export default ChartsSlideBar;