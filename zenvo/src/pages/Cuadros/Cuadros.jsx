import "./Cuadros.css"
import { SocialMediaButton } from "../../components/index"
import behanceImg from '../../assets/behance.png'
import gitHubImg from '../../assets/github.png'

export function Cuadros () {
return(
    <div className="body">
        <div className="navbar-space"/>
        <h1 className="profile-title"><strong>Profile</strong></h1>
        <div className="all-info-profile">
            <div className="info">
                <div className="info-1">
                    <h1 className="profile-name"><strong>Santiago Cuadros</strong></h1>
                    <p className="profile-skills">UX | FrontEnd devoloper </p>
                </div>
                <div className="biography">
                    <p className="profile-subtitle"><strong>Biography</strong></p>
                    <p className="profile-text">As a student of interactive media design in Cali, Colombia, my main focus is on creating interactive experiences that captivate through applications and games. My passion for subjects like video games, fitness, soccer, and animation is reflected in the projects I undertake. Specializing in UX and FrontEnd development, I am committed to continuous learning and the pursuit of new ways to innovate in the world of interactive design.</p>
                </div>
                <div className="professional-skills">
                    <p className="profile-subtitle"><strong>Professional Skills</strong></p>
                    <ul className="profile-text">
                        <li>UX</li>
                        <li>Animation</li>
                        <li>Front-End Development</li>
                    </ul>
                </div>
                <div className="studies">
                    <p className="profile-subtitle"><strong>Studies</strong></p>
                    <p className="profile-text">Interactive Media Design - ICESI University</p>
                </div>
                <div className="socialmedia-div">
                <SocialMediaButton img={behanceImg}/>
                <SocialMediaButton img={gitHubImg}/>
                </div>
            </div>
            <div>
                <img className="img-div" src="/src/assets/cuadros-color.png"/>
            </div>
            
        </div>

    </div>
)
}
