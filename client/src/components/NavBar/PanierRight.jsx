import React ,{ useState, useEffect } from 'react';

import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
function PanierRight({PanierOpen,setPanierOpen}) {
      let Cart=useSelector(state=>state.Cart)
  let {cartItems}=Cart

  return (
    <div  className={'menu ' + (PanierOpen && "active")}>
        <div class="">
                        <div className="PanierContainerDiv">
                              {cartItems.length>0?
                              <div className="AllItmsContainer" >
                                

                                  {cartItems.map(el=>
                                  <Link to={`/AcheterProduit/${el.product}`} className='PanierItem'>
                                        <img src={`assets/${el.imgURL}`}/>	
                                        <div>{el.qty}</div>
                                        <div>{el.price*el.qty} dt</div>
                                  </Link>)}
                                
                                
                              </div>:
                              <h3>le panier est vide</h3>}
                            
                            <Link onClick={()=>setPanierOpen(false)} to="/MonPanier" className='VoirPanier' style={{color: "white"}}>Voir Mon Panier</Link> 
                        </div>
                    </div>
    </div>
  )
}

export default PanierRight