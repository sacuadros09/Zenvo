import './CardWeAre.css'

export function CardWeAre (props) {
    const { fotos, url, name } = props
    return (
      <div>
  
        <img src={fotos}/>
        <button>{url}{name}</button>
      </div>
    )
  }