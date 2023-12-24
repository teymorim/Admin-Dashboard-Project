import { MdOutlineAttachMoney } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { IoPeopleSharp } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import './CardsDashboard.css'
function CardsDashboard(props){
    return(
        <>
        <div className="CardsContainer rounded ">
            <div className="CardMore text-end ">
                <p className="fs-4 opacity-50"><IoIosMore /></p>
            </div>
            <div className="CardTitle ps-2 ">
                <p><span className="fs-5">{props.title}</span> <span className="opacity-50">|</span> <span className="opacity-75">{props.time}</span></p>
            </div>
            <div className="CardDescription d-flex justify-content-center align-items-center">
                <p className="cardIcon me-4 fs-1">
                    <span className="pt-1 pe-1">
                        <img  src={props.icon}  />
                    </span>
                </p>
                <div className="CardData">
                    <h3>{props.data}</h3>
                    <p><span className="text-success fw-bold">{props.percent}</span> <span>{props.percentTitle}</span></p>
                </div>
            </div>
        </div>
        </>
    )
}
export default CardsDashboard ;