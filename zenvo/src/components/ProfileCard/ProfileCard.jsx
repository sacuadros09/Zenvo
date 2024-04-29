import { SocialMediaButton, Button } from '../index'
import './ProfileCard.css'

export function ProfileCard(props) {
    const {name, skill, behance, linkedIn, gitHub, img} = props
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <p>{skill}</p>
                <div>
                    <SocialMediaButton img='' link=''/>
                    <SocialMediaButton img='' link=''/>
                    <SocialMediaButton img='' link=''/>
                </div>
                <Button/>
            </div>
            <img src={img}/>
        </div>
        
    )
}