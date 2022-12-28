import { Row, message } from 'antd'
import React, { useCallback } from 'react'
import { Link, Navigate } from 'react-router-dom'

import "../assets/styles/subscription.css"
import useUserContext from '../context/UserContext'
import { formatDate, formatPrice } from '../function/functions'
import api from '../api/api'

const Subscription = () => {
    const {userState} = useUserContext();

    const { userData } = userState;

    const { investments, role } = userData || {};

    const processWithdrawal = useCallback((id)=>{

        return new Promise((resolve, reject)=>{

            api.post(`/investment/request-yield/${id}`)
                .then(res => {
                    resolve(res);

                }).catch((err)=>{
                    reject(err);
                })

        })

    }, [])

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
                            console.log(investment)

                            var { status, createdAt, id } = investment
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
                                        <button disabled={status && (status.toLowerCase() !== "started" && status.toLowerCase() !== "pending" && status.toLowerCase() !== "requested")? false : true} className='withdraw-button'
                                        onClick={(e)=>{
                                            e.target.setAttribute("disabled", "true");
                                            processWithdrawal(id).then((res)=>{
                                                console.log(res);
                                                message.success("Withdrawal Processed Successfully");


                                            }).catch((err)=>{
                                                console.log(err)
                                                message.error("Unable to process withdrawal! Please try again later")
                                                e.target.removeAttribute("disabled");
                                            })

                                        }}>WithDraw</button>

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
