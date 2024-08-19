
import { AiOutlineCheck} from 'react-icons/ai';
import CustomIcon from './Icon-Components/CustomIcon';
import CustomIcon2 from './Icon-Components/CustomIcon2';
import './JoinUs.css'
import JoinUsImage from '../assets/join-us-image.jpeg'
const JoinUs = () => {
  return (
    <div className="join-us-container">
        <div className="join-us-sub-container">
            <div className="join-us-text-container">
                <h1>Join NeighborShare Today!</h1>
                <p>Become a part of our community and start sharing items with your neighbors</p>
                <div className="items">
                    <div className="item"><AiOutlineCheck size={23} color="#ff5733" className='item-icon'/> Post items you no longer need</div>
                    <div className="item"><AiOutlineCheck size={23} color="#ff5733" className='item-icon'/> Browse and request items</div>
                    <div className="item"><AiOutlineCheck size={23} color="#ff5733" className='item-icon'/> Connect with your community</div>
                    <div className="item"><AiOutlineCheck size={23} color="#ff5733" className='item-icon'/> Help A Life</div>
                </div>
                <div className="join-btns">
                    <button className='start-btn'><CustomIcon size={28} color="#fff" className="btn-icon"/> Get Started</button>
                    <button className='contact-btn'><CustomIcon2 size={28} color="#0f172a" className="btn-icon"/> Contact Us</button>
                </div>
            </div>
            <div className="join-us-image-container">
                <img src={JoinUsImage} alt="Join us image" />
            </div>
        </div>
    </div>
  )
}

export default JoinUs