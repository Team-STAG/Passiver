import React, { useCallback, useContext, useReducer, useState } from 'react'
import { initialUserValue, userReducer } from '../reducers';

const UserContext = React.createContext();

export const UserProvider = ({children}) => {

    const [userState, dispatch] = useReducer(userReducer, initialUserValue);
    const [passwordReset, setPasswordReset] = useState(false)
    const [passwordResetEmail, setPasswordResetEmail] = useState("")


    const addUserDetails = useCallback(()=>{

        dispatch({})

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
