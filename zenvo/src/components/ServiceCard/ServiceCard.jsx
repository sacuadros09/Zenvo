import './ServiceCard.css'
import { Link } from "react-router-dom";

export function ServiceCard(props) {
    const {title, img,path} = props
    return (
        <Link to={path}>
            <button className='service-card'>
                <img src={img}/> 
                <p>{title}</p>
            </button>
        </Link>
        
    )
}