import * as actionTypes  from "../Actions/ActionType";

export const getProductsReducer=(state={ products:[]},action)=>{
 switch (action.type) {
        case actionTypes.GET_ALL_PRODUCTS_REQUEST:
            return {
                isLoading:true,
                products:[]
            }
            
            case actionTypes.GET_PRODUCTS_SECCESS:
            return {
                isLoading:false,
                products:action.payload
            }
            case actionTypes.GET_PRODUCTS_FAIL:
            return {
                isLoading:false,
                error:action.payload
            }
              case actionTypes.GET_CATEGORIE_PRODUCTS_SECCESS:
            return {
                isLoading:false,
                products:action.payload
            }
              default:
            return state;
    }
}
export const getProductInfo=(state={ product:{}},action)=>{
switch(action.type)
{
    case actionTypes.GET_PRODUCT_REQUEST:
    return {isLoading:true,
}
    case actionTypes.GET_PRODUCT_SECCESS:
    return {isLoading:false,
        product:action.payload
}
    case actionTypes.GET_PRODUCT_FAIL:
    return {isLoading:false,
        error:action.payload
    } 
    case actionTypes.GET_PRODUCT_RESET:
    return {
        product:{}
    }
    default:
        return state

}
}  