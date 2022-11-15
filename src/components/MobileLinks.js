import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { Button } from 'antd'

const MobileLinks = ({isOpened, setIsOpened}) => {
    const location = useLocation();
    const [styleProp, setStyleProp] = useState({
        transition: "0.5s ease all",
        right: "-350px",
        width: "100%",
        maxWidth: "350px",
        background: "white",
        position: "absolute",
        top: "0px",
        height: "100%"
    })

    useEffect(()=>{

        if(isOpened){

            setTimeout(()=>{


                setStyleProp(prevStyle => {
                    return({
                        ...prevStyle,
                        right: "0px"    
                    })
                })

            }, 100)



        }else{

            setStyleProp(prevStyle => {
                return({
                    ...prevStyle,
                    right: "-350px"    
                })
            })



        }

    }, [isOpened])

  return (
    <>

    <div className='mobile-links' style={styleProp}>

        <Button className='close-mobile-link-button' onClick={()=>{
            if(setIsOpened){
                
                setIsOpened(false)
            }
        }}><MdClose /></Button>

        <ul className='mobile-links-content'>
            
            <li>{location.pathname === "/"? <a href='#home'>Home</a>: <Link to="/#home">Home</Link>}</li>
            <li>{location.pathname === "/"? <a href='#about'>About Us</a>: <Link to="/#about">About us</Link>}</li>
            <li>{location.pathname === "/"? <a href='#contact'>Contact Us</a>: <Link to="/#contact">Contact Us</Link>}</li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>

        </ul>

        

    </div>
    
    </>
  )
}

export default MobileLinks
