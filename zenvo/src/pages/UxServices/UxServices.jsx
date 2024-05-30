import './UxServices.css' 

import { Button,InfoCard  } from "../../components/index"
import CardsUx from '../../services/dataServiceUx'




 export function UxServicePage () {
   return (
    <>
      <section>
        
        <div>
       <button className='hamburguer-btn'> <img className='hamburguer-img' src="../../public/three_line_icon.png"></img></button>
       <Button text='Contact us' />
       </div>
       <h1 className='title-ux'>UX Design Services</h1>
        <img  className='banner-img' src="../../public/Pic_mobile_uxservice.png"/>
        
        <img  className='sec-banner-img' src="../../public/Ux-sec-banner.png"/>

        <section className='sec-midpage'>
        
        <div className='components-sec'>
        {CardsUx.map((card, id) => (

          <InfoCard title={card.title} key={id}
          img={card.img} text={card.text}/>

        ))}
         </div>
        <div className='web-ux-img-container'>
        <img className='web-ux-img' src="../../public/ux-service-imgWeb.png"/>
        </div>
       </section>
       <img className="decoration-uxservice" src="../../../public/circle-line-service2.png"/>
       </section>
       
     
      
    </>
  )
}