import ChartReport from './ChartReport/ChartReport';
import './ReportDashboard.css'
function ReportDashboard(){
    return(
        <>
        <div className="reportdashboarContainer mt-4">
            <h4>Reports <span className='opacity-50 fs-5'>/Today</span></h4>
            <ChartReport />
        </div>
        </>
    )
}
export default ReportDashboard;