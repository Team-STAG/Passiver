import { Row } from 'antd'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Request = () => {
  return (
    <>

        <Row justify="space-between">
            <Link to="/account/requests/bonus">Bonus</Link>
            <Link to="/account/requests/withdrawal">Withdrawal</Link>
            <Link to="/account/requests/investment">Investment</Link>
        </Row>

        <Row>
            <Outlet />
        </Row>
    
    </>
  )
}

export default Request
