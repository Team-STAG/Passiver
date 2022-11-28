import React, { useCallback, useContext, useEffect, useReducer, useState } from 'react'
import { initialUserValue, userReducer } from '../reducers';

const UserContext = React.createContext();

export const UserProvider = ({children}) => {

    const [userState, dispatch] = useReducer(userReducer, initialUserValue);
    const [passwordReset, setPasswordReset] = useState(false)
    const [passwordResetEmail, setPasswordResetEmail] = useState("")

    useEffect(()=>{
      if(localStorage.getItem("user_token")){
        dispatch({type: "add_token", payload: localStorage.getItem("user_token")})
      }
    }, [])


    const addUserDetails = useCallback((userDetails, token)=>{
      
      return new Promise((resolve, reject)=>{
        if(userDetails && typeof(userDetails) === "object"){

          dispatch({type: "add_details", payload: userDetails});

          if(token){

            dispatch({ type: "add-token", payload: token})
  
            localStorage.setItem("user_token", token);
          }

          resolve({
            response: "Login successful"
          })
          
        }else{

          reject({
            response: "Unable to login"
          })
        }
      })


    }, [])

  return (
    <>

        <UserContext.Provider value={{userState, addUserDetails, passwordReset, passwordResetEmail, setPasswordReset, setPasswordResetEmail}}>
            {children}
        </UserContext.Provider>
    
    </>
  )
}

const useUserContext = () => {

  return useContext(UserContext)
}



export default useUserContext;
