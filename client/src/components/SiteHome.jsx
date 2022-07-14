import React from 'react';
import {Link} from 'react-router-dom'
import './SiteHome.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';
function SiteHome() {
  return <div className='SiteHomeContainer'>
      <div className="homeTop">
        <div className="homeLogo">
            <img src="assets/LogoSalim.png" alt="logo"/> 
           </div>
        <div className="contact">
            <span className="number">
              <LocalPhoneIcon/> 
              <span className="Add">71 741 385
              </span>
            </span>
            <span className="mail">
              <AlternateEmailIcon/>
             <span className="Add">photocopiesalim@gmail.com</span> 
            </span>
            <span className="address">
            <BusinessIcon/> 
            <span className="Add">La Marsa Rue 15
            </span> 
            </span>
        </div>
        <div className="socialMedia">
          <div className="fb"><FacebookIcon style={{color:"#4267B2",borderRadius:"50%",fontSize:"30px"}}/></div>
          <div className="insta"><InstagramIcon style={{color:"#cd486b",borderRadius:"50%",fontSize:"30px"}}/></div>
        </div>
      </div>
      <div className="middle">
           
          
             <button className='Librarie'> <Link to="/librairie" target="_blank">Librairie</Link></button>
              <button className='Librarie'><Link to="/Studio">photographe</Link></button>
              
      </div>
    
  </div>;
}

export default SiteHome;
