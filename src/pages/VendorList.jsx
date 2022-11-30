import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'

import "../assets/styles/vendorlist.css"
import api from '../api/api'
import { Navigate, useParams } from 'react-router-dom'
import useUserContext from '../context/UserContext'

const VendorList = () => {
    // const {vendors} = SiteData;
    const {id} = useParams();
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false)
    const [vendors, setVendors] = useState([])

        const {userState} = useUserContext();

    const { userData } = userState;

    const { role, email } = userData || {};

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

    if(role.toLowerCase() === "admin"){
        return <Navigate to="/account/vendors" replace />
    }

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

            <Col span={11} lg={{span: 11, order: 1}} md={{span: 11, order: 1}} xs={{span: 24, order: 2}} className="vendor-list">

                <Row justify="space-between">

                    {vendors.map((vendor, index)=>{
                        var {phoneNumber} = vendor;

                        return(
                            <Col key={index} span={24} className="vendor-card">
                                <Row justify="space-between">

                                    <p>Vendor {index + 1}</p>

                                    <a target="_blank" rel="noreferrer" href={`https://api.whatsapp.com/send?phone=${phoneNumber}&text=Hello vendor, i'm interested in buy the Passiveeer package "${id}". My email is ${email}`}>Continue on whatsapp</a>
                                </Row>
                            </Col>
                        )
                    })}
                </Row>


            </Col>
            <Col span={11} lg={{span: 11, order: 2}} md={{span: 11, order: 2}} xs={{span: 24, order: 1}} className="purchase-guideline">
                <h2>How to purchase</h2>

                <ul>
                     
                      
                      <li> Click on any vendor to purchase</li>
                      <li>If the vendor didn't reply within 3 minutes, please chat up another Vendor</li>
                      <li>Make payment to the account given by the vendor
                          Await confirmation</li>
                      <li>Your purchased plan will be activated immediately deposit is confirmed</li>
                      <li>Happy Investing</li>
                </ul>

                  <p>Please Note: No vendor will private chat you to extort money from you or anything else. Please report immediately if situation exists</p>
            </Col>

        </Row>
    
    </>
  )
}

export default VendorList
