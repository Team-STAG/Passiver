import { Col, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../api/api'

import "../assets/styles/subscribe.css"

const Subscribe = () => {
    const [plans, setPlans] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false)

    useEffect(() => {

        api.get("/packages")
        .then(res => {
            setPlans(res.data)
        }).catch(err => {
            setErr(true)
            console.log(err);
        }).finally(()=>{
            setLoaded(true)
        })

    }, [])

    if(!loaded){
        return <Row justify="center">
            <h2>loading...</h2>
        </Row>
    }

    if(loaded && err){
        return <Row justify="center">
            <h2>Unable to get subscription list</h2>
        </Row>
    }

    if(plans.length < 1){
        return (
            <>
            
                <Row justify="center">
                    <h2>No plans available for investment at the present moment</h2>
                </Row>

            </>
        )
    }

   
  return (
    <>

        <Row justify="center" className="subscribe-content">

            {plans.map((plan, index) => {

                var {name, price, vendorFee} = plan
                return(

                <Col key={index} span={7} className="subscribe-card">
                        <h2 className="subscribe-title">{name}</h2>
                    
                    <p className="subscribe-price-title">Price:</p>
                        <h1 className="subscribe-price">&#8358;{price}</h1>

                    <p>Fee:</p>
                        <p className="subscribe-fee">&#8358;{vendorFee}</p>
                        <Link className="button" to={"/account/subscribe/" + name}>Subscribe</Link>
                </Col>

                )
            })}



        </Row>

    </>
  )
}

export default Subscribe
