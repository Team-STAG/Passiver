import { Button, Row } from 'antd'
import React, { useEffect, useState } from 'react'
import api from '../api/api';

const BonusRequest = () => {
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false);
    const [request, setRequest] = useState([]);
    const [modalOpened, setModalOpened] = useState(false)
    const [userDetails, setUserDetails] = useState("");

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

    useEffect(()=>{

        if(userDetails !== ""){

            setModalOpened(true)

        }else{
            setModalOpened(false)
        }

    }, [userDetails])


    

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
                            var { email} = reques;
                            var sn = (index + 1);

                            return(
                                <tr>
                                    <td>{sn}</td>
                                    <td>{email}</td>
                                    <td>
                                        <div className='action-btn'>
                                            <Button className="edit-button">Approve</Button>
                                            <Button className="view-button" onClick={()=>{

                                            }}>View details</Button>
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
