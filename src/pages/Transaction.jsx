import React from 'react'
import { Row } from 'antd'

import "../assets/styles/subscription.css"

const Transaction = () => {
  return (
    <>

    <Row justify="space-between" className="subscription-content subscription-header-content">
            <h1 className="subscription-header">Transaction List</h1>
            {/* <Link to="/account/packages" className='button'>Packages</Link> */}
        </Row>

        <Row justify="center" className="subscription-content">

            <table>

                <thead>

                    <tr>

                        <td>S/N</td>
                        <td>Description</td>
                        <td>Date</td>
                        <td>Amount(&#8358;)</td>
                        <td>Status</td>

                    </tr>
                </thead>

                <tbody>

                    {/* <tr>
                        <td colspan="20" className="empty-data">No Transactions Yet</td>
                    </tr> */}

                    <tr>
                        <td>1</td>
                        <td>Withdrew coffee bundle investment</td>
                        <td>12-Aug-2022</td>
                        <td>15,000</td>
                        <td>
                            <span className='status pending'>In Progress</span>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Withdrew coffee bundle investment</td>
                        <td>12-Aug-2022</td>
                        <td>15,000</td>
                        <td>
                            <span className='status success'>Success</span>
                        </td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>Withdrew coffee bundle investment</td>
                        <td>12-Aug-2022</td>
                        <td>15,000</td>
                        <td>
                            <span className='status failed'>Failed</span>
                        </td>
                    </tr>

                    

                </tbody>

            </table>

        </Row>
    
    </>
  )
}

export default Transaction
