import React, { useState } from 'react'

const AddMusic = () => {
    const [data,setData]=useState(
        {
            
          "songname":"",
          "description":"",
          "writer":"",
          "movie":""
        }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
      <div className="container">
        <div className="row">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">song name</label>
                    <input type="text" className="form-control" name='songname' value={data.songname} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Description</label>
                    <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Writer</label>
                    <input type="text" className="form-control" name='writer' value={data.writer} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                    <label htmlFor="" className="form-label">Movie</label>
                    <input type="text" className="form-control" name='movie' value={data.movie} onChange={inputHandler}/>

                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-success" onClick={readValue}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AddMusic
