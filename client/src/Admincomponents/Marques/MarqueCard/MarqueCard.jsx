import React from 'react'
import './MarqueCard.scss'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
function CategorieCard({Marque}) {
  return (
    <div className='ProdContainer'>
        <p className='ProdName'>{Marque.MarqueName}</p>
        {/* <p>{categorie.CategorieName}</p> */}
        {/* <p>{categorie.marque.marqueName}</p> */}
    <button><Link to='/Categorie'><EditIcon/></Link> </button>
    </div>
  )
}

export default CategorieCard