import { FaLinkedin , FaFacebook , FaInstagram , FaTwitter  } from "react-icons/fa";
function MyProfileComponent(){
    return(
        <>
        <div className="MyProfileComponentContainer p-3 d-flex flex-column justify-content-center align-items-center BackItemStyle">
            <img className="rounded-circle" style={{width: '30%'}} src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg"  />
            <h4>Kevin Anderson</h4>
            <p>Web Designer</p>
            <p className="opacity-50" >
                <FaLinkedin size='20px' className="m-1" />
                <FaFacebook size='20px' className="m-1"/>
                <FaInstagram size='20px' className="m-1"/>
                <FaTwitter size='20px' className="m-1"/>
            </p>
        </div>
        </>
    )
}
export default MyProfileComponent ;