import { Row } from 'antd'
import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

import "../assets/styles/request.css";
import useUserContext from '../context/UserContext';

const Request = () => {
  const { userState } = useUserContext();

  const { userData } = userState;

  const {  role } = userData || {};
  if (role.toLowerCase() !== "admin") {
    return <Navigate to="/account" replace />
  }
  return (
    <>

        <Row justify="space-between" className="request-content request-header-link">
            <Link className="button" to="/account/requests/bonus">Bonus</Link>
            <Link className="button" to="/account/requests/withdrawal">Withdrawal</Link>
            {/* <Link className="button" to="/account/requests/investment">Investment</Link> */}
        </Row>

        <Outlet />
    
    </>
  )
}

export default Request
