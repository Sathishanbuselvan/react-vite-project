import './Footer.css'
import map_img from '../assets/HILmr.webp'
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
    return (
        <>
            <div className='map-img'>
                <img src={map_img} alt="dcc" />
            </div>

            <div className='footer'>
                <div className="about">
                    <span className='footer-container'>  ABOUT US</span>
                    <p> Lorem ipsum  adipisicing elit. Pariatur ad reiciendis aliquam eius dolorum debitis odit obcaecati laborum exercitationem soluta aperiam explicabo vitae fuga excepturi vero, ullam cupiditate velit quam?
                    </p>
                </div>

                <div className="contact">
                    <span className='footer-container'>CANTACT INFO</span>

                    <p><LocationOnIcon /> 1234 Altschul Los Angeles, CA 10027-0000</p>
                    <p><CallIcon />  +1 987 654 3210</p>
                    <div className='mail'>
                        <span><EmailIcon /></span>
                        <p ><u>admin@main.com</u></p>
                    </div>

                </div>

                <div className="open-hrs">
                    <span className='footer-container'>OPENING HOURS</span>
                    <p>MONDAY-THURSDAY</p>
                    <span>10:00 AM - 11:00 PM</span>
                    <br></br>
                    <p>FRIDAY - SUNDAY</p>
                    <span>12:00 AM - 3:00 AM</span>

                </div >

                {/* <div className="foot-corner">
                    <div className='E-line'></div>
                    <p>© 2021 Touché. All rights reserved.</p>
                    </div> */}

            </div>









        </>
    )
}

export default Footer