import logo from '../Assets/logo.png'
import NavLinks from '../Components/NavLinks'
import Button from '../Components/Button'
import {FaTimes} from "react-icons/fa"
import { useState } from 'react'

const links = [
    {
        'navlink': 'Home',
        'hasDropdown': false,
        'id': 71538
    },

    {
        'navlink': 'Gallery',
        'hasDropdown': false,
        'id': 93862
    },

    {
        'navlink': 'About us',
        'hasDropdown': true,
        'id': 57352
    },

    {
        'navlink': 'How we help',
        'hasDropdown': true,
        'id': 92746
    },
]

const HamburgerMenu = (props) => {
    return (
        <div className="hamburger-menu" onClick={props.openSideNav}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
    )
}

const SideBar = (props) => {
    return (
        <div className="side-bar-container">
            <div className="side-bar-content">
                <figure className='close-btn-container' onClick={props.closeSideNav}>
                    <FaTimes className='close-btn' />
                </figure>
                <NavLinks links={links}/>
                <Button className='primary-btn side-cta' label='Contact us'/>
            </div>
        </div>
    )
}

const NavBar = () => {
    const [isSideNavOpen, setIsSideNavOpen] = useState(false)

    const toogleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen)
        console.log(112);
    }

    return (
        <div className="navbar-content">
            <figure className='logo-container'>
                <img src={logo} alt='charity logo' />
            </figure>

            <NavLinks className="main-nav" links={links}/>

            <Button className='primary-btn main-cta' label='Contact us'/>

            <HamburgerMenu openSideNav={toogleSideNav}/>

            {isSideNavOpen && <SideBar closeSideNav={toogleSideNav} />}
        </div>
    )
}

export default NavBar