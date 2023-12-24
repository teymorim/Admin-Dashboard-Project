import Badge from 'react-bootstrap/Badge';

import './DefaultBadges.css'
function DefaultBadges(){
    return(
        <>
        <div className="DefaultBadgesContainer  BackItemStyle">
            <h4>Default Badges</h4>
         <div className="DefaultBadgesBody my-3">
         
            <Badge bg="primary">Primary</Badge>
            <Badge bg="secondary">Secondary</Badge>
            <Badge bg="success">Success</Badge>
            <Badge bg="danger">Danger</Badge>
            <Badge bg="warning" text="dark">
                Warning
            </Badge>
            <Badge bg="info">Info</Badge>
            <Badge bg="light" text="dark">
                Light
            </Badge>
            <Badge bg="dark">Dark</Badge>
        
        
         </div>
          
        </div>
        </>
    )
}
export default DefaultBadges;