import "./FooterDesktop.css"; 
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../public/Logo1-zenvo.png'

export function FooterDesktop(props) {
    const {url} = props
  return (
    <footer className="footer-desktop">

      <div className="logo-section">
        <img src={logo} alt="Zenvo Logo"/>
        <div className="social-icons">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>

      <div className="company-section">
        <h3>Company</h3>
        <ul>
          <li>About us</li>
          <li>Privacy Policy</li>
          <li>Terms and conditions</li>
          <li>Contact us</li>
          <li>FAQ</li>
          <Link to="/AdminPanelPage">
            <button className="admin-panel-button">Administrator Panel</button>
          </Link>
        </ul>
      </div>

      <div className="information-section">
        <h3>Information</h3>
        <p>Carrera 10 # 23-45</p>
        <p>Digitalia Building, Office 404</p>
        <p>Phone: (+57) 301 596 464</p>
        <p>Cali, Colombia</p>
      </div>

      <div className="footer-copyright">
        <p><span>&copy;</span> Copyright 2024 - Zenvo Studio</p>
      </div>

    </footer>
  );
}

