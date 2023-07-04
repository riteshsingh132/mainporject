import React, { useState } from 'react'

function Formpract() {
    
    const [data,setData]=useState({
        username:"",
        mobile:""
    })
    const [data1,setData1]=useState([])


    const handleChange=(e)=>{
        setData((prev)=>({...prev,[e.target.name]:e.target.value}))   
    }
 
    const handleSubmit=(e)=>{
        e.preventDefault()
        setData1([...data1,data])
    }
    return (

    <div>
        <form onSubmit={handleSubmit}>

        <input onChange={handleChange} type='text' name='username' value={data.username}/>
        <input onChange={handleChange} type='number' name='mobile' value={data.mobile}/>
         <button type='submit'>clicked</button>   
         
        </form>
        {data1.map((item)=>{
            return <h2>
                {item.username}
                {item.mobile}
            </h2>
        })}

    </div>
  )
}

export default Formpract