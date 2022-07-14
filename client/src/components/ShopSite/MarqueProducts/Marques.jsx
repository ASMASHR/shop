
import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Marques() {
  let [NosMarques,setNosMarques]=useState([])

 useEffect(()=>{
    const getMarques=async()=>{
      try {
        const res= await axios.get("/api/Marques/")
        setNosMarques(res.data)
      } catch {
        
      }
    }
    getMarques()
  },[])
  return <div className='Container_fx_Col w_80 M_T2 '>
    <div className="Titre">
     <span className='T_Bold txt_bleu'>Nos Marques</span>
     </div>
     <div className="Container_fx JC_Center Flex_W">
    {
      NosMarques.map(mar=><Link to={`/${mar.MarqueName}/Produits`} className="M_2 Pad_5"><img src={`/assets/${mar.MarqueImg}`} className="W_6 H_6" alt={mar.MarqueName} /></Link>)
    }
    </div>
  </div>;
}

export default Marques;
