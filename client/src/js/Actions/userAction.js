import * as actionTypes from './ActionType'
import axios from 'axios'
export const get_all_Users=()=>async(dispatch)=>{
try {
      dispatch({type:actionTypes.GET_ALL_USERS_REQUEST})
    const {data}=await axios.get('/api/Users')
    dispatch({
        type:actionTypes.GET_USERS_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_USERS_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message
})
    }}

    export const get_user_Info=(id)=>async(dispatch)=>{
try {
     dispatch({type:actionTypes.GET_USER_REQUEST})
    const {data}=await axios.get(`/api/Users/${id}`)
    dispatch({
        type:actionTypes.GET_USER_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_MARQUE_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message})
    }}
export const remove_marque=()=>async(dispatch)=>{
    dispatch({type:actionTypes.GET_MARQUE_RESET})
}