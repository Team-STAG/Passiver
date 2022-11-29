import React, { useEffect, useState } from 'react'
import { Row } from 'antd'

import "../assets/styles/subscription.css"
import api from '../api/api'

const Transaction = () => {

    const [availableTransactions, setAvailableTransactions] = useState([])
    const [loaded, setLoading] = useState(false)
    const [err, setErr] = useState(false)

    useEffect(()=>{

        api.get("/transactions")
        .then(res => {

            setAvailableTransactions(res.data);

        }).catch(err => {
            setErr(true)
            
        }).finally(()=>{
            setLoading(true)
        })

    }, [])

    if (!loaded) {
        return <Row justify="center">
            <h2>loading...</h2>
        </Row>
    }

    if (loaded && err) {
        return <Row justify="center">
            <h2>Unable to get vendors list</h2>
        </Row>
    }

    

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
                        {/* <td>Status</td> */}

                    </tr>
                </thead>

                <tbody>

                      {availableTransactions.length < 1? (
                        <tr>
                            <td colspan="20" className="empty-data">No Transactions Yet</td>
                        </tr>

                      ): (

                        availableTransactions.map((transaction, index)=> {
                            console.log(transaction);

                            var {amount, title, date} = transaction;

                            var sn = (index +1)
                            return(

                                <tr key={index}>
                                    <td>{sn}</td>
                                    <td>Made {title}</td>
                                    <td>{date}</td>
                                    <td>{amount}</td>
                                    {/* <td>
                                        <span className='status pending'>In Progress</span>
                                    </td> */}
                                </tr>
                                
                            )
                        })

                      )}

                    

                </tbody>

            </table>

        </Row>
    
    </>
  )
}

export default Transaction
