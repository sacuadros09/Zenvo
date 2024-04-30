import { Link } from "react-router-dom";


export function NavBar(props) {
    const { text, url } = props;
    return (
        <button>
    <Link to={url}><p>{text}</p></Link>
        </button>
    );
}