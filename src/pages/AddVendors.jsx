import { Button, message, Row } from 'antd'
import React, { useCallback, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import api from '../api/api'

import "../assets/styles/addVendors.css"
import useUserContext from '../context/UserContext'

const AddVendors = () => {

    const [vendorState, setVendorState] = useState({
        phoneNumber: ""
    })

        const {userState} = useUserContext();

    const { userData } = userState;

    const { role } = userData || {};

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const addVendor = useCallback(() => {

        var {phoneNumber} = vendorState;

        if(phoneNumber !== ""){

            phoneNumber = phoneNumber.replace("+", "");
            var phoneNumberFirst = phoneNumber.slice(0, 1);

            if (phoneNumberFirst.toString() === "0") {
                phoneNumber = "234" + phoneNumber.slice(1,);
            }


            setLoading(true);
    
            api.post("/admin/vendor", {phoneNumber})

            .then(res => {
    
                message.success("Vendor added successfully");
                navigate("/account/vendors");
    
            }).catch(err => {
    
                const {data} = err?.response;
    
                if(data?.message){
    
                    message.error(data.message)
    
    
                }else{
    
                    message.error("Unable to add vendor! please try again later")
    
                }
    
                console.log(err);
    
            }).finally(()=>{
                setLoading(false)
            })

        }else{
            message.error("Please input vendor details");
        }


    }, [vendorState, navigate])

    if(role.toLowerCase() !== "admin"){
        return <Navigate to="/account" replace />
    }
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
