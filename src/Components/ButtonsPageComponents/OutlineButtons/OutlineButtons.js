import './OutlineButtons.css'
import Button from 'react-bootstrap/Button'; 
function OutlineButtons(){
    return(
        <>
        <div className="OutlineButtonsContainer BackItemStyle">
            <h4>Outline Buttons</h4>
            <div className="OutlineButtonsBody my-3">
            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary">Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-dark">Dark</Button>
  
            </div>
        </div>
        </>
    )
}
export default OutlineButtons;