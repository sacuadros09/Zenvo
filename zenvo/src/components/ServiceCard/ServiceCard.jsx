import './ServiceCard.css'

export function ServiceCard(props) {
    const {title, img, url} = props
    return (
        <button>
            <img>{img}</img> 
            <p>{title}</p>
            {url}
        </button>
    )
}