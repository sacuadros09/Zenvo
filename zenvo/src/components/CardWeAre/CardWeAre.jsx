import './CardWeAre.css'

export function CardWeAre (props) {
    const { photo, url, name,variant} = props
    return (
      <div className={variant}>
  
        <img src={photo}/>
        <button><p>{name}</p></button>
      </div>
    )
  }