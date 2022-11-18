import { Button, Col, Row } from 'antd'
import React from 'react'
import { Footer, Header } from '../components'

import "../assets/styles/landingpage.css"
import AboutImageOne from "../assets/images/about_image_one.png"
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import { SiteData } from '../data'

const LandingPage = () => {
  return (
    <>

        <Header />

        <div className='all-page-container'>

            <Row justify="space-between" className='landing-page-banner' id="home">

                <Col span={7} push={1} lg={{span: 7}}  md={{span: 10}} sm={{span: 17}} xs={{span: 24}} className="landing-page-banner-content">
                    <h1><span className='colored'>INVEST</span> in your</h1>
                    <h1>future now</h1>

                    <p>We offer you a great and simplified way to invest now and earn big with an ROI of 50%</p>

                    <Button className="cta-button">Learn more</Button>
                </Col>

            </Row>

            <Row justify="center" className="landing-page-reasons">

                <Col span={22}>

                    <Row justify="space-between">
                        <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 7}} xs={{span: 24}} className="reason-card">
                            <h3 className='title'>50% ROI</h3>

                            <p>Get back 50% of whatever you invested over a period of 3 months</p>
                        </Col>

                        <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 7}} xs={{span: 24}} className="reason-card">
                            <h3 className='title'>50% ROI</h3>

                            <p>Get back 50% of whatever you invested over a period of 3 months</p>
                        </Col>

                        <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 7}} xs={{span: 24}} className="reason-card">
                            <h3 className='title'>50% ROI</h3>

                            <p>Get back 50% of whatever you invested over a period of 3 months</p>
                        </Col>
                    </Row>

                </Col>

            </Row>

            <Row justify="center" className="landing-page-about" id="about">

                <Col span={22}>

                    <h2 className="about-header">Why subscribe to passivers?</h2>

                    <Row justify="space-between" className="about-content">

                        <Col span={10} lg={{span: 10, order: 1}} md={{span: 11, order: 1}} xs={{span: 24, order: 2}} className="about-image">

                            <img src={AboutImageOne} alt="" />

                        </Col>

                        <Col span={12} lg={{span: 12, order: 2}} md={{span: 11, order: 2}} xs={{span: 24, order: 1}} className="about-text">

                            <h3>Increased value for money</h3>

                            <p>Your money will be more useful and profitable in the long run. Through investing, you manange your money to  yield high return</p>
                            
                        </Col>

                    </Row>

                    <Row justify="space-between" className="about-content">

                        
                        <Col span={10} lg={{span: 10, order: 2}} md={{span: 11, order: 2}} xs={{span: 24, order: 2}}  className="about-image">

                            <img src={AboutImageOne} alt="" />

                        </Col>

                        <Col span={12} lg={{span: 12, order: 1}} md={{span: 11, order: 1}} xs={{span: 24, order: 1}}  className="about-text">

                            <h3>Increased value for money</h3>

                            <p>Your money will be more useful and profitable in the long run. Through investing, you manange your money to  yield high return</p>
                            
                        </Col>

                    </Row>  

                    <Row justify="space-between" className="about-content">


                        <Col span={10} lg={{span: 10, order: 1}} md={{span: 11, order: 1}} xs={{span: 24, order: 2}}  className="about-image">

                            <img src={AboutImageOne} alt="" />

                        </Col>

                        <Col span={12} lg={{span: 12, order: 2}} md={{span: 11, order: 2}} xs={{span: 24, order: 1}}  className="about-text">

                            <h3>Increased value for money</h3>

                            <p>Your money will be more useful and profitable in the long run. Through investing, you manange your money to  yield high return</p>
                            
                        </Col>

                    </Row>  


                </Col>

            </Row>

            <Row justify="center" className="landing-page-faq">

                <Col span={22}>

                    <h2 className='faq-header'>Frequently Asked Questions</h2>

                    <p className="faq-subtitle">Below are some common question that comes up in the mind of Passivers investors and the simplest answer to them</p>

                    <Accordion data={SiteData.faq} className="accordion-content" />


                </Col>

            </Row>  

            <Row justify="center" className='earners-container'>

                <Col span={22}>

                    <h2>Top passivers earners</h2>

                    <div className='earners-table'>

                        <table>

                            <thead>
                                <tr>
                                    <td>S/N</td>
                                    <td>Username</td>
                                    <td>Date Started</td>
                                    <td>Price (&#8358;)</td>
                                    <td>Return (&#8358;)</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>



                </Col>

            </Row>

            <Row justify="center" className="landing-page-ad" id="contact">
                <Col span={22}>

                    <Row justify="space-between" className="ad-content">
                        <Col span={15} lg={{span: 15}} md={{span: 15}} sm={{span: 15}} xs={{span: 24}} className="add-text">

                            <h3>Register and start <span className='colored'>EARNING</span> now!</h3>


                        </Col>
                        <Col span={7} lg={{span: 7}} md={{span: 7}} sm={{span: 7}} xs={{span: 24}} className="ad-button">

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
