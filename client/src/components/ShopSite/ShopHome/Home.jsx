import React from 'react';
import "./Home.scss";
import Marques from '../MarqueProducts/Marques';
import Nouveautes from '../TopHomPage/Nouveautes';
import Promotions from '../Nospromos/Promotions';
import ArticleNouvContainer from '../NouvContainer/ArticleNouvContainer';
import Engagement from '../Engagement/Engagement';
import Univers from '../Univers/Univers';
import VenteFlash from '../VenteFlash/VenteFlash';
import ProduisRecommandes from '../VenteRecommande/ProduisRecommandes'
function Home() {

return <div className='Container_fx_Col JC_Center Items_C'>

           <Nouveautes />
           
          <div className="fx_W_Col W_90 JC_SB M_T_1">
                  <Promotions />
                  <ArticleNouvContainer/> 
            </div>
           <VenteFlash/>
              <Univers/> 
            <ProduisRecommandes/>
            <Marques/> 
            <Engagement/> 
      </div>

}

export default Home;
