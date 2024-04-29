import {Button } from '../index'
import "./CardProyects.css"

export function CardProyects (props) {
    const { img,title,text, url, name } = props
    return (
      <div>
        <img src={img} />
        <h1>{title}</h1>
        <p>{text}</p>
        <p>Realizado por {name}</p>
        <Button/>
      </div>
      
    )
  }