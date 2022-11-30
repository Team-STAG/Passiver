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
      
      return new Promise(async (resolve, reject)=>{
        if(userDetails && typeof(userDetails) === "object"){

          dispatch({type: "add_details", payload: userDetails});

          if(token){

            await localStorage.setItem("user_token", token);
            dispatch({ type: "add_token", payload: token})
  
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

    const logOutUser = useCallback(()=>{

      return new Promise(async (resolve, reject) => {
        
        localStorage.removeItem("user_token");
        if (localStorage.getItem("user_token")){

          await localStorage.removeItem("user_token");
          dispatch({ type: "remove_details"});
          resolve({
            response: "You've been successfully logged out"
          })

            

          
        }

      })

    }, [])

  return (
    <>

      <UserContext.Provider value={{ userState, addUserDetails, passwordReset, passwordResetEmail, setPasswordReset, setPasswordResetEmail, logOutUser }}>
            {children}
        </UserContext.Provider>
    
    </>
  )
}

const useUserContext = () => {

  return useContext(UserContext)
}



export default useUserContext;
