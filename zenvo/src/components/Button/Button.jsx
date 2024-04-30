export function Button(props) {
    const {text, url} = props
    return (
        <button>
            <p>{text}</p> 
            {url}
        </button>
    )
}
