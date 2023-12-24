import { Button, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
function GeneralFormElements(){
    return(
        <>
        <div className="GeneralFormContaine mb-3 BackItemStyle">
            <div className="GeneralFormHeader">
                <h4>General Form Elements</h4>
            </div>

            <div className="GeneralFormBody">
            <Form className="my-4">
            <Form.Group className="mb-3 d-flex align-items-center " controlId="exampleForm.ControlInput1">
                <Form.Label className="w-25 text-left px-2 fs-5">Text</Form.Label>
                <Form.Control className="w-75" type="text"  />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea13">
                <Form.Label className="w-25 text-left px-2 fs-5">Email</Form.Label>
                <Form.Control className="w-75" type="text"  />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea2">
                <Form.Label className="w-25 text-left px-2 fs-5">Password</Form.Label>
                <Form.Control className="w-75" type="text"  />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea3">
                <Form.Label className="w-25 text-left px-2 fs-5">Number</Form.Label>
                <Form.Control className="w-75" type="text"  />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea4">
                <Form.Label className="w-25 text-left px-2 fs-5">File Upload</Form.Label>
                <Form.Control className="w-75" type="file"  />
            </Form.Group>   

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea14">
                <Form.Label className="w-25 text-left px-2 fs-5">Data</Form.Label>
                <Form.Control className="w-75" type="date"  />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea5">
                <Form.Label className="w-25 text-left px-2 fs-5">Time</Form.Label>
                <Form.Control className="w-75" type="time"  />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea6">
                <Form.Label className="w-25 text-left px-2 fs-5">Color Picker</Form.Label>
                <Form.Control className="w-25" type="color"  />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea7">
                <Form.Label className="w-25 text-left px-2 fs-5">Textarea</Form.Label>
                <Form.Control className="w-75" as="textarea" rows={2} />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-start" controlId="exampleForm.ControlTextarea8">
                <Form.Label className="w-25 text-left px-2 fs-5">Radios</Form.Label>
                <div>
                <Form.Check 
                    type="radio"
                    id="FirstRadio"
                    name="Radio"
                    label="First Radio"
                    defaultChecked={true}
                    
                />

                <Form.Check 
                    type="radio"
                    id="SecondRadio"
                    name="Radio"
                    label="Second Radio"
                    
                />

                <Form.Check 
                    type="radio"
                    id="FirstRadio"
                    name="Radio"
                    label="Third Radio"
                    disabled
                />
                </div>
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-start" controlId="exampleForm.ControlTextarea9">
                <Form.Label className="w-25 text-left px-2 fs-5">Checkboxes</Form.Label>
                <div>
                <Form.Check 
                    type="checkbox"
                    id="checkbox1"
                    label="Example checkbox"
                    defaultChecked={true}
                />

                <Form.Check 
                    type="checkbox"
                    id="checkbox2"
                    label="Example checkbox 2"
                    
                />
                </div>
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea10">
                <Form.Label className="w-25 text-left px-2 fs-5">Disabled</Form.Label>
                <Form.Control className="w-75" type="text" placeholder="Read only / Disabled"  disabled />
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea11">
                <Form.Label className="w-25 text-left px-2 fs-5">Select</Form.Label>
                <Form.Select className="w-75" aria-label="Default select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 d-flex align-items-center" controlId="exampleForm.ControlTextarea12">
            <Form.Label className="w-25 text-left px-2 fs-5">Submit Button</Form.Label>
                <Button>Submit Button</Button>
            </Form.Group>


            </Form>
            </div>
        </div>
        </>
    )
}
export default GeneralFormElements;