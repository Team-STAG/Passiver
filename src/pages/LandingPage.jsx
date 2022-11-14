import { Button, Col, Row } from 'antd'
import React from 'react'
import { Footer, Header } from '../components'

import "../assets/styles/landingpage.css"
import AboutImageOne from "../assets/images/about_image_one.png"
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <>

        <Header />

        <div className='landing-page-container'>

            <Row justify="space-between" className='landing-page-banner'>

                <Col span={7} push={1} className="landing-page-banner-content">
                    <h1><span className='colored'>INVEST</span> in your</h1>
                    <h1>future now</h1>

                    <p>We offer you a great and simplified way to invest now and earn big with an ROI of 50%</p>

                    <Button className="cta-button">Learn more</Button>
                </Col>

            </Row>

            <Row justify="center" className="landing-page-reasons">

                <Col span={22}>

                    <Row justify="space-between">
                        <Col span={6} className="reason-card">
                            <h3 className='title'>50% ROI</h3>

                            <p>Get back 50% of whatever you invested over a period of 3 months</p>
                        </Col>

                        <Col span={6} className="reason-card">
                            <h3 className='title'>50% ROI</h3>

                            <p>Get back 50% of whatever you invested over a period of 3 months</p>
                        </Col>

                        <Col span={6} className="reason-card">
                            <h3 className='title'>50% ROI</h3>

                            <p>Get back 50% of whatever you invested over a period of 3 months</p>
                        </Col>
                    </Row>

                </Col>

            </Row>

            <Row justify="center" className="landing-page-about">

                <Col span={22}>

                    <h2 className="about-header">Why subscribe to passivers?</h2>

                    <Row justify="space-between" className="about-content">

                        <Col span={10} className="about-image">

                            <img src={AboutImageOne} alt="" />

                        </Col>

                        <Col span={12} className="about-text">

                            <h3>Increased value for money</h3>

                            <p>Your money will be more useful and profitable in the long run. Through investing, you manange your money to  yield high return</p>
                            
                        </Col>

                    </Row>

                    <Row justify="space-between" className="about-content">


                        <Col span={12} className="about-text">

                            <h3>Increased value for money</h3>

                            <p>Your money will be more useful and profitable in the long run. Through investing, you manange your money to  yield high return</p>
                            
                        </Col>

                        
                        <Col span={10} className="about-image">

                            <img src={AboutImageOne} alt="" />

                        </Col>

                    </Row>  

                    <Row justify="space-between" className="about-content">


                        <Col span={10} className="about-image">

                            <img src={AboutImageOne} alt="" />

                        </Col>

                        <Col span={12} className="about-text">

                            <h3>Increased value for money</h3>

                            <p>Your money will be more useful and profitable in the long run. Through investing, you manange your money to  yield high return</p>
                            
                        </Col>

                    </Row>  


                </Col>

            </Row>

            <Row justify="center" className="landing-page-ad">
                <Col span={22}>

                    <Row justify="space-between">
                        <Col span={15} className="add-text">

                            <h3>Register and start <span className='colored'>EARNING</span> now!</h3>


                        </Col>
                        <Col span={7} className="add-button">

                            <Link to="/signup" className="button">Sign up</Link>

                        </Col>
                    </Row>

                </Col>
            </Row>  

        </div>

        <Footer />

    </>
  )
}

export default LandingPage
