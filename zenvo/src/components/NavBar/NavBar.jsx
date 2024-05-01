import { Link } from "react-router-dom";


export function NavBar(props) {
    const { text, url } = props;
    return (
        <Link to={url}>
            <button className="bg-transparent text-white"><strong>{text}</strong></button>
        </Link>
    );
}