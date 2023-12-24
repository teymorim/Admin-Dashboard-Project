import { Alert } from 'react-bootstrap';
import './Default.css'
function Default(){
    return(
        <>
        <div className="DefaultContainer BackItemStyle ">
            <div className="DefaultHeader">
                <h4>Default</h4>
            </div>
              <div className="DefaultBody mt-4">
              {[
                  "primary" ,
                  "secondary " ,
                  "success" ,
                  "danger" ,
                  "warning" ,
                  "info" ,
                  "lignt" 
                ].map((variant) => 
                <Alert key={variant}  variant={variant}>
                This is a {variant} alert—check it out!
                </Alert>

                )}
                    
                   
              </div>  
        </div>
        </>
    )
}
export default Default ;