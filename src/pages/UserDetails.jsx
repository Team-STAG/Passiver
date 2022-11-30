import { Button, Col, message, Row } from 'antd'
import React, { useEffect, useState, useCallback } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import api from '../api/api'

import "../assets/styles/userDetails.css"
import useUserContext from '../context/UserContext'
import { formatDate, formatPrice } from '../function/functions'

const UserDetails = () => {

    const {id} = useParams();

    const [packageFormState, setPackageFormState] = useState({
        packageName: "",
        packageId: "",
        vendorId: "",
    })

    const [investorsDetails, setInvestorsDetails] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false)
    const [packagesList, setPackages] = useState([])
    const [vendors, setVendors] = useState([])
    const [loading, setLoading] = useState(false)

        const {userState} = useUserContext();

    const { userData } = userState;

    const { role } = userData || {};

    var { name, email, phoneNumber, userBalance, createdAt, accountDetails, investments, referals} = investorsDetails;

    console.log(investorsDetails)

    var {accountNo, name: accountName, bank} = accountDetails || {};


    const getUserDetails = useCallback(() => {

        setLoaded(false)
        setErr(false)

        api.get(`/admin/user/${id}`)
            .then(res => {
                setInvestorsDetails(res.data);
                // console.log(res)
            }).catch(err => {
                console.log(err)
                setErr(true)

            }).finally(() => {
                setLoaded(true)
            })

    }, [id])

    const activatePackage = useCallback(() => {
        var {packageId, vendorId} = packageFormState;
        if (vendorId !== "" && packageId !== "") {
            setLoading(true);

            api.post("/admin/createInvest", { userId: id, packageId, vendorId })
                .then(res => {
                    message.success("Package activated successfully for" + email)
                    getUserDetails()

                    setPackageFormState({
                        packageName: "",
                        packageId: "",
                        vendorId: "",

                    })
                }).catch(err => {
                    var { data } = err.response;

                    if (data.message) {
                        message.error(data.message);

                    } else {
                        message.error("Unable to activate packages! please try again later");
                    }
                }).finally(() => {
                    setLoading(false);

                })

        } else {
            message.error("Please select the package details")
        }

    }, [id, getUserDetails, email, packageFormState])


    useEffect(()=>{

        getUserDetails();

        api.get("/packages")
        .then(res => {
            setPackages(res.data)
        })

        api.get("/vendor")
            .then(res => {
                setVendors(res.data)
            })

    }, [getUserDetails])

    if(role.toLowerCase() !== "admin"){
        return <Navigate to="/account/settings" replace />
    }

    

    if(!loaded){
        return <p>Loading...</p>
    }

    if(loaded && err){

        return <p>Unable to fetch user details</p>

    }


  return (
    <>
    
        <Row justify="space-between" className="user-details-content">
            <h1>User Details</h1>
        </Row>

        <Row justify="space-between" className="user-details-content">

            <Col span={24} className="packages-table overflow-table">

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
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>{phoneNumber}</td>
                        <td>{formatPrice(parseInt(userBalance))}</td>
                        <td>{formatDate(createdAt)}</td>
                    
                    </tr>

                    
                </tbody>
            </table>
            </Col>

              <Col span={24} className="packages-table overflow-table">

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
                          {accountDetails ? (
                              <tr>
                                  <td>{bank}</td>
                                  <td>{accountNo}</td>
                                  <td>{accountName}</td>

                              </tr>
                          ) : (
                              <tr>
                                  <td colSpan={20}>User is yet to add his or her account details</td>
                              </tr>
                          )}
                </tbody>
            </table>
            </Col>

              <Col span={24} className="packages-table overflow-table">

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

                    {investments.length < 1 ? (
                        <tr>

                            <td colSpan={20}>No active investment for this user</td>

                        </tr>
                    ) : (

                        investments.map((investment, index)=>{
                            var {status, createdAt} = investment
                            var {name, price, vendorFee, dailyRate} = investment?.package
                            var sn = (index + 1);

                            return(

                                <tr key={index}>
                                    <td>{sn}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{vendorFee}</td>
                                    <td>{dailyRate}%</td>
                                    <td>{formatDate(createdAt)}</td>
                                    <td>{status}</td>
                                
                                </tr>
                            )
                        })


                    )}

                </tbody>
            </table>
            </Col>

              <Col span={24} className="packages-table overflow-table">

                <h2>Referrals</h2>
                <table>
                <thead>
                    <tr>
                    <td>S/N</td>
                    <td>Email</td>
                    <td>Referred on</td>
                    </tr>
                </thead>

                <tbody>

                    {referals?.length < 1? (
                        <tr>

                            <td colSpan={20}>This user haven't referred anyone</td>

                        </tr>
                    ): (
                        referals?.map((referral, index) => {
                            var {email, createdAt} = referral;
                            var sn = (index + 1)

                            return(

                                <tr key={index}>
                                <td>{sn}</td>
                                <td>{email}</td>
                                <td>{formatDate(createdAt)}</td>
                                
                                </tr>
                            )
                        })
                    )}

                    

                    
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

                        {vendors.map((vendor, index) => {
                            var {phoneNumber, id} = vendor
                            return(
                                
                                <option key={index} value={id}>{phoneNumber}</option>
                            )
                        })}
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
                          {packagesList.map((pack, index) => {
                            const {name, id} = pack
                            return(

                                <option key={index} value={id}>{name}</option>
                            )
                          })}
                    </select>
                </div>

                <div className='form-content'>
                      <Button loading={loading} onClick={()=>{
                        activatePackage();
                      }} className='submit-button'>
                        Activate
                    </Button>
                </div>
            </Col>
        </Row>

    </>
  )
}

export default UserDetails
