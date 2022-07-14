import React ,{useEffect} from 'react'
import Sidebar from '../sidebar/Sidebar'
import './MarquesList.scss'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import MarqueCard from './MarqueCard/MarqueCard'
import { get_all_Marques } from '../../js/Actions/MarquesAction'

function MarquesList() {
    let dispatch=useDispatch()
useEffect(()=>{
  dispatch(get_all_Marques())
  
},[])
  const handleDelete = (id) => {
  };
 let getMarques=useSelector(state=>state.Marques)
let {isLoading,error,Marques}=getMarques


  return (
    <div className="categoriesList">

  <Sidebar/>
  { isLoading? <h3>Loading</h3>:
  <div className="left">
      <Link to="/NewMarque">
          <button className="productAddButton">Create</button>
      </Link>
      {Marques.map(el=><MarqueCard Marque={el}/>)}
    </div>}
    </div>
  )
}

export default MarquesList