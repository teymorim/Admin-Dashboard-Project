import './DefaultButtons.css'
import Button from 'react-bootstrap/Button';
function DefaultButtons(){
    return(
        <>
        <div className="DefaultButtonsContainer BackItemStyle">
            <h4>Default Buttons</h4>
            <div className="DefaultButtonsBody my-3">
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button>{' '}
                <Button variant="info">Info</Button>{' '}
                <Button variant="dark">Dark</Button>
                
            </div>
        </div>
        </>
    )
}
export default DefaultButtons;