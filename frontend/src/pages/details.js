import React from 'react';
import logo from '../assets/Lum_nereLogo1.png';
import './details.css';



function Details() {
return(
    <div>
        <div className='Home-s4'>
            <div className='Home-s4-p1'>
                <div className='Home-s4-p1-left'>
                    <div className='Home-s4-p1-left-001'>
                        <h4>GET IN TOUCH</h4>
                    </div>
                    <div className='Home-s4-p1-left-002'>
                        <a href='mailto:info@mysite.com' className='email-link'>
                        <img src={require('../assets/Mail.png')} alt='location' className='Home-s4-p1-left-002-img'/>
                        <h4 className='Home-s4-p1-left-002-h4'>info@mysite.com</h4>
                        </a>
                    </div>
                    <div  className='Home-s4-p1-left-003'>
                        <img src={require('../assets/Location.png')} alt='location'/>
                        <h4>address</h4>
                    </div>
                </div>
                <div className='Home-s4-p1-right'>
                    <img src={logo} alt='Luminere logo'/>  
                    <p>We're always curious about the next <br/> problem we can tackle or a new <br/> challenge we can embrace. So we'd love <br/> to hear from you. Send us a message or <br/> give us a call to see how we can help <br/> you.</p>
                </div>

            </div>

        </div>
    </div>
);

}
export default Details;