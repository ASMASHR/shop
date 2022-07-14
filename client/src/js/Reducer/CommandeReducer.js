import {EDIT_COMMAND, REMOVE_COMMAND,ADD_COMMAND_FAILED,ADD_COMMAND_SUCCESS,ADD_COMMAND_REQUEST} from '../Actions/ActionType'
export const CommandReducer=(state ={ NewCommand: {} },action)=>{
    // console.log("rees",action.payload)
    switch (action.type) {
        
        case ADD_COMMAND_REQUEST:
            return{   
                isPrepearing:true,
                NewCommand:{}
            }
        case ADD_COMMAND_SUCCESS:
            return {
                NewCommand:action.payload,
                isPrepearing:false
                
            }
            case ADD_COMMAND_FAILED:
                return {
                    isPrepearing:false,
                    NewCommandrror:action.payload

                }
            default:
               { 
                   return state;
                }

}
}