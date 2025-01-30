import HeroImage from '../assets/undraw_programmer_raqr.svg';

function Hero() {
    return (
        <section id="topPage" className="hero">
            <img 
                src={HeroImage} 
                alt="" aria-hidden="true" 
                className="hero__img" />
            <h1 className="hero__title">
                Easily Build Your Digital CV with OdinCV
            </h1>  
            <p className="hero__subtitle">
                Fill in the form and your CV is ready to go.
            </p>
            <a href="#profileSection" className="hero__link--start">
                Start Now
            </a>
        </section>
    )
}

export default Hero;