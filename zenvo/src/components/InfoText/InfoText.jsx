import './InfoText.css'
export function InfoText(props) {
    const {title, text,img, variant} = props
    return (
        <div className={variant}>
            <div className='info-text'>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
            <img src={img}></img>
        </div>
    )
}