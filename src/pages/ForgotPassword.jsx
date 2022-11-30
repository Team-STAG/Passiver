import { Button, Col, message, Row } from 'antd'
import React, { useCallback, useState } from 'react'
import { Header } from '../components'

import "../assets/styles/login.css"
import LoginBanner from "../assets/images/Nigerian-naira-1.png";
import {useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [formState, setFormState] = useState(
        {
            email: "",
            emailERr: "",
            password: "",
            passwordErr: "",
            passwordVisible: false
        }
    );

    const navigate = useNavigate()
    

    const [loading, setLoading] = useState(false);

    const loginUser = useCallback(()=>{

        setLoading(true);

        var {email} = formState

        if(email !== ""){
            
            setTimeout(()=>{

                navigate(`/confirm?email=${formState.email}`)

            }, 3000)

        }else{

            message.error("Please input your email to continue");
            setLoading(false)
        }

    }, [formState, navigate])

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

                                Forgot your password?

                            </h2>

                            <p className='form-subtitle'>Please enter email you used in opening an account on passiveeer, an email confirmation will be sent to the email</p>

                            <div className='form'>

                                <div className='form-content'>
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" className='email' id="email" placeholder='Your email' value={formState.email} onChange={(e)=>{

                                        setFormState(prevState => {
                                            return({
                                                ...prevState,
                                                email: e.target.value,
                                                emailErr: ""
                                            })
                                        })

                                    }}/>

                                </div>

                                

                                <div className='form-content'>
                                    <Button loading={loading} className='submit-button' onClick={loginUser}>Next</Button>
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

export default ForgotPassword
