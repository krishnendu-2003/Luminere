import React from 'react';
import './Home.css';
import logo1 from '../assets/h-s1-img.png';
function Home() {

    const handleClick = () => {
        // Do something when the button is clicked
        console.log('Button clicked!');
      };

  return (
    <div className='Main-Container'> {/* Main container, will contain the black color */}
        <div className='Home-s1'>
        <h2 className='Home-s1-alpha'>WE DON'T JUST MANAGE <br/> FEEDS, WE CRAFT <br/> OBSESSIONS.</h2>
        <button className='button-s1' onClick={handleClick}><p>Let's Collaborate</p></button>
        </div>
        
        <div>
        <div className='Home-s2'>
                <div className='Home-s2-p1'>
                    <p>This is the space to introduce visitors to the <br/> business or brand. Briefly explain who's behind <br/> it, what it does and what makes it unique. Share <br/> its core values and what this site has to offer. </p>
                    <img src={logo1}/>
                </div>
            
            <div>
                <p>Learn More About Us</p>
            </div>
            <div> 
                {/* Will contain the blank space */}
            </div>
            <div>
                <p>Among Our Client</p>
            </div>
            <div>
                <h3>
                PROUD TO WORK WITH
                </h3>
            </div>
            <div> {/* Collaborators pictures */}
                
            </div>

        </div>
        </div>
        <div>

        </div>
        <div>

        </div>
        </div>
  );
}

export default Home;
