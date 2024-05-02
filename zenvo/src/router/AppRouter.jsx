import { Route, Routes } from "react-router-dom"
import { Home, AboutUs,OurServices, Profile} from '../pages/index';


export function AppRouter() {
  return (

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<AboutUs/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/OurServices' element={<OurServices/>} />
        <Route path='/*' element={<p>404</p>} />
      </Routes>

  );
}