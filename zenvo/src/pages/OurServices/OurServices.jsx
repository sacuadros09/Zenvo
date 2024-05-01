import "./OurServices.css"
import { InfoText, SeeMoreButton, CardOurServices,} from "../../components"
import { dataServices } from "../../services/dataServices"

export function OurServices () {  
    
return(
    <div className="big-services">
<div className="who-we-are">
        <InfoText variant="infotext-ourservices" title = "Our services"  text = "Welcome to our services section at Zenvo Studio! This is where the magic happens. Dive into our creative world and discover how we can help you take your project to the next level. From web design to branding, we're here to offer you visual solutions that captivate, inspire and make your brand shine. Explore our services below and let us take your ideas beyond your expectations." img="/src/assets/RobotServices.png"></InfoText>
        </div>
        <div className="who-we-celphone">
        <InfoText variant="infotext-celphone" title = "Our services"  text = "Welcome to our services section at Zenvo Studio! This is where the magic happens. Dive into our creative world and discover how we can help you take your project to the next level."></InfoText>
        </div>
        <div className="transform">
            <h2 className="transform-letter">"We transform ideas into exceptional digital experiences, where creativity and innovation are in every pixel."</h2>
        </div>
        
      <div className="services-container">
    {dataServices.map(({id,img,title,description}) => {
    return(
    <div key={id} className="services-card">
    <CardOurServices variant="cardservices-ourservices" img={img} title={title} description={description}></CardOurServices>  
    <div className="ourservices-button">
    <SeeMoreButton text="see more"/>
    </div>
    </div>
    )
    })}
    </div>
    </div>  
)
}