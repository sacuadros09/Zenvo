import "./OurServices.css"
import { InfoText, Button, CardOurServices} from "../../components"
import { dataServices } from "../../services/dataServices"




export function OurServices () {
return(
    <div className="big-container">

<div className="who-we-are">
        <InfoText title = "Our Services"  text = "Welcome to our services section at Zenvo Studio! This is where the magic happens. Dive into our creative world and discover how we can help you take your project to the next level. From web design to branding, we're here to offer you visual solutions that captivate, inspire and make your brand shine. Explore our services below and let us take your ideas beyond your expectations." img="/src/assets/RobotServices.png"></InfoText>

        </div>

        <div className="transform">
            <h2>We transform ideas into exceptional digital experiences, where creativity and innovation are in every pixel.</h2>
        </div>
        
      <div className="services-container">
    {dataServices.map(({id,img,title,description}) => {
    return(
    <div key={id} className="data-container">

    <CardOurServices img={img} ></CardOurServices>  
    <CardOurServices title={title}></CardOurServices>
    <CardOurServices description={description}></CardOurServices>
    <Button></Button>

    

    </div>
    )
    
    })}
   

    </div>
    </div>  
)
}


  
