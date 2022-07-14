import React from 'react'
import PromotionCard from './PromotionCard/PromotionCard'

function CarouselItem({Products}) {
    console.log("Products",Products)
  return (
    <div className='Container_fx'>{
        Products.map(el=><PromotionCard produit={el}/>
            )}</div>
  )
}

export default CarouselItem