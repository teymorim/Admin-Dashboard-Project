import { BrowserRouter , Routes , Route} from 'react-router-dom';
import './App.css';
import MyDashbord from './Pages/MyDashbord/MyDashbord';
import MyProfile from './Pages/MyProfile/MyProfile';
import MyFaq from './Pages/MyFaq/MyFaq';
import MyContact from './Pages/MyContact/MyContact';
import MyLogin from './Pages/MyLogin/MyLogin';

import MyAlert from './Pages/ComponentsPages/MyAlert/MyAlert';
import MyAccordion from './Pages/ComponentsPages/MyAccordion/MyAccordion';
import MyBadges from './Pages/ComponentsPages/MyBadges/MyBadges';
import MyButtons from './Pages/ComponentsPages/MyButtons/MyButtons';
import MyCard from './Pages/ComponentsPages/MyCard/MyCard';

import MyFormElements from './Pages/FormPages/MyFormElements/MyFormElements';

import MyGeneralTables from './Pages/TablesPages/MyGeneralTables/MyGeneralTables';

import MyChartJs from './Pages/ChartsPages/MyChartJs/MyChartJs';




function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MyDashbord />} />

        <Route path='/components/alert' element={<MyAlert />} />
        <Route path='/components/accordion' element={<MyAccordion />} />
        <Route path='/components/badges' element={<MyBadges />} />
        <Route path='/components/buttons' element={<MyButtons />} />
        <Route path='/components/card' element={<MyCard />} />

        <Route path='/form/formElement' element={<MyFormElements />} />
      
        <Route path='/tables/generalTables' element={<MyGeneralTables />} />

        <Route path='/charts/chartJs' element={<MyChartJs />} />
        
        <Route path='/profile' element={<MyProfile />} />
        <Route path='/faq' element={<MyFaq />} />
        <Route path='/contact' element={<MyContact />} />
        <Route path='/login' element={<MyLogin />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
