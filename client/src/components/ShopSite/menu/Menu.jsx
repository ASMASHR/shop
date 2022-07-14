import React, { useState, useEffect } from 'react';
import './menu.scss'
import { useSelector,useDispatch } from 'react-redux';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Menu({menuOpen,setMenuOpen}) {
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
    return (
        <div className={'menu ' + (menuOpen && "active")}>
          <div className="Menu_Top">
            <p>
            Menu</p>
          <CancelIcon className="CancelIcon" onClick={()=>setMenuOpen(false)}/>
          </div>
          <p></p>
                
            <ul>
                <li>

                <ul>  
                {AllCategories.map(cat=><li className='nav-item' class="dropdown">
                  <button
                    class="dropbtn"
                    className='nav-links'
                
                  >
                   {cat.SubCat_name} 
                  </button>

                  <div class="dropdown-content">
                    {cat.Category.map(el=><div><Link style={{fontSize:'15px',padding:'2px 4px'}} class='dropdown2' to={`/${cat.SubCat_name}/${el.name}`}>{el.name}</Link>
                    
                    {/* <div class="dropdown-content2">
                    <a style={{fontSize:'15px',padding:'8px 0px'}} href="/OnlineApplication">Online Application</a>
                    <a style={{fontSize:'15px',padding:'8px 0px'}} href="/SeatDistribution">Seat Distribution</a>
                    <a style={{fontSize:'15px',padding:'8px 0px'}} href="/InstituteAdmission">Institute Admission</a>
                    <a style={{fontSize:'15px',padding:'8px 0px'}} href="/Allotment">Allotment</a>
                    </div> */}
                    </div>)}

                  </div>
                  
                </li>)}
                
               {/* <li className='nav-item'class="dropdown">
                 

                  <div class="dropdown-content">
                    <a href="/Workwithclient" style={{fontSize:'15px',padding:'8px 0px'}}>Work With Client</a>
                    
                  </div>

                </li>
                <li className='nav-item'class="dropdown">
                  <Link
                    to='/Nouveaute'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Nouveautés
                  </Link>

                  <div class="dropdown-content">
                    <a href="/Workwithclient" style={{fontSize:'15px',padding:'8px 0px'}}>Work With Client</a>
                    
                  </div>

                </li>
                 <li className='nav-item'class="dropdown">
                  <Link
                    to='/clientele'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Nos Promotions
                  </Link>

                  <div class="dropdown-content">
                    <a href="/Workwithclient" style={{fontSize:'15px',padding:'8px 0px'}}>Work With Client</a>
                    
                  </div>

                </li> */}


                {/* <li className='nav-item'>
                  <Link to='/Gallery' className='nav-links' onClick={closeMobileMenu}>
                    Gallery
                  </Link>
                </li> */}

                {/* <li className='nav-item'>
                  <Link to='/Blog' className='nav-links' onClick={closeMobileMenu}>
                    Blog
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link to='/Career' className='nav-links' onClick={closeMobileMenu}>
                    Career
                  </Link>
                </li> */}

                
              </ul>
                </li>
                
                <li onClick={()=>setMenuOpen(false)}><a href="#"> contact </a></li>
            </ul>
            <p>Studio</p>
        </div>
    )
}

export default Menu
