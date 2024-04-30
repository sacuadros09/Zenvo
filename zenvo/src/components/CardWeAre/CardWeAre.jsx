import './CardWeAre.css'

export function CardWeAre (props) {
    const { photos, url, name } = props
    return (
      <div>
  
        <img src={photos}/>
        <button>{url}{name}</button>
      </div>
    )
  }