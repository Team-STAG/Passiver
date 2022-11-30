import {
    Button,
    Col,
    message,
    Row
} from 'antd'
import React, {
    useCallback,
    useState
} from 'react'
import {
    FaPlus
} from 'react-icons/fa'
import {
    Navigate,
    useNavigate
} from 'react-router-dom';
import api from '../api/api';

import "../assets/styles/addPacakges.css";
import useUserContext from '../context/UserContext';

const AddPackages = () => {

    var [packageDetails, setPackageDetails] = useState({
        name: "",
        price: "",
        fee: "",
        rate: ""

    })

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const {
        userState
    } = useUserContext();

    const {
        userData
    } = userState;

    const {
        role
    } = userData || {};

    const addPackage = useCallback(() => {

        var {
            name,
            price,
            fee,
            rate
        } = packageDetails;
        price = parseInt(price);
        fee = parseInt(fee);
        rate = parseInt(rate);

        if (name !== "" && price !== "" && fee !== "" && rate !== "") {

            setLoading(true);

            api.post("/admin/packages", {
                name,
                vendorFee: fee,
                price,
                dailyRate: rate,
                description: `Earn daily with the rate of ${rate}%`
            })
                .then(res => {

                    message.success("package added successfully");
                    navigate("/account/packages")


                }).catch(err => {
                    console.log(err)
                    var {
                        data
                    } = err.response;

                    if (data.message) {
                        message.error(data.message);
                    } else {
                        message.error("Unable to add package! please try again later")
                    }
                }).finally(() => {
                    setLoading(false)
                })

        } else {
            message.error("Please fill in all details");
        }



    }, [packageDetails, navigate])


    if (role.toLowerCase() !== "admin") {
        return <Navigate to="/account/subscriptions" replace />
    }



    return ( <>

        <Row justify="space-between"
            className='add-package-content' >
            <h1 className='add-package-title' > Add New Package </h1> </Row >

            <Row justify="center"
                className='add-package-content'>
                <Col span={
                        24
                    }
                    className="package-form" >
                    <div className="form-content">
                        < label className="package-name" > Name </label> 
                        <input type="text"
                                className="package-name"
                                id="package-name"
                                value={
                                    packageDetails.name
                                }
                                placeholder="Subscription name"
                                onChange={
                                    (e) => {
                                        setPackageDetails(prevState => {
                                            return ({
                                                ...prevState,
                                                name: e.target.value
                                            })
                                        })
                                    }
                                }
                        /> 
                        </div >

                            <div className="form-content" >
                                <label className="package-price" > Price </label> 
                                <input type="number"
                                        className="package-price"
                                        id="package-price"
                                        value={
                                            packageDetails.price
                                        }
                                        placeholder="Subscription price"
                                        onChange={
                                            (e) => {
                                                setPackageDetails(prevState => {
                                                    return ({
                                                        ...prevState,
                                                        price: e.target.value
                                                    })
                                                })
                                            }
                                        }
                                    /> </div>

                                    <div className="form-content" >
                                        <label className="package-fee" > Fee </label> 
                                        
                                        <input type="number"
                                                className="package-fee"
                                                id="package-fee"
                                                value={
                                                    packageDetails.fee
                                                }
                                                placeholder="Subscription fee"
                                                onChange={
                                                    (e) => {
                                                        setPackageDetails(prevState => {
                                                            return ({
                                                                ...prevState,
                                                                fee: e.target.value
                                                            })
                                                        })
                                                    }
                                                }
                                            />


                                            </div>

                                            <div className="form-content" >
                                                <label className="package-rate" > Rate </label> 
                                                <input type="number"
                                                        className="package-rate"
                                                        id="package-rate"
                                                        value={
                                                            packageDetails.rate
                                                        }
                                                        placeholder="Subscription rate"
                                                        onChange={
                                                            (e) => {
                                                                setPackageDetails(prevState => {
                                                                    return ({
                                                                        ...prevState,
                                                                        rate: e.target.value
                                                                    })
                                                                })
                                                            }
                                                        }
                                                    /> </div >

                                                    <div className='form-content' >
                                                        <Button loading={
                                                                loading
                                                            }
                                                            onClick={
                                                                () => {
                                                                    addPackage();
                                                                }
                                                            }
                                                            className="submit-btn" >
                                                            Add < span className="icon"> <FaPlus /> </span> </Button > </div> </Col > </Row>

                                                                </>
                                                                )
}

                                                                    export default AddPackages