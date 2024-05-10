import './Portfolio.css' 

import { Button,InputPortfolio,FooterMobile,CardPortfolio } from "../../components/index"
import { dataPortfolio } from '../../services/DataPortfolio'

 export function PortfolioPage () {
   return (
    <>
      <section>
        <div>
       <button className='hamburguer-btn'> <img className='hamburguer-img' src="../../src/assets/three_line_icon.png"></img></button>
       <Button text='Contact us' />
       </div>
       <section className='title-text-banner'>
        <div className='title-text-portfolio'>
       <h1 className='title-portfolio'>Our Portfolio</h1>
       <p className='first-part-text'>Immerse yourself in a world of innovative design, 
    where each <strong> project tells a unique story of creativity, functionality and style.</strong>
    <span className='third-part-text'>see more...</span> <p className='disapear'>Discover how we have brought our
    <strong> clients </strong>visions to life, taking their ideas from conception to digital realization. 
      Explore our portfolio and be inspired by the art of design at <strong> Zenvo Studio.</strong>
      </p></p>
      </div>
      <img className='pet-banner' src='/src/assets/robot-portfolio.png'/>
      </section>
    <div className='input-filter'>
    <InputPortfolio img1='../../src/assets/icon-search.png' text="Search project" />
    <button className='filter-btn'><img src='../../src/assets/icon-filter.png'  />  </button>
    <button className='filter-btn-desk'><img className='filter-img' src='../../src/assets/icon-filter.png'/> Filter </button>
    </div>
     
             <div className='component-portfolio'>
            {dataPortfolio.map((card, id) => (

              <CardPortfolio title={card.title} key={id}
              img={card.img} text={card.text} name={card.name}
              arrow={card.arrow} icon1= {card.icon1}
              icon2= {card.icon2}  icon3= {card.icon3}/>

            ))} 
         
       </div> 
       </section>
        <FooterMobile />
     
      
    </>
  )
} 