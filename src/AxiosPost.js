import React, { useState } from 'react';
import axios from "axios";

const AxiosPost = () => {

    const data = {fname : "", lname : "" };
    const [inputData, setInputData] = useState(data)
    
    const handleData = (e)=> {
        setInputData({...inputData, [e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
          e.preventDefault();
          axios.post("https://jsonplaceholder.typicode.com/users", inputData)
          .then((response)=>{
            console.log(response)
          })

        
    }
  return (
    <>
    <label>First Name: </label>
    <input type="text" name="fname" value={inputData.fname} onChange={handleData} ></input>
    <label>last Name</label>
    <input type="text" name="lname" value={inputData.lname} onChange={handleData}></input>

    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default AxiosPost