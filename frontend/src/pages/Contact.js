import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <div className='Contact-Container'>
      <div className='Contact-s1'>
        <div className='Contact-s1-p1'>
          <h2>Let's Do <br/><span className='Contact-s1-p1-highlight'> Something Interesting</span></h2>
          
        </div>
        <div>
          <div className='Contact-s1-p2'>
            <img src={require('../assets/Line.png')} alt='Line'/>
            <p>Discuss your project and see how we can turn <br/>
            it into an amazing experience for your <br/> customers</p>
            <button><p>Write to Us</p></button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
