import React from 'react'
import './Navbar.css'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="" style={{ width: '200px', height: 'auto' }} />
            <ul className="nav-menu">
                <li>Home</li>
                <li>About me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar