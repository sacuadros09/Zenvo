import './CardBenefits.css'

export function CardBenefits (props) {
    const { title, description, img,variant } = props
    return (
      <div className='card-benefits'>
        <img src={img} />
        <h1><strong>{title}</strong></h1>
        <p>{description}</p>
      </div>
    )
  }