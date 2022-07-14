import React from 'react';
import { Link } from 'react-router-dom';
import './PromotionCard.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { get_product_Info } from '../../../../js/Actions/ProductAction';
import { useDispatch, useSelector } from 'react-redux';
import ReactStars from "react-rating-stars-component";

function PromotionCard({produit}) {
        let [clicked,setclicked]=useState(false)
    let  dispatch = useDispatch()
    let addTofavourite=(e)=>{
        
setclicked(!clicked)
    }

  return (
    <div className='ProdCon' key={produit._id}>
                    <div className="imgCont">
                        <img src={`/assets/${produit.ProductImg}`}/>
                    </div>
                    <div className="prodInfo">
                        <div className="Promoss">{produit.Promo} %</div> 
                        <p className='prodName'>{produit.ProductName}</p>
                        <div className="rateLove">
                            <FavoriteIcon className={"addFavourite " + (clicked && "active") } onClick={()=>addTofavourite()} />
                            <ReactStars count={5} size={24}activeColor="#ffd700"/> 
                        </div>{/* onChange={ratingChanged} */}
                        <p className='prodDescription'>{produit.Description}</p>
                        <div className="PricesContainer">
                            <p className='prodpriceBefore'>{produit.Price}dt</p>
                            <p className='prodpriceAfter'>{(produit.Price-(produit.Promo*produit.Price/100))} dt</p>
                        </div>
                        <Link to={`/AcheterProduit/${produit._id}`} className='ajouterPanierPromo' onClick={()=>dispatch(get_product_Info(produit._id))}>Ajouter au Panier</Link>                       
                    </div>
               
               </div>)
}


export default PromotionCard