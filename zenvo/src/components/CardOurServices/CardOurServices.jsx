import './CardOurServices.css'

import { Link } from 'react-router-dom'

export function CardOurServices (props) {
    const { title, description, img, variant, reverse, path, text } = props
    return (
      <div className={`${variant} ${reverse ? 'reverse' : ''}`}>
        <img src={img} />
        <div className="text-container">
        <h1> {title} </h1>
        <p>{description}</p>
        <Link to={path}>
            <button className="contactus-button-service">
                <h5 className='text-service'>{text}</h5> 
            </button>
        </Link>
        </div>
      </div>
    )
  }