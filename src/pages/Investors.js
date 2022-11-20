import { Row } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "../assets/styles/investors.css"

const Investors = () => {

    const [searchValue, setSearchValue] = useState("")

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

        <Row justify="center" className="investors-table investor-content">
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

                    <tr>

                        <td>1</td>
                        <td>Duyil Ayomid</td>
                        <td>isaacseun63@gmail.com</td>
                        <td>+2349036634645</td>
                        <td>3000</td>
                        <td>
                            <span className="investment-tag">Package Name</span>
                        </td>

                        <td>
                            <Link to="/account/users/userid">View Details</Link>
                        </td>

                    </tr>

                    <tr>

                        <td>1</td>
                        <td>Duyil Ayomid</td>
                        <td>isaacseun63@gmail.com</td>
                        <td>+2349036634645</td>
                        <td>3000</td>
                        <td>
                            No active package
                        </td>

                        <td>
                            <Link to="/account/users/userid">View Details</Link>
                        </td>

                    </tr>

                </tbody>

            </table>
        </Row>
    
    </>
  )
}

export default Investors
