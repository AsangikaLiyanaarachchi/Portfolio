import React from 'react'
import "./Contact.css"
import Mail_icon from '../../assets/mail.png'
import phone from '../../assets/phone.png'
import location from '../../assets/location.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1f62a363-23a4-48fa-9b8e-83ad307afd9e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let{"'s"} talk</h1>
                <p></p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        <img src={Mail_icon} alt=''/> <p>asangikanethmini@gmail.com</p>

                    </div>
                    <div className='contact-detail'>
                        <img src={phone} alt=''/> <p>+94123123908</p>
                    </div>
                    <div className='contact-detail'>
                        <img src={location} alt=''/><p>no:109, jjjdkdk, dnjvkdmdmv</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit}className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name'/>
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder='Enter your Email' name='name'/>
                <label htmlFor=''>Writr your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                <button type='submit' className='contact-submit'>Submit now</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact