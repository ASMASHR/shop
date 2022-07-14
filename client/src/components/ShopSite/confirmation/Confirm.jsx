import React, {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import axios from 'axios';
import './confirm.scss'
import { Delet_Card_Items } from '../../../js/Actions/CartAction';
function Confirm() {
      var url = window.location.pathname;
  var  CmdRef = url.substring(url.lastIndexOf('/') + 1);
    let dispatch=useDispatch()
    console.log("CmdRef",CmdRef)
    useEffect(async()=>{
            const res=await axios.put('/api/Orders/ConfirmCommande',{CmdRef})
            dispatch( Delet_Card_Items())
  },[])
  return (
    <div className='confirmContainer'>
      merci  pour la confirmation! nous allons vous contacter pour 
        <Link to="/Login">Connectez vous </Link>pour consulter l'historique de vos commandes
        <Link to="/">poursuivre l'achats </Link>
    </div>
  )
}

export default Confirm