import { Route, Routes } from "react-router-dom"
import { Home, AboutUs,OurServices, JD, Cuadros, Impa, Kathe, AdminPanelPage, BrandServicePage, ConsultServicePage, DevServicePage, PortfolioPage, UiServicePage, UxServicePage, ContactPage} from '../pages/index';
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";


export function AppRouter() {
  return (

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/JD' element={<JD/>} />
        <Route path='/Cuadros' element={<Cuadros/>} />
        <Route path='/Impa' element={<Impa/>} />
        <Route path='/Kathe' element={<Kathe/>} />
        <Route path='/OurServices' element={<OurServices/>} />
        <Route path='/AdminPanelPage' element={<AdminPanelPage/>} />
        <Route path='/BradServicePage' element={<BrandServicePage/>} />
        <Route path='/ConsultServicePage' element={<ConsultServicePage/>} />
        <Route path='/DevServicePage' element={<DevServicePage/>} />
        <Route path='/PortfolioPage' element={<PortfolioPage/>} />
        <Route path='/UiServicePage' element={<UiServicePage/>} />
        <Route path='/UploadPage'  element={<PrivateRoute/>} />
        <Route path='/UxServicePage' element={<UxServicePage/>} />
        <Route path='/ContactPage' element={<ContactPage/>} />
        
        <Route path='/*' element={<p>404</p>} />
      </Routes>

  );
}