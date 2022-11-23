import { Button, Row } from 'antd'
import React from 'react'
import {FaPen, FaPlus, FaTrash} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';

import "../assets/styles/packages.css";
import { SiteData } from '../data';

const Vendors = () => {
  const navigate = useNavigate();
  const {vendors} = SiteData;

  return (
    <>

      <Row justify="space-between" className="package-header package-content">
        <h1>Packages</h1>

        <Link className="button" to="/account/vendors/add">Add vendors <span className="icon"><FaPlus /></span></Link>
      </Row>


      <Row justify="center" className="package-table package-content">
        <table>
          <thead>
            
            <tr>
              <td>S/N</td>
              <td>Number</td>
              <td>Created</td>
              <td>Actions</td>
            </tr>
          </thead>

          <tbody>

            {vendors.map((vendor, index) => {
                var {number, createdAt} = vendor;
                var sn = (index + 1)
                return(

                    <tr>
                    <td>{sn}</td>
                    <td>{number}</td>
                    <td>{createdAt}</td>
                    <td>
                        
                        <div className="action-btn">

                        <Button className="edit-button" onClick={()=>{
                            navigate("/account/vendors/edit/packageId");
                        }}><FaPen /></Button>
                        <Button className="delete-button"><FaTrash /></Button>

                        </div>
                    
                    </td>
                    </tr>

                )
            })}

            
          </tbody>
        </table>
      </Row>
    
    </>
  )
}

export default Vendors
