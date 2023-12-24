import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import './ButtonBadges.css'
function ButtonBadges(){
    return(
        <>
        <div className="ButtonBadgesContainer my-4 BackItemStyle">
            <h4>Button Badges</h4>
         <div className="ButtonBadgesBody my-3">
         {['primary' , 'secondary', 'success', 'danger', 'warning', 'info',  'dark'
        ].map((variant) =>
        <Button className='m-1' key={variant} variant={variant}>
        {variant}<Badge className='m-1' bg="light" text='dark'>4</Badge>
        <span className="visually-hidden">unread messages</span>
        </Button>
         )}
         </div>
          
        </div>
        </>
    )
}
export default ButtonBadges;