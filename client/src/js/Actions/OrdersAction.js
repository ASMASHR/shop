import * as actionTypes from './ActionType'
import axios from 'axios'
export const get_all_orders=()=>async(dispatch)=>{
try {
      dispatch({type:actionTypes.GET_ALL_ORDERS_REQUEST})
    const {data}=await axios.get('/api/Orders')
    dispatch({
        type:actionTypes.GET_ORDERS_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_ORDERS_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message
})
    }}

    export const get_order_Info=(id)=>async(dispatch)=>{
try {
     dispatch({type:actionTypes.GET_ORDER_REQUEST})
    const {data}=await axios.get(`/api/Orders/${id}`)
    dispatch({
        type:actionTypes.GET_ORDER_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_ORDER_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message})
    }}
export const remove_order=()=>async(dispatch)=>{
    dispatch({type:actionTypes.GET_ORDER_RESET})
}