import { Button, message } from 'antd'
import React from 'react'
import { FaBars, FaCog, FaHome, FaMoneyBillWave, FaQuestionCircle, FaShoppingBag, FaSignOutAlt, FaUsers } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useUserContext from '../context/UserContext'

const LoggedInNav = ({navShrinked}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const { logOutUser } = useUserContext();

  return (
    <>
    
        <div className='nav-container'>

            
            <div className='nav-header'>
                <Link to="/" className="logo-text">passiveeer</Link>

                <Button className="shrink-nav-button"><FaBars /></Button>
            </div>

            <div className="nav-links">

                <ul>

                    <li>
                        
                        <Link to="/">
                        
                            <span className="icon"><FaHome /></span>
                            {!navShrinked && <span className="text">Home</span>}
                        
                        </Link>
                    
                    </li>

                    <li className={location.pathname === "/account/dashboard" || location.pathname === "/account"? "active-link": ""}>
                        
                        <Link to="/account/dashboard">
                        
                            <span className="icon"><FaHome /></span>
                            {!navShrinked && <span className="text">Overview</span>}
                        
                        </Link>
                    
                    </li>

                    <li className={location.pathname === "/account/users"? "active-link": ""}>
                        
                        <Link to="/account/users">
                        
                            <span className="icon"><FaUsers /></span>
                            {!navShrinked && <span className="text">User</span>}
                        
                        </Link>
                    
                    </li>

                    <li className={location.pathname === "/account/vendors"? "active-link": ""}>
                        
                        <Link to="/account/vendors">
                        
                            <span className="icon"><FaUsers /></span>
                            {!navShrinked && <span className="text">Vendors</span>}
                        
                        </Link>
                    
                    </li>

                    <li className={location.pathname === "/account/packages"? "active-link": ""}>
                        
                        <Link to="/account/packages">
                        
                            <span className="icon"><FaShoppingBag /></span>
                            {!navShrinked && <span className="text">Packages</span>}
                        
                        </Link>
                    
                    </li>

                    <li className={location.pathname === "/account/requests"? "active-link": ""}>
                        
                        <Link to="/account/requests">
                        
                            <span className="icon"><FaQuestionCircle /></span>
                            {!navShrinked && <span className="text">Request</span>}
                        
                        </Link>
                    
                    </li>

                    <li className={location.pathname === "/account/subscriptions" && "active-link"? "active-link" : ""}>
                        
                        <Link to="/account/subscriptions">
                        
                            <span className="icon"><FaHome /></span>
                            {!navShrinked && <span className="text">Subscriptions</span>}
                        
                        </Link>
                    
                    </li>

                    <li className={location.pathname === "/account/transactions" && "active-link"}>
                        
                        <Link to="/account/transactions">
                        
                            <span className="icon"><FaMoneyBillWave /></span>
                            {!navShrinked && <span className="text">Transactions</span>}
                        
                        </Link>
                    
                    </li>

                    <li className={location.pathname === "/account/settings" && "active-link"}>
                        
                        <Link to="/account/settings">
                        
                            <span className="icon"><FaCog /></span>
                            {!navShrinked && <span className="text">Settings</span>}
                        
                        </Link>
                    
                    </li>

                    <li className='logout-link'>
                        
                        <Link onClick={()=>{

                            logOutUser().then(res => {
                                message.success(res?.response);
                                navigate("/login")
                            }).catch(err => {
                                console.log(err)
                                message.error(err?.response)
                            });

                        }}>
                        
                            <span className="icon"><FaSignOutAlt /></span>
                            {!navShrinked && <span className="text">Logout</span>}
                        
                        </Link>
                    
                    </li>

                </ul>

            </div>

        </div>

    </>
  )
}

export default LoggedInNav
