import { FaArrowRight } from "react-icons/fa"
import "./HomeHero.css"

const HomeHero = () => {
  return (
    <div className="hero-container">
        <div className="hero-content">
            <div className="hero-card">
                <p className="header1">Your community hub for sharing and caring</p>
                <h2 className="header2">Welcome to NeighborShare</h2>
                <p className="header3">Post items you no longer need, browse available items, and connect with neighbors</p>
                <div className="hero-btns">
                    <button className="learn-more">Learn More</button>
                    <button className="join-now">Join Now <FaArrowRight className="arrow-icon" /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeHero