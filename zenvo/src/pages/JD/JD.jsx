import "./JD.css";
import { useState, useEffect } from "react";
import { SocialMediaButton, CardPortfolio } from "../../components/index";
import behanceImg from '../../assets/behance.png';
import gitHubImg from '../../assets/github.png';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export function JD() {
    const [projectsData, setProjectsData] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
               
                const querySnapshot = await getDocs(query(collection(db, "projects"), where("members", "array-contains", "Juan David Avila")));
                const projects = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProjectsData(projects);
            } catch (error) {
                console.error("Error fetching projects: ", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <div className="body">
            <div className="navbar-space" />
            <h1 className="profile-title"><strong>Profile</strong></h1>
            <div className="all-info-profile">
                <div className="info">
                    <div className="info-1">
                        <h1 className="profile-name"><strong>Juan David Avila</strong></h1>
                        <p className="profile-skills">UI | FrontEnd developer</p>
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
                        <SocialMediaButton img={behanceImg} />
                        <SocialMediaButton img={gitHubImg} />
                    </div>
                </div>
                <div>
                    <img className="img-div" src="/src/assets/avila-color.png" />
                </div>
            </div>
            <h5 className="profile-name"><strong>Projects</strong></h5>
            <div className="my-projects-section">
                {projectsData.map(({ id, images, description, title, behance, members }) => (
                    <CardPortfolio key={id} variant='profile-projects' img={images} text={description} title={title} link={behance} name={members.join(', ')} />
                ))}
            </div>
        </div>
    );
}
