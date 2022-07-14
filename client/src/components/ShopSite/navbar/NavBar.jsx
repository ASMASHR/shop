import React, { useState,useEffect } from 'react'
import './NavBar.scss'
import { Link, useHistory } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import {logout} from '../../../js/Actions/AuthAction'
import { get_productsByCategorie } from '../../../js/Actions/ProductAction';
import {get_all_Categories, get_categorie_Info} from '../../../js/Actions/CategorieAction'
import Topbar from '../../../Admincomponents/topbar/Topbar'
function NavBar({Show,setShow,menuOpen,setMenuOpen,PrixTotal}) {
    let history=useHistory()
 let dispatch=useDispatch()
   let Cart=useSelector(state=>state.Cart)
  let {cartItems}=Cart
  let [isClicked,setisClicked]=useState(true)
  let [StdClicked,setStdClicked]=useState(false)
  let Papetrieboutton=()=>{
      setisClicked(true)
    //   setStdClicked(false)
  }
  let studioboutton=()=>{
    //   setStdClicked(true)
      setisClicked(false)
      
  }
  let  getCartCount=()=>{
      return cartItems.reduce((qty,item)=>item.qty+qty,0)
  }
//  useEffect(()=>{

//   dispatch(get_all_Categories())
// },[])

const isAuth = useSelector(state => state.Authentication.isAuth);
const role = useSelector(state => state.Authentication.role)
const user = useSelector(state => state.Authentication.user)

let getcategories=useSelector(state=>state.categories)
let {categories}=getcategories
const LogOut=()=>{
 dispatch(logout())
}
const link=(cat)=>{
let CategorieId=cat._id
history.push(`/librairie/${CategorieId}`)
dispatch(get_productsByCategorie(CategorieId))
dispatch(get_categorie_Info(CategorieId))
}

    return (
        <div className={"navbar " + (menuOpen && "active") }>

            <div className="wrapperNav">
    {/* <img src="assets/lib.png" alt="" className='logoLib' /> */}
   
          {((isAuth===true)&&(role==="Client") )? (

            <div className='userNav' >
                <div className="logoLib">
                <Link to="/librairie">
                        <div className="nameS">Salim Laibrairie</div> 
                        <div className="firstLine">
                            <div className="cercle"></div>
                            <div className="line"></div> 
                            <div className="cercle"></div> 
                        </div>
                        <div className="secLine">
                            <div className="cercle"></div>
                            <div className="line"></div> 
                            <div className="cercle"></div>
                        </div>
                </Link>
                </div>
            <div className='centerdiv'>
                <input type="text" className='searchName' placeholder='chercher un produit'/>
                <button className='searchButton' ><SearchIcon style={{fontSize: "30px"}}/></button>
            </div>
            <div className='itemContainer'> 
                        
                        <div className="Contact">
                            <Link to="/ContactUs">Contact</Link>
                        </div>
                        <div className="Welcom">
                            {/* <p>Bienvenue {user.firstName}</p> */}
                            <div className="secColm">
                                <Link to="/Dashboard">Mon Compte</Link>
                            </div>
                        </div>
                        <div className="Panier">
                            <Link to="/MonPanier">
                                <ShoppingCartIcon style={{fontSize:"27px"}}/>Panier 
                                <div className="nbProduct">{getCartCount()}</div> 
                                </Link>
                           
                            
                        </div>
                        <div className="fermer">
                          <Link to="/" onClick={LogOut}>  
                          <LogoutIcon />
                         Déconnexion</Link>
                       </div>
                      {/* Welcom name    moncompte contact panier */}
            </div>

            </div>
        
          ) :((isAuth===true)&&(role==="Administrator") )? 
            (<Topbar/>
            // <div className="AdminNav" >
            //    <div className="logoLib">
            //     <Link to="/librairie">
            //             <div className="nameS">Salim Laibrairie</div> 
            //             <div className="firstLine">
            //                 <div className="cercle"></div>
            //                 <div className="line"></div> 
            //                 <div className="cercle"></div> 
            //             </div>
            //             <div className="secLine">
            //                 <div className="cercle"></div>
            //                 <div className="line"></div> 
            //                 <div className="cercle"></div>
            //             </div>
            //     </Link>
            //     </div>
            //     <div className="AdminItems">
                
            //             <div className="Welcom">
            //                 <Link to="/DashboardAdmin"className="nav-item">Tableau du bord</Link>
            //             </div>
                        
            //             <div className="clientDiv">
            //                 <Link to="/Clients"className="nav-item">Gérer Clients</Link>
            //             </div>
                        
            //             <div className="ProductDiv">
            //                 <Link to="/Products"className="nav-item">Gérer Produits</Link>
            //             </div>
            //             <div className="CommandDiv">
            //                 <Link to="/Products"className="nav-item">Gérer Commandes</Link>
            //             </div>
            //             <div className="fermer">
            //               <Link to="/" onClick={LogOut}>  
            //               <LogoutIcon />
            //              Déconnexion</Link>
            //         </div>
            //     </div>
            // </div>
            )
          :
          ( 
          <div className="homeNav">
         <div className="topContainer">   
         <div className="logoLib">
                <Link to="/librairie">

                </Link>
                </div>
            <div className='centerdiv'>
                <input type="text" className='searchName' placeholder='chercher un produit'/>
                <button className='searchButton' ><SearchIcon style={{fontSize: "30px"}}/></button>
            </div>
            <div className='itemContainer'> 
                        
                        <div className="Contact">
                            <Link to="/ContactUs">Contact</Link>
                        </div>
                        <div className="Login">
                            <Link to="/Login">Connexion</Link>
                            <Link to="/Register">Créer Compte</Link>
                        </div>
                        <div className="Panier">
                            <Link to="/MonPanier">
                                <ShoppingCartIcon style={{fontSize:"27px"}}/>Panier 
                                <div className="nbProduct">{getCartCount()}</div> 
                                </Link>
                           
                            
                        </div>
                        
            </div>
            </div>
            <div className="LinkContainer">
  <Link className={"Link " + (isClicked && "Linkactive") } to="/" onClick={Papetrieboutton}><button >Papetrie</button></Link>
  <Link to="/Studio"className={"Link " + (!isClicked && "Linkactive") }onClick={()=>setisClicked(false)} ><button > Studio</button></Link>
  </div>
            </div>
          )}
            </div>
          {/* <ul>
      {categories.map(cat=><li><button onClick={()=>link(cat)}>{cat.CategorieName}</button></li>)}
  </ul> */}
  
        </div>
    )

        {/* <div className="wrapperNav">
            <div className="left">
                <Link to="/" className='logo' >Fournitures.tn </Link>
                
                    <div className='centerdiv'>
                        <select name="categorie" id="categorie-select">
                            <option value="">toutes les categories</option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                        <input type="text" className='searchName' placeholder='chercher un produit'/>
                        <button className='searchButton'><SearchIcon/></button>
                    </div>
                <div className='itemContainer'> 
                        <div className="iconContainer">
                            <Link to="/Login"><PersonIcon style={{fontSize:"35px"}}/></Link>
                        </div>
                        <div className="iconContainer">
                            <Link to="/"><FavoriteIcon style={{fontSize:"35px"}}/></Link>
                        </div>
                        <div className="iconContainer">
                            <Link to="/MonPanier"><ShoppingCartIcon style={{fontSize:"35px"}}/>
                        </Link>
                    {/* <div className="shopping">
                    {CartContent.length>1?<p className='nbProduct'>{CartContent.length} Produits</p>: <p className='nbProduct'>{CartContent.length} Produit</p>}
                     <p className='Prix'>{PrixTotal} dt</p> 
                </div>  
                </div>
                
                
                </div>            
            </div>
            {/* <div className="right">
                <div className='burg' onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='Line1'></span>
                    <span className='Line2'></span>
                    <span className='Line3'></span>
                </div>
            </div> 
        </div> */}
        
            {/* <div className="categorieDiv">
                <ul>
                {
                    categorie.map(el=><li key={`cat${categorie.indexOf(el)}`}onClick={()=>setShow(!Show)}> {el} <ArrowDropDownIcon/></li>)
                }
                </ul>
            </div> */}
   
}

export default NavBar
