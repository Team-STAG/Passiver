import { Button, Col, message, Row } from 'antd'
import React, { useCallback, useState } from 'react'
import { Header } from '../components'

import "../assets/styles/login.css"
import LoginBanner from "../assets/images/Nigerian-naira-1.png"
import { FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Change = () => {
    const [formState, setFormState] = useState(
        {
            email: "",
            emailERr: "",
            password: "",
            passwordErr: "",
            passwordTwo: "",
            passwordTwoErr: "",
            passwordVisible: false
        }
    );

    const [loading, setLoading] = useState(false);

    const loginUser = useCallback(()=>{

        setLoading(true);

        var {passwordTwo, password} = formState

        if(password !== "" && passwordTwo !== ""){

            if(password.length < 8){

                message.error("Password should be 8 or more characters!");
                setLoading(false)

            }else{

                if(password === passwordTwo){
    
                }else{
    
                    message.error("Password doesn't match!");
                    setLoading(false)
    
                }
            }

            
        }else{

            message.error("Please fill in all fields!");
            setLoading(false)
        }

    }, [formState])

  return (
    <>
        <Header />

        <div className='all-page-container'>

            
            <Row justify="center" className='login-container'>

                <Col span={20} lg={{span: 20}} md={{span: 14}} xs={{span: 24}} className="login-content">

                    <Row justify="space-between">

                        
                        <Col span={12} className="login-image">

                            <img src={LoginBanner} alt="nigeria Naira" />

                            <div className='image-overlay'>

                                <h1>Recover your password</h1>

                            </div>

                        </Col>

                        <Col span={12} lg={{span: 12}} xs={{span: 24}} className="login-form">

                            <h2 className='form-title'>

                                E-mail Verified

                            </h2>

                            <p className="form-subtitle">Please enter a new password below to proceed</p>

                            <div className='form'>

                                <div className='form-content'>
                                    <label htmlFor='password'>Password</label>
                                     <div className='password-container'>

                                        <input type={formState.passwordVisible? "text" :"password"} className='password' id="password" placeholder='Your password' value={formState.password} onChange={(e)=>{

                                            setFormState(prevState => {
                                                return({
                                                    ...prevState,
                                                    password: e.target.value.trim(),
                                                    passwordErr: ""
                                                })
                                            })

                                        }}/>

                                        <Button onClick={()=>{
                                            setFormState(prevState => {
                                                return({
                                                    ...prevState,
                                                    passwordVisible: !prevState.passwordVisible
                                                })
                                            })
                                        }}>{formState.passwordVisible? <FaEye /> : <FaEyeSlash />}</Button>
                                    </div>

                                </div>

                                <div className='form-content'>
                                    <label htmlFor='password'>Repeat Password</label>

                                    <div className='password-container'>

                                        <input type={formState.passwordVisible? "text" :"password"} className='password-two' id="password-two" placeholder='Repeat your password' value={formState.passwordTwo} onChange={(e)=>{

                                            setFormState(prevState => {
                                                return({
                                                    ...prevState,
                                                    passwordTwo: e.target.value.trim(),
                                                    passwordTwoErr: ""
                                                })
                                            })

                                        }}/>

                                        <Button onClick={()=>{
                                            setFormState(prevState => {
                                                return({
                                                    ...prevState,
                                                    passwordVisible: !prevState.passwordVisible
                                                })
                                            })
                                        }}>{formState.passwordVisible? <FaEye /> : <FaEyeSlash />}</Button>
                                    </div>

                                </div>

                                <div className='form-content right'>
                                    <Link to="/reset-password" className='link-text'>Reset Password</Link>
                                </div>

                                <div className='form-content'>
                                    <Button loading={loading} className='submit-button' onClick={loginUser}>Login <span className='icon' ><FaSignInAlt /></span></Button>
                                </div>

                            </div>



                        </Col>

                    </Row>

                </Col>

            </Row>


        </div>
    

    </>
  )
}

export default Change
