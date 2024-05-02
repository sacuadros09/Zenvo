import "./SeeMoreButton.css"
export function SeeMoreButton(props) {
    const {text, url} = props
    return (
        <button className="seemore-button">
            <p>{text}</p> 
            {url}
        </button>
    )
}