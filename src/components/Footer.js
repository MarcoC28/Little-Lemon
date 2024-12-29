import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <div className="logoalcentro">
                <img src={ Logo } alt="Little Lemon logo" />
                </div>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment.</p>
                <div className="footer-content">
                    <div className="locations">
                        <h5>LOCATIONS</h5>
                        <ul>
                            <li>Milan</li>
                            <li>Bergamo</li>
                        </ul>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon : closed</li>
                            <li>Tue - Fri: 10:30AM - 10:00PM</li>
                            <li>Sat - Sun: 11:30AM - 12:00PM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>via dei Navigli, Milano - Italy</li>
                            <li>Tel: 025 7483 9847</li>
                            <li>Email: info@littlelemon.com</li>
                        </ul>
                    </div>
            </div>
            <div className="copyright">
                <p>© 2024 Little Lemon Ltd. All rights reserved.</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
