import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { LoggedInHeader, LoggedInNav } from '../components'

//importing styles and image
import "../assets/styles/user.css"

const Users = () => {

  const [navShrinked, setNavShrink] = useState(false)

  return (
    <div className='users'>


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

      
      
    </div>
  )
}

export default Users
