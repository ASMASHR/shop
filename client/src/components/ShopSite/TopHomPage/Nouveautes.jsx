import React,{useState,useEffect} from 'react';
import {Carousel} from 'react-bootstrap'
import './Nouveautes.scss'
import axios from 'axios';
import {Link} from 'react-router-dom'
function Nouveautes() {
  let [Nouv,setNouv]=useState([])
// 
 useEffect(()=>{
    const getNouv=async()=>{
      try {
        const res= await axios.get("/api/topPromos/LastPromo")
        
        
        console.log(res.data)
        setNouv(res.data)
      } catch {
        
      }
    }
    getNouv()
  },[])
  return (   
    <div className="NouvCont">
<Carousel fade>
  {Nouv.map(el=>
  <Carousel.Item>
    <Link to={`/${el.PromoName}`}>
    <img
      className="d-block"
      src={el.PromoAffich}
      alt={el.PromoName}
    />
  </Link>
  </Carousel.Item>
  )
 }
</Carousel>
</div>
)}
export default Nouveautes;
