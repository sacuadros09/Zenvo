import './ServiceCard.css'

export function ServiceCard(props) {
    const {title, img, url} = props
    return (
        <button>
            <img src={img}/> 
            <p>{title}</p>
            {url}
        </button>
    )
}