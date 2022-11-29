import { Button, Col, message, Row } from 'antd'
import React, { useCallback, useState } from 'react'
import { Header } from '../components'

import "../assets/styles/login.css"
import LoginBanner from "../assets/images/Nigerian-naira-1.png"
import { FaEye, FaEyeSlash, FaSignInAlt } from 'react-icons/fa'
import { Link, Navigate } from 'react-router-dom'
import useUserContext from '../context/UserContext'
import api from '../api/api'

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

    const {userState, addUserDetails } = useUserContext();

    const [loading, setLoading] = useState(false);

    const loginUser = useCallback(()=>{

        setLoading(true);

        var {email, password} = formState

        if(email !== "" && password !== ""){

            var data = {
                username: email,
                password
            }

            api
                .post("/auth/login", data)
                .then(res => {


                    var {token, user} = res.data;

                    addUserDetails(user, token).then(res => {

                        var {response} = res

                        message.success(response)

                    }).catch(err => {
                        const {response} = err;
                        message.error(response)
                    })

                }).catch(err => {
                    const {response} = err;

                    console.log(err);

                    if(response.data){

                        const {message: sentMessage} = response.data;

                        if(sentMessage){

                            message.error(sentMessage)
                        }else{
                            message.error("Something went wrong! Please try again later")
                        }


                    }else{
                        message.error("Something went wrong! Please try again later")
                    }
                }).finally(()=>{
                    setLoading(false);
                });
            
        }else{

            message.error("Please input your username and password!");
            setLoading(false)
        }

    }, [formState, addUserDetails])

    console.log(userState)

    if (userState.isLoggedIn && userState.token !== "" && userState.userData){

        return <Navigate to="/account" />;
    }

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

                                <h1>Keep Earning Big with passiveeer</h1>

                            </div>

                        </Col>

                        <Col span={12} lg={{span: 12}} xs={{span: 24}} className="login-form">

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

export default Login
