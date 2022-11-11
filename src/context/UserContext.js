import React, { useCallback, useReducer } from 'react'
import { initialUserValue, userReducer } from '../reducers';

const UserContext = React.createContext();

export const UserProvider = ({children}) => {

    const [userState, dispatch] = useReducer(userReducer, initialUserValue)


    const addUserDetails = useCallback(()=>{

        dispatch({})

    }, [])

  return (
    <>

        <UserContext.Provider value={{userState, addUserDetails}}>
            {children}
        </UserContext.Provider>
    
    </>
  )
}

export default UserContext
