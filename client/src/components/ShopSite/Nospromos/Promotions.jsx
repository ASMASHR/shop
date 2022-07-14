import React, { useState,useEffect} from 'react';
import './Promotions.scss'
import axios from 'axios';
import ProductCard from '../CardProduit/ProductCard';
import {Carousel} from 'react-bootstrap'
function Promotions() {
let [ProductPromo,setProductPromo]=useState([])
 useEffect(()=>{
    const getPromo=async()=>{
      try {
        const res= await axios.get("/api/Products/PromosProducts")
      
        setProductPromo(res.data)
      } catch {
        
      }
    }
    getPromo()
  },[])
  return <div className='W_45 Container_fx_Col BG_SH1 Br Border_RDS Items_C '>
   <div className="Titre">
    <span className='T_Bold txt_bleu'>Produits en promotion</span>
   </div>
    {ProductPromo!==undefined?
   <div className="Container_fx">
     <Carousel indicators={false}>
  {ProductPromo.map((prod)=>
  
  <Carousel.Item>
  <ProductCard produit={prod}/>
  </Carousel.Item>
  

    )}
    </Carousel>
    </div>
:<h1>isloading</h1>}
 
    </div> 
;
}

export default Promotions;
