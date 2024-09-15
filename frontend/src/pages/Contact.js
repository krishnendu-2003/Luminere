import React, { useRef, useState } from 'react';
import './Contact.css';
import Details from './details';
import axios from 'axios';


function Contact() {
  // Create a ref for the enquiry form container
  const enquiryFormRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  // Function to scroll to the enquiry form container
  const scrollToForm = () => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5001/send-email', formData);
      alert('Your message has been sent!');
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      alert('There was an error sending your message.');
    }
  };

  return (
    <div className='Main-container'>
      <div className='Contact-Container'>
        <div className='Contact-s1'>
          <div className='Contact-s1-p1'>
            <h2>Let's Do <br /><span className='Contact-s1-p1-highlight'> Something Interesting</span></h2>
          </div>
          <div className='Contact-s1-p2'>
            <div className='Contact-s1-p2-left'>
              <img src={require('../assets/Line.png')} alt='Line' />
              <p>Discuss your project and see how we can turn <br />
                it into an amazing experience for your <br /> customers</p>
              <button onClick={scrollToForm}>Write to Us</button>
            </div>
            <div className='Contact-s1-p2-right'>
              <img src={require('../assets/crayon-2073.png')} alt='pic' />
            </div>
          </div>
        </div>
      </div>

      <div className='Contact-s2'>
        <div>
          <h4>The Best is Yet to <br /> Come!</h4>
        </div>
        {/* Add ref to the enquiry-form container */}
        <div className='enquiry-form' ref={enquiryFormRef}>
          <form onSubmit={handleSubmit}>
            <div className='form-row'>
              <div className='form-group side-by-side'>
              <input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <span className='underline'></span>
              </div>
              <div className='form-group side-by-side'>
              <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <span className='underline'></span>
              </div>
            </div>

            <div className='form-group full-width'>
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <span className='underline'></span>
            </div>

            <div className='form-group full-width'>
            <textarea
                name='message'
                placeholder='Your Message'
                rows='4'
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <span className='underline'></span>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
      <Details/>
    </div>
  );
}

export default Contact;
