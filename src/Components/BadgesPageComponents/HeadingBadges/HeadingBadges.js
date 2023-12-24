import Badge from 'react-bootstrap/Badge';

import './HeadingBadges.css'
function HeadingBadges(){
    return(
        <>
        <div className="HeadingBadgesContainer my-4 BackItemStyle">
            <h4>Heading Badges</h4>
         <div className="HeadingBadgesBody my-3">
            <h1>
                Example heading <Badge bg="secondary">New</Badge>
            </h1>
            <h2>
                Example heading <Badge bg="danger">New</Badge>
            </h2>
            <h3>
                Example heading <Badge bg="warning">New</Badge>
            </h3>
            <h4>
                Example heading <Badge bg="primary">New</Badge>
            </h4>
            <h5>
                Example heading <Badge bg="info">New</Badge>
            </h5>
            <h6>
                Example heading <Badge bg="dark">New</Badge>
            </h6>
        
         </div>
          
        </div>
        </>
    )
}
export default HeadingBadges;