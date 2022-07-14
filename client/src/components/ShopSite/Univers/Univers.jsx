import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useSelector,useDispatch } from 'react-redux';
import './Univers.scss'
function Univers() {
    let [AllCategories,setAllCategories]=useState([])
  useEffect(()=>{
    const getAllCat=async()=>{
      try {
        const res=await axios.get('/api/SubCategory')
        // res.data
        setAllCategories(res.data)
      } catch {
        
      }
    }
    getAllCat()
  },[])
  console.log("AllCategories",AllCategories)
  return (
    <div className='AllContainer'>
        
        <div className="Titre">
            <span className='T_Bold txt_bleu'>Nos Univers</span>
        </div>
        <div className="AllCat">        {
            AllCategories.map(cat=> <div className="Catcontainer">
                <div className="headDiv">
                    <h4>{cat.SubCat_name}</h4>
                   <span className='headright'>Tout voir</span>
                </div>
                
                    <ul className="bottomDiv">
                        {cat.Category.map(el=><li><Link class='' to={`/${cat.SubCat_name}/${el.name}`}>{el.name}</Link></li>)}
                    
                    </ul>
                </div>
                )
        }
        </div>

    </div>
  )
}

export default Univers