import './SocialMediaButton.css'

export function SocialMediaButton(props) {
    const {img, link} = props
    return (
        <a href={link}>
            <img src={img}/>
        </a>
    )
}