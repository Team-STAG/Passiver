import { Button, Col, Row} from 'antd'
import React, { useState } from 'react'
import { FaPencilAlt } from 'react-icons/fa'

import "../assets/styles/settings.css"

const Settings = () => {

    

  return (
    <>

        <Row justify="space-between" className="settings-content profile-details-container">

            <div className="profile-details">

                <div className="profile-image">

                </div>

                <div className="details-container">
                    <h3>David Ogra</h3>
                    <p className='details-balance'>&#8358;0</p>
                </div>

            </div>
            <div className="profile-action">
                <Button className="edit-profile-button">Edit Profile <span className="icon"><FaPencilAlt /></span></Button>
            </div>

        </Row>

        <Row justify="space-between" className="settings-content">

            <Col span={24} className="input-field">
                


            </Col>

            

        </Row>

    </>
  )
}

export default Settings
