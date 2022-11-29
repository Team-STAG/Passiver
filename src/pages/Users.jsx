import React, { useState } from 'react'
import {  Outlet, useNavigate} from 'react-router-dom'
import { LoggedInHeader, LoggedInNav } from '../components'

//importing styles and image
import "../assets/styles/user.css"
import useUserContext from '../context/UserContext'
import api from '../api/api'

const Users = () => {

  const [navShrinked, setNavShrink] = useState(false)
  const { userState, addUserDetails } = useUserContext();
  const navigate = useNavigate();

  console.log(userState);

  if(!userState.isLoggedIn){

    api.get("/auth/me")

      .then(res => {

        addUserDetails(res.data)

      }).catch(err => {

        console.log(err)

        navigate("/login");

        
      })
  }

  return (
    <>
    
      {userState.isLoggedIn &&<div className='users'>


        <div className='user-container'>

          <div className='navbar'>

            <LoggedInNav navShrinked={navShrinked} setNavShrink={setNavShrink}/>

          </div>
          <div className='main-content'>

            <div className='main-content-header'>

              <LoggedInHeader />
              
            </div>


            <div className="main-content-outlet">

              <Outlet />

            </div>


          </div>

        </div>

        
        
      </div>}
    
    </>
  )
}

export default Users
