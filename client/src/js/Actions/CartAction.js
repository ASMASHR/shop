import { ADD_TO_CART,REMOVE_FROM_CART,CART_RESET } from "./ActionType";
import axios from 'axios'

export const AddToCard=(id,qty)=>async(dispatch,getState)=>{
try {
   const {data}=await axios.get(`/api/Products/${id}`)
    dispatch(
        {type:ADD_TO_CART,
            payload:{
        product:data._id,
        name:data.ProductName,
        imgURL:data.ProductImg,
        price:data.Price,
        countInStock:data.countInStock,
        qty
    }
})
localStorage.setItem('Cart',JSON.stringify(getState().Cart.cartItems))

} catch (error) { console.log(error)
         }}

         
export const RemoveFromCard=(id)=>async(dispatch,getState)=>{
try {
    dispatch(
        {type:REMOVE_FROM_CART,
            payload:id
})
localStorage.setItem('Cart',JSON.stringify(getState().Cart.cartItems))

} catch (error) { console.log(error)
         }}
export const Delet_Card_Items=()=>async(dispatch,getState)=>{
try {
    dispatch(
        {type:CART_RESET
            
})
localStorage.setItem('Cart',JSON.stringify(getState().Cart.cartItems))

} catch (error) { console.log(error)
         }}
