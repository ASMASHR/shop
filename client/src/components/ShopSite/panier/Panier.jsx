import React from 'react';
import './Panier.scss';
import { Link, useHistory } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector,useDispatch } from 'react-redux';
import { RemoveFromCard,AddToCard } from '../../../js/Actions/CartAction';
import NavBar from '../navbar/NavBar';
function Panier({}) {
 let history= useHistory()
  let dispatch=useDispatch()
  let Cart=useSelector(state=>state.Cart)
  let {cartItems}=Cart
  let user=useSelector(state=>state.Authentication.user)
console.log("z",cartItems)
      let HandleMoins=(el)=>{
        if(el.qty>0)
        dispatch(AddToCard(el.product,(el.qty-1)))
    }
   let EditItemCard=(e,el)=>{
     console.log("el",el)
     let i=el.product
     console.log("eeee",document.getElementById(i).value)
     el.qty++
     document.getElementById(i).value = e.target.value;
    
        // dispatch(AddToCard(el.product,(e.target.value)))

    }
let  getTotalPrice=()=>{
      return cartItems.reduce((price,item)=>(item.qty*item.price)+price,0)
  }
  let Commander=()=>{

history.push('/Confirmation')
  }
  return <div className='PanierContainer BG_gray pad_2'>
  {cartItems.length>0?
  <div className="Container_fx pad_1">
    <div className="Details">
        <span className='bMainTitle'>Détail de votre panier <span className='txt_gray'>({cartItems.length} articles)</span></span>
    <div className='Container_fx_Col '>
    {cartItems.map(el=> <div className='M_20 pad_20 Container_fx Border_R3 BG_White W800 JC_SB'>
            <img src={`assets/${el.imgURL}`} className="H10 W10"/>
            <div className="Container_fx_Col pad_3">
              <div className="Container_fx JC_SB W600 ">
                 <span className='bProductLineDescTitle'> {el.name}</span>
                <span className='bProductLinePrice'>{el.price} dt</span>	
            </div>
            <span className='bProductLineDescStock'>En Stock</span> 
            {/*   <span className='bProductEpuise'>En Stock</span> */}
            	<div className="Container_fx flex_End Items_C">            
              <span className='bDeleteProduct' onClick={()=>dispatch(RemoveFromCard(el.product))}>Supprimer</span>
              <input id={el.product}  type="number" min={1} className="Nb_Items" value={el.qty} onChange={(e)=>EditItemCard(e,el)}/>
            
              </div>
        </div>

        </div>
        )}
    </div>
    </div>
    <div className="W_320 Container_fx_Col">
      <span className='bMainTitle'>Récapitulatif</span>
      <div className="bSummaryPriceBloc Container_fx_Col Items_C ">
      <div className="Container_fx JC_SE Items_End M_B_1 W_90">
            <p className='bSummaryPriceLabel'>Total: </p>
            <span className="bSummaryPrice">{getTotalPrice()} dt</span>
      </div>
            {/* <Link to="/">Poursuivre mes Achats</Link>  */}
            <button onClick={Commander} className="btGreen">Passer ma Commande</button>  
    </div>
    </div>
    
      
  </div>:
  <h3>le panier est vide</h3>}
   
  </div>;
}

export default Panier;
