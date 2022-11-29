import { Button, message, Row } from 'antd'
import React, { useCallback, useEffect, useState } from 'react'
import {FaPen, FaPlus, FaTrash} from "react-icons/fa"
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';

import "../assets/styles/packages.css";

const Packages = () => {

  const navigate = useNavigate();
  const [packagesList, setPackages] = useState([])
  const [loaded, setLoaded] = useState(false)
  const [err, setErr] = useState(false);

  useEffect(()=>{

    api.get("/packages")
    .then(res => {
      setPackages(res.data)
      console.log(res)
    }).catch(err => {
      setErr(true)
      console.log(err)
    }).finally(()=>{
      setLoaded(true)
    })

  }, [])

  const deletePackage = useCallback((id)=>{

    if(id){
      api.delete(`/admin/packages/${id}`)
      .then(res => {

        message.success("package deleted successfully");

        setPackages(packagesList.filter(pack => pack.id !== id));

      }).catch(err => {
        var {data} = err?.response;

        if(data?.message){

          message.error(data.message)

        }else{
          message.error("unable to delete package! please try again later");
        }
      })

    }

  }, [packagesList])

  if(!loaded){
    return <p>Loading...</p>
  }

  if(loaded && err){
    return <p>Unable to fetch packages</p>
  }



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
            {packagesList.length < 1? (
              <tr>
                <td colSpan="20">No available packages at the present moment</td>
              </tr>
            ): (
                packagesList.map((packageD, index) => {

                  console.log(packageD);
                  var {id, name, price, vendorFee, dailyRate, createdAt} = packageD
                  var sn = (index + 1)
                return(

                  <tr key={index}>
                    <td>{sn}</td>
                    <td>{name}</td>
                    <td>{price}</td>
                    <td>{vendorFee}</td>
                    <td>{dailyRate}%</td>
                    <td>{createdAt}</td>
                    <td>
                      
                      <div className="action-btn">

                        <Button className="edit-button" onClick={()=>{
                          navigate("/account/packages/edit/" + id);
                        }}><FaPen /></Button>
                        <Button className="delete-button" onClick={(e)=>{
                          deletePackage(id)
                          e.target.setAttribute("disabled", "true")
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
  )
}

export default Packages
