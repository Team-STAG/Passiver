import { Button, message, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import {FaPen, FaPlus, FaTrash} from "react-icons/fa"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import api from '../api/api';

import "../assets/styles/packages.css";
import useUserContext from '../context/UserContext';
import { formatDate } from '../function/functions';


const Vendors = () => {
  const navigate = useNavigate();

      const {userState} = useUserContext();

    const { userData } = userState;

    const { role } = userData || {};

  const [vendors, setVendors] = useState([]);
  const [loadingErr, setLoadingErr] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(()=>{

    api.get("/vendor")
      .then(res => {

        setVendors(res.data)
        
      }).catch(err => {
        
        setLoadingErr(true)
        console.log(err)
        
      }).finally(()=> {
        setLoaded(true)

      })

  }, [])

  const deleteVendor = useCallback((id)=>{

    api.delete("/admin/vendor/"+ id)
    .then(res => {

      message.success("vendor deleted successfully");
      setVendors(vendors.filter(vendor => vendor.id !== id));

    }).catch(err => {
      var {data} = err.response

      if(data.message){
        message.error(data.message);

      }else{
        message.error("unable to delete vendors! please try again later");
      }
    })

  }, [vendors])

  if(role.toLowerCase() !== "admin"){
        return <Navigate to="/account" replace />
    }

  if(!loaded){
    return <p>Loading...</p>
  }

  if(loaded && loadingErr){
    return <p>Error loading vendors</p>
  }

  return (

    <>
      { loaded && !loadingErr && (
        <>
    
          <Row justify="space-between" className="package-header package-content">
            <h1>Packages</h1>
    
            <Link className="button" to="/account/vendors/add">Add vendors <span className="icon"><FaPlus /></span></Link>
          </Row>
    
    
          <Row className="package-table package-content  overflow-table">
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
    
                {vendors.length < 1? (
                  <tr>
                    <td className='empty'>No vendors at the present moment</td>
                  </tr>
                ): (
    
                  vendors.map((vendor, index) => {
                      var {phoneNumber, createdAt, id} = vendor;
                      var sn = (index + 1)
                      return(
      
                          <tr>
                          <td>{sn}</td>
                          <td>{phoneNumber}</td>
                          <td>{formatDate(createdAt)}</td>
                          <td>
                              
                              <div className="action-btn">
      
                              <Button className="edit-button" onClick={()=>{
                                navigate("/account/vendors/edit/" + id);
                              }}><FaPen /></Button>
                              <Button className="delete-button" onClick={(e)=> {
                                e.target.setAttribute("disabled", "true");
                                deleteVendor(id)
                              }}><FaTrash /></Button>
      
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

      )}
    
    </>

  )
}

export default Vendors
