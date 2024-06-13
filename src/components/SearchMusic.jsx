import axios from 'axios'
import React, { useState } from 'react'
import Navbar from './Navbar'

const SearchMusic = () => {
    const [data,setData]=useState(
        {
            "songname":""
        }
    )
    const [result,setResult]=useState([])
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }

const readValue=()=>{
    console.log(data)
    axios.post("http://localhost:8080/search",data).then(
        (response)=>{
            setResult(response.data)
        }
    ).catch(
        (error)=>{
            console.log(data)
        }
    )
}

const deletemusic=(id)=>{
    let input={"_id":id}
    axios.post("http://localhost:8080/delete",input).then(
        (response)=>{
            console.log(response.data)
            if(response.data.status == "successed"){
                alert("succesfully deleted")
            }
            else{
                alert("error")
            }
        }
    ).catch().finally()
}

  return (
    <div>
        <Navbar/>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <label htmlFor="" className="form-label">Song Name</label>
                    <input type="text" className="form-control" name='songname' value={data.songname} onChange={inputHandler}/>
                    </div>
                    
                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <button className="btn btn-warning" onClick={readValue}>Search</button>
                    </div>
                </div>

                 
                <table class="table">
  <thead>
    <tr>
      <th scope="col">song Title</th>
      <th scope="col">Description</th>
      <th scope="col">Writer</th>
      <th scope="col">Movie</th>
   
    </tr>
  </thead>
  <tbody>
    {result.map(
      (value,index)=>{
        return <tr>
        
        <td>{value.title}</td>
        <td>{value.description}</td>
        <td>{value.writer}</td>
        <td>{value.movie}</td>
      
        <td><button className="btn btn-danger" onClick={()=>{deletemusic(value._id)}}>Delete</button></td>
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

export default SearchMusic
