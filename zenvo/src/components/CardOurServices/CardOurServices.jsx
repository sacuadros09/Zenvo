import './CardOurServices.css'
import {Button } from '../index'
export function CardOurServices (props) {
    const { title, description, img, url } = props
    return (
      <div>
        
        <img src={img} />
        <h1> {title} </h1>
        <p>{description}</p>
        <Button/>
      </div>
    )
  }