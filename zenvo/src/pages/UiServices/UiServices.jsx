import './UiServices.css' 

import { InfoCard } from "../../components"
import { Button } from "../../components"

import CardsUi from '../../services/dataServiceUi'
 
  export function UiServicePage () {
    return (
     <>
      <section>
        
        <div>
       <button className='hamburguer-btn'> <img className='hamburguer-img' src="../../public/three_line_icon.png"></img></button>
       <Button text='Contact us' />
       </div>
       <h1 className='title-ux'>UI Design Services</h1>
        <img  className='banner-img' src="../../public/ui-bannerservice.png"/>
        
        <img  className='sec-banner-img' src="../../public/phone-imgui.png"/>

        <section className='sec-midpage'>
        
        <div className='components-sec'>
        {CardsUi.map((card, id) => (

          <InfoCard title={card.title} key={id}
          img={card.img} text={card.description}/>

        ))}
         </div>
        <div className='web-ux-img-container'>
        <img className='web-ux-img' src="../../public/img-web-uiservice.png"/>
        </div>
       </section>
       <img className="decoration-uiservice" src="../../../public/circle-line-service2.png"/>
       </section>
       
     
      
       
     </>
   )
 }