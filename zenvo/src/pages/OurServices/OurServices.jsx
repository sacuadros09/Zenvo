import "./OurServices.css"
import { useState } from "react"
import { InfoText, Button, CardOurServices,MobileServices} from "../../components"
import AbajoHamburger from "../../assets/chevron-abajo.svg"
import { dataServices } from "../../services/dataServices"

export function OurServices () {
    const [showDescription, setShowDescription] = useState(false);
    const firstDescription = dataServices.length > 0 ? dataServices[0].description : '';


    const handleClick1 = () => {
        setShowDescription(!showDescription)
       }    
    
return(
    <div className="big-container">

<div className="who-we-are">
        <InfoText variant="infotext-ourservices" title = "Our Services"  text = "Welcome to our services section at Zenvo Studio! This is where the magic happens. Dive into our creative world and discover how we can help you take your project to the next level. From web design to branding, we're here to offer you visual solutions that captivate, inspire and make your brand shine. Explore our services below and let us take your ideas beyond your expectations." img="/src/assets/RobotServices.png"></InfoText>
        </div>

        <div className="who-we-celphone">
        <InfoText variant="infotext-ourservices" title = "Our Services"  text = "Welcome to our services section at Zenvo Studio! This is where the magic happens. Dive into our creative world and discover how we can help you take your project to the next level."></InfoText>
        </div>

        <div className="transform">
            <h2>We transform ideas into exceptional digital experiences, where creativity and innovation are in every pixel.</h2>
        </div>
        
        <nav className="data-container">
                <button className='down-menuservices' onClick={handleClick1}>
                <img src={AbajoHamburger} alt="Toggle Description" />
                </button>
                <section>
                    {showDescription && <p>{firstDescription}</p>}
                </section>
            </nav>

            {dataServices.map(({ id, img, title, description }) => (
                <nav key={id} className="data-container">
                    <CardOurServices variant="cardservices-ourservices" img={img} title={title} description={description} />
                    <Button />
                </nav>
            ))}
        </div>
    );
}
  
