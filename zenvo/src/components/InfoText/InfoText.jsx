import './InfoText.css'
export function InfoText(props) {
    const {title, text,img, variant} = props
    return (
        <div className={variant}>
            <h5>{title}</h5>
            <p>{text}</p>
            <img src={img}></img>
        </div>
    )
}