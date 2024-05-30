import "./AboutUs.css"
import { InfoText, CardWeAre,InfoCard,CardOurServices,CardBenefits} from "../../components"
import { dataAbout } from "../../services/dataAbout"

export function AboutUs () {
return(
    <section className="body">
    <div className="about-us">
        <div className="navbar-space"/>
                <InfoText variant="infotext-celphone" title = "Who we are?"  text = "We are Zenvo Studio, a team of four passionate designers united by our commitment to delivering stunning and creative visual solutions that make a lasting impact. Specializing in innovative and engaging interfaces, we focus on UX/UI and frontend expertise to merge functionality with design, ensuring every detail contributes to an exceptional user experience." img="/src/assets/RobotAbout.png"></InfoText>
                <InfoText variant="infoabout-cellphone" title = "Who we are?"  text = "We are Zenvo Studio, a team of four passionate designers united by our commitment to delivering stunning and creative visual solutions."></InfoText>
    <div className="profile-map"> 
        {dataAbout.map(({id,img,name}) => {
        return(  
            <CardWeAre key={id} variant = "section-img"photo={img} name={name}/>
        )
        })}
    </div>
  <div className="about-purpose">
    <h1 className="purpose-about">What is our purpose?</h1>
    <div className="our-purpose">
        <img className="map-about" src="/src/assets/purpose-img.png"></img>
        <div className="about-infocard">
            <InfoCard variant ="card-transforming" title="Transforming the digital experience:" text="Our purpose is to revolutionize the way people interact with technology by offering innovative and creative design solutions"></InfoCard>
            <InfoCard variant ="card-impact" title="Make a positive impact:" text="We seek to improve the lives of our clients and their audience by creating meaningful and memorable digital experiences."></InfoCard>
        </div>
    </div>
    <div/>
    <div className="mission-vision">
            <CardOurServices  variant ="about-mission" title="Mission" description="Our mission at Zenvo Studio is to exceed client expectations by transforming ideas into captivating visual experiences. With expertise in UX/UI and frontend, we merge functionality with creativity, leaving a lasting mark through exceptional design." img="/src/assets/Mission.png"/>
            <CardOurServices  variant ="about-vision" title="Vision" description="At Zenvo Studio, our vision is to lead the creation of innovative visual solutions that set trends in the design industry. We aim to build strong relationships with clients, elevating design quality and aesthetics in every challenge. As a benchmark for inspiring visual experiences, we contribute to the success of brands in the digital world." img="/src/assets/Vission.png"/>
    </div>
    </div>

    <div className="benefits">
        <h1 className="title-benefits">3 benefits of working with us</h1>
        <div className="cards-benefits">
            <div className="creative">
                <CardBenefits img="/src/assets/Pencil.png" title="Creativity without limits" description="Our passion for innovation and originality allows us to offer unique and memorable design solutions that stand out in a saturated market."/>
            </div>
            <div className="client">
                <CardBenefits img="/src/assets/Perfil.png" title="Client-centric approach" description="We value our clients' needs and objectives, collaborating closely with them to ensure that each project is customized and meets their expectations."/>
            </div>
            <div className="results">
                <CardBenefits img="/src/assets/Check-icon.png" title="Exceptional results" description="We are committed to delivering high-quality results on every project, using our experience and skills to exceed expectations and generate lasting impact."/>
            </div>
        </div>
        


    </div>

   
    </div>
    </section>
)
}
  
