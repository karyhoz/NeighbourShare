import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./notFound.css"
const NotFound = () => {
    const navigate = useNavigate();

    const handleGoHome = () => {
        navigate('/');
    };
    useEffect(() => {
        document.title = '404 - Not Found';
      }, []);
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  )
}

export default NotFound;