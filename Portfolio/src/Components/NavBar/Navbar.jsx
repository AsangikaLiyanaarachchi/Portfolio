import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css'
import Logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="" style={{ width: '200px', height: 'auto' }} />
            <ul className="nav-menu">
                <li><AnchorLink className='anchor-link'  href='#home'>Home</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'>About me</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'>Services</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#mywork'>Portfolio</AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
                
            </ul>
            <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        </div>
    )
}

export default Navbar