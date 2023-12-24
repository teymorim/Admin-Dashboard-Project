import './MyDromDownMesage.css'

import { MdMessage } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownDivider } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import MessageNotifItem from './MessageNotifItem/MessageNotifItem';
import { useEffect, useState } from 'react';
import axios from 'axios';

function MyDromDownMesage(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.messages) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
         <Dropdown>
                <Dropdown.Toggle className='position-relative me-3 btn-light' id="dropdown-basic">
                <MdMessage  size="20px" /> <Badge bg="danger" className='position-absolute top-0 start-100 translate-middle badge rounded-pill '>3</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu className='message-dropDown'>
                    <Dropdown.Item>You Have new Message  </Dropdown.Item>
                    <DropdownDivider />
                  
                  {datas.map( message => <MessageNotifItem key={message.id} {...message} />)}  
                    <DropdownDivider />
                    <Dropdown.Item href="#/action-3" className='text-center'> <span className='opacity-50 '>Show all Messages</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
export default MyDromDownMesage;