import { Button, Row } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

import "../assets/styles/subscription.css"

const Subscription = () => {
  return (
    <>
    
        <Row justify="space-between" className="subscription-content subscription-header-content">
            <h1 className="subscription-header">Subscription</h1>
            <Link to="/account/subscribe" className='button'>Subscribe</Link>
        </Row>

        <Row justify="center" className="subscription-content">

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

                    {/* <tr>
                        <td colspan="20" className="empty-data">No Purchased plan Yet</td>
                    </tr> */}

                    <tr>
                        <td>1</td>
                        <td>coffee</td>
                        <td>10,000</td>
                        <td>15,000</td>
                        <td>12-Aug-2022</td>
                        <td>Investing</td>
                        <td>
                            <Button className='withdraw-button'>WithDraw</Button>
                        </td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>coffee</td>
                        <td>10,000</td>
                        <td>15,000</td>
                        <td>12-Aug-2022</td>
                        <td>Investing</td>
                        <td>
                            <Button className='withdraw-button' disabled>WithDraw</Button>
                        </td>
                    </tr>

                </tbody>

            </table>

        </Row>

    </>
  )
}

export default Subscription
