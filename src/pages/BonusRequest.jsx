import { Button, message, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import api from '../api/api';
import Modal from '../components/Modal';
import {MdClose} from "react-icons/md"
import { formatPrice } from '../function/functions';

const BonusRequest = () => {
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false);
    const [request, setRequest] = useState([]);
    const [modalOpened, setModalOpened] = useState(false)
    const [detailsLoadingErr, setDetailsloadingErr] = useState(false)
    const [details, setDetails] = useState(null)
    const [userDetails, setUserDetails] = useState("");
    const [bonusToPay, setBonusToPay] = useState(0)
    const [approveLoading, setApproveLoading] = useState(false)


    useEffect(()=>{

        api.get('/admin/bonus/request')
        .then(res => {
            setRequest(res.data);
        }).catch(err => {
            setErr(true);
            console.log(err)
        }).finally(()=>{
            setLoaded(true)
        })


    }, [])

    const fetchDetails = useCallback((id)=>{

        if(id){

            api.get(`/admin/user/${id}`).then(res => {
                // console.log(res.data)
                setDetails(res.data)
            })
            .catch((err)=>{

                setDetailsloadingErr(true)
                console.log(err)

            })

        }else{
            setDetailsloadingErr(true)
        }

    }, [])

    useEffect(()=>{

        if(userDetails !== ""){

            setModalOpened(true)
            fetchDetails(userDetails)

        }else{
            setModalOpened(false)
            setDetails(null)
            setBonusToPay(0)
        }

    }, [userDetails, fetchDetails])

    const approveBonus = useCallback((id)=>{

        if(id){
            setApproveLoading(true);

            api.post("/admin/bonus/approve", {userId: id})
            .then(res => {

                message.success("Bonus approved successfully")

                setRequest(prevReq => {
                    return prevReq.filter(req => req.id !== id)
                })

            }).catch(err => {
                var {data} = err.response;

                if(data.message){
                    message.error(data.message)
                }else{
                    message.error("Unable to approve bonus request! please try again later")
                }
            }).finally(()=>{
                setApproveLoading(false)
                setUserDetails("");
            })
        }

    }, [])


    useEffect(()=>{

        if(details){

            var bonus = 0;

            var readyBonuses = details.bonuses.filter(bonus => bonus.status.toLowerCase() === "pending");


            readyBonuses.forEach(bon => {
                var {package: plan}= bon?.investMent
                var newBon = parseInt(plan?.price) * 0.35;

                bonus += newBon;
            })


            setBonusToPay(bonus);
        }

    }, [details])

    if(!loaded){

        return <p>loading...</p>;
    }

    if(loaded && err){
        return <p>Error fetching bonus request</p>
    }


  return (
    <>
    
        <Row justify="space-between" className='request-content'>

            <h1>Bonus Request</h1>

        </Row>

        <Row justify="center" className='request-table request-content'>

            <table>

                <thead>
                    <tr>
                        <td>S/N</td>
                        <td>Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>

                      {request.length < 1? (
                        <tr>
                            <td colSpan={20}>No bonus withdrawal request at the present moment</td>
                        </tr>
                      ): (

                        request.map((reques, index) => {
                            var { email, id} = reques;
                            var sn = (index + 1);

                            // console.log(request)

                            return(
                                <tr>
                                    <td>{sn}</td>
                                    <td>{email}</td>
                                    <td>
                                        <div className='action-btn'>
                                            <Button className="edit-button">Approve</Button>
                                            <Button className="view-button" onClick={()=>{

                                                setUserDetails(id)

                                            }}>View details</Button>
                                        </div>
                                    </td>
                                </tr>

                            )

                        })

                      )}

                </tbody>

            </table>

        </Row>

          <Modal opened={modalOpened}>

            <div className='user-details-modal-content'>
                
                <Button className='close-btn' onClick={()=>{
                    setUserDetails("");
                }}>
                    <MdClose />
                </Button>

                {details && details !== null? (
                    <>
                    
                        <div className="user-details-modal-container">

                            <div className="details-content">
                                
                                <p className="title">Email:</p>
                                <p className="text">{details.email}</p>

                            </div>

                              <div className="details-content">

                                  <p className="title">Phone Number:</p>
                                  <p className="text">{details.phoneNumber}</p>

                              </div>

                              <div className="details-content">

                                  <p className="title">Account Name:</p>
                                  <p className="text">{details?.accountDetails?.name}</p>

                              </div>

                              <div className="details-content">

                                  <p className="title">Account Number:</p>
                                  <p className="text">{details?.accountDetails?.accountNo}</p>

                              </div>

                              <div className="details-content">

                                  <p className="title">Bank Name:</p>
                                  <p className="text">{details?.accountDetails?.bank}</p>

                              </div>

                              <div className="details-content">

                                  <p className="title">User Balance:</p>
                                  <p className="text">&#8358;{formatPrice(parseInt(details.userBalance))}</p>

                              </div>
                              

                              <div className="details-content">

                                  <p className="title">Bonus Balance:</p>
                                  <p className="text">&#8358;{formatPrice(parseInt(details.bonusBalance))}</p>

                              </div>

                              <div className="details-content">

                                  <p className="title">Requested Bonus to pay:</p>
                                  <p className="text">&#8358;{formatPrice(parseInt(bonusToPay))}</p>

                              </div>

                              <div className="details-content">

                                  <Button className='approve-btn' loading={approveLoading} onClick={()=>{
                                      approveBonus(details.id)
                                  }}>Approve</Button>

                              </div>

                              
                              

                        </div>

                    </>
                ) : (
                          <div className="loading">{detailsLoadingErr? "Error encountered while fetching user Details":"Fetching Details..."}</div>
                )}

            </div>

        </Modal>
    
    </>
  )
}

export default BonusRequest
