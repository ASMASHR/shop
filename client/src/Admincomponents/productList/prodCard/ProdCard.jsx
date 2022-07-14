import React, {useState, useEffect} from 'react';
import './ProdCard.scss'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
import {useDispatch,useSelector}from 'react-redux'
import { Delete_product } from '../../../js/Actions/ProductAction';
function ProdCard({produit}) {
 let dispatch=useDispatch()
  let DeleteProduct=(e)=>{
     e.preventDefault()
      dispatch(Delete_product(produit._id))
  }
  
  return (
    <div className='ProdContainer'>
      <img src={`assets/${produit.ProductImg}`} alt="" />
        <p className='ProdName'>{produit.ProductName}</p>
        <p>{produit.categorie.CategorieName}</p>
        {/* <p>{produit.marque.marqueName}</p> */}
    <button><Link to='/Product'><EditIcon/></Link> </button>
    <button onClick={DeleteProduct}>Delete</button>
    </div>
  )
}

export default ProdCard