import * as actionTypes from './ActionType'
import axios from 'axios'
export const get_all_Categories=()=>async(dispatch)=>{
try {
      dispatch({type:actionTypes.GET_ALL_CATEGORIES_REQUEST})
    const {data}=await axios.get('/api/categories')
    dispatch({
        type:actionTypes.GET_CATEGORIES_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_CATEGORIES_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message
})
    }}

    export const get_categorie_Info=(id)=>async(dispatch)=>{
try {
     dispatch({type:actionTypes.GET_CATEGORIE_REQUEST})
    const {data}=await axios.get(`/api/categories/${id}`)
    dispatch({
        type:actionTypes.GET_CATEGORIE_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_CATEGORIE_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message})
    }}
    export const Add_Categorie=(newCategorie)=>async(dispatch)=>{
        console.log("newCategorie",newCategorie)
try {
     
    const {data}=await axios.post('/api/categories/AddCategorie',newCategorie)
    console.log(data)
   dispatch(get_all_Categories())

} 
catch (error) { 
    dispatch({type:actionTypes.GET_CATEGORIES_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message
})
    }}
export const remove_categorie=()=>async(dispatch)=>{
    dispatch({type:actionTypes.GET_CATEGORIE_RESET})
}