import './InfoText'
export function InfoText(props) {
    const {title, text,img} = props
    return (
        <div>
            <h5>{title}</h5>
            <p>{text}</p>
            <img src={img}></img>
        </div>
    )
}