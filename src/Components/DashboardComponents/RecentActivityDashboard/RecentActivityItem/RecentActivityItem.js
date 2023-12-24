import './RecentActivityItem.css'
import { FaCircle } from "react-icons/fa";

function RecentActivityItem(props){
    return(
    <div className="activityDesc d-flex align-items-center justify-content-center ">
        <div className="activityTime">
            <p className='timeActivity text-center me-3 opacity-75'>{props.time}</p>
            <p className='circleActivity'><FaCircle size="15px" /></p>
        </div>
        <div className="description">
            <p className='textdes text-justify'>{props.description}</p>
           
        </div>
    </div>
    )
}
export default RecentActivityItem;