import './Signup.css';

const Signup = () => {
  return (
    <div className="container">
      <div className="image-container"></div>
      <h1 className="title">Join your neighborhood on Nextdoor</h1>
      <form className="form">
        <label>
          <input type="text" placeholder="Username" className="input" />
        </label>
        <label>
          <input type="email" placeholder="Email" className="input" />
        </label>
        <label className="password-container">
          <input type="password" placeholder="Password" className="input password-input" />
          <div className="eye-icon">
            {/* SVG for Eye Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z" />
            </svg>
          </div>
        </label>
        <button className="submit-button">Sign Up</button>
      </form>
      <p className="terms">By signing up, you agree to the Privacy Policy and Terms of Service</p>
      <div className="signin-container">
        <p className="signin-text">Already have an account? Sign in</p>
        <div className="arrow-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Signup;
