import Badge from 'react-bootstrap/Badge';

import './PillBadges.css'
function PillBadges(){
    return(
        <>
        <div className="PillBadgesContainer mt-4  BackItemStyle">
            <h4>Pill Badges</h4>
         <div className="PillBadgesBody my-3">
        
            <Badge pill bg="primary">
                Primary
            </Badge>
            <Badge pill bg="secondary">
                Secondary
            </Badge>
            <Badge pill bg="success">
                Success
            </Badge>
            <Badge pill bg="danger">
                Danger
            </Badge>
            <Badge pill bg="warning" text="dark">
                Warning
            </Badge>
            <Badge pill bg="info">
                Info
            </Badge>
            <Badge pill bg="light" text="dark">
                Light
            </Badge>
            <Badge pill bg="dark">
                Dark
            </Badge>
        
        
         </div>
          
        </div>
        </>
    )
}
export default PillBadges;