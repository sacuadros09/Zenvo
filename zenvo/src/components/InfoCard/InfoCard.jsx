import './InfoCard.css'
export function InfoCard(props) {
    const {title, text} = props
    return (
        <div className='info-card'>
            <h5 className='infocard-title'><strong>{title}</strong></h5>
            <p className='infocard-text'>{text}</p>
        </div>
    )
}