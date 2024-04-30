import { Button } from "../Button/Button"
import { NavBar } from "../NavBar/NavBar"
import "./Header.css"


export function Header() {
   
return (
    <div className="container">
    <img src="/src/assets/Logo.png"></img>
        <NavBar text= "Home"></NavBar>
        <NavBar text= "About us"></NavBar>
        <NavBar text= "Services" url="/serviceour"></NavBar>
        <NavBar text= "Portfolio"></NavBar>
        <Button text= "Contact"></Button>
    </div>
)
}