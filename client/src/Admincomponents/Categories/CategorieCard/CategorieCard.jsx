import React from 'react'
import './CategorieCard.scss'
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';
function CategorieCard({categorie}) {
  return (
    <div className='ProdContainer'>
        <p className='ProdName'>{categorie.CategorieName}</p>
        {/* <p>{categorie.CategorieName}</p> */}
        {/* <p>{categorie.marque.marqueName}</p> */}
    <button><Link to='/Categorie'><EditIcon/></Link> </button>
    </div>
  )
}

export default CategorieCard