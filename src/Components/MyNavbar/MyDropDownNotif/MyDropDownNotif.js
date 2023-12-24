import './MyDropDownNotif.css'
import {  IoMdNotifications  } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import { DropdownDivider } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import NotificationItems from './NotificationItems/NotificationItems';
import { useEffect, useState } from 'react';
import axios from 'axios';
function MyDropDownNotif(){
    const[datas , setDatas] = useState([])
    useEffect(() => {
        axios.get('https://teymorim.github.io/admin-project-Api-fake/db.json')
        .then(res => setDatas(res.data.notifications) )
        .catch(err => console.log('error page'))
        
    } , [])
    return(
        <>
         <Dropdown>
                <Dropdown.Toggle className='position-relative me-3 btn-light' id="dropdown-basic">
                <IoMdNotifications  size="20px" /> <Badge bg="primary" className='position-absolute top-0 start-100 translate-middle badge rounded-pill '>4</Badge>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item>You Have new Notification  </Dropdown.Item>
                    <DropdownDivider />
                    {datas.map(notif=> <NotificationItems key={notif.id} {...notif} />)}
                    
                    <DropdownDivider />
                    <Dropdown.Item href="#/action-3" className='text-center'> <span className='opacity-75 '>Show all notifications</span></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
export default MyDropDownNotif;