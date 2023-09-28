import dropdownIcon from '../Assets/dropdown.png'

const NavLinks = (props) => {
    return (
        <nav className={props.className}>
            <ul>
                {props.links.map(link => {
                    return (
                        <li key={link.id}>
                            {link.navlink}
                            {
                                link.hasDropdown && 
                                <figure>
                                    <img src={dropdownIcon} alt='dropdown icon' />
                                </figure>
                            }
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default NavLinks
