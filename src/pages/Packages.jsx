import { Button, Row } from 'antd'
import React from 'react'
import {FaPen, FaPlus, FaTrash} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';

import "../assets/styles/packages.css";

const Packages = () => {

  const navigate = useNavigate();

  return (
    <>

      <Row justify="space-between" className="package-header package-content">
        <h1>Packages</h1>

        <Link className="button" to="/account/packages/add">Add Packages <span className="icon"><FaPlus /></span></Link>
      </Row>


      <Row justify="center" className="package-table package-content">
        <table>
          <thead>
            <tr>
              <td>S/N</td>
              <td>Name</td>
              <td>Price (&#8358;)</td>
              <td>Fee</td>
              <td>Rate</td>
              <td>Created</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>
              <td>Gold</td>
              <td>2000</td>
              <td>200</td>
              <td>2%</td>
              <td>Sept-4-2022</td>
              <td>
                
                <div className="action-btn">

                  <Button className="edit-button" onClick={()=>{
                    navigate("/account/packages/edit/packageId");
                  }}><FaPen /></Button>
                  <Button className="delete-button"><FaTrash /></Button>

                </div>
              
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>Gold</td>
              <td>2000</td>
              <td>200</td>
              <td>2%</td>
              <td>Sept-4-2022</td>
              <td>
                
                <div className="action-btn">

                  <Button className="edit-button" onClick={()=>{
                    navigate("/account/packages/edit/packageId");
                  }}><FaPen /></Button>
                  <Button className="delete-button"><FaTrash /></Button>

                </div>
              
              </td>
            </tr>
          </tbody>x
        </table>
      </Row>
    
    </>
  )
}

export default Packages
