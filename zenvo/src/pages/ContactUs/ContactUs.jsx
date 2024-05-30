import "./ContactUs.css"

export function ContactUs () {
return(
    <div className="body">
        <div className="navbar-space"/>
        <input type="text" placeholder="Fullname"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Subject"/>
        <input type="text" placeholder="Message"/>
        <button className="send-message-btn">Send message</button>
    </div>
)
}
  
