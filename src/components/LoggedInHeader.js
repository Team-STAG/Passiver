import { Button } from 'antd'
import React from 'react'
import { FaBars, FaBell, FaUserCircle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const LoggedInHeader = () => {
    const navigate = useNavigate();
  return (
    <>
    
        <div className='logged-in-header'>

            <div className='mobile-btn-content'>

                <Button className='mobile-btn'><FaBars /></Button>

            </div>

            <div className='header-actions'>

                <Button className='notif-btn'><FaBell /></Button>
                <Button className='account-btn' onClick={()=>{
                    navigate("/account/settings")
                }}><FaUserCircle /></Button>

            </div>

        </div>

    </>
  )
}

export default LoggedInHeader
