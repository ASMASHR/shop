import React, {useState, useEffect} from 'react';
import { useHistory,Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ReactStars from "react-rating-stars-component";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { get_product_Info } from '../../../js/Actions/ProductAction';
import {AddToCard} from '../../../js/Actions/CartAction'
import ProduitsSimilaires from './MemeCategorie/ProduitsSimilaires';
import ProduitsComplementaires from './ProduitsComplementaires/ProduitsComplementaires';

function ProduiInfo({produitAchete,setproduitAchete}) {
    const [Quantities,setQuantities]=useState(1)
    const history=useHistory()
    let  dispatch = useDispatch()
    let ProductDetails=useSelector(state=>state.Product)
    let {product,isLoading,error}=ProductDetails
    let {id} = useParams();
    useEffect(()=>{
        dispatch(get_product_Info(id))
},[])

    const acheterProduit=(e)=>{
       e.preventDefault()
        let id=product._id
        let qty=Quantities
        dispatch(AddToCard(id,qty))
      let  updatedValue = {qty:Quantities}
   setproduitAchete({...produitAchete, ...product,...updatedValue})
   history.push("/ProduitAjoute")
    }

    let [clicked,setclicked]=useState(false)
    let addTofavourite=(e)=>{
        
setclicked(!clicked)
    }
let CalculatePrix=()=>{

return(product.Promo===0?product.Price*Quantities:((product.Price-(product.Promo*product.Price/100))*Quantities))
 
}
  return <div className='InfoContainer wrapper fadeInDown BG_gray '>
    
    {isLoading?<h4>Loading...</h4>:error?<h4>{error}</h4>:
    <div className="Container_fx_Col Items_C ">
            <div className='Container_fx W_90 M_1 InfoC'>
                    <div className="W500 Pos_Rel">
                        <img src={`/assets/${product.ProductImg}`} className="w_70 H_70"/>
                        <FavoriteIcon style={{fontSize: "37px"}} className={"addFavourite " + (clicked && "active") } onClick={()=>addTofavourite()}  /> 
                    {/* MarqueImg */}
                        <img src={`/assets/${product.marque.MarqueImg}`} className="w_4 H_4 Mq_Img"/>
                    
                    </div>
                    <div className="Container_fx_Col  M_1 W700 ">
                        <h1 className="N_Prod">{product.ProductName}</h1> 
                        
                        <div className="Container_fx  Items_C w_70">
                            <ReactStars classNames="M_RT_5" count={5} size={24}activeColor="#ffd700" value={product.TotalRate}/> <span  className="txt_gray txt_14 txt_B">(2 avis)</span>
                        </div>
                        <p className='fpStock'>En stock ! Déjà 9 commandes en cours!</p>
                        {/* sinon  {product.NbStock===0?<p className='Epuise'>Stock épuisé!</p>
                        */}
                        {/* onChange={ratingChanged}*/}
                        <p className="prod_Desc"> {product.Description}</p> 
                       
                        {/* {product.marque.MarqueName} */}
        
                            <div class="fpShipping">
                                <div id="fpShippingCustomer" class="fpShippingCustomer jsFpShippingCustomer">Livraison :
                                </div>
                               
                                <div class="fpShippingMessage Container_fx Items_C">
                                    <LocationOnIcon/>
                                    <div class="fpShippingText">Livré en point retraité</div>
                                    <div class="fpShippingDesc">dès demain</div>
                                    <ul>
                                
                                    <li class="dropdown">
                                       <Link className='o-icon-i js-trigger__tooltip'> i</Link>
                                    <div className="TooltipShippingMessage dropdown-content M_T_0">Retrouvez le détail des modes et frais de livraison proposés</div>
                                    </li>
                                    </ul>
                                </div>
                                <div class="fpShippingMessage Container_fx">
                                    <HomeIcon/>
                                    <div class="fpShippingText">Livré chez vous</div>
                                    <div class="fpShippingDesc">dès aprés-demain</div>
                                    <ul>
                                        <li class="dropdown M_T_0">
                                            <Link className='o-icon-i js-trigger__tooltip'> i</Link>
                                            <div className="TooltipShippingMessage dropdown-content M_T_0">Retrouvez le détail des modes et frais de livraison proposés</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                       
                    </div>
                    <div className='fTopPrice'>
                         {product.Promo===0?
                                        <div className="Container_fx">
                                        <span className='hideFromPro price priceColor jsPrice bg_Price M_Rt_1'>
                                            {product.Price}
                                            <span className='sup'>dt</span>
                                        </span>
                                        </div>
                                        : 
                                        <div className="Container_fx_Col">
                                          <div className="Container_fx Items_End">
                                        <span className='hideFromPro price priceColor jsPrice bg_Price M_Rt_1'>
                                            {(product.Price-(product.Promo*product.Price/100))}
                                            <span className='sup'>dt</span>
                                        </span>
                                        <span className=' hideFromPro stroken jsStroken Bg_Barre M_B_1'>{product.Price} dt</span>
                                        </div>
                                        <span className='ecoBlk txt_18'> ({product.Promo} %) d'economie</span>
                                        </div>
                                        }
                                        
                                 
                        <div className="Container_fx Items_C Pad_5">
                            <span className='txt_12 M_RT_5'>Quantité: </span>
                            <input  className='Border_N' type="number" min={1} value={Quantities} onChange={e=>setQuantities(e.target.value)}  />
                            
                           </div>
                           <div className="Container_fx Items_C ">
                                <span className=' txt_12 M_RT_5'>Prix Total:</span>
                                <span className='txt_B txt_20 txt_red'>{CalculatePrix()}<span className='sup txt_16'>dt</span></span>
                            </div>
                            <button className='AddPanier 'onClick={acheterProduit}>
                                <ShoppingCartIcon/> 
                                <span> Ajouter au Panier</span>
                            </button>
                    </div>
            </div>
            <ProduitsSimilaires/>
            <ProduitsComplementaires/>
            </div>
            }
            
            

  </div>;
}

export default ProduiInfo;
