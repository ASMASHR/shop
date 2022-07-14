import { ADD_TO_CART,REMOVE_FROM_CART,CART_RESET } from "../Actions/ActionType";

export default function(state={cartItems:[]},action){
  switch (action.type) {
        case ADD_TO_CART:
            const item=action.payload;
            localStorage.setItem("Cart", [action.payload.Cart])
            const existItem=state.cartItems.find(el=>el.product==item.product)
            if(existItem)
              return {...state,cartItems:state.cartItems.map(x=>x.product===existItem.product?item:x)}
            else 
              return{cartItems:[...state.cartItems,item]}
        case REMOVE_FROM_CART:
                return {cartItems:[...state.cartItems.filter(x=>x.product!==action.payload)]}
        case CART_RESET:
                return {cartItems:[]}
        
                default: 
            return state
    }
}