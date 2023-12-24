import { useEffect, useState } from "react";

function RecentSalesTableItem(props){
    const [status , setStatus] = useState('')
    
       useEffect(() => {
        if(props.status == 'Approved'){
            setStatus('rgb(3, 185, 3 , 0.5)') 
        } 
        else if(props.status == 'Pending'){
            setStatus('rgba(245, 245, 20, 0.5)')
        }
        else if( props.status == 'Rejected'){
            setStatus('rgb(255, 0, 0 , 0.5)')
        }
  
       } , [])
   
    return(
        <>
        
                    <td>{props.code}</td>
                    <td>{props.customer}</td>
                    <td>{props.product}</td>
                    <td>{props.price}</td>
                    <td style={{background: `${status}`}} >{props.status}</td>
        
        </>
    )
}
export default RecentSalesTableItem;