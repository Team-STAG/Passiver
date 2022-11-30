import React, { useEffect, useState } from 'react'
import {  Outlet, useNavigate} from 'react-router-dom'
import { LoggedInHeader, LoggedInNav } from '../components'

//importing styles and image
import "../assets/styles/user.css"
import useUserContext from '../context/UserContext'
import api from '../api/api'

const Users = () => {

  const [navShrinked, setNavShrink] = useState(false)
  const { userState, addUserDetails } = useUserContext();
  const [headerOpened, setHederOpened] = useState(false)
  const navigate = useNavigate();

  console.log(userState);

  useEffect(()=>{

    setHederOpened(false)

  },[navigate])

  if(!userState.isLoggedIn || userState.token === "" || !userState.userData){

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

          <div className='navbar mobile-nav' style={{left: headerOpened? "0px" : "-350px"}}>

            <LoggedInNav setHeaderOpened={setHederOpened} headerOpened={headerOpened} navShrinked={navShrinked} setNavShrink={setNavShrink} />

          </div>
          <div className='main-content'>

            <div className='main-content-header'>

              <LoggedInHeader headerAction={setHederOpened} />
              
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
