import Story1 from "../assets/JohnDoe.jpeg"
import Story2 from "../assets/JaneSmith.jpeg"
import Story3 from "../assets/AliceJohnson.jpeg"
import "./Testimonials.css"
const Testimonials = () => {
  return (
    <div className="testimonials">
        <div className="testimonials-header-txt">
            <h3>Heartwarming testimonials from our members</h3>
            <h2>Community Stories</h2>
        </div>
        <div className="testimonials-container">
            <div className="testimonial-cards">
                <p>NeighborShare has brought our community closer. I&apos;ve met so many wonderful people!</p>
                <div className="card-owner">
                    <img src={Story1} alt="John Doe" />
                    <div className="owner-details">
                        <h3>John Doe</h3>
                        <p>@johndoe.com</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-cards">
                <p>I found exactly what I needed and even made new friends along the way.</p>
                <div className="card-owner">
                    <img src={Story2} alt="Jane Smith" />
                    <div className="owner-details">
                        <h3>Jane Smith</h3>
                        <p>@janesmith.com</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-cards">
                <p>I found exactly what I needed and even made new friends along the way.</p>
                <div className="card-owner">
                    <img src={Story3} alt="Alice Johnson" />
                    <div className="owner-details">
                        <h3>Alice Johnson</h3>
                        <p>@alicejohnson.com</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials