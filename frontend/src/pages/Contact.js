import React, { useRef } from 'react';
import './Contact.css';
import Details from './details';

function Contact() {
  // Create a ref for the enquiry form container
  const enquiryFormRef = useRef(null);

  // Function to scroll to the enquiry form container
  const scrollToForm = () => {
    if (enquiryFormRef.current) {
      enquiryFormRef.current.scrollIntoView({ behavior: 'smooth' });
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
          <form>
            <div className='form-row'>
              <div className='form-group side-by-side'>
                <input type='text' placeholder='First Name' required />
                <span className='underline'></span>
              </div>
              <div className='form-group side-by-side'>
                <input type='text' placeholder='Last Name' required />
                <span className='underline'></span>
              </div>
            </div>

            <div className='form-group full-width'>
              <input type='Email' placeholder='Email' required />
              <span className='underline'></span>
            </div>

            <div className='form-group full-width'>
              <textarea placeholder='Your Message' rows='4' required></textarea>
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
