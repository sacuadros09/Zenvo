import "./JD.css"
import { SocialMediaButton } from "../../components/index"
import behanceImg from '../../assets/behance.png'
import gitHubImg from '../../assets/github.png'

export function JD () {
return(
    <div className="body">
        <div className="navbar-space"/>
        <h1 className="profile-title"><strong>Profile</strong></h1>
        <div className="all-info-profile">
            <div className="info">
                <div className="info-1">
                    <h1 className="profile-name"><strong>Juan David Avila</strong></h1>
                    <p className="profile-skills">UI | FrontEnd devoloper </p>
                </div>
                <div className="biography">
                    <p className="profile-subtitle"><strong>Biography</strong></p>
                    <p className="profile-text">Interactive Media Design student in Cali, Colombia. Focused on interactive media. With about 1 year of experience, I specialize in user interface design (UI), leading innovative projects backed by solid research. I believe in engaging and functional solutions.</p>
                </div>
                <div className="professional-skills">
                    <p className="profile-subtitle"><strong>Professional Skills</strong></p>
                    <ul className="profile-text">
                        <li>Advertising and brand Design</li>
                        <li>Interface Design and Prototyping</li>
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
                <img className="img-div" src="/src/assets/avila-color.png"/>
            </div>
            
        </div>

    </div>
)
}
