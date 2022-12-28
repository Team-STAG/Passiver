import { Button, Row, message } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import api from '../api/api';

const WithdrawalRequest = () => {
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false);
    const [request, setRequest] = useState([]);

    useEffect(() => {

        api.get('/admin/investments/pending')
            .then(res => {
                setRequest(res.data);
            }).catch(err => {
                setErr(true);
                console.log(err)
            }).finally(() => {
                setLoaded(true)
            })

    }, [])

    console.log(request)

    const approveWithdraw = useCallback((id)=>{

        return new Promise((resolve, reject) => {

            api.patch(`/admin/investments/${id}/approve`)
            .then(res => {
                resolve(res)

            }).catch(err => {
                reject(err)

            })

        });

    }, [])

    if (!loaded) {

        return <p>loading...</p>;
    }

    if (loaded && err) {
        return <p>Error fetching withdrawal request</p>
    }

    return (
        <>

            <Row justify="space-between" className='request-content'>

                <h1>Withdrawal Request</h1>

            </Row>

            <Row justify="start" className='request-table request-content'>

                <table className="withdrawal-request-table">

                    <thead>
                        <tr>
                            <td>S/N</td>
                            <td>Email</td>
                            <td>Price (&#8358;)</td>
                            <td>Returns (&#8358;)</td>
                            <td>Account Name</td>
                            <td>Bank Name</td>
                            <td>Account Name</td>
                            <td>Actions</td>
                        </tr>
                    </thead>

                    <tbody>

                        {request.length < 1 ? (
                            <tr>
                                <td colSpan={20}>No withdrawal requested at the present moment</td>
                            </tr>
                        ) : (

                            request.map((requestDetails, index) => {
                                var {id, package: packageDetails, user} = requestDetails;
                                var {maxRate, price} = packageDetails;
                                var { email, accountDetails } = user;
                                var { accountNo, bank, name } = accountDetails;

                                var investmentReturn = (parseInt(maxRate) / 100) * price;

                                var sn = (index + 1)

                                return (
                                    <tr key={index}>
                                        <td>{sn}</td>
                                        <td>{email}</td>
                                        <td>{price}</td>
                                        <td>{investmentReturn}</td>
                                        <td>{accountNo}</td>
                                        <td>{bank}</td>
                                        <td>{name}</td>
                                        <td>
                                            <div className='action-btn'>
                                                <button className="edit-button" onClick={(e)=>{
                                                    e.target.setAttribute("disabled", "true");
                                                    approveWithdraw(id).then(res => {
                                                        message.success("Request approved successfully");

                                                    }).catch((res)=>{
                                                        message.error("Unable to approve withdrawal request")
                                                        e.target.removeAttribute("disabled");
                                                    })
                                                    
                                                }}>Approve</button>
                                            </div>
                                        </td>
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

export default WithdrawalRequest
