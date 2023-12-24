import { Button } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import { MdOutlineFileUpload , MdDelete } from "react-icons/md";
import './EditeProfile.css'
function EditeProfile(){
    return(
        <>
        <div className="EditeProfileContainer py-3">
            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Profile Image</p>
                <div className="imgProfileEdite ">
                    <img src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/profile-img.jpg"  />
                    <div className="btnEditeProfile p-2">
                    <Button><MdOutlineFileUpload /></Button>
                    <Button className='bg-danger ms-2'><MdDelete /></Button>
                    </div>
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Full Name</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="Kevin Anderson"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>About</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                as="textarea" rows={3} 
                defaultValue="Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Company</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="Lueilwitz, Wisoky and Leuschke"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Job</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="Web Designer"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Country</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="USA"
                 />
                </div>
            </div>
            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Address</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="A108 Adam Street, New York, NY 535022"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Phone</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="(436) 486-3538 x29071"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Email</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="email"
                defaultValue="k.anderson@example.com"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Twitter Profile</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="https://twitter.com/#"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Facebook Profile</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="https://facebook.com/#"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Instagram Profile</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="https://instagram.com/#"
                 />
                </div>
            </div>

            <div className="EditeProfileItem d-flex align-items-start">
                <p className='w-25 opacity-50 fw-bold ps-2'>Linkedin Profile</p>
                <div className="formProfileEdite w-75 ">
                <Form.Control
                type="text"
                defaultValue="https://linkedin.com/#"
                 />
                </div>
            </div>

            <div className="EditeProfileItemBtn text-center mt-3">
                <Button>Save Changes</Button>
            </div>
        </div>
        </>
    )
}
export default EditeProfile