import React, {useState, useEffect} from 'react';
// import NavBar from './components/ShopSite/navbar/NavBar';
import Menu from './components/ShopSite/menu/Menu';
import RightSide from './components/RightSide/RightSide';
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import './App.scss'
import {useDispatch,useSelector}from 'react-redux'
import {BrowserRouter, Switch, Route }from 'react-router-dom'
import Home from './components/ShopSite/ShopHome/Home';
import Footer from './components/footer/Footer';
import SuccessAdd from './components/ShopSite/SuccessAddPanier/SuccessAdd';
import ProduiInfo from './components/ShopSite/CardProduitInfo/ProduiInfo';
import Panier from './components/ShopSite/panier/Panier';
import CategorieMenu from './components/ShopSite/CategorieMenu/CategorieMenu';
import SiteHome from './components/SiteHome';
import CategoriesSearch from './components/ShopSite/categories/Categories';
import ClientRoute from './components/Routes/ClientRoute';
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from './Admincomponents/AdminDash/AdminDashboard';
import ClientDashboard from './components/ShopSite/UserPages/ClientDash/ClientDashboard';
import { gethauthUser } from './js/Actions/AuthAction';
import ConfirmationCmd from './components/ShopSite/confirmation/ConfirmationCmd';
import StudioHome from './components/StudioPages/studioHome/StudioHome';
import Contact from './components/Contact/Contact';
import AddArticle from './Admincomponents/ProductPages/AjoutArticle/AddArticle';
import { get_all_Marques } from './js/Actions/MarquesAction';
import { get_all_Categories } from './js/Actions/CategorieAction';
import Product from './Admincomponents/product/Product';
import ProductList from './Admincomponents/productList/ProductList';
import UserList from './Admincomponents/userList/UserList';

import NewProduct from './Admincomponents/newProduct/NewProduct'
import CategoriesList from './Admincomponents/Categories/CategoriesList';
import MarquesList from './Admincomponents/Marques/MarquesList';
import AddMarque from './Admincomponents/Marques/AddMarque/AddMarque';
import AddCategorie from './Admincomponents/Categories/AddCategorie/AddCategorie';
import Confirm from './components/ShopSite/confirmation/Confirm';
import Navbar from './components/NavBar/Navbar'
import PanierRight from './components/NavBar/PanierRight';
import MarqueProducts from './components/ShopSite/MarqueProducts/MarqueProducts';
import CategorieProducts from './components/ShopSite/CategorieProducts/CategorieProducts';
import Checkout from './components/ShopSite/confirmation/Checkout';
function App() {
  let [produitAchete,setproduitAchete]=useState({})
  let [PanierOpen,setPanierOpen]=useState(false)
  let dispatch=useDispatch()
  useEffect(()=>{
    dispatch(gethauthUser())

  },[])
const [menuOpen,setMenuOpen]=useState(false)

   return (
    <BrowserRouter>

      <Navbar menuOpen ={menuOpen}setMenuOpen={setMenuOpen} PanierOpen={PanierOpen} setPanierOpen={setPanierOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <PanierRight setMenuOpen={setMenuOpen} PanierOpen={PanierOpen} setPanierOpen={setPanierOpen}/>
       {/* <RightSide/> */}
      <Switch>
{/* Admin Routes */}
        <AdminRoute exact path='/AjouterProduit' render ={()=> <AddArticle/>} />
        <AdminRoute exact path='/Product' render ={()=> <Product/>} />
        <AdminRoute exact path='/Products' render ={()=> <ProductList/>} />
        <AdminRoute exact path='/users' render ={()=> <UserList />} />
        <AdminRoute exact path='/categories' render ={()=> <CategoriesList />} />
        <AdminRoute exact path='/Marques' render ={()=> <MarquesList />} />
        <AdminRoute exact path='/NewProduct' render ={()=> <NewProduct />} />
        <AdminRoute exact path='/NewMarque' render ={()=> <AddMarque />} />
        <AdminRoute exact path='/NewCategorie' render ={()=> <AddCategorie />} />
        <AdminRoute path="/DashboardAdmin" render ={()=><AdminDashboard  /> } />

{/* Public routes */}
      <Route exact path='/ProduitAjoute' render ={()=> <SuccessAdd produitAchete={produitAchete}/>} />
      <Route exact path='/CheckOut' render ={()=> <Checkout/>} />
      <Route path="/Confirm" render={()=><Confirm/>}/>
      <Route exact path='/' render ={()=> <Home produitAchete={produitAchete}setproduitAchete={setproduitAchete}/>} />
      <Route path="/AcheterProduit/:id" render ={()=> <ProduiInfo produitAchete={produitAchete}setproduitAchete={setproduitAchete}/>}/>
      <Route path="/MonPanier" render={()=><Panier/>}/>
      <Route path="/Login" render={()=><Login/>}/>
      <Route path="/Register" render={()=><Register/>}/>
      <Route path="/Studio"render={()=><StudioHome/>}></Route>
      <Route path="/Confirmation" render={()=><ConfirmationCmd/>}/>
      <Route path="/librairie/:CategorieId" render={()=><CategoriesSearch/>}/>
      <Route path="/:MarqueName/Produits"render ={()=><MarqueProducts  produitAchete={produitAchete}  setproduitAchete={setproduitAchete} /> } />
      <Route path="/:SubCategorieName/:CategorieName/Produits"render ={()=><CategorieProducts  produitAchete={produitAchete}  setproduitAchete={setproduitAchete} /> } />
      
{/* Client Routes */}
    <ClientRoute  path="/Dashboard" render ={()=><ClientDashboard  /> } />



      </Switch>
      <Footer/> 


  {/*
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
         */}

      {/* {cat.SubCat_name}/${el.name} */}
      </BrowserRouter> );
}

export default App;
