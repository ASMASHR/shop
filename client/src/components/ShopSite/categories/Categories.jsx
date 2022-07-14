import React, { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import ProductsContainer from '../CardsContainer/ProductsContainer';
import './Categories.scss'
import { get_productsByCategorie } from '../../../js/Actions/ProductAction';
import {get_all_Categories, get_categorie_Info} from '../../../js/Actions/CategorieAction'
import NavBar from '../navbar/NavBar';
function CategoriesSearch() {
  let history=useHistory()
 let dispatch=useDispatch()
 let CategorieDetails=useSelector(state=>state.categorie)
    let {categorie,isLoading}=CategorieDetails
         let url = window.location.pathname;
     let CategorieId = url.substring(url.lastIndexOf('/') + 1);
 useEffect(()=>{

  dispatch(get_categorie_Info(CategorieId))
  dispatch(get_productsByCategorie(CategorieId))
},[])
 let getproducts=useSelector(state=>state.Products)
let {products}=getproducts
  return <div className='CategoriesContainer'>

{isLoading? <h4>is Loading ...</h4>:

<div className="prodContainert">
          <p className='NosProds'>{categorie.CategorieName}</p> 
  <ProductsContainer products={products} ></ProductsContainer>
</div>
}
      
  </div>;
}

export default CategoriesSearch;
