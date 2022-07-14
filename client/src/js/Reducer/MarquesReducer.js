import * as actionTypes  from "../Actions/ActionType";

export const getMarquesReducer=(state={ AllMarques:[]},action)=>{
 switch (action.type) {
        case actionTypes.GET_ALL_MARQUES_REQUEST:
            return {
                isLoading:true,
                Marques:[]
            }
            
            case actionTypes.GET_MARQUES_SECCESS:
            return {
                isLoading:false,
                Marques:action.payload
            }
            case actionTypes.GET_MARQUES_FAIL:
            return {
                isLoading:false,
                error:action.payload
            }
              default:
            return state;
    }
}
export const getMarqueInfo=(state={ Marque:{}},action)=>{
switch(action.type)
{
    case actionTypes.GET_MARQUE_REQUEST:
    return {isLoading:true,
}
    case actionTypes.GET_MARQUE_SECCESS:
    return {isLoading:false,
        Marque:action.payload
}
    case actionTypes.GET_MARQUE_FAIL:
    return {isLoading:false,
        error:action.payload
    } 
    case actionTypes.GET_MARQUE_RESET:
    return {
        Marque:{}
    }
    default:
        return state

}
}  