
import './TopSellingTableItem.css'
function TopSellingTableItem(props){
   
   
    return(
        <>
        
                    <td className='topSellindTd '><img className="img-fluid" src={props.preview} /></td>
                    <td >{props.product}</td>
                    <td >{props.price}</td>
                    <td >{props.sold}</td>
                    <td >{props.revenue}</td>
        
        </>
    )
}
export default TopSellingTableItem;