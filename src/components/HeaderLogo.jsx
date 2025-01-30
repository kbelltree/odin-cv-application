import Logo from '../assets/OdinCVLogo-min.png';

function HeaderLogo() {
    return (
        <div className="header__logo-container">       
            <a 
                href="#topPage" 
                className="header__logo" 
                aria-label="Go back to top of the page">
            <img 
                src={Logo} alt="OdinCV Logo" 
                className="header__logo-img" 
                width="218px"/>
            </a>       
        </div>
    )
}

export default HeaderLogo;