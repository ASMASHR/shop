import * as actionTypes  from "../Actions/ActionType";

export const getUsersReducer=(state={ AllUsers:[]},action)=>{
 switch (action.type) {
        case actionTypes.GET_ALL_USERS_REQUEST:
            return {
                isLoading:true,
                AllUsers:[]
            }
            
            case actionTypes.GET_USERS_SECCESS:
            return {
                isLoading:false,
               AllUsers:action.payload
            }
            case actionTypes.GET_USERS_FAIL:
            return {
                isLoading:false,
                error:action.payload
            }
              default:
            return state;
    }
}
export const getUserInfo=(state={ User:{}},action)=>{
switch(action.type)
{
    case actionTypes.GET_USER_REQUEST:
    return {isLoading:true,
}
    case actionTypes.GET_USER_SECCESS:
    return {isLoading:false,
        User:action.payload
}
    case actionTypes.GET_USER_FAIL:
    return {isLoading:false,
        error:action.payload
    } 
    case actionTypes.GET_USER_RESET:
    return {
        User:{}
    }
    default:
        return state

}
}  