import "./productList.css";

import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Sidebar from "../sidebar/Sidebar";
import { get_all_products } from "../../js/Actions/ProductAction";
import { useDispatch } from "react-redux";
import ProdCard from "./prodCard/ProdCard";
export default function ProductList() {
  let dispatch=useDispatch()
useEffect(()=>{
  dispatch(get_all_products())
  // dispatch(get_all_Marques())
},[])
  const handleDelete = (id) => {
  };
 let getproducts=useSelector(state=>state.Products)
let {isLoading,error,products}=getproducts


  return (
    <div className="productList">
  <Sidebar/>
  <div className="left">
    <div className="Prodtop">
      <Link>Categories</Link>
      <Link>Marques</Link>
      <Link to="/AjouterProduit">
          <button className="productAddButton">Create</button>
        </Link>
      {/* <Link to="/AjouterProduit">Ajouter Produit</Link> */}
    </div>
    <div className="Prodbottom">
    {
      products.map(el=><ProdCard produit={el}/>)
    }
    </div>
    </div>
    </div>
  );
}
