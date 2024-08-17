import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#community-guidelines">Community Guidelines</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
        <hr />
        <div className="footer-flex">
            <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
            </a>
            </div>
            <p>&copy; 2024 NeighbourShare. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
