import './Button.css'
export function Button(props) {
    const {text, url} = props
    return (
        <button className="contactus-button">
            <p>{text}</p> 
            {url}
        </button>
    )
}
