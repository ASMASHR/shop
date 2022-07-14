import React, {useState} from 'react'
import './RightSide.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import EmailIcon from '@mui/icons-material/Email';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import BusinessIcon from '@mui/icons-material/Business';
function RightSide() {
  let [sideOpen,setSideOpen]= useState(false)
    return (
        <div  className='RightSideBarContainer'>
           <div className='iContainer FaceC'>
              <div className="IconC"> <FacebookIcon style={{fontSize: "50px"}}/>
                </div> 
              <div className="infOC">Studio Salim</div>
            </div>
            
         
            <div className='iContainer PhonC'>
             <div className="IconC"> <LocalPhoneIcon style={{fontSize: "50px"}}/> </div>
              <div className="infOC">71 741 385</div>
              
            </div>
            <div className='iContainer GmailC'>
             <div className="IconC"> <EmailIcon style={{fontSize: "50px"}}/></div>
              <div className="infOC">photocopiesalim@gmail.com</div>
              
            </div>
            
            
             <span className="Add"></span> 
          
         
        </div>

    
    )
}

export default RightSide
