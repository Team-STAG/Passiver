import { Button, Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FaBars } from "react-icons/fa"
import Modal from './Modal'
import MobileLinks from './MobileLinks'

const Header = () => {
    const [isOpened, setIsOpened] = useState(false)
    const location = useLocation();

    useEffect(() => {

        setIsOpened(false)


    
    }, [location])
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

                            <li>{location.pathname === "/"? <a href='#home'>Home</a>: <Link to="/#home">Home</Link>}</li>
                            <li>{location.pathname === "/"? <a href='#about'>About Us</a>: <Link to="/#about">About us</Link>}</li>
                            <li>{location.pathname === "/"? <a href='#contact'>Contact Us</a>: <Link to="/#contact">Contact Us</Link>}</li>
                            <li className="bordered-link"><Link to="/login">Login</Link></li>
                            <li className="bordered-link background-link"><Link to="/signup">Signup</Link></li>

                        </ul>

                    </div>

                    <div className='mobile-link-btn'>
                        <Button onClick={()=>{
                            setIsOpened(prevState => !prevState)
                        }}>{isOpened? <MdClose /> : <FaBars /> }</Button>
                    </div>

                </Row>


            </Col>


        </Row>

        <Modal opened={isOpened}>

            <MobileLinks isOpened={isOpened} setIsOpened={setIsOpened} />

        </Modal>

    </>
  )
}

export default Header
