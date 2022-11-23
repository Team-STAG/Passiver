import { Button, Col, Row } from 'antd'
import React, { useState } from 'react'

import "../assets/styles/userDetails.css"

const UserDetails = () => {

    const [packageFormState, setPackageFormState] = useState({
        packageName: "",
        packageId: "",
        vendorId: "",
    })

  return (
    <>
    
        <Row justify="space-between" className="user-details-content">
            <h1>User Details</h1>
        </Row>

        <Row justify="space-between" className="user-details-content">

            <Col span={24} className="packages-table">

                <h2>User Details</h2>
                <table>
                <thead>
                    <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                    <td>Balance(&#8358;)</td>
                    <td>Joined</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Gold</td>
                        <td>2000</td>
                        <td>200</td>
                        <td>2%</td>
                        <td>Sept-4-2022</td>
                    
                    </tr>

                    
                </tbody>
            </table>
            </Col>

            <Col span={24} className="packages-table">

                <h2>Bank Details</h2>
                <table>
                <thead>
                    <tr>
                    <td>Bank Name</td>
                    <td>Account Number</td>
                    <td>Account Name</td>
                    
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>First Bank</td>
                    <td>3150686249</td>
                    <td>Omonimewa Isaac Duyilemi</td>
                    
                    </tr>
                </tbody>
            </table>
            </Col>

            <Col span={24} className="packages-table">

                <h2>Investments</h2>
                <table>
                <thead>
                    <tr>
                    <td>S/N</td>
                    <td>Name</td>
                    <td>Price (&#8358;)</td>
                    <td>Fee</td>
                    <td>Rate</td>
                    <td>Start Date</td>
                    <td>Status</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Gold</td>
                    <td>2000</td>
                    <td>200</td>
                    <td>2%</td>
                    <td>Sept-4-2022</td>
                    <td>Completed</td>
                    
                    </tr>

                    <tr>
                    <td>2</td>
                    <td>Gold</td>
                    <td>2000</td>
                    <td>200</td>
                    <td>2%</td>
                    <td>Sept-4-2022</td>
                    <td>Completed</td>
                    
                    </tr>
                </tbody>
            </table>
            </Col>

            <Col span={24} className="packages-table">

                <h2>Referrals</h2>
                <table>
                <thead>
                    <tr>
                    <td>S/N</td>
                    <td>Email</td>
                    <td>Bonus</td>
                    <td>Referred on</td>
                    <td>Status</td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                    <td>1</td>
                    <td>isaacseun63@gmail.com</td>
                    <td>2000</td>
                    <td>Sept-4-2022</td>
                    <td>Claimed</td>
                    
                    </tr>

                    <tr>
                    <td>1</td>
                    <td>isaacseun63@gmail.com</td>
                    <td>2000</td>
                    <td>Sept-4-2022</td>
                    <td>Claimed</td>
                    
                    </tr>

                    
                </tbody>
            </table>
            </Col>

        </Row>


        <Row justify="space-between" className="user-details-content">
            <h2>Activate Package</h2>

            <Col span={24} className="form">
                <div className='form-content'>
                    <label htmlFor='vendor'>Vendor</label>
                    <select id="vendor" value={packageFormState.vendorId} onChange={(e)=>{
                        setPackageFormState(prevState => {
                            return({
                                ...prevState,
                                vendorId: e.target.value
                            })
                        })
                    }}>
                        <option value="">--Chose a vendor--</option>
                        <option value="+2349036634645">+2349036634645</option>
                    </select>
                </div>

                <div className='form-content'>
                    <label htmlFor='package'>Package</label>
                    <select id="package" value={packageFormState.packageId} onChange={(e)=>{
                        setPackageFormState(prevState => {
                            return({
                                ...prevState,
                                packageId: e.target.value
                            })
                        })
                    }}>
                        <option value="">--Chose a package--</option>
                        <option value="gold">Gold</option>
                    </select>
                </div>

                <div className='form-content'>
                    <Button className='submit-button'>
                        Activate
                    </Button>
                </div>
            </Col>
        </Row>

    </>
  )
}

export default UserDetails
