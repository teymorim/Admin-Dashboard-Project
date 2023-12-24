import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function ChangePassword(){
    return(
        <>
        <div className="ChangePasswordContainer">
           
            <div className="bodyChangePassword">
            <Form>  
                <div className="ChangePasswordForm text-center">
                    <div className="bodyChangePassword d-flex align-items-center mt-4">
                        <p className="opacity-50 w-25 fw-bold ps-2">Current Password</p>
                        <Form.Control 
                        className='mx-3 w-75'
                            type="text"
                            id="custom-text1"

                        />
                    </div>

                    <div className="bodyChangePassword d-flex align-items-center mt-4">
                        <p className="opacity-50 w-25 fw-bold ps-2">New Password</p>
                        <Form.Control 
                        className='mx-3 w-75'
                            type="text"
                            id="custom-text1"

                        />
                    </div>

                    <div className="bodyChangePassword d-flex align-items-center mt-4">
                        <p className="opacity-50 w-25 fw-bold ps-2">Re-enter New Password</p>
                        <Form.Control 
                        className='mx-3 w-75'
                            type="text"
                            id="custom-text1"

                        />
                    </div>
                        
                    
                      
                       <Button className='my-4 '>Change Password</Button>
                    
                    </div>
                    </Form>
                </div>
              
            </div>
        
        </>
    )
}
export default ChangePassword;