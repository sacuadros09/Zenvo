import { Route, Routes } from "react-router-dom"
import { Home, AboutUs,OurServices, Profile, AdminPanelPage,BrandServicePage,ConsultServicePage,DevServicePage,PortfolioPage,UiServicePage,UploadPage,UxServicePage} from '../pages/index';


export function AppRouter() {
  return (

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/OurServices' element={<OurServices/>} />
        <Route path='/AdminPanelPage' element={<AdminPanelPage/>} />
        <Route path='/BradServicePage' element={<BrandServicePage/>} />
        <Route path='/ConsultServicePage' element={<ConsultServicePage/>} />
        <Route path='/DevServicePage' element={<DevServicePage/>} />
        <Route path='/PortfolioPage' element={<PortfolioPage/>} />
        <Route path='/UiServicePage' element={<UiServicePage/>} />
        <Route path='/UploadPage' element={<UploadPage/>} />
        <Route path='/UxServicePage' element={<UxServicePage/>} />
        <Route path='/*' element={<p>404</p>} />
      </Routes>

  );
}