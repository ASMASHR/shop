import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import "./CardProd.scss"
import ReactStars from "react-rating-stars-component";

import {AddToCard} from '../../../js/Actions/CartAction'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProdCard2({produit,produitAchete,setproduitAchete}) {
    const history=useHistory()
    let  dispatch = useDispatch()
      const [Quantities,setQuantities]=useState(1)
        let HandleMoins=()=>{
        if (Quantities>1)
        setQuantities(Quantities-1)
    }
   let handlePlus=()=>{
        setQuantities(Quantities+1)
    }
       const acheterProduit=(produit)=>{
        // history.push("/MonPanier")
      
        let id=produit._id
        let qty=Quantities
        dispatch(AddToCard(id,qty))
      let  updatedValue = {qty:Quantities}
   setproduitAchete({...produitAchete, ...produit,...updatedValue})
   history.push("/ProduitAjoute")
    }
  return (
    <div className='Container_fx_Col Card2 M_1 Items_C'>
        <img src={`/assets/${produit.ProductImg}`} className="H_202 W_202" alt="" />
        <div className="Container_fx_Col flex_Start W_100">
            <span  className="txt_gray ">{produit.categorie.name}</span>
            <span className="txt_Bold H_4 Container_fx Items_C"> 
                {produit.ProductName}
            </span>
             <ReactStars edit={false} isHalf={true}value={produit.TotalRate}  count={5} size={24}activeColor="#ffd700"/> 
                <div className="Container_fx Items_C ">
                        <span className='txt_grix'>à partir de: </span>
                        {produit.Promo==0?<span className='txt_Bold txt_23'>{produit.Price} dt </span>:
                        <div className='Container_fx Items_C'><span className=' txt_grix txt_16 txt_Bare '>{produit.Price} dt</span><span className='txt_Bold txt_23 txt_red'>{(produit.Price-(produit.Promo*produit.Price/100))} dt </span></div>
                        }
                        
                    </div>
                    <div className="Container_fx Items_C">
                            <span className='txt_grix pad_5'>Quantité: </span>
                            <div className="Container_fx  Items_C H35">
                                    <button className='btn_W25 H_28'  onClick={HandleMoins}>-</button>
                                    <input   type="text" value={Quantities}  />
                                    <button className='btn_W25 H_28' onClick={handlePlus}>+</button>
                            </div>
                    </div>

                    <Link className='AddPanier' onClick={()=>acheterProduit(produit)}>
                        <ShoppingCartIcon/> 
                        <span className='M_LT_5'> Ajouter au Panier</span>
                    </Link>          
            
            
        </div>
    </div>
  )
}

export default ProdCard2