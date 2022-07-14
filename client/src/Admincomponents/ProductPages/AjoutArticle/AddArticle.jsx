import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { get_all_Categories } from '../../../js/Actions/CategorieAction.js'
import { get_all_Marques } from '../../../js/Actions/MarquesAction.js'
import { Add_Product } from '../../../js/Actions/ProductAction.js'
import Sidebar from '../../sidebar/Sidebar.jsx'
import './AddArticle.scss'

function AddArticle() {
  let dispatch=useDispatch()
   useEffect(()=>{
 
     dispatch(get_all_Marques())
      dispatch(get_all_Categories())
  },[])
let getcategories=useSelector(state=>state.categories)
let getMarques=useSelector(state=>state.Marques)
let {categories,isLoading}=getcategories
console.log("first categories",categories)
let {Marques}=getMarques
console.log("first marques",Marques)
const [img, setImg] = useState("")
let Newpic = new FormData();
  Newpic.append('photo', img[0]);
 let [newArticle,setNewArticle]=useState({
   ProductImg:"",
   ProductName:"",
   categorie:"",
   marque:"",
   Price:0,
   Promo:0,
   Description:"",
   countInStock:0
      
    } )
    console.log("NewPic",Newpic.getAll)
    let handleChange = (e) =>setNewArticle({ ...newArticle, [e.target.name]: e.target.value })
    console.log("newArticle",newArticle)

let addArticle=(e)=>{
  e.preventDefault()
dispatch(Add_Product(newArticle,Newpic))
}
// parseInt

    return (
    
    <div>
      {isLoading? <h4> wait</h4>: 
      <div className="containeradd">
        <Sidebar/>
        <div className="left">
          Ajouter Produit
          <form enctype="multipart/form-data">
      <div className="inputs">
        <div className="inputContainer">
                  <p>Nom du produit</p> 
                    <input type="text" name="ProductName" onChange={handleChange} id="" />
        </div>

        <div className="inputContainer">
                  <p>Image</p> 
                    <input type="file" name="ProductImg" onChange={(e)=>setImg(e.target.files)} id="" />
        </div>
        <div className="inputContainer">
                  <p>Description du produit</p> 
                    <input type="text" name="Description" onChange={handleChange} id="" />
        </div>
        {categories?
        <div className="inputContainer">
                  <p>categorie</p> 
                  <select  id="pet-select" name="categorie"  onChange={handleChange}>
                      <option value="">--choisissez une categorie--</option>
                      {categories.map(el=><option name="categorie" value={el._id}>{el.CategorieName}</option>)}
  
</select>
        </div>:
        <div/>}
        {Marques?<div className="inputContainer">
                  <p>marque</p> 
                  <select name="marque" id="pet-select" onChange={handleChange}>
                      <option value="">--choisissez une marque--</option>
                      {Marques.map(el=><option name="marque" value={el._id} >{el.MarqueName}</option>)}
  
                  </select>
        </div>
        : <div/> }
        <div className="inputContainer">
                  <p>Prix du produit</p> 
                    <input type="text" name="Price" onChange={ (e) =>setNewArticle({ ...newArticle, Price:parseInt( e.target.value) })} id="" />
        </div>
        <div className="inputContainer">
                  <p>Promotion</p> 
                    <input type="text" name="Promo" onChange={ (e) =>setNewArticle({ ...newArticle, Promo:parseInt( e.target.value) })} id="" />
        </div>

        <div className="inputContainer">
                  <p>Quantité</p> 
                    <input type="text" name="countInStock"  onChange={ (e) =>setNewArticle({ ...newArticle, countInStock:parseInt( e.target.value) })} id="" />
        </div>
        <button onClick={addArticle}>Ajouter Produit</button>
        
      </div> 
      </form>
      </div>
    </div>}              
    </div>

  )
}

export default AddArticle