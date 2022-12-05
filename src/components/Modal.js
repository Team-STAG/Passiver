import React, { useEffect, useState } from 'react'

const Modal = ({opened, children, style}) => {

  const [styleProps, setStyleProps] = useState({
    width: "100%",
    height: "100vh",
    position: "fixed",
    background: "rgba(0, 0, 0, .5)",
    zIndex: 999,
    display: "none",
    opacity: 0,
    transition: "0.5s ease all",
    top: "0px",
    left: "0px"
  })

  useEffect(()=>{

    if(opened){

      setStyleProps(prevProps => {
        return({
          ...style,
          ...prevProps,
          display: "block"
        })
      })

      setTimeout(()=>{

        setStyleProps(prevProps => {
        return({
          ...style,
          ...prevProps,
          opacity: 1
        })
      })

      }, 100)

    }else{

      setStyleProps(prevProps => {
        return({
          ...style,
          ...prevProps,
          opacity: 0
        })
      })

      setTimeout(()=>{

        setStyleProps(prevProps => {
        return({
          ...style,
          ...prevProps,
          display: "none"
        })
      })

      }, 1000)

    }


  }, [opened, style])



  return (
    <>
    
      <div className='modal-container' style={styleProps}>
        {children}
      </div>

    </>
  )
}

export default Modal
