import './DevServices.css'

import { InfoCard } from "../../components"
import { Button } from "../../components"

 import CardsDev from '../../services/dataServiceDev'
 
  export function DevServicePage () {
    return (
     <>
      <section>
        
        <div>
       <button className='hamburguer-btn'> <img className='hamburguer-img' src="../../public/three_line_icon.png"></img></button>
       <Button text='Contact us' />
       </div>
       <h1 className='title-dev'>FrontEnd Development</h1>
        <img  className='banner-img' src="../../public/banner-dev.png"/>
        
        <img  className='sec-banner-img' src="../../public/dev-img-mobile.png"/>

        <section className='sec-midpage'>
        
        <div className='components-sec'>
        {CardsDev.map((card, id) => (

          <InfoCard title={card.title} key={id}
          img={card.img} text={card.description}/>

        ))}
         </div>
        <div className='web-ux-img-container'>
        <img className='web-ux-img' src="../../public/dev-img-web.png"/>
        </div>
       </section>
       <img className="decoration-devservice" src="../../../public/circle-line-service2.png"/>
       </section>
       
     </>
   )
 }