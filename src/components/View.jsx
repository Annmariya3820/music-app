import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [data,setData]=useState([])
    const  fetchData=()=>{
        axios.get("http://localhost:8080/view").then(
            (response)=>{
                setData(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
       <div className="container">
        <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
               
                    <table class="table">
  <thead>
    <tr>
      <th scope="col">Song Title</th>
      <th scope="col">Description</th>
      <th scope="col">Writer</th>
      <th scope="col">Movie</th>
      
    </tr>
  </thead>
  <tbody>
    {data.map(
        (value,index)=>{
            return <tr>
            <td>{value.title}</td>
              <td>{value.description}</td>
              <td>{value.writer}</td>
              <td>{value.movie}</td>
              
            </tr>
        }
    )}
    
    
  </tbody>
</table>

                    </div>
                   
                </div>
            </div>
    </div>
  )
}

export default View
