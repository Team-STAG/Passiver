import { Button, Col, message, Row } from 'antd'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Header } from '../components'

import "../assets/styles/login.css"
import LoginBanner from "../assets/images/Nigerian-naira-1.png";
import { Navigate, useNavigate, useSearchParams } from 'react-router-dom';

const Confirm = () => {
  const [formState, setFormState] = useState(
        {
            codeOne: "",
            codeTwo: "",
            codeThree: "",
            codeFour: "",
            codeFive: "",
            codeSix: "",
        }
    );

    const navigate = useNavigate()

    const inputBoxParentRef = useRef("");
    

    const [loading, setLoading] = useState(false);
    const [autoSubmit, setAutoSubmit] = useState(false)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [emailAvailable, setEmailAvailable] = useState(true)

    const [searchParams] = useSearchParams();

    const loginUser = useCallback(()=>{

        setLoading(true);
        setButtonDisabled(true)

        var {codeOne, codeTwo, codeThree, codeFour, codeFive, codeSix} = formState;

        
        if(codeOne !== "" && codeTwo !== "" && codeThree !== "" && codeFour !== "" && codeFive !== "" && codeSix !== ""){
            
            var code = `${codeOne}${codeTwo}${codeThree}${codeFour}${codeFive}${codeSix}`;

            console.log(code)

            setTimeout(()=>{
                
                if(code === "555555"){
                    navigate("/change-password")
                }else{
                    message.error("Invalid code")
                    setButtonDisabled(false)
                    setLoading(false);
                }
            }, 3000)

        }else{
            message.error("Please input the code sent to your email to continue")
        }

    }, [formState, navigate])

    useEffect(()=>{

        var {codeOne, codeTwo, codeThree, codeFour, codeFive, codeSix} = formState;

        if(codeOne !== "" && codeTwo !== "" && codeThree !== "" && codeFour !== "" && codeFive !== "" && codeSix !== ""){

            setButtonDisabled(false)

            if(!autoSubmit){

                loginUser();
                setAutoSubmit(true)
            }


        }

    }, [formState, loginUser, autoSubmit])


    useEffect(()=>{

        if(!searchParams.has("email") || searchParams.get("email") === ""){
            setEmailAvailable(false)
        }

    }, [searchParams])

  return (
    <>
        {!emailAvailable && <Navigate to="/reset-password"/>}
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

                                Enter Confirmation Code

                            </h2>

                            <p className='form-subtitle'>Please enter the six digit confirmation code that was sent to your email</p>

                            <div className='form'>

                                <div className='form-content code-form' ref={inputBoxParentRef}>

                                    <input type="number" className='code-input-box' value={formState.codeOne} onChange={(e)=>{
                                        var inputValue = e.target.value.trim();

                                        if(inputValue.toString().length > 1){
                                            
                                            inputValue = e.target.value.trim().slice((e.target.value.trim().toString().length - 1), )
                                        }
                                        setFormState(prevState => {

                                            return({
                                                ...prevState,
                                                codeOne: inputValue.toString()
                                            })

                                        })


                                        if(inputValue !== ""){

                                            e.target.nextElementSibling.focus();

                                        }
                                    }} />

                                    <input type="number" className='code-input-box' value={formState.codeTwo} onChange={(e)=>{
                                        var inputValue = e.target.value.trim();

                                        if(inputValue.toString().length > 1){
                                            
                                            inputValue = e.target.value.trim().slice((e.target.value.trim().toString().length - 1), )
                                        }
                                        setFormState(prevState => {

                                            return({
                                                ...prevState,
                                                codeTwo: parseInt(inputValue)
                                            })

                                        })

                                        if(inputValue !== ""){

                                            e.target.nextElementSibling.focus();

                                        }
                                    }} />

                                    <input type="number" className='code-input-box' value={formState.codeThree} onChange={(e)=>{
                                        var inputValue = e.target.value.trim();

                                        if(inputValue.toString().length > 1){
                                            
                                            inputValue = e.target.value.trim().slice((e.target.value.trim().toString().length - 1), )
                                        }
                                        setFormState(prevState => {

                                            return({
                                                ...prevState,
                                                codeThree: parseInt(inputValue)
                                            })

                                        })

                                        if(inputValue !== ""){

                                            e.target.nextElementSibling.focus();

                                        }
                                    }} />

                                    <input type="number" className='code-input-box' value={formState.codeFour} onChange={(e)=>{
                                        var inputValue = e.target.value.trim();

                                        if(inputValue.toString().length > 1){
                                            
                                            inputValue = e.target.value.trim().slice((e.target.value.trim().toString().length - 1), )
                                        }
                                        setFormState(prevState => {

                                            return({
                                                ...prevState,
                                                codeFour: parseInt(inputValue)
                                            })

                                        })

                                        if(inputValue !== ""){

                                            e.target.nextElementSibling.focus();

                                        }
                                    }} />

                                    <input type="number" className='code-input-box' value={formState.codeFive} onChange={(e)=>{
                                        var inputValue = e.target.value.trim();

                                        if(inputValue.toString().length > 1){
                                            
                                            inputValue = e.target.value.trim().slice((e.target.value.trim().toString().length - 1), )
                                        }
                                        setFormState(prevState => {

                                            return({
                                                ...prevState,
                                                codeFive: parseInt(inputValue)
                                            })

                                        })

                                        if(inputValue !== ""){

                                            e.target.nextElementSibling.focus();

                                        }
                                    }} />

                                    <input type="number" className='code-input-box' value={formState.codeSix} onChange={(e)=>{
                                        var inputValue = e.target.value.trim();

                                        if(inputValue.toString().length > 1){
                                            
                                            inputValue = e.target.value.trim().slice((e.target.value.trim().toString().length - 1), )
                                        }
                                        setFormState(prevState => {

                                            return({
                                                ...prevState,
                                                codeSix: parseInt(inputValue)
                                            })

                                        })

                                    }} />
                                    

                                </div>

                                

                                <div className='form-content'>
                                    <Button loading={loading} disabled={buttonDisabled}className='submit-button' onClick={loginUser}>Next</Button>
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

export default Confirm
