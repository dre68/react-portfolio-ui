import React from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { SiMicrosoftteams } from 'react-icons/si';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactLogic from './ContactLogic';

const Contact = () => {

  const {isBtnSentMailDisabled, form, sendEmail} = ContactLogic();

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className="contact__options">    
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>contact@vaganov-it.com</h5>
            <a href='mailto:contact@vaganov-it.com' target='_blank' rel='noreferrer'>Send a message</a>
          </article>          
          <article className='contact__option'>
            <SiMicrosoftteams className='contact__option-icon'/>
            <h4>MS Teams</h4>
            <h5>andrej@vaganov-it.com</h5>
            <a href='http://teams.microsoft.com/l/chat/0/0?users=andrej@vaganov-it.com' target='_blank' rel='noreferrer'>Send a message</a>
          </article>    
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          
          <button type='submit' className='btn btn-primary' disabled={isBtnSentMailDisabled}>Send Message</button>
          <ToastContainer />
        </form>
      </div>
    </section>
  )
}

export default Contact