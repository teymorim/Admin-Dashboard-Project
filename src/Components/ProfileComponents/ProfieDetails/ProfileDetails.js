import { useState } from 'react';
import ChangePassword from './ChangePassword/ChangePassword';
import EditeProfile from './EditeProfile/EditeProfile';
import Overview from './Overview/Overview';
import './ProfileDetails.css'
import SettingsProfile from './SettingsProfile/SettingsProfile';
function ProfileDetails(){
    const [show , setShow] = useState('overview')
    return(
        <>
        <div className="ProfileDetailContainer  BackItemStyle mb-3">
            <div className="btnsProfile d-flex justify-content-start align-items-center w-100 ">
                <p onClick={() => setShow('overview')}
                className={`${show == 'overview' ? 'activeBtnProfile' : ''}  btnProfile`}>Overview</p>
                <p  onClick={() => setShow('editeProfile')}
                className={`${show == 'editeProfile' ? 'activeBtnProfile' : ''} mx-3 btnProfile`}>Edite Profile</p>
                <p  onClick={() => setShow('settings')}
                 className={`${show == 'settings' ? 'activeBtnProfile' : ''} mx-3 btnProfile`}>Settings</p>
                <p   onClick={() => setShow('changePassword')}
                className={`${show == 'changePassword' ? 'activeBtnProfile' : ''} mx-3 btnProfile`}>Change Password</p>
            </div>
            
            <div className="profileDetailBody mt-4">
                {show == 'overview' && <Overview />}
                {show == 'editeProfile' && <EditeProfile />}
                {show == 'settings' && <SettingsProfile />}
                {show == 'changePassword' && <ChangePassword />}
            </div>
        </div>
        </>
    )
}
export default ProfileDetails ;