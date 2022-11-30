import { Button, message, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import api from '../api/api'

import "../assets/styles/addVendors.css"
import useUserContext from '../context/UserContext'

const EditVendors = () => {

    const {id} = useParams();

    const [vendorState, setVendorState] = useState({
        phoneNumber: ""
    })

    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate();

    useEffect(()=>{

        api.get(`/vendor`)
            .then(res => {

                var vendor = res.data.filter(dat => dat.id === id);

                if(vendor.length > 0){
                    var {phoneNumber} = vendor[0];
                    setVendorState(prevState => {
                        return(
                            {
                                ...prevState,
                                phoneNumber
                            }
                        )
                    })
                }
                console.log(vendor)

            }).catch(err => {
                console.log(err)
                setErr(true)
            }).finally(()=>{
                setLoaded(true)
            })
    }, [id])

        const {userState} = useUserContext();

    const { userData } = userState;

    const {  role } = userData || {};

    const saveVendorDetail = useCallback(()=>{
        var {phoneNumber} = vendorState

        if(phoneNumber !== ""){
            phoneNumber = phoneNumber.replace("+", "");
            var phoneNumberFirst = phoneNumber.slice(0, 1);

            if(phoneNumberFirst.toString() === "0"){
                phoneNumber = "234" + phoneNumber.slice(1,);
            }

            setLoading(true)

            api.patch(`/admin/vendor/${id}`, {phoneNumber})
            .then(res => {

                message.success("vendor details saved successfully")
                navigate("/account/vendors")

            }).catch(err => {
                var {data} = err.response;

                if(data.message){
                    message.error(data.message);
                }else{
                    message.error("Unable to save vendor details! please try again later")
                }
            })

            console.log(phoneNumber);
        }
    }, [vendorState, id, navigate])

    if(role.toLowerCase() !== "admin"){
        return <Navigate to="/account" replace />
    }

    if(!loaded){
        return <p>loading...</p>
    }

    if(loaded && err){
        return <p>Unable to fetch data</p>
    }
  return (

    <>
        { loaded && !err && (
            <>
            
        
                <Row justify="space-between" className='add-vendor-content'>
        
                    <h1>Edit Vendor</h1>
        
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
                              <Button onClick={()=>{
                                  saveVendorDetail()
                              }} loading={loading} className='submit-btn'>
                                Save
                            </Button>
                        </div>
                    </div>
        
                </Row>
        
            </>

        )}
    
    </>

  )
}

export default EditVendors
