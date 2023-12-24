import './ImgCard.css'
import Card from 'react-bootstrap/Card';
function ImgCard(){
    return(
        <>
        <div className="ImgCardContianer my-4 BackItemStyle">
        <Card className='my-3 mx-2' >
        <Card.Img variant="top" src="https://bootstrapmade.com/demo/templates/NiceAdmin/assets/img/card.jpg" />
        <Card.Body>
            <Card.Title>Card with an image on top</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            
        </Card.Body>
        </Card>
        </div>
        </>
    )
}
export default ImgCard