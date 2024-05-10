import './App.css'
import { AppRouter } from "./router/AppRouter"
import { Header,FooterDesktop,FooterMobile} from './components'
  
function App() {
  return (
    <>
    <Header/>
    <AppRouter/>
    <FooterDesktop/>
    <FooterMobile/>
    </>
  ) 
}

export default App
