import "./widgetLg.css";
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { format, render, cancel, register } from 'timeago.js';
import axios from "axios";
export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
let [LastOrders,setLastOrders]=useState([])
// 
  useEffect(()=>{
    const getLatestOrders=async()=>{
      try {
        const res=await axios.get('/api/Orders/LastOrders')
        // res.data
        setLastOrders(res.data)
      } catch {
        
      }
    }
    getLatestOrders()
  },[])
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
       {LastOrders.map(el=> <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{el.Client.firstName} {el.Client.lastName}</span>
          </td>
          <td className="widgetLgDate">{format(el.createdAt)}</td>
          <td className="widgetLgAmount">{el.TotalPrice} DT</td>
          <td className="widgetLgStatus">
            <Button type={el.status} />
          </td>
        </tr>)}
       </table>
    </div>
  );
}
