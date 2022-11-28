export const initialUserValue = {
    token: "",
    isLoggedIn: false,
    userData: {}
}

const userReducer = (state, action)=>{

    switch(action.type){

        case "password-reset":
            return state

        case "add-token":

        if(action.payload){
            
            return {
                ...state,
                token: action.payload
            }
        }

        break;

        case "add-details":

            if (action.payload) {

                return {
                    ...state,
                    userData: action.payload
                }
            }

            break;

        default:
            return state;
    }

}

export default userReducer;