import {Button } from '../index'

import "./CardPortfolio.css"

export function CardPortfolio (props) {
    const { img,title,text,name, link } = props
    return (
      
      <article className='portfolio-card'>
        <img src={img} className='img-card-portfolio'/>
          <div className='text-card-portfolio'>
            <h3 className='title-card-portfolio'><strong>{title}</strong></h3>
            <p className='description-card-portfolio'>{text}</p>
            <p className='card-made-for'>Realizado por {name}</p>
            <Button path={link} text='Behance'/>
          </div>
      </article>
    )
  }