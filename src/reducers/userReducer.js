export const initialUserValue = {}

const userReducer = (state, action)=>{

    switch(action.type){

        case "password-reset":
            return state

        default:
            return state;
    }

}

export default userReducer;