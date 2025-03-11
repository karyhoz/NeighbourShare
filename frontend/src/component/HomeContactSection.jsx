import { FaMapMarkerAlt,FaEnvelope } from 'react-icons/fa';
import Google from "../assets/googleLogo.png"
import Amazon from "../assets/amazonLogo.png"
import Microsoft from "../assets/microsoftLogo.png"
import Meta from "../assets/metaLogo.png"
import Techyjaunt from "../assets/techyjaunt.jpeg"
import "./HomeContactSection.css"
import { FaArrowRight } from "react-icons/fa"
const HomeContactSection = () => {
  return (
    <div className="home-contact-section">
        <div className="home-sub-contact-section">
            <div className="contact-details">
                <div className="main-office">
                    <h1>NeighborShare Main Office</h1>
                    <p className='info-text'>Get in touch with us for any inquiries.</p>
                    <p><FaMapMarkerAlt style={{ marginRight: '8px', verticalAlign:"middle" }} className="location-icon"/> 123 Community Lane, Shareville, USA</p>
                    <p><FaEnvelope style={{ marginRight: '8px', verticalAlign:"middle" }} className="location-icon"/> contact@neighborshare.com</p>
                </div>
                <div className="support-office">
                    <h1>NeighborShare Support Office</h1>
                    <p className='info-text'>Need help? Reach out to our support team.</p>
                    <p><FaMapMarkerAlt style={{ marginRight: '8px', verticalAlign:"middle" }} className="location-icon"/> 456 Help Street, Shareville, USA</p>
                    <p><FaEnvelope style={{ marginRight: '8px', verticalAlign:"middle" }} className="location-icon"/> support@neighborshare.com</p>
                </div>
            </div>
            <div className="location-details">
                <div className="shop-location">
                    <h1>Our Partners</h1>
                    <p>We are proudly supported by these organizations.</p>
                    <div className="shop-btns">
                        <button className='get-started-btn'>Get Started</button>
                        <button className='contact-us-btn'>Contact Us <FaArrowRight className="arrow-icon" /></button>
                    </div>
                </div>
                <div className="company-logos">
                    {/* you can add your company logo here */}
                    <div className="logo-container">
                        <img src={Google} alt="google logo" />
                        <img src={Amazon} alt="Amazon logo" />
                        <img src={Microsoft} alt="microsoft logo" />
                        <img src={Meta} alt="meta logo" />
                        <img src={Techyjaunt} alt="techyjaunt logo" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContactSection