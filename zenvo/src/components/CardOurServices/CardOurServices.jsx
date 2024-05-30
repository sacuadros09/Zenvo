import './CardOurServices.css'

export function CardOurServices (props) {
    const { title, description, img,variant, reverse, path, text } = props
    return (
      <div className={`${variant} ${reverse ? 'reverse' : ''}`}>
        <img src={img} />
        <div className="text-container">
        <h1> <strong>{title}</strong> </h1>
        <p>{description}</p>
        </div>
      </div>
    )
  }