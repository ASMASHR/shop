import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';

import axios from 'axios'
import ReactStars from "react-rating-stars-component";

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ProduisRecommandes() {
  let [Produits,setProduits]=useState([])

 useEffect(()=>{
    
    const getProduits=async()=>{
      try {
        const res= await axios.get(`/api/Products/`)
         setProduits(res.data)
      
      } catch {
        
      }
    }
    getProduits()
  },[])
  const [currentSlide,setCurrentSlide]= useState(0)
const handelClick=(way)=>{
    // let nb=Math.floor(Produits.length/7)
 (way==="left")?setCurrentSlide(currentSlide>0?currentSlide-1:0):setCurrentSlide(currentSlide<2?currentSlide+1:0)

}

  return (
    <div className='allC'>
        <div className="Titre">
          
     <span className='T_Bold'>Susceptible de vous intéresser</span> 
        </div>
        <div className="carouAnimcoContainer">
            <div className="carouAnimco ">
                <div className="crLast jsPrev " >
                        <ArrowBackIosNewIcon style={{fontSize:"40px", marginTop:"2vw"}} onClick={()=>handelClick("left")}/>
                </div> 
                <div className="crNext " >
                            <ArrowForwardIosIcon style={{fontSize:"40px", marginTop:"2vw"}} onClick={()=>handelClick()}/>
                </div>
                <div className="carousell noSel jsSwCarousel "style={{transform:`translateX(-${currentSlide*100}vh)`}} >
                   
                            <ul className='jsUl crSUl'>
                                {Produits.map(el=><li className='cPdtItem jsPdtItem Container_fx_Col Items_C'>
                                   
                                   <img src={`/assets/${el.ProductImg}`} alt="" className='cPdtItImg'/>
                                    {/* <p className='cPdtItMecaco'>{el.categorie.name}</p> */}
                                    <div className="Container_fx_Col ">
                                        <span className='cPdtItTit'>{el.ProductName}</span>
                                        <div className="cPdtItStar Container_fx Items_C">
                                        <ReactStars edit={false} isHalf={true} count={5} size={20}activeColor="#ffd700"value={el.TotalRate} />
                                        <span>({el.rate.length})</span> 
                                        </div>
                                        {el.Promo===0?
                                        <div className="Container_fx Items_End">
                                        <span className='hideFromPro price priceColor jsPrice'>
                                            {el.Price}
                                            <span className='sup'>dt</span>
                                        </span>
                                        </div>
                                        : 
                                        <div className="Container_fx_Col">
                                          <div className="Container_fx Items_End">
                                        <span className='hideFromPro price priceColor jsPrice'>
                                            {(el.Price-(el.Promo*el.Price/100))}
                                            <span className='sup'>dt</span>
                                        </span>
                                        <span className=' hideFromPro stroken jsStroken'>{el.Price} dt</span>
                                        </div>
                                        <span className='ecoBlk'> ({el.Promo} %) d'economie</span>
                                        </div>
                                        }
                                        
                                    </div>  
                                            
                                    </li>)
                            }</ul>
                        </div> 
                
                
            </div>
        </div>
    </div>
  )
}

export default ProduisRecommandes