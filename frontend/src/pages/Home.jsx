import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";
import Navbar from "../component/Navbar";
import Footer from '../component/Footer';
import HomeHero from '../component/HomeHero';
import Features from '../component/Features';
import Testimonials from '../component/Testimonials';
import JoinUs from '../component/JoinUs';
import HomeContactSection from '../component/HomeContactSection';

const Home = () => {

    const scrollRevealOption = {
        distance: '50px',
        duration: 1000,
    };
    
    useEffect(() => {
        const sr = ScrollReveal();
    
        // Reveal each element one by one
        sr.reveal('.hero-card', {
        ...scrollRevealOption,
        origin: 'right',
        delay: 100, // Delay for the first element
        });
        sr.reveal('.post-items img', {
            ...scrollRevealOption,
            origin: 'bottom',
            delay: 150, // Delay for the first element
            });
        sr.reveal('.browse-items img', {
            ...scrollRevealOption,
            origin: 'bottom',
            delay: 150, // Delay for the first element
            });
            sr.reveal('.request-item img', {
                ...scrollRevealOption,
                origin: 'bottom',
                delay: 150, // Delay for the first element
                });
        
    }, []);

    useEffect(() => {
        document.title = 'Home - NeighborShare';
      }, []);
    return(
        <>
            <Navbar/>
            <HomeHero/>
            <Features/>
            <Testimonials/>
            <JoinUs/>
            <HomeContactSection/>
            <Footer/>
        </>
    )

}

export default Home;