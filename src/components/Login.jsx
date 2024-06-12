import axios from 'axios'
import React, { useState } from 'react'

const Login = () => {
    const [data,setData]=useState(
    {
        username:"",
        password:""
    }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    
    axios.post("",data).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status =="success")
                {
                    alert("success")
                }
                else{
                    alert("error")
                }
        }
    ).catch()
        
}
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <div className='ul'>
                                    <center><h4>User Login</h4></center>
                                    <div className="row g-3">

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <label htmlFor="" className="form-label">User Name</label>
                                        <input type="text" className="form-control" />

                                    </div>
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="text" className="form-control" />

                                    </div>
                                    <br /> <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                        <button className="btn btn-success">Submit</button>


                                    </div>


                                    <p>Don't have an account?</p>
                                    <a href='/signup'>Signup</a>

                                </div>




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
