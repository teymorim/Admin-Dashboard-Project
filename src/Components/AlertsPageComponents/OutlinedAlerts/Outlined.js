import './Outlined.css'
import Alert from 'react-bootstrap/Alert';
function Outlined(){
    return(
        <>
        <div className="OutlinedContainer BackItemStyle mt-4 ">
            <div className="HeadingSeparatorHeader">
                <h4>Outlined</h4>
            </div>
              <div className="OutlinedBody mt-4">
                {[
                  "primary" ,
                  "secondary " ,
                  "success" ,
                  "danger" ,
                  "warning" ,
                  "info" ,
                  "lignt" 
                ].map((variant) => 
                <Alert key={variant}  className={`border-${variant} bg-light`}>
                This is a {variant} alert—check it out!
                </Alert>

                )}
              </div>  
        </div>
        </>
    )
}
export default Outlined ;