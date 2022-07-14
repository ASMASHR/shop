import "./featuredInfo.css";
import axios from "axios";
// import { ,  } from "@material-ui/icons";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect,useState } from "react";
export default function FeaturedInfo() {
  //Notre rev=> contient tout les mois il faut limiter la res pour qu'elle nous renvoi seulement  les deux derniers mois
    let [Revenu, setRevenu]=useState([])
    let [Perc, setPerc]=useState(0)

  useEffect(()=>{
    const getStats=async()=>{
      try {
        const res=await axios.get('/api/Orders/Incomes')
        setRevenu(res.data)
        // setPerc((res.data[1].totalValue)/res.data[0].totalValue)
      } catch {
        
      }
    }
    getStats()
  },[])
  console.log("Revenu",Revenu)
  return (
    <div className="featured">
      {Revenu.length>0?
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{Revenu[0].totalValue} Dt</span>
          <span className="featuredMoneyRate">
           -11.4  {/* Math.floor(Perc) */}
           {/* {Perc<0?<ArrowDownwardIcon>:<ArrowUpwardIcon/>} */}
            <ArrowDownwardIcon  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>: <h5>waiting</h5>
      }
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownwardIcon className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +2.4 <ArrowUpwardIcon className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
