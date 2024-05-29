import { NavBar } from '../index'
import './MobileNavbar.css'

export function MobileNavbar(){
    return(
        <section className="mobile-navbar">
            <NavBar text= "Home" url='/'/>
            <NavBar text= "About Us" url='/AboutUs'/>
            <NavBar text= "Services" url="/OurServices"/>
            <NavBar text= "Portfolio" url='/PortfolioPage'/>
        </section>
    )
    
}