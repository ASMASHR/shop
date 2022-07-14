import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {useParams } from 'react-router-dom';
import CardProd from './ProdCard';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import GridViewIcon from '@mui/icons-material/GridView';
import ProdCard2 from './ProdCard2';
function MarqueProducts({produitAchete,setproduitAchete}) {
  let [pageContent,setpageContent]=useState([])
  let {MarqueName}=useParams()
  let [MarquProd,setMarquProd]=useState([])
  let [MarquCategories,setMarquCategories]=useState([])
  let [x,setX]=useState(false)
  let nbButt=0
let [choosed,setChoosed]=useState(1)
 useEffect(()=>{
    
    const getProduits=async()=>{
      try {
        const res= await axios.get(`/api/Products/pr/${MarqueName}`)
        const resCat=await axios.get(`/api/Products/${MarqueName}/Categories`)
        setMarquCategories(resCat.data)
        setMarquProd(res.data)
        setpageContent(res.data.slice(0,2))
      } catch {
        
      }
    }
    getProduits()
  },[])

  // changer le contenue du page =>> slice 1er indice et le dernier indice(0,2)=>tebda de 0 te9f 3and 1 
  let changeContent=(e,n)=>{
    e.preventDefault()
    if (n==1)
    setpageContent(MarquProd.slice(0,2))
    else 
    setpageContent(MarquProd.slice(n,n+2))
    setChoosed(n)
  }
// il faut mettre à jr le contenue setpageContent(MarquProd.slice(0,2)) et mettre a jr la fct des buttons
  // tri par categorie
  let changeCategorie=async(e,CategorieName)=>{
    e.preventDefault()
  if(CategorieName==="All")
  {
    let res= await axios.get(`/api/Products/pr/${MarqueName}`)
    setMarquProd(res.data)
    setpageContent(res.data.slice(0,2))

  
  }
  else{
    let res=await axios.get(`/api/Products/${MarqueName}/${CategorieName}`)
    setMarquProd(res.data)
    setpageContent(res.data.slice(0,2))
  
}
}
let [active,setActive]=useState(true)
        // setpageContent(res.data.slice(0,2))=> 0 10 
let  TrierProduits=async(choix)=>{

let res=[]
let name=MarqueName
  switch (choix) {
    // NomProduit
      case "Promotion":
         res= await axios.get(`/api/Products/QPromotion/${name}`)
        setMarquProd(res.data)

      break;
      case "PrixCroissant":
         res= await axios.get(`/api/Products/CrPrix/${MarqueName}`)
         console.log(res)
        setMarquProd(res.data)

      break;
      case "PrixDecroissant":
         res= await axios.get(`/api/Products/DecPrix/${MarqueName}`)
        setMarquProd(res.data)

      break;
      case "NomProduit":
        res= await axios.get(`/api/Products/NomProd/${MarqueName}`)
            setMarquProd(res.data)
        break
      default:
        return MarquProd
      break;
  }
} 
// get nb botton
      nbButt=MarquProd.length%2==0?MarquProd.length/2:( Math.floor(MarquProd.length/2)+1)
      let nb=Array.from({length: nbButt}, (_, i) => i + 1)
      let Get_Nb_Button=nb.map(el=><button className={'txt_B M_1 B_White txt_14 '} onClick={(e)=>changeContent(e,el)}>{el}</button>)
// +( choosed && "active")
  return (
    <div>
      {pageContent?<div className="Container_fx_Col w_100 Items_C JC_C">
        <span className='T_Bold M_1 '>Tous les produits de la marque: <span className='txt_red'> {MarqueName} </span></span> 
            
            <div className="Container_fx_Col w_80 Items_C ">
              <div className="Container_fx w_70 JC_SB pad_3 M_B_30 BG_gray Items_C pad_1  ">
                  <div className="Container_fx JC_SE w_8 ">   
                    <button  className={'Back_White '+(active && "Clicked")}  onClick={()=>{setX(false) ;setActive(true)}}>
                      <FormatListBulletedIcon className='txt_30' style={{fontSize: "35px",cursor:"pointer"}}/>
                      </button>           
                      <button className={'Back_White '+( !active && "Clicked")} onClick={()=>{setX(true) ;setActive(false)}}>
                        <GridViewIcon className='txt_25 Cur_P'  style={{fontSize: "35px", cursor:"pointer"}}/>
                      </button>  
                    
                  </div>
                  <div className="Container_fx flex_End M_Rt_1">
                    <select name="Tri" id="Tri-Produits"onChange={(e)=>{
                      let CategorieName=e.target.value
                      changeCategorie(e,CategorieName)}} className='pad_5 Border_RDS Border_N BG_GR txt_14 M_Rt_1'>
                      <option value="All">-- Tous les Produits --</option>
                      {MarquCategories.map(el=> <option value={el.name} >{el.name}</option>)}
                      
                      
                        
                    </select>
                    <select name="Tri" id="Tri-Produits" className='Border_RDS Border_N BG_GR txt_14 M_Rt_1 pad_5' onChange={(e)=>{
                      let choix=e.target.value
                      TrierProduits(choix)}}>
                        <option value="Pertinence">Pertinence</option>
                        <option value="NomProduit">Nom du Produit</option>
                        <option value="Promotion">Promotion</option>
                        <option value="PrixCroissant">Prix Croissant</option>
                        <option value="PrixDecroissant">Prix Décroissant</option>
                        <option value="TopVentes">Top des Ventes</option>
                        
                    </select>
                    <select name="Prix" id="Choix Prix"className='Border_RDS Border_N BG_GR txt_14 pad_5'>
                        <option value="PrixTTC">PrixTTC</option>
                        <option value="PrixHT">Prix HT</option>
                        
                    </select>
                  </div>
            </div>

            {x?<div className="Container_fx Flex_W">
              {MarquProd.map(el=><ProdCard2 produit={el} produitAchete={produitAchete}  setproduitAchete={setproduitAchete}/>)}</div>:
              <div className="Container_fx_Col">
              {pageContent.map(el=><CardProd produit={el}  produitAchete={produitAchete}  setproduitAchete={setproduitAchete}/>)}
            </div>}
            <div className="Container_fx JC_Center">
              {Get_Nb_Button}
            </div>
            </div>
        
      </div>:<h3>waiting</h3>}
      
    </div>
  )
}

export default MarqueProducts