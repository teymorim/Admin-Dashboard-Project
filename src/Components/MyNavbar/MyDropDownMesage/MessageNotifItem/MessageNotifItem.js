
import Dropdown from 'react-bootstrap/Dropdown';
import './MessageNotifItem.css'

function MessageNotifItem(props){
    return(
        <>
        <Dropdown.Item href="#/action-1" className='d-flex   align-items-center'>
                    <div className="message-icon me-3">
                            <img style={{width: '45px'}} className='rounded-circle' src={props.image} alt="" />
                        </div>
                        <div className="message-text d-flex  flex-column " >
                            <p className='fw-bold mb-1'>{props.name}</p>
                            <p className="mb-1 message" >{props.messages}</p>
                            <b className='opacity-25'>{props.time}.ago</b>
                    </div>
        </Dropdown.Item>
        </>
    )
}
export default MessageNotifItem