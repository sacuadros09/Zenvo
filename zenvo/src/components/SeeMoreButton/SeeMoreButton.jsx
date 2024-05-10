import "./SeeMoreButton.css"
export function SeeMoreButton(props) {
    const {text, url,variant} = props
    return (
        <div className={variant}>
            
        <button className="seemore-button">
            <p>{text}</p> 
            {url}
        </button>
        </div>
    )
}