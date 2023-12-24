import './RoundedButtons.css'
import Button from 'react-bootstrap/Button'; 
function RoundedButtons(){
    return(
        <>
        <div className="RoundedButtonsContainer my-4 BackItemStyle">
            <h4>Rounded Buttons</h4>
            <div className="OutlineButtonsBody my-3">
            <Button className='rounded-pill' variant="primary">Primary</Button>{' '}
            <Button className='rounded-pill' variant="secondary">Secondary</Button>{' '}
            <Button className='rounded-pill' variant="success">Success</Button>{' '}
            <Button className='rounded-pill' variant="warning">Warning</Button>{' '}
            <Button className='rounded-pill' variant="danger">Danger</Button>{' '}
            <Button className='rounded-pill' variant="info">Info</Button>{' '}
            <Button className='rounded-pill' variant="light">Light</Button>{' '}
            <Button className='rounded-pill' variant="dark">Dark</Button>
            
            </div>
        </div>
        </>
    )
}
export default RoundedButtons;