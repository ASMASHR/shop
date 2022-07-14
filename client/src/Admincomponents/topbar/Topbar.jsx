import React from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";
import { logout } from "../../js/Actions/AuthAction";
import NotificationsNone from '@mui/icons-material/NotificationsNone';
import Language from '@mui/icons-material/Language';
import Settings from '@mui/icons-material/Settings';
import { useDispatch } from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout';
export default function Topbar() {
  let dispatch=useDispatch()
  const LogOut=()=>{
 dispatch(logout())
}
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">STUDIO Admin</span>
        </div>
        <div className="topRight">
           <div className="Welcom">
                             <Link to="/DashboardAdmin"className="nav-item">Tableau du bord</Link>
                        </div>
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="fermer">
                          <Link to="/" onClick={LogOut}>  
                          <LogoutIcon />
                         </Link>
                       </div>
        </div>
      </div>
    </div>
  );
}
