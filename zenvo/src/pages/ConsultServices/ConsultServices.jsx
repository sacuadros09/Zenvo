import './ConsultServices.css'

import { Button,InfoCard  } from '../../components/index'

import CardsConsul from '../../services/dataServicesConsul'
 
  export function ConsultServicePage () {
    return (
      <>
      <section>
        
        <div>
       <button className='hamburguer-btn'> <img className='hamburguer-img' src="../../public/three_line_icon.png"></img></button>
       <Button text='Contact us' />
       </div>
       <h1 className='title-consult'>Consulting and advisory</h1>
        <img  className='banner-img' src="../../public/banner-consulting.png"/>
        
        <img  className='sec-banner-img' src="../../public/phone-consulting.png"/>

        <section className='sec-midpage'>
        
        <div className='components-sec'>
        {CardsConsul.map((card, id) => (

          <InfoCard title={card.title} key={id}
          img={card.img} text={card.description}/>

        ))}
         </div>
        <div className='web-ux-img-container'>
        <img className='web-ux-img' src="../../public/web-img-consulting.png"/>
        </div>
       </section>
       <img className="decoration-consult" src="../../../public/circle-line-service2.png"/>
       </section>
       
     </>
   )
 }