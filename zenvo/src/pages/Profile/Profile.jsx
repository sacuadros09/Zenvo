import "./Profile.css"
import { dataAbout } from "../../services/dataAbout"

export function Profile () {
return(
    <div className="body">
        <h1>{dataAbout.name}</h1>
    </div>
)
}
