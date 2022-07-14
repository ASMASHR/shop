import {combineReducers} from 'redux'
import authReducer from './authReducer'
// import UserReducer from './UserReducer'
import {getProductsReducer,getProductInfo} from './ProductReducer'
import {getCategoriesReducer,getCategorieInfo} from './CategorieReducer'
import { getUsersReducer,getUserInfo } from './UserReducer'
import {getMarquesReducer,getMarqueInfo} from './MarquesReducer'
import { CommandReducer } from './CommandeReducer'
import CartReducer from './CartReducer'
import MessagesReducer from './MessagesReducer'
import {getOrdersReducer,getOrderInfo} from './OrdersReducer'

// UserReducer ,UserCommand:CommandReducer
const reducer=combineReducers({OrdersList:getOrdersReducer,orderInfo:getOrderInfo,users:getUsersReducer,user:getUserInfo,Marques:getMarquesReducer,Marque:getMarqueInfo,Cart:CartReducer,Products:getProductsReducer,Product:getProductInfo,Authentication:authReducer,Messages:MessagesReducer,categories:getCategoriesReducer,categorie:getCategorieInfo})

export default reducer