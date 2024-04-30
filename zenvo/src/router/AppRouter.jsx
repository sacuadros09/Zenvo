import { Route, Routes } from "react-router-dom"
import { AboutUs,ServiceOur} from '../pages';


export function AppRouter() {
  return (

      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='/serviceour' element={<ServiceOur />} />
        <Route path='/*' element={<p>404</p>} />
      </Routes>

  );
}