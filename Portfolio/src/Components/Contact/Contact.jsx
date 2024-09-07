import React from 'react'
import "./Contact.css"

const Contact = () => {
  return (
    <div className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let{"'s"} talk</h1>
                <p></p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src='' alt=''/> <p>asangikanethmini@gmail.com</p>

                    </div>
                    <div className='contact-detail'>
                        <img src='' alt=''/> <p>+94123123908</p>
                    </div>
                    <div className='contact-detail'>
                        <img src='' alt=''/><p>no:109, jjjdkdk, dnjvkdmdmv</p>
                    </div>
                </div>
            </div>
            <form className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name='name'/>
                <label htmlFor=''>Writr your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact