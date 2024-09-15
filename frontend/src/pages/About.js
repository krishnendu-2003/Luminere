import React from 'react';
import './About.css'

function About() {
  return (
    <div className='Main-container'>
      <div className='About-s1'>
        <img src={require('../assets/crayon-welcome.png')} alt='Welcome img'/>
      </div>
      <div className='About-s1-p1'>
              <h3>SEEKING POWERFUL STORYTELLING? WE'RE THE <br/> BEST CHOICE.</h3>
        <p className='About-s1-p'>This is the space to introduce visitors to the business or <br/> brand. Briefly explain who's behind it, what it does and what <br/> makes it unique. Share its core values and what this site has to <br/> offer.</p>
        <button><p>Read More</p></button>
      </div>
      <div className='About-s2'>
        <div className='About-s2-p1'>
          <h2>OUR VALUES</h2>
        </div>
        <div className='About-s2-container'>
        <div>
        <h4>PASSION</h4>
        <p>We're obsessed with creating <br/> exceptional social media <br/> experiences.</p>
        </div>
        <div>
        <h4>INNOVATION</h4>
        <p>We embrace new trends and <br/> technologies to stay ahead of <br/> the curve.</p>
        </div>
        <div>
        <h4>COLLABOTATION</h4>
        <p>We believe in the power of <br/> team-work and partnership.</p>
        </div>
        <div>
        <h4>RESULTS</h4>
        <p>Our clients' success is out <br/> ultimate measure of success.</p>
        </div>
        <div>
        <h4>AUTHENTICITY</h4>
        <p>We value genuine connections <br/> and honest communication.</p>
        </div>
        <div>
        <h4>EMPATHY</h4>
        <p>We understand your world</p>
        </div>
       
        </div>
      </div>
    </div>
  );
}

export default About;
