import './ButtonsGroup.css'
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
function ButtonsGroup(){
    return(
        <>
        <div className="ButtonsGroupContainer mt-4 BackItemStyle">
            <h4>Group Buttons</h4>
            <div className="ButtonsGroupBody my-3">
            <ToggleButtonGroup type="checkbox">
            <ToggleButton  id="tbg-btn-1" value={1}>
                Option 1
            </ToggleButton>
            <ToggleButton id="tbg-btn-2" value={2}>
                Option 2
            </ToggleButton>
            <ToggleButton id="tbg-btn-3" value={3}>
                Option 3
            </ToggleButton>
            </ToggleButtonGroup>

                
            </div>
        </div>
        </>
    )
}
export default ButtonsGroup;