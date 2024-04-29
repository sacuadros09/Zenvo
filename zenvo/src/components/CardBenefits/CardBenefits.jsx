import './CardBenefits.css'

export function CardBenefits (props) {
    const { title, description, img } = props
    return (
      <div>
        <img src={img} />
        <h1> {title} </h1>
        <p>{description}</p>
      </div>
    )
  }