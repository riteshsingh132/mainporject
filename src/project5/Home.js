
import React from 'react'
import "./Home.css"
import { useNavigate } from 'react-router'

function Home() {

    const navigate=useNavigate()

    const handleEmpClick=()=>{
        navigate("/emplogin")
    }
    const handleHodClick=()=>{
        navigate("/hodlogin")
    }

  return (
   <>
   <div className='container mt-5' style={{textAlign:"center"}}>
        <button onClick={handleEmpClick} className='m-5'>Employee Login</button>
        <button onClick={handleHodClick} className='m-5'>HOD Login</button>
    </div>
   </>
  )
}

export default Home