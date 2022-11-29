export const initialUserValue = {
    token: "",
    isLoggedIn: false,
    userData: null
}

const userReducer = (state, action)=>{

    switch(action.type){

        case "password-reset":
            return state

        case "add_token":

        if(action.payload){

            
            return {
                ...state,
                token: action.payload
            }
        }

        break;

        case "add_details":

            if (action.payload) {

                return ({
                    ...state,
                    userData: action.payload,
                    isLoggedIn: true
                })
            }

            break;

        case "remove_details":
            return initialUserValue;

        default:
            return state;
    }

}

export default userReducer;