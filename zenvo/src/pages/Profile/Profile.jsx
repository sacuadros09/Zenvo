import "./Profile.css"
import { dataAbout } from "../../services/dataAbout"

export function Profile () {
return(
    <div className="body">
        <div className="navbar-space"/>
        <h1>Profile</h1>
        <div>
            <div className="info">
                <div className="info-1">
                    <h1 className="profile-name">Juan David Avila</h1>
                    <p className="profile-skills">UI | FrontEnd devoloper </p>
                </div>
                <div className="biography">
                    <p className="biography-title"><strong>Biography</strong></p>
                    <p className="biography-text">Interactive Media Design student in Cali, Colombia. Focused on interactive media. With about 1 year of experience, I specialize in user interface design (UI), leading innovative projects backed by solid research. I believe in engaging and functional solutions.</p>
                </div>
                <div className="professional-skills">
                    <p className="Professional-title"><strong>Professional Skills</strong></p>
                    <ul className="Professional-text">
                        <li>Advertising and brand Design</li>
                        <li>Interface Design and Prototyping</li>
                        <li>Front-End Development</li>
                    </ul>
                </div>
                <div className="studies">
                    <p className="studies-title"><strong>Studies</strong></p>
                    <p className="studies-text">Interactive Media Design - ICESI University</p>
                </div>

            </div>
            <img src="/src/assets/avila-color.png" alt="" />
        </div>

    </div>
)
}
