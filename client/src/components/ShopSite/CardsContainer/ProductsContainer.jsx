import React from 'react'
import ProductCard from '../CardProduit/ProductCard'
import './ProductsContainer.scss'
function ProductsContainer({products}) {
  return (
    <div className='ProductsContainer'>
        
     {   products.map(el=><ProductCard  produit={el}/>)}
   
    </div>
  )
}

export default ProductsContainer