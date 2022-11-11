import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    
        <Row justify="center" className='header'>

            <Col span={22} className="header-container">

                <Row justify="space-between" className='header-content'>

                    <div className='logo'>
                        <Link to="/">Passivers</Link>
                    </div>

                    <div className='desktop-link'>

                        <ul className='link-container'>

                            <li><a href="#home">Home</a></li>
                            <li><a href="#contact">Contact Us</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li className="bordered-link"><Link to="/login">Login</Link></li>
                            <li className="bordered-link background-link"><Link to="/signup">Signup</Link></li>

                        </ul>

                    </div>

                </Row>


            </Col>


        </Row>

    </>
  )
}

export default Header
