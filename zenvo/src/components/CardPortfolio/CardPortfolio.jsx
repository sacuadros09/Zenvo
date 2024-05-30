import {Button } from '../index'

import "./CardPortfolio.css"

export function CardPortfolio (props) {
    const { img,title,text,name, link } = props
    return (
      
      <article className='card-portfolio'>
        <img src={img} className='img-card-port'/>
        <div className='organice-desktop'>
          <div className='all-text'>
            <div className='arrow-title'>
              <h3 className='title-portfolio-comp'>{title}</h3>
              </div>
              <p className='descrip-portfolio'>{text}</p>
              <p className='made-for'>Realizado por {name}</p>
            </div>
          <div className='icons'>
          <Button path={link} text='Behance'/>
          </div>
        </div>
      </article>
    )
  }