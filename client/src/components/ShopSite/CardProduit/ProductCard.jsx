import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import {Link } from 'react-router-dom';
import { get_product_Info } from '../../../js/Actions/ProductAction';

import { useDispatch} from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReactStars from "react-rating-stars-component";
function ProductCard({produit}) {
    let [clicked,setclicked]=useState(false)
    let  dispatch = useDispatch()
    let addTofavourite=(e)=>{  
setclicked(!clicked)
    }
let RatingValue=()=>{
    
   let x=produit.rate.map(item => item.rating).reduce((prev, curr) => prev + curr, 0);
//    console.log((x/produit.rate.length).toFixed(2))
     return((x/produit.rate.length).toFixed(2))
// console.log(sumall);
    //  return rate.reduce((rating,item)=>(item.rating)+price,0)
     
}
  return  <div className='Container_fx_Col Card' key={produit._id}>
                    <div className="Container_fx Pos_R JC_Center"> 
                    {produit.Promo!==0?<div className="Promoss">{produit.Promo} %</div>:<div></div>} 
                    <img src={`/assets/${produit.ProductImg}`} className='W_202 H_202'/>
                    </div>
                    <div className="Container_fx_Col">
                        <Link to="/" className='txt_14 Pad_5 txt_gray '>categorie</Link>
                        <Link to={`/AcheterProduit/${produit._id}`} onClick={()=>dispatch(get_product_Info(produit._id))}><p className='txt_16 txt_red txt_B H_4 txt_link'>{produit.ProductName}</p></Link>
                        <div className="Container_fx Items_C">
                            {/* <FavoriteIcon className={"addFavourite " + (clicked && "active") } onClick={()=>addTofavourite()} /> */}
                            <ReactStars count={5} edit={false} isHalf={true}value={produit.TotalRate} size={24}activeColor="#ffd700" /> ({produit.rate.length})
                        </div>{/* onChange={ratingChanged} */}
                        <div className="Container_fx JC_SB Items_C">
                            {produit.Promo===0?
                                        <div className="Container_fx">
                                        <span className='hideFromPro price priceColor jsPrice txt_25 txt_B M_Rt_1'>
                                            {produit.Price}
                                            <span className='sup'>dt</span>
                                        </span>
                                        </div>
                                        : 
                                        <div className="Container_fx_Col">
                                          <div className="Container_fx Items_End">
                                        <span className='hideFromPro price priceColor txt_25 txt_B jsPrice M_Rt_1'>
                                            {(produit.Price-(produit.Promo*produit.Price/100))}
                                            <span className='sup'>dt</span>
                                        </span>
                                        <span className=' hideFromPro stroken jsStroken Bg_Barre'>{produit.Price} dt</span>
                                        </div>
                                        <span className='ecoBlk txt_14'> ({produit.Promo} %) d'economie</span>
                                        </div>
                                        }</div>
                    </div>
               
               </div>;
}

export default ProductCard;
