import './ConsultServices.css'

import { Button,InfoCard  } from '../../components/index'

import CardsConsul from '../../services/dataServicesConsul'
 
  export function ConsultServicePage () {
    return (
     <>
       <section>
         <div>
        <button className='hamburguer-btn'> <img className='hamburguer-img' src="../../src/assets/three_line_icon.png"></img></button>
        <Button text='Contact us' />
        </div>
        <h1 className='title-consult'>UX Design Services</h1>
         <img  className='banner-img' src="../../src/assets/Pic_mobile_uxservice.png"/>
         
         <img  className='sec-banner-img' src="../../src/assets/Ux-sec-banner.png"/>
         <div className='components-sec'>
         {CardsConsul.map((card, id) => (
 
           <InfoCard title={card.title} key={id}
           img={card.img} text={card.text}/>
 
         ))}
         
        </div>
        </section>
         <p>queda faltando el footer</p>
      
       
     </>
   )
 } 