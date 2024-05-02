import "./Home.css"
import slogan from '../../assets/slogan.png'
import allGroup from '../../assets/all-group.png'
import { InfoCard, ProfileCard, ServiceCard } from "../../components/index"
import { dataAbout } from "../../services/dataAbout"
import { dataServices } from "../../services/dataServices"
import { dataSkills } from "../../services/dataSkills"

export function Home () {
return(
    <div className="body">
        <img className="slogan-img" src={slogan}/>
        <section className="whoweare-section">
            <h1 className="whoweare-title">Who we are?</h1>
            <p>We are a dynamic team dedicated to revolutionizing the digital landscape through innovative design solutions.</p>
            <div className="infocards-section">
                <img src={allGroup}/>
                <InfoCard title="Creativity and Innovation" text="We thrive on creativity and innovation, constantly pushing boudaries."/>
                <InfoCard title="Client-Centric Approach" text="Our focus is on meeting our client's needs and goals."/>
                <InfoCard title="Excellence in Execution" text="We execute each proect with precision, delivering outstanding results."/>
            </div>
            <div className="blue-card">
                <p>&quot;Inspiring <strong>digital evolution</strong> through visionary design, driven by the <strong>collaborative synergy</strong> of our four creative minds.&quot;</p>
            </div>
        </section>
        <section className="ourteam-section">
                <h1>Our Team</h1>
                {dataAbout.map(({id, name, talents, img2, behance, github}) => (
                    <ProfileCard key={id} name={name} skills={talents} img={img2} behance={behance} github={github}/>
                ))}
        </section>
        <section className="ourservices-section">
            {dataServices.map(({id, img, title}) => (
                <ServiceCard key={id} img={img} title={title}/>
            ))}
        </section>
        <section className="ourskills-section">
            <h1>Our Skills</h1>
            {dataSkills.map(({id, img}) => (
                <img key={id} src={img}/>
            ))}
        </section>
    </div>
)
}
  
