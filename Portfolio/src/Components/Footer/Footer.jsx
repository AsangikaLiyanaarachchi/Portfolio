import React from 'react'
import './Footer.css'
import Logo from '../../assets/Logo.png'
import user from '../../assets/user.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-top'>
                <div className='footer-top-left'>
                    <img src={Logo} alt="" style={{ width: '200px', height: 'auto' }} />
                    <p>skkdld cnvjejejnc wjnjdkqj</p>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-email-input'>
                        <img src={user} alt="" />
                        <input type='email' placeholder='Enter yor email' />
                    </div>
                    <div className='footer-subscribe'>Subscribe</div>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">dhjfjfv vnvnbvn</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Ploicy</p>
                    <p>Connect me</p>
                </div>
            </div>
        </div>
    )
}

export default Footer