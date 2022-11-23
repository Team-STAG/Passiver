import { Button, Row } from 'antd'
import React, { useState } from 'react'

import "../assets/styles/addVendors.css"

const AddVendors = () => {

    const [vendorState, setVendorState] = useState({
        phoneNumber: ""
    })
  return (
    <>
    

        <Row justify="space-between" className='add-vendor-content'>

            <h1>Add New Vendor</h1>

        </Row>

        <Row justify="space-between" className='add-vendor-content'>

            <div className='form'>
                <div className='form-content'>
                    <label htmlFor='vendor-number'>Phone Number</label>
                    <input type="tel" placeholder='Input Vendor mobile number' id="vendor-number" value={vendorState.phoneNumber} onChange={(e)=>{

                        setVendorState(prevState => {
                            return({
                                ...prevState, 
                                phoneNumber: e.target.value
                            })
                        })

                    }}
                    />
                </div>

                <div className='form-content'>
                    <Button className='submit-btn'>
                        Submit
                    </Button>
                </div>
            </div>

        </Row>

    </>
  )
}

export default AddVendors
