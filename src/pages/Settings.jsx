import { Button, Col, message, Row} from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'
import api from '../api/api'

import "../assets/styles/settings.css"
import useUserContext from '../context/UserContext'

const Settings = () => {

    const [formState,setFormState] = useState({
        accountName: "",
        bankName: "",
        accountNo: ""
    });

    const [passwordstate, setPasswordState] = useState({
        passwordOne: "",
        passwordTwo: "",
        oldPassword: ""
    })

    const [passwordChangeLoading, setPasswordStateLoading] = useState(false)

    const [saveAccountLoading, setSaveAccountLoading] = useState(false)

    const [editDetails, setEditDetails] = useState(true)

    const { userState, addUserDetails } = useUserContext();

    const { userData } = userState;

    const { accountDetails, name, userBalance} = userData || {};

    useEffect(()=>{

        if(accountDetails){
            const {accountNo, name, bank} = accountDetails;

            setFormState(prevState => {
                
                return({
                    ...prevState,
                    accountNo,
                    accountName: name,
                    bankName: bank
             })
        })
        }

    }, [accountDetails])

    const saveAccountDetails = useCallback(()=>{

        setSaveAccountLoading(true)

        var {accountName, bankName, accountNo} = formState;

        api.patch("/auth/add-account-details", {name: accountName, accountNo, bank: bankName})
        .then(res => {

            var newUserData = {
                ...userData,
                accountDetails: res.data
            }

            addUserDetails(newUserData).then(res => {

                message.success("Account details saved successfully")
            }).catch(()=>{
                window.location.reload();
            })


        }).catch(err => {

            const {message: messageText} = err?.response;

            message.error(messageText);
        }).finally(()=>{
            setSaveAccountLoading(false)
        })

    }, [formState, addUserDetails, userData])

    const changePassword = useCallback(()=>{

        

        var {oldPassword, passwordOne, passwordTwo} = passwordstate;

        if(passwordOne === ""){

            message.error("Please input your old password")
            
        }else if(passwordOne !== passwordTwo){
            
            message.error("New Password doesn't match")
        }else{
            setPasswordStateLoading(true);

            api.patch('/auth/update-password', {password: passwordOne, oldPassword})
                .then(res => {

                    message.success("Password Updated successfully");
                    setPasswordState(prevState => {
                        return ({
                            ...prevState,
                            passwordOne: "",
                            passwordTwo: "",
                            oldPassword: ""
                        })
                    })

                }).catch(err => {
                    const {data} = err?.response;

                    const {message: messageDetails} = data;

                    console.log(err)

                    if(messageDetails){

                        message.error(messageDetails);
                    }else{
                        message.error("Unable to change! please try again later");
                    }


                }).finally(()=>{
                setPasswordStateLoading(false)
            })

        }

    }, [passwordstate])

  return (
    <>

        <Row justify="space-between" className="settings-content profile-details-container">

            <div className="profile-details">

                <div className="profile-image">

                </div>

                <div className="details-container">
                      <h3>{name}</h3>
                      <p className='details-balance'>&#8358;{userBalance}</p>
                </div>

            </div>
            <div className="profile-action">
                {editDetails && <Button className="edit-profile-button" onClick={()=>{
                    setEditDetails(false)
                }}>Edit Profile <span className="icon"><FaPencilAlt /></span></Button>}
            </div>

        </Row>

        <Row justify="space-between" className="settings-content">

            <Col span={24} className="form">

                <div className='form-content'>

                    <label htmlFor='account-name'>Account Name</label>
                      <input disabled={editDetails} id="account-name" className='account-name' value={formState.accountName} onChange={(e)=>{
                        setFormState(prevState => {
                            return({
                                ...prevState,
                                accountName: e.target.value
                            })
                        })

                    }} placeholder="Your Account Name" />

                </div>

                <div className='form-content'>

                    <label htmlFor='bank-name'>Bank Name</label>
                      <input disabled={editDetails} id="bank-name" className='bank-name' value={formState.bankName} onChange={(e)=>{
                        setFormState(prevState => {
                            return({
                                ...prevState,
                                bankName: e.target.value
                            })
                        })

                    }} placeholder="Your Bank Name" />

                </div>

                <div className='form-content'>

                    <label htmlFor='account-number'>Account Number</label>
                      <input disabled={editDetails} id="account-number" className='account-number' value={formState.accountNo} onChange={(e)=>{
                        setFormState(prevState => {
                            return({
                                ...prevState,
                                accountNo: e.target.value
                            })
                        })

                    }} placeholder="Your Account Number" />

                </div>

                {!editDetails && <div className="form-content" style={{flexDirection: "row"}}>
                      <Button className='submit-btn' loading={saveAccountLoading} onClick={()=>{
                          saveAccountDetails();
                    }}>
                        Submit
                    </Button>

                    <Button className='submit-btn' style={{marginLeft: "10px"}} onClick={()=>{
                        setEditDetails(true)
                    }}>Cancel</Button>
                </div>}
                
            </Col>


            <Col span={24} className="form">

                <h3>Change Password</h3>

                <div className='form-content'>

                    <label htmlFor='old-password'>Old password</label>
                    <input type="password" id="old-password" className='old-password' value={passwordstate.oldPassword} onChange={(e)=>{
                        setPasswordState(prevState => {
                            return({
                                ...prevState,
                                oldPassword: e.target.value
                            })
                        })

                    }} placeholder="Your old Password" />

                </div>

                <div className='form-content'>

                    <label htmlFor='new-password'>New password</label>
                    <input type="password" id="new-password" className='new-password' value={passwordstate.passwordOne} onChange={(e)=>{
                        setPasswordState(prevState => {
                            return({
                                ...prevState,
                                passwordOne: e.target.value
                            })
                        })

                    }} placeholder="Your New Password" />

                </div>

                <div className='form-content'>

                    <label htmlFor='new-password-two'>Repeat password</label>
                    <input type="password" id="new-password-two" className='new-password-two' value={passwordstate.passwordTwo} onChange={(e)=>{
                        setPasswordState(prevState => {
                            return({
                                ...prevState,
                                passwordTwo: e.target.value
                            })
                        })

                    }} placeholder="Repeat new Password" />

                </div>

                <div className="form-content">
                      <Button className='submit-btn' loading={passwordChangeLoading} onClick={changePassword}>
                        Save
                    </Button>
                </div>
                
            </Col>

            

        </Row>

    </>
  )
}

export default Settings
