import { Button, Col, message, Row } from 'antd'
import React, { useCallback } from 'react'
import { FaCashRegister, FaIcons, FaMoneyBill } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import api from '../api/api'

import "../assets/styles/dashboard.css"
import useUserContext from '../context/UserContext'
import { formatPrice } from '../function/functions'

const Dashboard = () => {

  var navigate = useNavigate();
  const { userState, addUserDetails } = useUserContext();
  
  const {userData} = userState;

  const { userBalance, bonusBalance, name, investments, referalCode, bonuses, accountDetails, requestBonusWithdrawal } = userData || {};
  console.log(userData)


  const processBonusRequest = useCallback(() => {

    var ids = bonuses.filter(bonus => bonus.status.toLowerCase() === "unclaimed").map(bonus => {
      var {id} = bonus

      return(
        id

      )

      
    })

    if (accountDetails){
      
      api.post("/bonus/request", {ids})
      .then(res => {
        message.success("Bonus request processed");
        // console.log(res)
        var data = {
          ...userData,
          ...res.data[1]
        }
        addUserDetails(data);
      }).catch(err => {
        
        console.log(err);
  
        var {data} = err.response
  
        if(data.message){
  
          message.error(data.message)
        }else{
          message.error("Unable to process bonus withdrawal request")
        }
      })


    }else{

      message.error("Please add your account details on the settings page before you continue")

    }


  }, [bonuses, addUserDetails, userData, accountDetails])

  return (
    
    <>
    
      <Row justify="space-between" className='dashboard-content'>

        <Col span={9} lg={{span: 9}} md={{span: 9}} sm={{span: 11}} xs={{span: 24}} className="dashboard-title">
          <h1>Welcome {name}</h1>
          <p>Subscribe and earn!</p>
        </Col>
        
        <Col span={7} lg={{span: 7}} md={{span: 8}} sm={{span: 11}} xs={{span: 24}} className="dashboard-packages">

          <div className='package-details'>

            <h3>Active Subscriptions</h3>

            <div style={{display: "flex", flexWrap: "wrap", marginTop: "10px"}}>

              {investments.map((invest, index)=>{

                var {name} = invest?.package


                return(

                  
                  <span style={{background: "#B92BB3", borderRadius: "5px", padding: "5px", marginRight: "7px", color: "white", fontSize: "14px"}}>{name}</span>

                )

              })}
            </div>


          </div>

          <div className='package-icon'>
            <span className="icon">
              <FaIcons />
            </span>
          </div>

          
        </Col>

      </Row>

      <Row justify="space-between" className="dashboard-content">
        
        <Col span={24} className="dashboard-referral instruction-container">

          <h2 className="instruction-header">Please Note</h2>

          <ul>

            <li>Minimum Withdrawal is &#8358;1,000</li>
            <li>There will be 5% charges on each transactions</li>
            <li>Withdrawal are processed from 9 AM till 9 PM</li>

          </ul>

        </Col>

      </Row>

      <Row justify="space-between" className='dashboard-content'>

        <Col span={7} lg={{span: 7}} md={{span: 7}} xs={{span: 24}} className="dashboard-cards">

          <h3>Balance</h3>

          <div className='dashboard-cards-details balance-card-details'>
            
            <h2>&#8358;{formatPrice(parseInt(userBalance))}</h2>
            <h2><FaCashRegister /></h2>

          </div>

        </Col>

        <Col span={7} lg={{span: 7}} md={{span: 8}} xs={{span: 24}} className="dashboard-cards">

          <h3>Referral Bonus</h3>

          <div className='dashboard-cards-details'>
            
            <h2>&#8358;{formatPrice(parseInt(bonusBalance))}</h2>

          </div>

          {!requestBonusWithdrawal && parseInt(bonusBalance) >= 1000 && <Button style={{color: "green", fontSize: "17px"}} onClick={processBonusRequest}><FaMoneyBill /></Button>}

          <p className='subtitle'><span className='special'>*</span> Refer and earn 35% of your referral's subscription</p>

        </Col>

        <Col span={7} lg={{span: 7}} md={{span: 8}} xs={{span: 24}} className="dashboard-cards" onClick={()=>{
          navigate("/account/subscribe")
        }}>

          <h3>Subscribe</h3>

          <p className='description'>Subscribe and secure your future now.</p>

        </Col>

        

      </Row>

      <Row justify="space-between" className='dashboard-content'>

        <Col span={24} className="dashboard-referral" onClick={ async ()=>{
          if (navigator.share) {

            navigator.share({

              title: "Passivers referral link",

              url: `${window.location.origin}/signup?ref=${referalCode}`



            })

              .then(() => {
                
              })

              .catch((error) => {
                message.error("Sharing failed")
              })


          }else{
            try {
              await navigator.clipboard.writeText(`https://passiveeer.com/signup?ref=${referalCode}`);
              message.success("Referral link copied successfully")
            } catch (err) {
              message.error("Unable to copy link! please copy it manually")
              
            }

          }


        }}>

          <div className='referral-content'>

            <h3>Referral Link</h3>

            <p>{window.location.origin}/signup?ref={referalCode}</p>

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
