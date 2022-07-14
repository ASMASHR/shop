import * as actionTypes  from "../Actions/ActionType";

export const getCategoriesReducer=(state={ categories:[]},action)=>{
 switch (action.type) {
        case actionTypes.GET_ALL_CATEGORIES_REQUEST:
            return {
                isLoading:true,
                categories:[]
            }
            
            case actionTypes.GET_CATEGORIES_SECCESS:
            return {
                isLoading:false,
                categories:action.payload
            }
            case actionTypes.GET_CATEGORIES_FAIL:
            return {
                isLoading:false,
                error:action.payload
            }
              default:
            return state;
    }
}
export const getCategorieInfo=(state={ categorie:{}},action)=>{
switch(action.type)
{
    case actionTypes.GET_CATEGORIE_REQUEST:
    return {isLoading:true,
}
    case actionTypes.GET_CATEGORIE_SECCESS:
    return {isLoading:false,
        categorie:action.payload
}
    case actionTypes.GET_CATEGORIE_FAIL:
    return {isLoading:false,
        error:action.payload
    } 
    case actionTypes.GET_CATEGORIE_RESET:
    return {
        categorie:{}
    }
    default:
        return state

}
}  