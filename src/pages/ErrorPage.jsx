import { Player } from '@lottiefiles/react-lottie-player'
import { Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import ErrorAnim  from "../assets/images/106720-404-page.json"

const ErrorPage = () => {
  return (
    <Row justify={"center"} style={{flexDirection: "column", alignItems: "center"}}>

      <Player 
        style={{maxWidth: "500px", width: "100%"}}
        autoplay
        loop
        src={ErrorAnim}
      />

      <Link style={{fontSize: "17px"}} to="/">Back to home</Link>
    
    </Row>
  )
}

export default ErrorPage
