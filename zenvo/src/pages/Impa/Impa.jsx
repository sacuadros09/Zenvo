import "./Impa.css"
import { useState, useEffect } from "react";
import { SocialMediaButton, CardPortfolio } from "../../components/index";
import behanceImg from '../../assets/behance.png';
import gitHubImg from '../../assets/github.png';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export function Impa() {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
               
                const querySnapshot = await getDocs(query(collection(db, "projects"), where("members", "array-contains", "Sebastián Gonzalez")));
                const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProjectsData(projects);
            } catch (error) {
                console.error("Error fetching projects: ", error);
            }
        };

        fetchProjects();
    }, []);
    return(
    <div className="body">
        <div className="navbar-space"/>
        <h1 className="profile-title"><strong>Profile</strong></h1>
        <div className="all-info-profile">
            <div className="info">
                <div className="info-1">
                    <h1 className="profile-name"><strong>Sebastian González</strong></h1>
                    <p className="profile-skills">UX | UI designer </p>
                </div>
                <div className="biography">
                    <p className="profile-subtitle"><strong>Biography</strong></p>
                    <p className="profile-text">I'm a sixth-semester student studying Interactive Media Design. I specialize in UX (User Experience) because I'm passionate about creating unforgettable and user-friendly experiences. My goal is to design innovative solutions that connect with users on an emotional level. I'm dedicated to continuous learning and pushing the boundaries of creativity in interactive design.</p>
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
                    <p className="profile-text">Interactive Media Design - Icesi University</p>
                </div>
                <div className="socialmedia-div">
                <SocialMediaButton img={behanceImg}/>
                <SocialMediaButton img={gitHubImg}/>
                </div>
            </div>
            <div>
                <img className="img-div" src="/src/assets/impa-color.png"/>
            </div>
        </div>
        <h5 className="profile-name"><strong>Projects</strong></h5>
        <div className="my-projects-section">
            {projectsData.map(({ id, images, description, title, behance, members }) => (
                <CardPortfolio key={id} variant='profile-projects' img={images} text={description} title={title} link={behance} name={members.join(', ')} />
            ))}
        </div>
    </div>
)
}
