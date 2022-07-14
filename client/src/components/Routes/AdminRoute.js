import React from 'react'
import { useSelector } from 'react-redux' 
import {Redirect,Route} from 'react-router-dom'

function AdminRoute({component:Component,...rest}) {
 const isAuth = useSelector(state => state.Authentication.isAuth) 
  const role = useSelector(state => state.Authentication.role)  
  console.log("role",role)
   if ((isAuth===false)&&(role!=="Administrator")) {
      {return  <Redirect to ="/"/>
   }
   }

   return (
        <div>
           <Route component={Component} {...rest} />
        </div>
    )
}


export default AdminRoute
