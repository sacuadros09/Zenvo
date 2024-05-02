import './ServiceCard.css'
import { Link } from "react-router-dom";

export function ServiceCard(props) {
    const {title, img, url} = props
    return (
        <Link to={url}>
            <button className='service-card'>
                <img src={img}/> 
                <p>{title}</p>
            </button>
        </Link>
        
    )
}