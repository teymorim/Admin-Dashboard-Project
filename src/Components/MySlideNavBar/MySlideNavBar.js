import { memo } from 'react';
import { Link } from 'react-router-dom';
import './MySlideNavBar.css'
import { BiCategoryAlt } from "react-icons/bi";
import { IoPerson } from "react-icons/io5";
import { CiLogin } from "react-icons/ci";
import { MdOutlineLocalPostOffice  } from "react-icons/md";
import { FaQuestion } from "react-icons/fa";
import AccordionSlideBar from './AccordionSlideBar/AccordionSlideBar';
import FormSlideBar from './FormSlideBar/FormSlideBar';
import TablesSlideBar from './TablesSlideBar/TablesSlideBar';
import ChartsSlideBar from './ChartsSlideBar/ChartsSlideBar';



function MySlideNavBar(){
   
    
    return(
        <>
        
        <div className= ' slideContainer py-4' style={{marginTop: '-10px' ,marginLeft: '-11px'}}>
            
        <ul className= 'list-slideBar'>
            <li className='item1 ms-3 ps-1 pb-3 nav-link'>
                <BiCategoryAlt style={{paddingBottom: '2px'}} />
                <Link to={'/'}>Dashbord</Link>
            </li>

            <li className='nav-link'>
                <AccordionSlideBar />
            </li>

            <li className='nav-link' >
                <FormSlideBar />
            </li>

            <li className='nav-link' >
                <TablesSlideBar />
            </li>

            <li className='nav-link' >
                <ChartsSlideBar />
            </li>

                <span className='ms-3 opacity-50'>Pages</span>

            <li className='item2 ms-3 mt-3 ps-1 pt-3 nav-link'>
                <IoPerson style={{paddingBottom: '2px'}} />
                <Link to={'/profile'}>Profile</Link>
            </li>

            <li className='item2 ms-3 mt-3 ps-1 pt-3 nav-link'>
                <FaQuestion style={{paddingBottom: '2px'}} />
                <Link to={'/faq'}>F.A.Q</Link>
            </li>

            <li className='item2 ms-3  mt-3 ps-1 pt-3 nav-link'>
                <MdOutlineLocalPostOffice style={{paddingBottom: '2px'}} />
                <Link to={'/contact'}>Contact</Link>
            </li>

            <li className='item2 ms-3 mt-3 mb-5  ps-1 pt-3 nav-link'>
                <CiLogin style={{paddingBottom: '2px'}} />
                <Link to={'/login'}>Login</Link>
            </li>

           
        </ul>
        </div>
          
        </>
    )
}
export default memo (MySlideNavBar);