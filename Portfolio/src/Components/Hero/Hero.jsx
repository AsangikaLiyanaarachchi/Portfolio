import React from 'react'
import './Hero.css'
import Profile_Img from '../../assets/Profile_Img.png'

const Hero = () => {
  return (
    <div className='hero'>
      <img src={Profile_Img} alt="" style={{ width: '300px', height: 'auto' }} />
      <h1> <span>I am Asangika Liyanaarachchi.</span> Full Stack Developer</h1>
      <p>I am an undergraduate from the Faculty of Information Technology of University of Moratuwa</p>
      <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero