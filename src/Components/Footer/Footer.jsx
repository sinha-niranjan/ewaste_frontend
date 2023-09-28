import React from 'react'
import "./Footer.css"
import logo from "../../assets/backgroun removed/heroic_logo.png"
import { Link } from 'react-router-dom'

// import { AiOutlineInstagram } from "react-icons/ai";
// import { AiOutlineFacebook } from "react-icons/ai";
// import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <>
        <footer>
       <div className="row">
           <div className="col">
               <img src={logo} alt='logo' className="footer_logo" />
               <p className="footer_about">Join us in our mission to create a cleaner and more sustainable future by responsibly managing e-waste. Schedule your e-waste pickup today and be a part of the positive change!
               </p>
           </div>
           <div className="col">
               <h3>Office <div className="bottom_line"><span></span></div></h3>
               <p>Bhagalpur College of Engineering</p>
               <p>Bhagalpur</p>
               <p>Bihar, 813210, India</p>
               <p className="footer_email">ewastelocator@gamil.com</p>
               <h4>+91 - 9798494885</h4>
           </div>
           <div className="col">
               <h3>Links <div className="bottom_line"><span></span></div></h3>
               <ul>
                   <li><Link href="#">HOME</Link></li>
                   <li><Link href="#">ABOUT</Link></li>
                   <li><Link href="#">SERVICE</Link></li>
                   <li><Link href="#">CONTACT US</Link></li>
               </ul>
           </div>
           <div className="col">
               <h3>Newsletter<div className="bottom_line"><span></span></div></h3>
               <form>
                   <ion-icon className="icon" name="mail"></ion-icon>
                   <input type="email" placeholder="Enter your email" required />
                   <button type="submit"><ion-icon className="icon_right" name="arrow-round-forward"></ion-icon></button>
               </form>
               <div className="social_icons">
                   <ion-icon className="social_icon" name="logo-facebook"></ion-icon>
                   <ion-icon className="social_icon" name="logo-whatsapp"></ion-icon>
                   <ion-icon className="social_icon" name="logo-twitter"></ion-icon>
                   <ion-icon className="social_icon" name="logo-instagram"></ion-icon>
               </div>
           </div>
       </div>
       <hr />
       <p className="copyright">E-waste Locator Ⓒ 2023 - All Rights Reserved</p>
    </footer> 
</>
  )
}

export default Footer