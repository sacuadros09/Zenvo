import './Button.css'
import { Link } from "react-router-dom";

export function Button(props) {
    const {text, url,variant,path} = props
    return (
        <div className={variant}>
        <Link to={path}>
            <button className="contactus-button">
                <p>{text}</p> 
            </button>
        </Link>
        </div>
    )
}
