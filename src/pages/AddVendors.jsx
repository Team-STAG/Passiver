import { Button, Row } from 'antd'
import React, { useCallback, useState } from 'react'
import api from '../api/api'

import "../assets/styles/addVendors.css"

const AddVendors = () => {

    const [vendorState, setVendorState] = useState({
        phoneNumber: ""
    })

    const [loading, setLoading] = useState(false)

    const addVendor = useCallback(() => {

        const {phoneNumber} = vendorState;

        setLoading(true);

        api.post("/admin/vendor", {phoneNumber})
        .then(res => {

        }).catch(err => {

            console.log(err);

        }).finally(()=>{
            setLoading(false)
        })

    }, [vendorState])
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
                      <Button loading={loading} onClick={addVendor} className='submit-btn'>
                        Submit
                    </Button>
                 </div>
            </div>

        </Row>

    </>
  )
}

export default AddVendors
