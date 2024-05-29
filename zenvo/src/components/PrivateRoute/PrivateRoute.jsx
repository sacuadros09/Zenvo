import { useContext } from 'react';
import { Navigate} from 'react-router';
import { AuthContext } from '../../Context/Context';
import { UploadPage } from '../../pages';


const PrivateRoute = () => {
    const {user} = useContext(AuthContext);

   if(user === undefined) {
    return(<p>GG I feed</p>)
   }
   return user ? <UploadPage/>:<Navigate to="/AdminPanelPage"/>
}

export default PrivateRoute;