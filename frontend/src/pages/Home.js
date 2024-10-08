import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
// import logo from '../assets/Lum_nereLogo1.png';
import logo1 from '../assets/h-s1-img.png';
import logo2 from '../assets/h4b-logo.png';
import logo3 from '../assets/mnzi-logo.png';
import logo4 from '../assets/gfg-logo.png';
import logo5 from '../assets/dised-logo.png';
import Details from './details';

function Home() {

    const handleClick = () => {
        console.log('Button clicked!');
      };

  return (
    <div className='Main-Container'> {/* Main container, will contain the black color */}
        <div className='Home-s1'>
        <h2 className='Home-s1-alpha'>WE DON'T JUST MANAGE <br/> FEEDS, WE CRAFT <br/> OBSESSIONS.</h2>
        <Link to="/contact">
        <button className='button-s1' onClick={handleClick}><p>Let's Collaborate</p></button>
        </Link>
        </div>
        
        <div>
        <div className='Home-s2'>
            <div className='Home-s2-p1'>
                    <div className='Home-s2-p1-5'>
                    <p>This is the space to introduce visitors to the <br/> business or brand. Briefly explain who's behind <br/> it, what it does and what makes it unique. Share <br/> its core values and what this site has to offer. </p>
                    <img src={logo1} alt='Luminere logo'/>  
                    </div>
                    <div>
                    <Link to="/about" className='learn-about'>
                        <p className='learn-about-p'>Learn More About Us</p>
                    </Link>
                    </div>    
            </div>         
            <div className='Home-s2-p2'>
                <p>Among Our Client</p>
            </div>
            <div className='Home-s2-p3'>
                <h1>
                PROUD TO WORK WITH
                </h1>
            </div>
            <div className='Home-s2-p4-logo'> {/* Collaborators pictures */}
                <img src={logo2} alt="Hack4Bengal Logo"/>
                <img src={logo3} alt="Merchanzi Logo"/>
                <img src={logo4} alt="GFG SNU Chapter"/>
                <img src={logo5} alt="Dised Logo"/>
            </div>

        </div>
        </div>

        <div className='Home-s3'>
            <div className='Home-s3-p1'>
                <p>Testimonials</p>
            </div>
            <div className='Home-s3-p2'>
                <h1>STRAIGHT FROM FEED</h1>
            </div>
            <div className='Home-s3-p3'>
            <div className='Home-s3-p3-hook'>
                <img src={require('../assets/arrow-left.png')} alt='left arrow '/>
            </div>
            <div className='Home-s3-p3-okp'>
                <p>“Share something positive a past client has <br/> said and encourage potential clients to get <br/> onboard...”</p>
            </div>
            <div className='Home-s3-p3-hook'>
            <img src={require('../assets/arrow-right.png')} alt='right arrow'/>
            </div>
        </div>
        </div>
        
        {/*Details.js page will go here*/}
        <Details/>

        </div>
  );
}

export default Home;
