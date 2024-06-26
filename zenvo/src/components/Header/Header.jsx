import { useState } from "react"
import { Button, NavBar, MobileNavbar } from "../index"
import burguerMenu from '../../assets/burguer-menu.svg'
import "./Header.css"

export function Header() {
   const [showMenu,setShowMenu] = useState()

   const handleClick = () => {
    setShowMenu(!showMenu)
   }

return (
    <nav className="header">
        <button className='burguer-menu' onClick={handleClick}>
            <img src={burguerMenu}/>
        </button>
        <div className="list-navbar">
            <img className="logo" src="/src/assets/Logo.png"/>
            <NavBar text= "Home" url='/'/>
            <NavBar text= "About Us" url='/AboutUs'/>
            <NavBar text= "Services" url="/OurServices"/>
            <NavBar text= "Portfolio" url="/PortfolioPage"/>
        </div>
        <section>
            {!showMenu ? null : <MobileNavbar/>}
        </section>
        <Button text= "Contact Us" url="/ContactPage"/>
        
    </nav>
)
}