import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';
import './BorderBadges.css'
function BorderBadges(){
    return(
        <>
        <div className="BorderBadgesContainer BackItemStyle">
            <h4>Border Badges</h4>
           
            <Stack className='my-3' direction="horizontal" gap={2}>
                <Badge  text="primary" >Primary</Badge>
                <Badge text="secondary" >Secondary</Badge>
                <Badge text="success" >Success</Badge>
                <Badge text="danger" >Danger</Badge>
                <Badge  text="warning">
                    Warning
                </Badge>
                <Badge  text="info" >Info</Badge>
                <Badge  text="dark" >Dark</Badge>
            </Stack>
        </div>
        </>
    )
}
export default BorderBadges;