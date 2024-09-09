import React from 'react'
import './About.css'
import Profile_Img from '../../assets/Profile.jpg'

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={Profile_Img} alt="" style={{ width: '250px', height: 'auto' }} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am an undergraduate from the Faculty of Information Technology
              of University of Moratuwa, seeking opportunities to gain hands-on
              experience in software development, where I can contribute to
              innovative projects and further develop my technical skil
            </p>
            <p>Motivated, quick to learn, and passionate about technology, I am
              ready to bring a proactive and dedicated approach to any opportunity
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"> <p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"> <p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"> <p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
            <div className="about-skill"> <p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>10+</h1>
          <p>weirkfvmmvkv</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>weirkfvmmvkv</p>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default About