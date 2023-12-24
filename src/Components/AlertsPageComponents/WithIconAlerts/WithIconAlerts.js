import './WithIconAlerts.css'
import Alert from 'react-bootstrap/Alert';
function WithIconAlerts(){
    return(
        <>
        <div className="WithIconAlertsContainer BackItemStyle mt-4">
            <div className="WithIconAlertsHeader">
                <h4>Default Solid Color</h4>
            </div>
              <div className="WithIconAlertsBody mt-4">
                   {[
                    'https://icons.getbootstrap.com/assets/icons/exclamation-octagon.svg' ,
                    'https://icons.getbootstrap.com/assets/icons/exclamation-triangle-fill.svg' ,
                    'https://icons.getbootstrap.com/assets/icons/question-circle.svg' ,
                    'https://icons.getbootstrap.com/assets/icons/exclamation-triangle.svg' ,
                    'https://icons.getbootstrap.com/assets/icons/exclamation-square-fill.svg'
                   ].map((image) => (
                    <div key={image} className="alert alert-primary d-flex align-items-center" role="alert">
                        <img className='me-2' src={image}/>
                        <div>
                            An example alert with an icon
                        </div>
                    </div>
                ))}

                        
              </div>  
        </div>
        </>
    )
}
export default WithIconAlerts ;