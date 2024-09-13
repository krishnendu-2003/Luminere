import React from 'react';
import './Home.css'
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

        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
        </div>
  );
}

export default Home;
