import './Button.css'
import { Link } from "react-router-dom";

export function Button(props) {
    const {text,url} = props

    return (
        <div className="button-container">
            <Link to={url} className="contactus-link">
                <button className="contactus-button">
                    <p>{text}</p> 
                </button>
            </Link>
        </div>
    );
}
