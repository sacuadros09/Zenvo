import {Button } from '../index'

import "./CardPortfolio.css"

export function CardPortfolio (props) {
    const { img,title,text, url, name, icon1, icon2, icon3,arrow } = props
    return (
      
        <article className='card-portfolio'>
        <img src={img} className='img-card-port'/>
        <div className='organice-desktop'>
        <div className='all-text'>
        <div className='arrow-title'>
        <h3 className='title-portfolio-comp'>{title}</h3>
        <button className='arrow-btn'><img src={arrow} /></button>
        </div>
        <p className='descrip-portfolio'>{text}</p>
        <p className='made-for'>Realizado por {name}</p>
        </div>
        <div className='icons'>
        <img className='icons-port' src={icon1} />
        <img className='icons-port' src={icon2} />
        <img className='icons-port' src={icon3} />
        <Button text='Behance'/>
        </div>
        </div>
      </article>
    )
  }