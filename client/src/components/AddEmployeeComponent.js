import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate, useParams } from 'react-router-dom'

const AddEmployeeComponent = () => {
    
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emailId, setEmailId] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState("Add Employee");

    

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const newEmployee = {firstName, lastName, emailId}

        if(id) {

            EmployeeService.updateEmployee(id, newEmployee).then((response) => {

                console.log(response.data);
                navigate('/employees')

            }).catch(error => {
                console.log(error);
            })

        }
        else {        

            EmployeeService.createEmployee(newEmployee).then((response) => {

                console.log(response.data);
                navigate('/employees')

            }).catch(error => {
                console.log(error);
            })
        }
    } 

    useEffect(() => {

        if(id) setTitle("Update Employee");
    
        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmailId(response.data.emailId);
        }).catch(error => {
            console.log(error);
        })
      
    }, [id])

  return (
    <div>
        <br/>
        <br/>
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'> {title} </h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group md-2'>
                                <label className='form-label'>
                                    First Name:
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter First name'
                                    name='firstName'
                                    className='form-control'
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                >   
                                </input>
                            </div>

                            <div className='form-group md-2'>
                                <label className='form-label'>
                                    Last Name:
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter Last name'
                                    name='lastName'
                                    className='form-control'
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                >   
                                </input>
                            </div>

                            <div className='form-group md-2'>
                                <label className='form-label'>
                                    Email Id:
                                </label>
                                <input
                                    type='text'
                                    placeholder='Enter email id'
                                    name='emailId'
                                    className='form-control'
                                    value={emailId}
                                    onChange={(e) => setEmailId(e.target.value)}
                                >   
                                </input>
                            </div>
                            <br />
                            <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)} style={{marginRight: "10px"}}>Submit</button>

                            <Link to='/employees' className='btn btn-danger'>
                            Cancel
                            </Link>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent;