import { Link, Route, BrowserRouter as Router, Routes, } from "react-router-dom";
import '../web_pages/Home_pages.css'
import bgImage from "../assets/coffee-background.webp"
import Cards from "./Cards"
import Menu_option from "./Menu_option"
import Online_Reservation from "./Online_Reservation"
import Footer from "./Footer"
import Gallery from "./Gallery";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Home_pages() {

    return (
        <>

            <div className="body-data">

                <img src={bgImage} alt="background-image" />

                 {/* Navbar section */}

                <div className="content-area">

                    <div className="nav-area">

                        <div className="left-nav">
                            <span>ABOUT_US</span>
                            <span>MENU</span>
                            <span>RESERVATION</span>
                        </div>
                        <div className="center-nav">
                            <span> Touche</span>
                        </div>

                        <div className="rig-nav">
                            <span>NEWS & EVENTS</span>
                            <span>GALLERY</span>
                            <span>CONTACT</span>
                        </div>


                    </div>

                    {/* Main-content */}

                    <div className="main-content">
                        <p><span>CAFE </span>/ RESTAURANT </p>
                        <h1>Touche</h1>
                        <p>A unique cafe located in the heart of Los Always fresh coffee and <br></br> biscuits. Open for indoor dining and to-go orders.</p>

                    </div>

                    <nav className="navbar ">
                       <button><Link to="./online_Reservation">MAKE RESEVATION</Link></button> 
                    </nav>


                    <div >
                        <TwitterIcon className="icons" />
                        <FacebookIcon className="icons" />
                        <InstagramIcon className="icons" />


                    </div>

                    <div>
                        <p className="locat-icon"><LocationOnIcon className="icon-simbol" /> 1234 Altschul Los Angeles, CA 10027-0000</p>

                    </div>
                </div>


            </div>



            <div>
                <Cards />
                <Menu_option />
                <Online_Reservation />
                <Gallery />
                <Footer />
            </div>


        </>
    )

}

export default Home_pages