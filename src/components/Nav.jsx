import NavList from './NavList';

function Nav() {
    const navItems = [
        {
            title: 'Profile',
            hrefId: '#profileSection',
            ariaLabel: 'Jump to Profile Section', 
        }, 
        {
            title: 'Education', 
            hrefId: '#educationSection', 
            ariaLabel: 'Jump to Education Section',    
        }, 
        {
            title: 'Experience',
            hrefId: '#experienceSection', 
            ariaLabel: 'Jump to Experience Section',
        }
    ]
    return (
        <nav className="nav">
            <NavList navItems={navItems} />
        </nav>
    )
}   

export default Nav; 