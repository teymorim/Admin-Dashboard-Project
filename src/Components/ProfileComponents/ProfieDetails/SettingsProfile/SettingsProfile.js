import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function SettingsProfile(){
    return(
        <>
        <div className="SettingsProfileContainer">
           
            <div className="bodySettingsProfile">
                <div className="bodySettingsProfile d-flex align-items-start mt-4">
                    <p className="opacity-50 w-25 fw-bold ps-2">Email Notifications</p>
                    <div className="checkBoxSettingsProfile w-75">
                    <Form>
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                            label="Changes made to your account"
                            defaultChecked={true}
                        />
                        <Form.Check 
                           
                            type="switch"
                            label="Information on new products and services"
                            id="Information on new products and services"
                            defaultChecked={true}
                        />
                        <Form.Check 
                           
                           type="switch"
                           label="Marketing and promo offers"
                           id="Marketing and promo offers"
                       />
                       <Form.Check 
                           disabled
                           type="switch"
                           label="disabled switch"
                           id="Security alerts"
                           defaultChecked={true}
                       />

                       <Button className='my-4'>Save Changes</Button>
                    </Form>
                    </div>
                </div>
              
            </div>
        </div>
        </>
    )
}
export default SettingsProfile;