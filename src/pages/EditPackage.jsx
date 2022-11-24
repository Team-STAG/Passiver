import { Button, Col, Row } from 'antd'
import React, { useState } from 'react'
import { FaSave } from 'react-icons/fa'

import "../assets/styles/addPacakges.css";

const AddPackages = () => {

    var [packageDetails, setPackageDetails] = useState({
        name: "Gold",
        price: "2000",
        fee: "200",
        rate: "2"

    })

    

  return (
    <>

        <Row justify="space-between" className='add-package-content'>
            <h1 className='add-package-title'>Edit Package</h1>
        </Row>

        <Row justify="center" className='add-package-content'>
            <Col span={24} className="package-form">
                <div className="form-content">
                    <label className="package-name">Name</label>
                    <input type="text" className="package-name" id="package-name" value={packageDetails.name} placeholder="Subscription name" onChange={(e)=>{
                        setPackageDetails(prevState=> {
                            return({
                                ...prevState,
                                name: e.target.value
                            })
                        })
                    }}
                    />
                </div>

                <div className="form-content">
                    <label className="package-price">Price</label>
                    <input type="number" className="package-price" id="package-price" value={packageDetails.price} placeholder="Subscription price" onChange={(e)=>{
                        setPackageDetails(prevState=> {
                            return({
                                ...prevState,
                                price: e.target.value
                            })
                        })
                    }}
                    />
                </div>

                <div className="form-content">
                    <label className="package-fee">Fee</label>
                    <input type="number" className="package-fee" id="package-fee" value={packageDetails.fee} placeholder="Subscription fee" onChange={(e)=>{
                        setPackageDetails(prevState=> {
                            return({
                                ...prevState,
                                fee: e.target.value
                            })
                        })
                    }}
                    />

                    
                </div>

                <div className="form-content">
                    <label className="package-rate">Rate</label>
                    <input type="number" className="package-rate" id="package-rate" value={packageDetails.rate} placeholder="Subscription rate" onChange={(e)=>{
                        setPackageDetails(prevState=> {
                            return({
                                ...prevState,
                                rate: e.target.value
                            })
                        })
                    }}
                    />
                </div>

                <div className='form-content'>
                    <Button className="submit-btn">
                        Save <span className="icon"><FaSave /></span>
                    </Button>
                </div>
            </Col>
        </Row>
    
    </>
  )
}

export default AddPackages
