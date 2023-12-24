
import './BudgeReport.css'
import BudgeReportChart from './BudgeReportChart/BudgeReportChart';
function BudgeReport(){
    return(
        <>
        <div className="budgedashboarContainer mt-4">
            <h4>Budget Report <span className='opacity-50 fs-5'>|Today</span></h4>
            
            <BudgeReportChart />
        </div>
        </>
    )
}
export default BudgeReport;