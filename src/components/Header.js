import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    
        <header>

            <div className='logo'>
                <Link to="/">Passivers</Link>
            </div>

            <div className='desktop-link'>

                <ul className='link-container'>

                    <li><a href="#home">Home</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li className="bordered-link"><Link to="/login">Login</Link></li>
                    <li className="bordered-link background"><Link to="/signup">Signup</Link></li>

                </ul>

            </div>



        </header>

    </>
  )
}

export default Header
