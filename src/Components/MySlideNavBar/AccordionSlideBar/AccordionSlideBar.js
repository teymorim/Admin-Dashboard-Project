import './AccordionSlideBar.css'
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { BiServer } from "react-icons/bi";

function AccordionSlideBar(){
    return(
        <>
         <Accordion className='accordionSlideBarPage' defaultActiveKey="5" >
            <Accordion.Item className='accordionSlidItem' eventKey="0" >
                <Accordion.Header >
                    <p><BiServer /></p>
                    <p>Components</p>
                </Accordion.Header>
                
                <Accordion.Body>
                <Link to={'/components/alert'}>Alerts</Link>
                </Accordion.Body>

                <Accordion.Body>
                <Link to={'/components/accordion'}>Accordion</Link>
                </Accordion.Body>

                <Accordion.Body>
                <Link to={'/components/badges'}>Badges</Link>
                </Accordion.Body>

                <Accordion.Body>
                <Link to={'/components/buttons'}>Buttons</Link>
                </Accordion.Body>

                <Accordion.Body>
                <Link to={'/components/card'}>Cards</Link>
                </Accordion.Body>

                
            </Accordion.Item>

            
           
    </Accordion>
        </>
    )
}
export default AccordionSlideBar;