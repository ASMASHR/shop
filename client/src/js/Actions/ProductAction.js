import * as actionTypes from './ActionType'
import axios from 'axios'


export const get_all_products=()=>async(dispatch)=>{
try {
      dispatch({type:actionTypes.GET_ALL_PRODUCTS_REQUEST})
    const {data}=await axios.get('/api/Products')
    dispatch({
        type:actionTypes.GET_PRODUCTS_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message
})
    }}

export const get_product_Info=(id)=>async(dispatch)=>{
try {
     dispatch({type:actionTypes.GET_PRODUCT_REQUEST})
    const {data}=await axios.get(`/api/Products/${id}`)
    dispatch({
        type:actionTypes.GET_PRODUCT_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_PRODUCT_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message})
    }}
export const remove_Product=()=>async(dispatch)=>{
    dispatch({type:actionTypes.GET_PRODUCT_RESET})
}
export const get_productsByCategorie=(categorieId)=>async(dispatch)=>{
    // /categorieProducts/:categorieId
    try {
    //   dispatch({type:actionTypes.GET_CATEGORIE_PRODUCTS_REQUEST})
    const {data}=await axios.get(`/api/Products/categorieProducts/${categorieId}`)
    dispatch({
        type:actionTypes.GET_CATEGORIE_PRODUCTS_SECCESS,
        payload:data
    })

} 
catch (error) { 
    dispatch({type:actionTypes.GET_CATEGORIE_PRODUCTS_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message
})
    }
}

export const Add_Product=(newArticle,Newpic)=>async(dispatch)=>{

        const res=axios.post('/uploadImg',Newpic).then(res=>{newArticle.ProductImg=res.data
        axios.post('/api/Products/AddProduct',newArticle)}).then(res=>dispatch(get_all_products()))


}

export const Delete_product=(id)=>async(dispatch)=>{
try {
     
    const {data}=await axios.get(`/api/Products/Delete/${id}`)
    dispatch(get_all_products())

} 
catch (error) { 
    dispatch({type:actionTypes.GET_PRODUCT_FAIL,
    payload:error.response&&error.response.data.message?
    error.response.data.message:
    error.message})
    }}