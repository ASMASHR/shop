import React,{useState} from 'react'
import './AddCategorie.scss'
import Sidebar from '../../sidebar/Sidebar'
import {useSelector,useDispatch} from 'react-redux'
import { Add_Categorie } from '../../../js/Actions/CategorieAction'

function AddCategorie() {
  let dispatch=useDispatch()
   let [newCategorie,setNewCategorie]=useState({
   CategorieName:""
      
    } )
    let handleChange = (e) =>setNewCategorie({ ...newCategorie, [e.target.name]: e.target.value })
  let addCategorie=(e)=>{
   
e.preventDefault()
    dispatch(Add_Categorie(newCategorie))
  }
  return (
        <div className="categoriesList">

  <Sidebar/>
  
  <div className="left">
     {/* CategorieName */}
     <div className="inputContainer">
                  <p>Categorie</p> 
                    <input type="text" name="CategorieName" onChange={handleChange} id="" />
        </div>
        <button onClick={addCategorie}>Add</button>
    </div>
    </div>
  )
}

export default AddCategorie