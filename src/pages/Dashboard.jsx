import { Button, Col, Row } from 'antd'
import React from 'react'
import { FaCashRegister, FaIcons } from 'react-icons/fa'

import "../assets/styles/dashboard.css"

const Dashboard = () => {
  return (
    
    <>
    
      <Row justify="space-between" className='dashboard-content'>

        <Col span={9} className="dashboard-title">
          <h1>Welcome David</h1>
          <p>Subscribe and earn!</p>
        </Col>
        
        <Col span={7} className="dashboard-packages">

          <div className='package-details'>

            <h3>Active Package</h3>
            <p>Coffee Bundle</p>

          </div>

          <div className='package-icon'>
            <span className="icon">
              <FaIcons />
            </span>
          </div>

          
        </Col>

      </Row>

      <Row justify="space-between" className='dashboard-content'>

        <Col span={7} className="dashboard-cards">

          <h3>Balance</h3>

          <div className='dashboard-cards-details balance-card-details'>
            
            <h2>&#8358;0</h2>
            <h2><FaCashRegister /></h2>

          </div>

        </Col>

        <Col span={7} className="dashboard-cards">

          <h3>Referral Bonus</h3>

          <div className='dashboard-cards-details'>
            
            <h2>&#8358;0</h2>

          </div>

          <p className='subtitle'><span className='special'>*</span> Refer and earn 35% of your referral's subscription</p>

        </Col>

        <Col span={7} className="dashboard-cards">

          <h3>Subscribe</h3>

          <p className='description'>Subscribe to any package and secure your future now.</p>

        </Col>

        

      </Row>

      <Row justify="space-between" className='dashboard-content'>

        <Col span={24} className="dashboard-referral">

          <div className='referral-content'>

            <h3>Referral Link</h3>

            <p>https://passivers.com/signup?ref=psfuib887</p>

          </div>

          <div className='referral-action'>
            <Button className='referral-link-copy'>
              Copy Link
            </Button>
          </div>

        </Col>
        

      </Row>

    </>
  )
}

export default Dashboard
