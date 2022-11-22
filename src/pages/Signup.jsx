import { Button, Col, message, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import { Header } from '../components'

import "../assets/styles/login.css"
import LoginBanner from "../assets/images/Nigerian-naira-1.png"
import { FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa'
import { Link, useSearchParams } from 'react-router-dom'

const Signup = () => {
    const [formState, setFormState] = useState(
        {
            email: "",
            emailERr: "",
            password: "",
            passwordTwo: "",
            passwordTwoErr: "",
            ref: "",
            passwordErr: "",
            mobileNumber: "",
            mobileNumberErr: "",
            passwordVisible: false,
            terms: true
        }
    );

    const [searchParams] = useSearchParams();

    const [loading, setLoading] = useState(false);

    useEffect(()=>{

        if(searchParams.has("ref") && searchParams.get("ref") !== ""){
            setFormState(prevState => {
                return({
                    ...prevState,
                    ref: searchParams.get("ref")
                })
            })
        }

    }, [searchParams])

    const loginUser = useCallback(()=>{

        

        var {email, password, passwordTwo, mobileNumber, terms} = formState;

        if(email === ""){
            message.error("Please enter your email")

        }else if(mobileNumber === ""){
            message.error("Please input your phone number")

        }else if(password === ""){
            message.error("Please enter your password")
            
        }else if(password.trim().length < 8){
            message.error("Password must be 8 or more characters")
            
        }else if(passwordTwo !== password){
            message.error("Your password doesn't match")
            
        }else if(!terms){
            message.error("you must agree to the terms and condition to continue")
        }else{
            setLoading(true);
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

                                <h1>Keep Earning Big with Passivers</h1>

                            </div>

                        </Col>

                        <Col span={12} lg={{span: 12}} xs={{span: 24}} className="login-form">

                            <h2 className='form-title'>

                                Hi There! Welcome

                            </h2>

                            <p className='form-subtitle'>Please enter your details below to enable us open an account for you.</p>

                            <div className='form'>

                                <div className='form-content'>
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" className='email' id="email" placeholder='Your email' value={formState.email} onChange={(e)=>{

                                        setFormState(prevState => {
                                            return({
                                                ...prevState,
                                                email: e.target.value.trim(),
                                                emailErr: ""
                                            })
                                        })

                                    }}/>

                                </div>

                                <div className='form-content'>
                                    <label htmlFor='phone-number'>Phone Number</label>
                                    <input type="tel" className='phone-number' id="phone-number" placeholder='Your phone number' value={formState.mobileNumber} onChange={(e)=>{

                                        setFormState(prevState => {
                                            return({
                                                ...prevState,
                                                mobileNumber: e.target.value.trim(),
                                                mobileNumberErr: ""
                                            })
                                        })

                                    }}/>

                                </div>

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
                                    <label htmlFor='password-two'>Repeat Password</label>

                                    <div className='password-container'>

                                        <input type={formState.passwordVisible? "text" :"password"} className='password-two' id="password-two" placeholder='Repeat Your password' value={formState.passwordTwo} onChange={(e)=>{

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

                                <div className='form-content'>

                                    <div className="password-container">

                                        <input id='terms' type="checkbox" checked={formState.terms} onChange={()=>{
                                            setFormState(prevState => {
                                                return({
                                                    ...prevState,
                                                    terms: !prevState.terms
                                                })
                                            })
                                        }} />
                                        <label htmlFor='terms'>
                                            &nbsp;&nbsp; I agree to the &nbsp;
                                            <Link to="/terms" className='link-text'>Terms and condition</Link>
                                            
                                        </label>

                                    </div>
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

export default Signup
