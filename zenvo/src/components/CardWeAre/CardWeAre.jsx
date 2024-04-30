import './CardWeAre.css'

export function CardWeAre (props) {
    const { photo, url, name } = props
    return (
      <div>
        <img src={photo}/>
        <button>{name}</button>
      </div>
    )
  }