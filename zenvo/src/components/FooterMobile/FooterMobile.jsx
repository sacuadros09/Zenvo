import { useState } from 'react';
import "./FooterMobile.css";
import { FaFacebook, FaTwitter, FaInstagram, FaChevronDown } from 'react-icons/fa'; // Importa el icono de la flecha hacia abajo
import logo from '../../assets/Logo1-zenvo.png';

 export function FooterMobile() {
    const [companyInfoVisible, setCompanyInfoVisible] = useState(false);
    const [informationVisible, setInformationVisible] = useState(false);

    const toggleCompanyInfo = () => {
        setCompanyInfoVisible(!companyInfoVisible);
    };

    const toggleInformation = () => {
        setInformationVisible(!informationVisible);
    };

    return (
        <footer className="footer-mobile">
            <div className="company-section">
                <button className="info-toggle-button" onClick={toggleCompanyInfo}>
                    <h3>Company</h3>
                    <FaChevronDown className="arrow-icon" /> 
                </button>
                {companyInfoVisible && (
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>FAQ</li>
                        <button className="admin-panel-button">Administrator Panel</button>
                    </ul>
                )}
            </div>

            <div className="information-section">
                <button className="info-toggle-button" onClick={toggleInformation}>
                    <h3>Information</h3>
                    <FaChevronDown className="arrow-icon" /> {/* Agrega el icono de la flecha hacia abajo */}
                </button>
                {informationVisible && (
                    <div>
                        <p>Carrera 10 # 23-45</p>
                        <p>Digitalia Building, Office 404</p>
                        <p>Phone: (+57) 301 596 464</p>
                        <p>Cali, Colombia</p>
                    </div>
                )}
            </div>

            <div className="logo-section">
                <img src={logo} alt="Zenvo Logo"/>
            </div>

            <div className="social-icons">
                <FaInstagram /> 
                <FaFacebook /> 
                <FaTwitter />
            </div>

            <div className="Terms-text">
                <p>Privacy Policy</p>
                <p>Terms and conditions</p>
            </div>

            <div className="footer-copyright">
                <p><span>&copy;</span> Copyright 2024 - Zenvo Studio</p>
            </div>

        </footer>
    );
}

