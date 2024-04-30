import './CardOurServices.css'
export function CardOurServices (props) {
    const { title, description, img, url,variant } = props
    return (
      <div className={variant}>
        <img src={img} />
        <h1> {title} </h1>
        <p>{description}</p>
      </div>
    )
  }