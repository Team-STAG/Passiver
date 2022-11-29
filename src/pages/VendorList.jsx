import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'

import "../assets/styles/vendorlist.css"
import api from '../api/api'
import { useParams } from 'react-router-dom'

const VendorList = () => {
    // const {vendors} = SiteData;
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false)
    const [vendors, setVendors] = useState([])

    useEffect(()=>{

        api.get('/vendor')
        .then((res)=>{
            setVendors(res.data)

        }).catch(err => {
            console.log(err)
            setErr(true)
        }).finally(()=>{
            setLoaded(true)
        })

    }, [])

    if (!loaded) {
        return <Row justify="center">
            <h2>loading...</h2>
        </Row>
    }

    if (loaded && err) {
        return <Row justify="center">
            <h2>Unable to get vendors list</h2>
        </Row>
    }

    if (vendors.length < 1){


        return <Row justify="center">
            <h2>No vendors available at the present moment</h2>
        </Row>

    }

  return (
    <>

        <Row justify="space-between" className="vendor-list-content">

            <Col span={11} className="vendor-list">

                <Row justify="space-between">

                    {vendors.map((vendor, index)=>{
                        var {phoneNumber} = vendor;

                        return(
                            <Col key={index} span={24} className="vendor-card">
                                <Row justify="space-between">

                                    <p>{phoneNumber}</p>

                                    <a href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello vendor, i'm interested in buy the Passiveeer package "${id}" `}>Continue on whatsapp</a>
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
