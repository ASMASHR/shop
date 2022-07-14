import * as actionTypes from './ActionType'
import axios from 'axios'
export const get_all_Marques=()=>async(dispatch)=>{
try {
      dispatch({type:actionTypes.GET_ALL_MARQUES_REQUEST})
    const {data}=await axios.get('/api/Marques')
    dispatch({
        type:actionTypes.GET_MARQUES_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_MARQUES_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message
})
    }}

    export const get_marque_Info=(id)=>async(dispatch)=>{
try {
     dispatch({type:actionTypes.GET_MARQUE_REQUEST})
    const {data}=await axios.get(`/api/Marques/${id}`)
    dispatch({
        type:actionTypes.GET_MARQUE_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_MARQUE_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message})
    }}


    
     export const Add_Marque=(MarqueName,MarqueDesc,Newpic)=>async(dispatch)=>{
      

    //  
const res=axios.post('/uploadImg',Newpic).then(res=>{let MarqueImg=res.data
    axios.post('/api/Marques/AddMarque',{MarqueName,MarqueDesc,MarqueImg})}).then(res=>dispatch(get_all_Marques()))
    // const {data}=await 
   
           
   
   

}
export const remove_marque=()=>async(dispatch)=>{
    dispatch({type:actionTypes.GET_MARQUE_RESET})
}