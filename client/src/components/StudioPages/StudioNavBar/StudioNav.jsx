import React from 'react'
import './StudioNav.scss'
import {Link} from 'react-router-dom'
function StudioNav() {
  return (
    <div className='StNavContainer'>
        <div className="stCont">
            <div className="StudioLogo">
               <h3>Logo</h3> 
            </div>
            <div className="bottom">
                <ul>
                    <li><Link>Accueil</Link> </li>
                    <li><Link>Produit</Link></li>
                    <li><Link>A propos</Link></li>
                    <li><Link>Nous Contacter</Link></li>
            </ul></div>
            
        
        </div>

        {/*  */}
    </div>
  )
}

export default StudioNav