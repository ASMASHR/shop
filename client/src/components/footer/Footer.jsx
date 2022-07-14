import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from '@mui/icons-material/Email';
function Footer() {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="Toprow">
          <div className="footerCol logo-description-container">
            <img
              className="footer-logo"
              src="assets/logo.png"
              alt="Std logo"
            />
          </div>
          <div className="footerCol">
            <h4>Notre Studio</h4>
            <div>
              <ul className="unList">
                  <li className="footerItem"><Link className="FooterLink" to="/">
                Nous Connaître
                </Link></li>
              
                  <li className="footerItem"> <Link className="FooterLink" to="/">Recrutement</Link></li>
              
              </ul>
            </div>
          </div>

        

          <div className="footerCol">
            <h4>BESOIN D'AIDE ?</h4>
            <ul className="unList">
            
                <li className="footerItem"><Link className="FooterLink" to="/contact">
                      Guide d'achat fournitures de bureau
                </Link></li>
                <li className="footerItem"><Link className="FooterLink" to="/contact">
                      Devis fournitures de bureau
                </Link></li>
          
         
            </ul>
          </div>
          <div className="footerCol">
            <h4>Nous Contacter</h4>
            <div>
              <ul className="unList">
                
                  <li className="footerItem">
                    <PhoneIcon style={{fontSize:"30px",color:"black"}}/>
                   <div className="IconInfo"> <p>55 55 55 55</p> 
                    </div>
                  </li>
                
                
                  <li className="footerItem">
                    <EmailIcon style={{fontSize:"30px",color:"black"}}/>
                    <div className="IconInfo">
                     <Link>Ecrivez-nous  </Link>
                    </div>
                </li>
                
              </ul>
            </div>
          </div>

        </div>
        <div className="ContactInfo">
            <h4>Nous Contacter</h4>
            
              <ul className="unList">
                
                  <li className="footerItem">
                    <PhoneIcon style={{fontSize:"30px",color:"black"}}/>
                   <div className="IconInfo"> <p>55 55 55 55</p> 
                    </div>
                  </li>
                
                
                  <li className="footerItem">
                    <EmailIcon style={{fontSize:"30px",color:"black"}}/>
                    <div className="IconInfo">
                     <Link>Ecrivez-nous  </Link>
                    </div>
                </li>
                
              </ul>
          </div>
            <div className="resSosciaux">
           <p>Retrouvez-nous sur :</p>
           <div className="resCont">
           <Link to="/" className="socialLink">
                <FacebookIcon style={{fontSize: "35px"}}/>
            </Link>
              <Link to="/" className="socialLink">
                <InstagramIcon style={{fontSize: "35px"}}/>
              </Link>
              <Link to="/" className="socialLink">
                <YouTubeIcon style={{fontSize: "35px"}}/>
              </Link>
            </div>
            </div>  
        <small className="copyright">
          Studio Salim © 2022 All rights reserved.
        </small>
      </div>
    </div>
  );
}

export default Footer;
