import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from '../component/Footer';

const Home = () => {

    const scrollRevealOption = {
        distance: '50px',
        duration: 1000,
    };
    
    useEffect(() => {
        const sr = ScrollReveal();
    
        // Reveal each element one by one
        sr.reveal('.hero-right-image img', {
        ...scrollRevealOption,
        origin: 'right',
        delay: 100, // Delay for the first element
        });
        
    }, []);

    useEffect(() => {
        document.title = 'Home';
      }, []);
    return(
        <>
            <Navbar/>
            <Footer/>
        </>
    )

}

export default Home;