import { Col, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import "../assets/styles/subscribe.css"

const Subscribe = () => {
  return (
    <>

        <Row justify="center" className="subscribe-content">

            <Col span={7} className="subscribe-card">
                <h2 className="subscribe-title">Package Name</h2>
                
                <p className="subscribe-price-title">Price:</p>
                <h1 className="subscribe-price">&#8358;3000</h1>

                <p>Fee:</p>
                <p className="subscribe-fee">&#8358;300</p>
                <Link className="button" to="/account/subscribe/packageid">Subscribe</Link>
            </Col>

            <Col span={7} className="subscribe-card">
                <h2 className="subscribe-title">Package Name</h2>
                
                <p className="subscribe-price-title">Price:</p>
                <h1 className="subscribe-price">&#8358;3000</h1>

                <p>Fee:</p>
                <p className="subscribe-fee">&#8358;300</p>
                <Link className="button" to="/account/subscribe/packageid">Subscribe</Link>
            </Col>

            <Col span={7} className="subscribe-card">
                <h2 className="subscribe-title">Package Name</h2>
                
                <p className="subscribe-price-title">Price:</p>
                <h1 className="subscribe-price">&#8358;3000</h1>

                <p>Fee:</p>
                <p className="subscribe-fee">&#8358;300</p>
                <Link className="button" to="/account/subscribe/packageid">Subscribe</Link>
            </Col>

        </Row>

    </>
  )
}

export default Subscribe
