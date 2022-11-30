import { Col, Row } from 'antd'
import React from 'react'
import { Footer, Header } from '../components'

import "../assets/styles/landingpage.css"
import AboutImageOne from "../assets/images/about_image_one.png"
import AboutImageTwo from "../assets/images/about_image_two.png"
import AboutImageThree from "../assets/images/about_image_three.png"
import { Link } from 'react-router-dom'
import Accordion from '../components/Accordion'
import { SiteData } from '../data'

const LandingPage = () => {
  return (
    <>

        <Header />

        <div className='all-page-container'>

            <Row justify="center" className='landing-page-banner' id="home">

                <Col span={22}>
                    <Row justify="space-between">

                        <Col span={7} lg={{span: 7}}  md={{span: 10}} sm={{span: 17}} xs={{span: 24}} className="landing-page-banner-content">
                            <h1><span className='colored'>Grow </span>your funds now</h1>

                            <p>We offer you a great and simplified way to earn big with an ROI of 50%</p>

                            <a href="#about" className="button cta-button">Learn more</a>
                        </Col>

                    </Row>
                </Col>


            </Row>

            <Row justify="center" className="landing-page-reasons">

                <Col span={22}>

                    <Row justify="space-between">
                        
                        <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 7}} xs={{span: 24}} className="reason-card">
                            <h3 className='title'>Subscribe to Deluxe plan</h3>

                            <p>Earn at your best interest with the available plans involved in bringing you your financial success</p>
                        </Col>

                        <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 7}} xs={{span: 24}} className="reason-card">
                            <h3 className='title'>50% ROI</h3>

                            <p>Get a whooping 50% profit of whatever plan you subscribe to in 25 days</p>
                        </Col>


                        <Col span={6} lg={{span: 6}} md={{span: 7}} sm={{span: 7}} xs={{span: 24}} className="reason-card">
                            <h3 className='title'>35% Referral bonus</h3>

                            <p>Earn bonuses on referrals when you refer someone to invest with us</p>
                        </Col>
                    </Row>

                </Col>

            </Row>

            <Row justify="center" className="landing-page-about" id="about">

                <Col span={22}>

                    <h2 className="about-header">Why subscribe to passiveeer?</h2>

                    <p className="about-subtitle">Passiveeers is a strategic, Multipurpose Income generating system connecting Advert Vendors, Team builders, Affiliate Markers and game changes into a new level of Unrestricted Passive Income</p>

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

                            <img src={AboutImageTwo} alt="" />
                        </Col>

                        <Col span={12} lg={{span: 12, order: 1}} md={{span: 11, order: 1}} xs={{span: 24, order: 1}}  className="about-text">

                            <h3>Achieving financial freedom</h3>

                            <p>Financial freedom is a condition to which you're finally independent. It means that your income is sufficient to meet your daily needs</p>
                            
                        </Col>

                    </Row>  

                    <Row justify="space-between" className="about-content">


                        <Col span={10} lg={{span: 10, order: 1}} md={{span: 11, order: 1}} xs={{span: 24, order: 2}}  className="about-image">

                            <img src={AboutImageThree} alt="" />

                        </Col>

                        <Col span={12} lg={{span: 12, order: 2}} md={{span: 11, order: 2}} xs={{span: 24, order: 1}}  className="about-text">

                            <h3>24/7 Customer support</h3>

                            <p>We listen to our customers and work with them. our support team is always available to answer any of your questions. As owner, you have access to personalized financial advice, High quality investments, retirement tools and relevant market insights that help you build a future for those you love.</p>
                            
                        </Col>

                    </Row>  


                </Col>

            </Row>

            <Row justify="center" className="landing-page-faq">

                <Col span={22}>

                    <h2 className='faq-header'>Frequently Asked Questions</h2>

                    <p className="faq-subtitle">Below are some common question that comes up in the mind of passiveeer investors and the simplest answer to them</p>

                    <Accordion data={SiteData.faq} className="accordion-content" />


                </Col>

            </Row>  

            {/* <Row justify="center" className='earners-container'>

                <Col span={22}>

                    <h2>Top passiveeer earners</h2>

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
                                <tr className='special-user'>
                                    <td>1<span className="tag gold">Gold</span> </td>
                                    <td> dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr className='special-user'>
                                    <td>1 <span className="tag silver">Silver</span>  </td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr className='special-user'>
                                    <td>1 <span className="tag bronze">Bronze</span></td>
                                    <td>dasimems</td>
                                    <td>Aug-29-2022</td>
                                    <td>3500</td>
                                    <td>35,500</td>
                                </tr>

                                <tr>
                                    <td>1</td>
                                    <td>  dasimems</td>
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

            </Row> */}

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
