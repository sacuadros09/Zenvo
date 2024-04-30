import { Link } from "react-router-dom";


export function NavBar(props) {
    const { text, url } = props;
    return (
        <Link to={url}>
            <button>{text}</button>
        </Link>
    );
}