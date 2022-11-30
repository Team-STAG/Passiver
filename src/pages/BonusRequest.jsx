import { Button, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import api from '../api/api';

const BonusRequest = () => {
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false);
    const [request, setRequest] = useState([]);
    const [users, setUsers] = useState([])

    useEffect(()=>{

        api.get('/admin/bonus/request')
        .then(res => {
            setRequest(res.data);
        }).catch(err => {
            setErr(true);
            console.log(err)
        }).finally(()=>{
            setLoaded(true)
        })


    }, [])

    const fetchData = useCallback((id)=>{

        if(id){

            api.get(`/admin/user/${id}`)
                .then((res)=>{

                    // setUsers(prevState => {
                    //     return [...prevState, res.data]
                    // })

                })
        }


    }, [])

    console.log(users)


    

    if(!loaded){

        return <p>loading...</p>;
    }

    if(loaded && err){
        return <p>Error fetching bonus request</p>
    }


  return (
    <>
    
        <Row justify="space-between" className='request-content'>

            <h1>Bonus Request</h1>

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

                      {request.length < 1? (
                        <tr>
                            <td colSpan={20}>No bonus withdrawal request at the present moment</td>
                        </tr>
                      ): (

                        request.map((reques, index) => {
                            var {id, email} = reques;
                            var sn = (index + 1);

                            fetchData(id)
                            return(
                                <tr>
                                    <td>{sn}</td>
                                    <td>{email}</td>
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

                            )

                        })

                      )}

                </tbody>

            </table>

        </Row>
    
    </>
  )
}

export default BonusRequest
