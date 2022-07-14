import Chart from "../chart/Chart";
import FeaturedInfo from "../featuredInfo/FeaturedInfo";
import "./AdminDashboard.css";
import WidgetSm from "../widgetSm/WidgetSm";
import WidgetLg from "../widgetLg/WidgetLg";
import Sidebar from "../sidebar/Sidebar";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
export default function AdminDashboard() {
  let [userStat, setUserStat]=useState([])

  useEffect(()=>{
    const getStats=async()=>{
      try {
        const res=await axios.get('/api/Users/statics')
        res.data.map(el=>{
          setUserStat(prev=>[
            ...prev,{
              name:el._id.month,"Active User":el.count
            }
          ])
        })
      } catch {
        
      }
    }
    getStats()
  },[])
  console.log("userStat",userStat)
  return (
    <div className="home">
      <Sidebar/>
      <div className="bottomContainer">
      <FeaturedInfo />
      <Chart data={userStat} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
      </div>
      
    </div>
  );
}
