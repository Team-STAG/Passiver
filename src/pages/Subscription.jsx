import { Button, Row } from 'antd'
import React from 'react'
import { Link, Navigate } from 'react-router-dom'

import "../assets/styles/subscription.css"
import useUserContext from '../context/UserContext'
import { formatDate, formatPrice } from '../function/functions'

const Subscription = () => {
    const {userState} = useUserContext();

    const { userData } = userState;

    const { investments, role } = userData || {};

    console.log(role)

    if(role.toLowerCase() === "admin"){
        return <Navigate to="/account/packages" replace />
    }
  return (
    <>
    
        <Row justify="space-between" className="subscription-content subscription-header-content">
            <h1 className="subscription-header">Subscription</h1>
            <Link to="/account/subscribe" className='button'>Subscribe</Link>
        </Row>

        <Row justify="center" className="subscription-content overflow-table">

            <table>

                <thead>

                    <tr>

                        <td>S/N</td>
                        <td>Plan</td>
                        <td>Price(&#8358;)</td>
                        <td>Returns(&#8358;)</td>
                        <td>Date</td>
                        <td>Status</td>
                        <td>Action</td>

                    </tr>
                </thead>

                <tbody>

                      {investments.length > 0? (

                        investments.map((investment, index)=>{

                            var { status, createdAt } = investment
                            var { name, price, maxRate } = investment?.package
                            var sn = (index + 1);
                            var profit = parseInt((parseInt(maxRate) / 100) * price);
                            
                            return(

                                <tr key={index}>
                                    <td>{sn}</td>
                                    <td>{name}</td>
                                    <td>{formatPrice(price)}</td>
                                    <td>{formatPrice(profit)}</td>
                                    <td>{formatDate(createdAt)}</td>
                                    <td>{status}</td>
                                    <td>
                                        <Button disabled={status && (status.toLowerCase() !== "started" && status.toLowerCase() !== "pending" && status.toLowerCase() !== "requested")? false : true} className='withdraw-button'>WithDraw</Button>
                                    </td>
                                </tr>
                                
                            )
                        })

                      ) : (

                        <tr>
                            <td colspan = "20" className = "empty-data">No Purchased plan Yet</td>
                        </tr>

                      )}

                    

                </tbody>

            </table>

        </Row>

    </>
  )
}

export default Subscription
