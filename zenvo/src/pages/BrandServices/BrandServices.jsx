import './BrandServices.css' 

import { InfoCard } from "../../components"
import { Button } from "../../components"

import CardsBrand from '../../services/dataServiceBrand'
 
  export function BrandServicePage () {
    return (
     <>
      <section>
        
        <div>
       <button className='hamburguer-btn'> <img className='hamburguer-img' src="../../src/assets/three_line_icon.png"></img></button>
       <Button text='Contact us' />
       </div>
       <h1 className='title-ux'>Brand and marketing</h1>
        <img  className='banner-img' src="../../src/assets/banner-brand.png"/>
        
        <img  className='sec-banner-img' src="../../src/assets/phone-img-brand.png"/>

        <section className='sec-midpage'>
        
        <div className='components-sec'>
        {CardsBrand.map((card, id) => (

          <InfoCard title={card.title} key={id}
          img={card.img} text={card.description}/>

        ))}
         </div>
        <div className='web-ux-img-container'>
        <img className='web-ux-img' src="../../src/assets/img-web-brand.png"/>
        </div>
       </section>
       <img className="decoration-brandservices" src="../../../src/assets/circle-line-service2.png"/>
       </section>
       
     </>
   )
 }