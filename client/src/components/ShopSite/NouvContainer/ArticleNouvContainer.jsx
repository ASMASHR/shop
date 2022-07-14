import React, { useState,useEffect} from 'react';
import './ArticleNouvContainer.scss'
import { Link } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import { get_product_Info } from '../../../js/Actions/ProductAction';
import ProductCard from '../CardProduit/ProductCard'

import {Carousel} from 'react-bootstrap'
function ArticleNouvContainer() {
   let [NewArticles,setNewArticles]=useState([])
// 
const [currentSlide,setCurrentSlide]= useState(0)


 useEffect(()=>{
    const getArticles=async()=>{
      try {
        const res= await axios.get("/api/Products/LatestProducts")
        
        
        console.log(res.data)
        setNewArticles(res.data)
      } catch {
        
      }
    }
    getArticles()
  },[])
      let [clicked,setclicked]=useState(false)
    let  dispatch = useDispatch()
    let addTofavourite=(e)=>{
        
setclicked(!clicked)
    }
    const handelClick=(way)=>{
    if(way==="left")
      setCurrentSlide(currentSlide>0?currentSlide-1:4)
    else  
      setCurrentSlide(currentSlide<NewArticles.length-1?currentSlide+1:0)

}
  return (
    <div className='W_45 Container_fx_Col BG_SH1  Border_RDS Items_C'>   
    <div className="Titre">
     <span className='T_Bold'>Nouveautés</span>
   </div>
    {/* <div className="ArticlesContainer"  style={{transform:`translateX(-${currentSlide*28}vw)`,}}> */}
{NewArticles!==undefined?
   <div className="Container_fx ">
     <Carousel indicators={false}>
  {NewArticles.map((prod)=>
  
  <Carousel.Item>
  <ProductCard produit={prod}/>
  </Carousel.Item>
  

    )}
    </Carousel>
    </div>
:<h1>isloading</h1>}
  </div>
  )
}

export default ArticleNouvContainer