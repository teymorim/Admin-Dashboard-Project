import './HeaderFooterCard.css'
import Card from 'react-bootstrap/Card';
function HeaderFooterCard(){
    return(
        <>
        <div className="HeaderFooterCardContianer BackItemStyle">
        <Card className='my-3 mx-2' >
        <Card.Header>Header</Card.Header>
        <Card.Body>
            <Card.Title>Card with header and footer</Card.Title>
            <Card.Text>
            Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas. Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi dolorem numquam. Enim fuga ipsum dolor nulla quia ut. Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio. Sit sint aut. Consequatur rerum in.
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">Footer</Card.Footer>
        </Card>
        </div>
        </>
    )
}
export default HeaderFooterCard