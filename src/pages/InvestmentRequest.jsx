import { Button, Row } from 'antd'
import React from 'react'

const InvestmentRequest = () => {
  return (
    <>
    
        <Row justify="space-between" className='request-content'>

            <h1>Investment Request</h1>

        </Row>

        <Row justify="center" className='request-table request-content'>

            <table>

                <thead>
                    <tr>
                        <td>S/N</td>
                        <td>Email</td>
                        <td>Amount (&#8358;)</td>
                        <td>Account Name</td>
                        <td>Bank Name</td>
                        <td>Account Name</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>1</td>
                        <td>isaacseun63@gmail.com</td>
                        <td>10000</td>
                        <td>3150686249</td>
                        <td>First Bank</td>
                        <td>Omonimewa Isaac Duyilemi</td>
                        <td>
                            <div className='action-btn'>
                                <Button className="edit-button">Approve</Button>
                                <Button className="delete-button">Decline</Button>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>isaacseun63@gmail.com</td>
                        <td>10000</td>
                        <td>3150686249</td>
                        <td>First Bank</td>
                        <td>Omonimewa Isaac Duyilemi</td>
                        <td>
                            <div className='action-btn'>
                                <Button className="edit-button">Approve</Button>
                                <Button className="delete-button">Decline</Button>
                            </div>
                        </td>
                    </tr>

                </tbody>

            </table>

        </Row>
    
    </>
  )
}

export default InvestmentRequest
