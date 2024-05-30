import "./ContactUs.css"

export function ContactUs () {
return(
    <div className="body">
        <div className="navbar-space"/>
        <form className="form-contact">
            <input className='input-contact' type="text" placeholder="Email"/>
            <input className='input-contact' type="text" placeholder="Subject"/>
            <input className='input-contact' type="text" placeholder="Fullname"/>
            <input className='input-message' type="text" placeholder="Message"/>
            <button className="send-message-btn">Send message</button>
        </form>
    </div>
)
}
  
