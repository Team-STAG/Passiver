import { Button, Col, Row } from 'antd'
import React, { useState } from 'react'
import { Header } from '../components'

import "../assets/styles/login.css"
import LoginBanner from "../assets/images/Nigerian-naira-1.png"
import { FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Login = () => {
    const [formState, setFormState] = useState(
        {
            email: "",
            emailERr: "",
            password: "",
            passwordErr: "",
            passwordVisible: false
        }
    );

    const [loading, setLoading] = useState(false)
  return (
    <>
        <Header />

        <div className='all-page-container'>

            
            <Row justify="center" className='login-container'>

                <Col span={20} className="login-content">

                    <Row justify="space-between">

                        
                        <Col span={12} className="login-image">

                            <img src={LoginBanner} alt="nigeria Naira" />

                            <div className='image-overlay'>

                                <h1>Keep Earning Big with Passivers</h1>

                            </div>

                        </Col>

                        <Col span={12} className="login-form">

                            <h2 className='form-title'>

                                Welcome Back

                            </h2>

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

                                <div className='form-content right'>
                                    <Link to="reset-password" className='link-text'>Reset Password</Link>
                                </div>

                                <div className='form-content'>
                                    <Button className='submit-button'>Login <span className='icon'><FaSignInAlt /></span></Button>
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

export default Login
