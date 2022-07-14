import React from 'react'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CategoryIcon from '@mui/icons-material/Category';
import CampaignIcon from '@mui/icons-material/Campaign';
import './Engagement.scss'
function Engagement() {
  return (
    <div className='EngagementsContainer'>
    <p>  Nos Engagements </p>
    <div className="eng">
        <div className="Bottomcontainer">
            <LocalShippingIcon style={{marginBottom:"5px",fontSize:"45px"}}/>
            Livraison offerte dés 100DT
        </div>    

        <div className="Bottomcontainer">
            <ThumbUpOffAltIcon style={{marginBottom:"5px",fontSize:"45px"}}/>
            Satistfait ou remboursé
        </div>    
        <div className="Bottomcontainer">
            <CategoryIcon style={{marginBottom:"5px",fontSize:"45px"}}/>
           10 000 produits en stock
        </div>    
        <div className="Bottomcontainer">
            <CampaignIcon style={{marginBottom:"5px",fontSize:"45px"}}/>
            Des promotions exclusives
        </div>    
      
    </div> 

    </div>
  )
}

export default Engagement