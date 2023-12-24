import './HeadingSeparator.css'
import Alert from 'react-bootstrap/Alert';
function HeadingSeparator(){
    return(
        <>
        <div className="HeadingSeparatorContainer BackItemStyle my-4 ">
            <div className="HeadingSeparatorHeader">
                <h4>With Heading & Separator</h4>
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
            <Alert key={variant}  variant={variant} style={{boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}}>
                <Alert.Heading>{variant} Heading</Alert.Heading>
                <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-start">
                    <p>Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.</p>
                </div>
            </Alert>

                
                )}
              </div>  
        </div>
        </>
    )
}
export default HeadingSeparator ;