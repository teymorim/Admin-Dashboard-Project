import { AiOutlineInfoCircle } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';

function NotificationItems(props){
    return(
        <>
        <Dropdown.Item href="#/action-1" className='d-flex align-items-center'>
                    <div className="notif-icon me-3">
                            <AiOutlineInfoCircle size='30px' />
                        </div>
                        <div className="notif-text d-flex flex-column">
                            <p className='fw-bold mb-1'>{props.title}</p>
                            <span>{props.description}</span>
                            <span className="opacity-50">{props.time}.ago</span>
                    </div>
        </Dropdown.Item>
        </>
    )
}
export default NotificationItems