import { SocialMediaButton, Button } from '../index'
import behanceImg from '../../assets/behance.png'
import gitHubImg from '../../assets/github.png'
import './ProfileCard.css'

export function ProfileCard(props) {
    const {name, skills, behance, gitHub, img, link} = props
    return (
        <div className='profile-card'>
            <div className='profilecard-info'>
                <h2><strong>{name}</strong></h2>
                <p>{skills}</p>
                <div className='socialmedia-div'>
                    <SocialMediaButton img={behanceImg} link={behance}/>
                    <SocialMediaButton img={gitHubImg} link={gitHub}/>
                </div>
                <Button path={link} text="See more"/>
            </div>
            <img  className='profilecard-img' src={img}/>
        </div>
        
    )
}