import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ContactMessage.css'
function ContacMessage(){
    return(
        <>
            <div className="ContacMessageContainer mb-4 BackItemStyle">
            <Form className='py-4 text-center'>
                <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
                    <Form.Control className='w-50 ' type="text" placeholder="Your Name" />
                    <Form.Control className='w-50 ms-1' type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button  variant="primary" type="submit">
                   Send Message
                </Button>
            </Form>
            </div>
        </>
    )
}
export default ContacMessage