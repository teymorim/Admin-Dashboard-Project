import './WebsiteTrafic.css'
import WebsiteTraficChart from './WebsiteTraficChart/WebsiteTraficChart';
function WebsiteTrafic(){
    return(
        <>
        <div className="WebsiteTraficContainer mt-4">
            <h4>Website Traffic <span className='opacity-50 fs-5'>|Today</span></h4>
            <WebsiteTraficChart />
        </div>
        </>
    )
}
export default WebsiteTrafic;