import './MyNavbar.css'
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { FaQuestion } from "react-icons/fa6";
import { IoIosLogOut , IoMdNotifications  } from "react-icons/io";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import ImageProfile from './ImageProfile/ImageProfile';
import MyDropDownNotif from './MyDropDownNotif/MyDropDownNotif';
import MyDromDownMesage from './MyDropDownMesage/MyDromDownMesage';
import MySlideNavBar from '../MySlideNavBar/MySlideNavBar';
import useWindowSize from '../../hooks/hookWindowSize/useWindowSize';


function MyNavbar(){
  
  const windowSize = useWindowSize()
  
    const expand = 'xl'
    return(
        <>
          <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid className='px-5'>
            {windowSize > 1200 && <Navbar.Brand href="#">Nice Admin</Navbar.Brand>}
            <Navbar.Toggle  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Nice Admin
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {windowSize < 1200 && <MySlideNavBar />}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <MyDropDownNotif />

            <MyDromDownMesage />

           
                 <ImageProfile />
            <NavDropdown
                    title='Kevin Anderson'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    
                  >
                    
                    <NavDropdown.Item href="#action3" className='text-center'><h6>Kevin Anderson </h6>  <span className='opacity-75'>Web Designer</span> </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <Link to={'/profile'} className='dropdown-item' >
                        <CgProfile size='25px'  />
                         <span className=' ps-2'>My Profile</span>
                    </Link>
                    <NavDropdown.Divider />

                    <Link to={'/profile'} className='dropdown-item' >
                        <IoSettingsOutline size='25px'  />
                         <span className=' ps-2'>Account Settings</span>
                    </Link>
                    <NavDropdown.Divider />

                    <Link to={'/faq'} className='dropdown-item' >
                        <FaQuestion size='25px'  />
                         <span className=' ps-2'>Need Help?</span>
                    </Link>
                    <NavDropdown.Divider />

                    <Link to={'/login'} className='dropdown-item' >
                        <IoIosLogOut size='25px'  />
                         <span className=' ps-2'>Sign Out</span>
                    </Link>
                  </NavDropdown>
          </Container>
        </Navbar>
        </>
    )
}
export default MyNavbar ;