import "./userList.css";
// import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import Sidebar from "../sidebar/Sidebar";
import { get_all_Users } from "../../js/Actions/userAction";
import {useDispatch,useSelector} from 'react-redux'
import UserCard from "./userCard/UserCard";
export default function UserList() {
  const [data, setData] = useState(userRows);
  let dispatch=useDispatch()
useEffect(()=>{
  dispatch(get_all_Users)
  
},[])
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  let users=useSelector(state=>state.users)
  let {isLoading,AllUsers}=users
  console.log(AllUsers)
 

  return (
    <div className="userList">
    
      <Sidebar/>
      <div className="leftSide">
      {isLoading? <h3>loading</h3>:
      AllUsers.map(el=><UserCard client={el}/>)
      }
      </div>
    </div>
  );
}
