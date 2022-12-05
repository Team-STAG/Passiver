import { Row } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import api from '../api/api'

import "../assets/styles/investors.css"
import useUserContext from '../context/UserContext'
import { formatPrice } from '../function/functions'

const Investors = () => {

        const {userState} = useUserContext();

    const { userData } = userState;

    const {role } = userData || {};

    const [searchValue, setSearchValue] = useState("")
    const [users, setUsers] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [err, setErr] = useState(false)
    const [newUser, setNewUser] = useState([]);

    useEffect(()=>{

        api.get("/admin/users")
        .then(res => {
            setUsers(res.data)
        }).catch(err =>{
            setErr(true)
            console.log(err)

        }).finally(()=>{
            setLoaded(true)
        })
    }, [])

    useEffect(()=>{

        if(searchValue === ""){
            setNewUser(users)
        }else{
            var reg=  new RegExp(searchValue)
            var use = users.filter(user => reg.test(user?.email) || reg.test(user?.phoneNumber) || reg.test(user?.name))

            setNewUser(use);
        }

    }, [searchValue, users])

    if(role.toLowerCase() !== "admin"){
        return <Navigate to="/account" replace />
    }

    if(!loaded){
        return <p>loading...</p>
    }

    if(loaded && err) {
        return <p>Unable to fetch user data</p>
    }

  return (
    <>
    
        <Row justify="space-between" className="investors-header investor-content">

            <h1>Investors</h1>

            <div className='user-search'>

                <input type="text" onChange={(e)=>{

                    setSearchValue(e.target.value.trim());
                    
                }} value={searchValue} className="search-box" placeholder='Your search value here...' />

            </div>
            
        </Row>

        <Row className="investors-table investor-content overflow-table">
            <table>

                <thead>
                    <tr>
                        <td>S/N</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Mobile Number</td>
                        <td>Balance(&#8358;)</td>
                        <td>Investments</td>
                        <td>Actions</td>
                    </tr>
                </thead>

                <tbody>

                    {users.length < 1? (
                        <tr>
                            <td colSpan={20}>No users at the present moment</td>

                        </tr>
                    ): (

                        newUser.map((user, index) => {
                            console.log(user)
                            var sn = (index + 1)

                            var {name, email, phoneNumber, userBalance, investments, id} = user;

                            return(

                                <tr key={index}>

                                    <td>{sn}</td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phoneNumber}</td>
                                    <td>{formatPrice(parseInt(userBalance))}</td>
                                    <td>
                                        <span className="investment-tag">{investments.length}</span>
                                    </td>

                                    <td>
                                        <Link to={"/account/users/" + id}>View Details</Link>
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

export default Investors
