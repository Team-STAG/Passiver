import { Button, Col, Row} from 'antd'
import React, { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import "../assets/styles/settings.css"

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

  return (
    <>

        <Row justify="space-between" className="settings-content profile-details-container">

            <div className="profile-details">

                <div className="profile-image">

                </div>

                <div className="details-container">
                    <h3>David Ogra</h3>
                    <p className='details-balance'>&#8358;0</p>
                </div>

            </div>
            <div className="profile-action">
                <Button className="edit-profile-button">Edit Profile <span className="icon"><FaPencilAlt /></span></Button>
            </div>

        </Row>

        <Row justify="space-between" className="settings-content">

            <Col span={24} className="form">

                <div className='form-content'>

                    <label htmlFor='account-name'>Account Name</label>
                    <input id="account-name" className='account-name' value={formState.accountName} onChange={(e)=>{
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
                    <input id="bank-name" className='bank-name' value={formState.bankName} onChange={(e)=>{
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
                    <input id="account-number" className='account-number' value={formState.accountNo} onChange={(e)=>{
                        setFormState(prevState => {
                            return({
                                ...prevState,
                                accountNo: e.target.value
                            })
                        })

                    }} placeholder="Your Account Number" />

                </div>

                <div className="form-content">
                    <Button className='submit-btn'>
                        Submit
                    </Button>
                </div>
                
            </Col>

            <Col span={24} className="form">

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
                    <Button className='submit-btn'>
                        Save
                    </Button>
                </div>
                
            </Col>

            

        </Row>

    </>
  )
}

export default Settings
