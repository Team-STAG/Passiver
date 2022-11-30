import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { SiteData } from '../data'
import {  FaTelegram, FaWhatsapp} from "react-icons/fa"

const Footer = () => {
    const {siteName, address, phoneNumber, telegram, whatsapp} = SiteData;
  return (
    <>
    
        <Row justify="center" className="footer">

            <Col span={22} className="footer-container">

                <Row justify="space-between">

                    <Col span={9} md={{span: 9}} xs={{span: 24}} className="footer-logo">

                        <h1><Link to="/">{siteName}</Link></h1>
                        <p>...Save your future now</p>

                    </Col>

                    <Col span={7} md={{span: 7}} xs={{span: 24}} className="footer-link">

                        <h3 className='link-title'>About</h3>

                        <ul className='page-link'>
                            
                            <li><a href="#about">About us</a></li>
                            <li><a href="/privacy">Privacy policy</a></li>
                            {/* <li><a href="/help">Help and support</a></li> */}
                            <li><a href="/terms">Terms and condition</a></li>

                        </ul>

                    </Col>

                    <Col span={7} md={{span: 7}} xs={{span: 24}} className="footer-link">

                        <h3 className='link-title'>Contact Us</h3>

                        <p>{address}</p>

                        <p>{phoneNumber}</p>

                        <ul className='social-links'>
                            
                              <li><a href={whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp /></a></li>
                              <li><a href={telegram} target="_blank" rel="noreferrer"><FaTelegram /></a></li>
                            {/* <li><a href={instagram} target="_blank" rel="noreferrer"><FaInstagramSquare /></a></li> */}

                        </ul>

                    </Col>

                </Row>

            </Col>

        </Row>

    </>
  )
}

export default Footer
