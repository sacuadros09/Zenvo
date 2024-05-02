import './Button.css'
import { Link } from "react-router-dom";

export function Button(props) {
    const {text, url} = props
    return (
        <Link to={url}>
            <button className="contactus-button">
                <p>{text}</p> 
            </button>
        </Link>
        
    )
}
