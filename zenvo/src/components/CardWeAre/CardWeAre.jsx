import './CardWeAre.css'

export function CardWeAre (props) {
    const { img, url, name } = props
    return (
      <div>
  
        <img src={img}/>
        <button>{url}{name}</button>
      </div>
    )
  }