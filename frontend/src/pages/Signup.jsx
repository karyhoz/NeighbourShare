import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Neighbourhood from "../assets/neighbourhood.jpg"
import "./Signup.css";
const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { username, email, password });
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };
  const handleLogin = () => {
    navigate('/login');
  };
  return (
    <div className='sign-up-main-conatainer'>
      <div className="sub-container">
        <div className="image-container">
          <div className="image">
              <img src={Neighbourhood} alt="Neigbourhood photo" />
          </div>
          <div className="overlay">
          </div>
        </div>
        <div className="form-container">
        <form onSubmit={handleSubmit}>
          <p className="welcome">Welcome To NeighbourShare</p>
        <div className="fields">
              <input
                type="text"
                name='username'
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                />
        </div>
        <div className="fields">
            <input
              type="email"
              name='email'
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </div>
        <div className="fields">
              <input
                type="password"
                name='password'
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
        </div>
        <div className="fields">
            <button className="submit-btn" type="submit">Sign Up</button>
        </div>
        <div className="informations">
              <p className="consent">By Signing Up On NeighbourShare, You then Agree with our terms and service. </p>
              
              <p className="assurrance">Already a user? Kindly <span className='log-btn' onClick={handleLogin}>Login Here</span></p>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;