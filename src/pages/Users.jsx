import React, { useCallback, useEffect, useState } from 'react'
import {  Outlet, useNavigate} from 'react-router-dom'
import { LoggedInHeader, LoggedInNav } from '../components'

//importing styles and image
import "../assets/styles/user.css"
import useUserContext from '../context/UserContext'
import api from '../api/api'
import { Row } from 'antd'

const Users = () => {

  const [navShrinked, setNavShrink] = useState(false)
  const { userState, addUserDetails, logOutUser } = useUserContext();
  const [headerOpened, setHederOpened] = useState(false)
  const [newtworkErr, setNetworkErr] = useState(false)
  const navigate = useNavigate();


  useEffect(()=>{

    setHederOpened(false)

  },[navigate])

  const fetchUserDetails = useCallback(() => {

    api.get("/auth/me")

      .then(res => {

        if(!userState.userData || !userState.isLoggedIn){

          addUserDetails(res.data)

        }


      }).catch(err => {


        if (err.message.toLowerCase() === "network error") {
          
          setNetworkErr(true)

        }else{

          logOutUser();
          window.location.href = window.location.origin + "/login";
        }



      })

  }, [addUserDetails,userState, logOutUser])

  useEffect(()=>{

    if(localStorage.getItem("user_token")){

  
      fetchUserDetails()
  
      
    }else{
      window.location.href = window.location.origin + "/login";
    }
  }, [fetchUserDetails, userState])

  if (newtworkErr){
    return <Row justify="center" style={{height: "100vh", alignItems: "center"}}>
      <h1 style={{ width: "90%", fontWeight: "bold", textAlign: "center" }}><span style={{color: "red"}}>You seems to be offline!</span> <br /> Please make sure you're connected to the internet and refresh the web page</h1>
    </Row>
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
