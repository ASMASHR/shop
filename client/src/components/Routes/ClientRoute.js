 import React from 'react'
import {useSelector} from 'react-redux'
import {Redirect,Route} from "react-router-dom"

function ClientRoute({component:Component,student, setstudent,...rest}) {

const isAuth = useSelector(state => state.Authentication.isAuth) 
const role = useSelector(state => state.Authentication.role)
   if ((isAuth===false)&&(role!=="Client")) {
      {return  <Redirect to ="/"/>}
   }
   return (
        <div>
         <Route component={Component} {...rest} />
        </div>
    )
}

export default ClientRoute

