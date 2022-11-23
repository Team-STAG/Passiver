import { Col, Row } from 'antd'
import React from 'react'
import { SiteData } from '../data'

import "../assets/styles/vendorlist.css"

const VendorList = () => {
    const {vendors} = SiteData;

  return (
    <>

        <Row justify="space-between" className="vendor-list-content">

            <Col span={11} className="vendor-list">

                <Row justify="space-between">

                    {vendors.map((vendor, index)=>{
                        return(
                            <Col key={index} span={24} className="vendor-card">
                                <Row justify="space-between">

                                    <p>{vendor.number}</p>

                                    <a href="https://api.whatsapp.com/send">Continue on whatsapp</a>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>


            </Col>
            <Col span={11} className="purchase-guideline">
                <h2>How to purchase</h2>

                <ul>
                    <li>Click on the</li>
                    <li>Click on the</li>
                    <li>Click on the</li>
                    <li>Click on the</li>
                    <li>Click on the</li>
                </ul>
            </Col>

        </Row>
    
    </>
  )
}

export default VendorList
