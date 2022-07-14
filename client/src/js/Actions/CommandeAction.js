import {REGISTER,EDIT_COMMAND, REMOVE_COMMAND,ADD_COMMAND_FAILED,ADD_COMMAND_SUCCESS,ADD_COMMAND_REQUEST} from './ActionType'
import axios from 'axios'
import { Delet_Card_Items } from './CartAction'
import { gethauthUser } from './AuthAction'
export const Add_Command=(userInfo,CmdInfo)=>(dispatch)=>{
    //   let LivMeth=CmdInfo.LivMeth
    // let PaimentMeth=CmdInfo.PaimentMeth
    //  let TotalProducts=CmdInfo.TotalProducts

    let email=userInfo.email
    console.log("email",userInfo)
let {data}= axios.post('/api/auth/findByMail',{email}) 
if( data===true)
console.log("this email is already used")
else
{
   console.log("next step") 
  axios.post('/api/auth/Register',userInfo).then(
      res=>{
        let newpass=res.data.newpass
        let Client=res.data.user._id
        let TotalProducts=CmdInfo.TotalProducts
        let LivMeth=CmdInfo.LivMeth
        let PaimentMeth=CmdInfo.PaimentMeth 
        let CmdRef=CmdInfo.CmdRef
        axios.post('/api/messages/sendUserInfo',{userInfo,newpass}).then
        (axios.post('/api/messages/confirmationMail',{userInfo,CmdInfo})).then(axios.post('/api/Orders/PasserCommande',{Client,TotalProducts,LivMeth,PaimentMeth,CmdRef}))
        
      }
  )
}
// console.log("data",data).then()
// if(data!==null)
// {let Client=data._id
//     dispatch({type:ADD_COMMAND_REQUEST})
//     let {data}= await axios.post('/api/command/PasserCommande',{Client,TotalProducts,LivMeth,PaimentMeth})
//     console.log("cmddd",data)
//    dispatch({
//         type:ADD_COMMAND_SUCCESS,
//         payload:data
//     })
//     // dispatch(Delet_Card_Items())

// }
// else
// {
// data = await axios.post('/api/auth/Register',userInfo)
//     dispatch({
//         type:REGISTER,
//         payload:data}) 
//     let Client=data.user._id
//     dispatch({type:ADD_COMMAND_REQUEST})
//     data = await axios.post('/api/command/PasserCommande',{Client,TotalProducts,LivMeth,PaimentMeth})
//     console.log("cmddd",data)
//    dispatch({
//         type:ADD_COMMAND_SUCCESS,
//         payload:data
//     })
// }
    
// var Client=data.user._id
    }
  export const get_Client_Orders=(id)=>(dispatch)=>{
    
  }


