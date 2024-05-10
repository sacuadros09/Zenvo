import './CardBenefits.css'

export function CardBenefits (props) {
    const { title, description, img,variant } = props
    return (
      <div className= {variant} >
        <img src={img} />
        <h1> {title} </h1>
        <p>{description}</p>
      </div>
    )
  }