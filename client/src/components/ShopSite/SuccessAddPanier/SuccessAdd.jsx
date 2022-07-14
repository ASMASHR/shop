import React,{useEffect} from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function SuccessAdd({produitAchete}) {
  
    useEffect(()=>{
   if(Object.keys(produitAchete).length === 0)
   
  history.push("/")
  },[])
  let history=useHistory()
  let Cart=useSelector(state=>state.Cart)
  let {cartItems}=Cart
let Confirmer=()=>{
  history.push("/MonPanier")
}
let continuer=()=>{
  history.push("/")
}
let  getTotalPrice=()=>{
      return cartItems.reduce((price,item)=>(item.qty*item.price)+price,0)
  }
    return (
        <div className=' M_5 Pad_0 w_80 H500 fadeInDown BG_SH1' >
            <div className="Container_fx Items_C Pad_5 JC_SB txt_White BG_Green H4 W_100">
                <div className="M_Lt5 T_Bold JC_SE Container_fx Items_C">
                  <DoneIcon className='M_RT_50'  style={{fontSize:"35px"}}/>
                  <span> Produit ajouté au panier avec succes </span>
                </div> 
                <Link to="/" className='txt_White M_RT_5'><CloseIcon style={{fontSize:"35px"}}/></Link> 
            </div>
              <div className='Container_fx H300 M_T_1'>
                <div className="Container_fx M_RT_15 w_50 Border_R Pad_5 H_12">
                    <img src={`/assets/${produitAchete.ProductImg}`} className="W_202 H_202 M_RT_15"/> 
                    <div className=" Container_fx_Col M_RT_15">
                      <span className="txt_16 txt_Maj txt_Bold txt_gray M_B_10">{produitAchete.name}</span> 
                      {produitAchete.Promo==0?<span className="txt_Bold M_B_10 txt_red">{produitAchete.Price} TND</span>:<span className="txt_Bold M_B_10 txt_red">{(produitAchete.Price-(produitAchete.Promo*produitAchete.Price/100))} TND</span>}
                            
                    <div className='Container_fx M_B_10'>
                      {produitAchete.qty===1?<span className="txt_16 M_RT_5">Quantité:</span>:<span className="txt_14 M_RT_5">Quantités:</span>}
                      <span className="txt_Bold ">{produitAchete.qty}</span> 
                    </div>
                    
                    {produitAchete.qty>1?<div className='Container_fx '><span className="txt_14 M_RT_5 ">Total:</span>{produitAchete.Promo==0?<span className="txt_Bold M_B_10 txt_red">{produitAchete.qty*produitAchete.Price} TND</span>:<span className="txt_Bold M_B_10 txt_red">{produitAchete.qty*(produitAchete.Price-(produitAchete.Promo*produitAchete.Price/100))} TND</span>}
                    </div>:<div></div>}
                    
                  </div>
                </div>
                <div className=" Container_fx_Col pad_1  w_50">
                    {cartItems.length>1?<span className='M_B_10 txt_Bold txt_17 M_T_1'>Il y a {cartItems.length} produits dans votre panier.</span>
                  :<span className='txt_Bold M_B_1 txt_17 M_T_1 M_B_15'>Il y a {cartItems.length} produit dans votre panier.</span>
                  }
                  <div className="Container_fx JC_SB Items_C">
                    <span className=' txt_Bold M_B_1 txt_14 M_T_1'>Sous Total :</span>
                    <span className="txt_Bold txt_14">{getTotalPrice()} TND</span>
                  </div>
                  <div className="Container_fx JC_SB Items_C">
                    <span className=' txt_Bold M_B_1 txt_14 M_T_1'>Transport :</span>
                    {(getTotalPrice()<200)?<span className="txt_Bold txt_14">10 TND</span>:<span className='txt_Bold txt_14'> gratuit</span>}
                  </div>
                    <div className="Container_fx JC_SB Items_C BG_G pad_5">
                    <span className=' txt_Bold M_B_1 txt_14 M_T_1 '>Total TTC :</span>
                    {(getTotalPrice()<200)?<span className="txt_Bold txt_14">{getTotalPrice()+10} TND</span>:<span className='txt_Bold txt_14'> {getTotalPrice()} TND</span>}
                  </div>
                    
                    <div className="Container_fx M_T_1 JC_SE Items_C">
                        <Link className=' W300' to="/"><ArrowBackIcon style={{fontSize:"20px"}}/> <span  className='M_LT_5'>Continuer mes achats</span> </Link>
                        <button className=' btGreen ' onClick={Confirmer}> <DoneIcon className=''  style={{fontSize:"20px"}}/><span className='M_LT_5'>Voir mon Panier</span> </button>
                    </div>
                </div>
            </div>
          
          
        </div>

    )
}

export default SuccessAdd