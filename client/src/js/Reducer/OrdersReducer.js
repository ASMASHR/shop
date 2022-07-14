import * as actionTypes  from "../Actions/ActionType";

export const getOrdersReducer=(state={ AllOrders:[]},action)=>{
 switch (action.type) {
        case actionTypes.GET_ALL_ORDERS_REQUEST:
            return {
                isLoading:true,
                AllOrders:[]
            }
            
            case actionTypes.GET_ORDERS_SECCESS:
            return {
                isLoading:false,
                AllOrders:action.payload
            }
            case actionTypes.GET_ORDERS_FAIL:
            return {
                isLoading:false,
                error:action.payload
            }
              default:
            return state;
    }
}
export const getOrderInfo=(state={ Order:{}},action)=>{
switch(action.type)
{
    case actionTypes.GET_ORDER_REQUEST:
    return {isLoading:true,
}
    case actionTypes.GET_ORDER_SECCESS:
    return {isLoading:false,
        Order:action.payload
}
    case actionTypes.GET_ORDER_FAIL:
    return {isLoading:false,
        error:action.payload
    } 
    case actionTypes.GET_ORDER_RESET:
    return {
       Order:{}
    }
    default:
        return state

}
}  