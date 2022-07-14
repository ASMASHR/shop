import React ,{useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar'
import './CategoriesList.scss'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { get_all_Categories } from '../../js/Actions/CategorieAction'
import CategorieCard from './CategorieCard/CategorieCard'

function CategoriesList() {
    let dispatch=useDispatch()
useEffect(()=>{
  dispatch(get_all_Categories())
  // dispatch(get_all_Marques())
},[])
  const handleDelete = (id) => {
  };
 let getCategories=useSelector(state=>state.categories)
let {isLoading,error,categories}=getCategories
console.log(categories)

  return (
    <div className="categoriesList">

  <Sidebar/>
  { isLoading? <h3>Loading</h3>:
  <div className="left">
      <Link to="/NewCategorie">
          <button className="productAddButton">Create</button>
      </Link>
      {categories.map(el=><CategorieCard categorie={el}/>)}
    </div>}
    </div>
  )
}

export default CategoriesList