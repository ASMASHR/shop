import React, { useState, useEffect } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import axios from 'axios';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector,useDispatch } from 'react-redux';
import Topbar from '../../Admincomponents/topbar/Topbar';


function Navbar({menuOpen,setMenuOpen,PanierOpen,setPanierOpen}) {
  let dispatch=useDispatch()
  const isAuth = useSelector(state => state.Authentication.isAuth);
const role = useSelector(state => state.Authentication.role)
  let [isClicked,setisClicked]=useState(true)
  let Cart=useSelector(state=>state.Cart)
  let {cartItems}=Cart

 let [AllCategories,setAllCategories]=useState([])
  useEffect(()=>{
    const getAllCat=async()=>{
      try {
        const res=await axios.get('/api/SubCategory')
        
        setAllCategories(res.data)
      } catch {
        
      }
    }
    getAllCat()
  },[])


  let  getCartCount=()=>{
      return cartItems.reduce((qty,item)=>item.qty+qty,0)
  }
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };


  let  getTotalPrice=()=>{
      return cartItems.reduce((price,item)=>(item.qty*item.price)+price,0)
  }
  let Commander=()=>{

//history.push('/librairie/Confirmation')
  }
  return (
    <>{((isAuth===true)&&(role==="Administrator") )? 
            <Topbar/>:
      <nav className='navbarContainer'>
        <div className={"navbarTopcontainer " + (menuOpen && "active") }>
          <Link to='/' className='Logo' onClick={closeMobileMenu}>
            Salim STD
          </Link>
          <div className='SearchboxInput'>
              <input type="text" className="" name="search" placeholder='chercher un produit'/>
              <button className='clickSearch' ><SearchIcon style={{fontSize: "30px"}}/></button>
          </div>
          <div className="leftDiv">
              
              <div class="dropdown">
                 
                    <div className='IconLink' >
                      <PersonOutlineIcon style={{fontSize:"40px", color:"white"}} />
                      
                      <p>Mon Compte <ArrowDropDownIcon/></p> 
                </div>
                <div class="dropdown-content">
                  <Link to="/Login" className='Conx_Insc'>Connexion</Link>
                  <Link to="/Register" className='Conx_Insc'>Inscription</Link>
                  
                
                  </div>
              
              </div>
              <div className="Panier dropdown" > 
                    <div className='IconLink' >
                        <ShoppingCartIcon style={{fontSize:"40px", color:"white"}}/>
                        <div className="nbProduct">{getCartCount()}</div> 
                        <p>{getTotalPrice()} dt  <ArrowDropDownIcon/></p> 
                    </div>
                    <div class="dropdown-content"style={{minHeight: "80px", lineHeight: "15px",width:" 240px",left:"0px"}}>
                        <div className="PanierContainerDiv">
                              {cartItems.length>0?
                              <div className="AllItmsContainer" >
                                

                                  {cartItems.map(el=>
                                  <Link to={`/AcheterProduit/${el.product}`} className='PanierItem'>
                                        <img src={`assets/${el.imgURL}`}/>	
                                        <div>{el.qty}</div>
                                        <div>{el.price*el.qty} dt</div>
                                  </Link>)}
                                
                                
                              </div>:
                              <h3>le panier est vide</h3>}
                            
                            <Link to="/MonPanier" className='VoirPanier' style={{color: "white"}}>Voir Mon Panier</Link> 
                        </div>
                    </div>
          </div>
          </div>  
          <div className="right">
                <div className='burg' onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='Line1'></span>
                    <span className='Line2'></span>
                    <span className='Line3'></span>
                </div>
            </div>
        </div>  
      
      
        <div className="bottomNav">
            
              <div className="papietrie">
            
              <ul>  
                {AllCategories.map(cat=><li className='pad_1 txt_Maj txt_Bold txt_Gr txt_14 dropbtn H_100 dropdown' >
                  <span>
                    {cat.SubCat_name}
                  </span>

                  <div class="dropdown-content">
                    {cat.Category.map(el=><Link className='txt_Maj pad_1 txt_Bold W_100 dropbtn' to={`/${cat.SubCat_name}/${el.name}/Produits`}>{el.name}</Link>
                  
                    )}

                    </div>
                  
                </li>)}
            
                
              </ul>
            </div>
        <div className="Studio">

        <ul>
                  <li className='pad_1 txt_Maj txt_Bold txt_Gr txt_14 dropbtn H_100 dropdown'>
                  Notre Studio
                
                  <div class="dropdown-content">
                    <a href="/OurNetwork" className='txt_Maj pad_1 txt_Bold W_100 dropbtn'>Our Network</a>
                    
                    </div>

                  
                  </li>
                  <li className='pad_1 txt_Maj txt_Bold txt_Gr txt_14 dropbtn H_100 dropdown'>
                       
                            PhotoBooks
                            <div class="dropdown-content">
                              
                              </div>
                  </li>
        </ul>
        </div>
    </div>
     
          <div className='Searchbox'>
              <input type="text" className="" name="search" placeholder='chercher un produit'/>
              <button className='clickSearch' ><SearchIcon style={{fontSize: "30px"}}/></button>
          </div>
      </nav>
    }</>
  );
}

export default Navbar;
