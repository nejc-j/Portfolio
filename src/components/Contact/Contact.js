import React, { useState, useEffect } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State to hold the success message

  useEffect(() => {
    emailjs.init('BEaNfrNlazw5icgMG');
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('contact_service', 'contact_form', e.target).then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Message sent successfully!'); // Set the success message
        setFormData({ user_name: '', user_email: '', message: '' }); // Clear the form
        setTimeout(() => {
          setSuccessMessage(''); // Clear the success message after 5 seconds
        }, 5000);
      },
      (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message, please try again.');
      }
    );
  };

  return (
    <section id='contact' className='contact'>
      <div className='contact-header'>
        <svg
          width='100'
          height='100'
          viewBox='0 0 280 280'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='title-icon title-icon-left'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M89.6705 180.33L37 233L46.8995 242.9L99.57 190.229L140.178 230.837L180.608 190.407L233.312 243.112L243.212 233.212L190.507 180.508L231.484 139.531L190.876 98.9234L243.111 46.6875L233.212 36.788L180.976 89.0239L140.389 48.4364L99.4125 89.4125L47 37L37.1005 46.8995L89.513 99.312L49.083 139.742L89.6705 180.33ZM99.57 170.43L130.1 139.9L99.4125 109.212L68.882 139.742L99.57 170.43ZM109.312 99.312L140.389 68.2354L171.077 98.9234L140 130L109.312 99.312ZM180.976 108.823L149.899 139.9L180.608 170.608L211.685 139.531L180.976 108.823ZM170.708 180.508L140 149.799L109.469 180.33L140.178 211.038L170.708 180.508Z'
            fill='#8C8C73'
          />
        </svg>

        <h1 className='section-title'>CONTACT ME</h1>
        <svg
          width='100'
          height='100'
          viewBox='0 0 280 280'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='title-icon title-icon-right'
        >
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M89.6705 180.33L37 233L46.8995 242.9L99.57 190.229L140.178 230.837L180.608 190.407L233.312 243.112L243.212 233.212L190.507 180.508L231.484 139.531L190.876 98.9234L243.111 46.6875L233.212 36.788L180.976 89.0239L140.389 48.4364L99.4125 89.4125L47 37L37.1005 46.8995L89.513 99.312L49.083 139.742L89.6705 180.33ZM99.57 170.43L130.1 139.9L99.4125 109.212L68.882 139.742L99.57 170.43ZM109.312 99.312L140.389 68.2354L171.077 98.9234L140 130L109.312 99.312ZM180.976 108.823L149.899 139.9L180.608 170.608L211.685 139.531L180.976 108.823ZM170.708 180.508L140 149.799L109.469 180.33L140.178 211.038L170.708 180.508Z'
            fill='#8C8C73'
          />
        </svg>
      </div>
      <div className='contact-body'>
        <form
          id='contact-form'
          className='contact-form'
          onSubmit={handleSubmit}
        >
          <input type='hidden' name='contact_number' value='697483' />
          <h1>
            Have an awesome idea?
            <br /> Let's bring it to <span>life.</span>
          </h1>
          <p>
            I am looking for freelance opportunities or a fulltime software
            developer position where my work will be impactful.
          </p>
          <div className='input-group'>
            <input
              type='text'
              name='user_name'
              placeholder='Your name'
              value={formData.user_name}
              onChange={handleChange}
              required
            />
            <input
              type='email'
              name='user_email'
              placeholder='Your email'
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name='message'
            placeholder='Your message'
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className='form-action'>
            <button type='submit'>Send Message</button>
            {successMessage && (
              <p className='success-message'>{successMessage}</p>
            )}{' '}
          </div>{' '}
        </form>
        <div className='contact-info'>
          <div className='contact-details'>
            <h2>Contact Details</h2>
            <p>
              <img
                src='/icons/mail.jpg'
                alt='Email Icon'
                className='contact-icon'
              />
              jernej.jakop3@gmail.com
            </p>
          </div>
          <div className='socials'>
            <h2>Socials</h2>
            <p className='github-padding'>
              <img
                src='/icons/github.png'
                alt='Github Icon'
                className='contact-icon'
              />
              <a
                href='https://github.com/nejc-j'
                target='_blank'
                rel='noopener noreferrer'
              >
                GitHub
              </a>{' '}
            </p>
            <p>
              <img
                src='/icons/linkedin.jpg'
                alt='Linkedin Icon'
                className='contact-icon'
              />
              <a
                href='https://www.linkedin.com/in/jernej-jakop-16651a29a/'
                target='_blank'
                rel='noopener noreferrer'
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className='location'>
            <h2>Location</h2>
            <p>
              <img
                src='/icons/location.jpg'
                alt='Location Icon'
                className='contact-icon'
              />
              Ljubljana, Slovenia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
