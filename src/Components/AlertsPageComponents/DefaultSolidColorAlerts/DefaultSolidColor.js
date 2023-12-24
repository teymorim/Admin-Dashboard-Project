import './DefaultSolidColor.css'
import Alert from 'react-bootstrap/Alert';
function DefaultSolidColor(){
    return(
        <>
        <div className="DefaultSolidColorContainer BackItemStyle ">
            <div className="DefaultHeader">
                <h4>Default Solid Color</h4>
            </div>
              <div className="DefaultSolidColorBody mt-4">
              {[
                'primary bg-primary text-light',
                'secondary bg-secondary text-light',
                'success bg-success text-light',
                'danger bg-danger text-light',
                'warning bg-warning ',
                'info bg-info',
                'light bg-light',
                'dark bg-dark text-light',
                    ].map((variant) => (
                        <Alert key={variant} variant={variant} >
                        This is a {variant} alert—check it out!
                        </Alert>
                    ))}
              </div>  
        </div>
        </>
    )
}
export default DefaultSolidColor ;