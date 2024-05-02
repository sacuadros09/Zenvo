import { SocialMediaButton, Button } from '../index'
import behanceImg from '../../assets/behance.png'
import gitHubImg from '../../assets/github.png'
import './ProfileCard.css'

export function ProfileCard(props) {
    const {name, skills, behance, gitHub, img} = props
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{skills}</p>
                <div>
                    <SocialMediaButton img={behanceImg} link={behance}/>
                    <SocialMediaButton img={gitHubImg} link={gitHub}/>
                </div>
                <Button text="See more"/>
            </div>
            <img src={img}/>
        </div>
        
    )
}