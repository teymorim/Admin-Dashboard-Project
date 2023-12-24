import './News&UpdateItems.css'

function NewsUpdateItem(props){
    return(
    <div className="NewsDesc d-flex align-items-start justify-content-center  ">
        <div className="NewsImage">
            <img className='img-fluid' src={props.image}  />
        </div>
        <div className="description">
            <h5>{props.title}</h5>
            <p className='textdes text-justify opacity-75'>{props.description}</p>
        </div>
    </div>
    )
}
export default NewsUpdateItem;