function NavList({ navItems }) {
    return (
        <ul>
        { navItems.map((navItem) => (
            <li 
                key={navItem.title}     
                className="nav__item">
                <a 
                    href={navItem.hrefId} 
                    aria-label={navItem.ariaLabel} >
                    {navItem.title}
                </a>
            </li>
            )
        )}
        </ul>
    )
}

export default NavList;