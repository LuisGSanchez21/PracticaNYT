
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="nyt-footer">
      <div className="footer-container">

        <div className="footer-top">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><a href="#">Our Company</a></li>
              <li><a href="#">Newsroom</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Investor Relations</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Subscription Options</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <ul className="social-links">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">LinkedIn</a></li>
            </ul>
          </div>
        </div>


        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} The New York Times Company. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
