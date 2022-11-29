import { Button, Col, message, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { FaSave } from 'react-icons/fa'
import {  useNavigate, useParams } from 'react-router-dom';
import api from '../api/api';

import "../assets/styles/addPacakges.css";

const AddPackages = () => {

    var [packageDetails, setPackageDetails] = useState({
        name: "Gold",
        price: "2000",
        fee: "200",
        rate: "2"

    })

    const {id} = useParams()
    const navigate = useNavigate();

    const [loaded, setLoaded] = useState(false);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false)

    useEffect(()=>{


        api.get(`/packages/${id}`)
        .then(res => {
            var {name, dailyRate, price, vendorFee} = res.data;

            setPackageDetails({
                name,
                price,
                fee: vendorFee,
                rate: dailyRate
            })
        }).catch(err => {
            console.log(err)
            setErr(true)
        }).finally(()=>{
            setLoaded(true)
        })

    }, [id])

    const savePackageDetails = useCallback(()=>{
        var {name, fee, rate} = packageDetails;
        fee = parseInt(fee)

        if(name !== "" && fee !== ""){
            setLoading(true)

            api.patch("/admin/packages", { id, name, vendorFee: fee, description: `Earn daily with the rate of ${rate}%` })
            .then(res => {
                message.success("Package Details saved successfully");
                navigate("/account/packages")
            }).catch(err => {
                var {data} = err?.response;
    
                if(data?.message){
    
                    message.error(data.message)
    
                }else{
                    message.error("Unable to save details! please try again later")
                }

                console.log(err)
            }).finally(()=>{
                setLoading(false)
            })
        }



    }, [packageDetails, navigate, id])

    if(!loaded){
        return <p>Loading...</p>
    }

    if(loaded && err){
        return <p>Unable to fetch package data</p>
    }

    

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

                <div className='form-content'>
                    <Button loading={loading} className="submit-btn" onClick={()=>{
                        savePackageDetails()
                    }}>
                        Save <span className="icon"><FaSave /></span>
                    </Button>
                </div>
            </Col>
        </Row>
    
    </>
  )
}

export default AddPackages
