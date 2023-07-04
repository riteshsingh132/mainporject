import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

function HodDashboard() {

const [apprData,setApprData]=useState([])
const [empname,setEmpname]=useState([])
  useEffect(()=>{
    const hodData=JSON.parse(localStorage.getItem("leavedata"))  
    const hodData1=JSON.parse(localStorage.getItem("user"))  
    
    console.log(hodData1)
    console.log("testing")
    setApprData(hodData)
    setEmpname(hodData1)
  },[])
console.log(apprData)

  return (
    <>
    
    <div className=' d-flex mb-5 justify-content-center col-12 flex-wrap gap-3' style={{ textAlign:"center"}}>
        <div style={{border:"1px solid #ccc", padding:"5px 15px", borderRadius:"10px"}}>
        {apprData?.map((item)=>{
      return <>
      {empname.map((det)=>{
        return<>
          <h2>{det.firstname} {det.lastname}</h2>
        </>
      })}
      <h2>{item.leavereason}</h2>
      <h2>{item.formdate}</h2>
      <h2>{item.todate}</h2>
     </> 
    })}
            <h5>Reason</h5>
            <Button variant="contained" sx={{background:"green",color:"white"}}>Approve</Button>
            <Button variant="contained" sx={{background:"red", color:"white"}}>Reject</Button>
        </div>
        <div style={{border:"1px solid #ccc", padding:"5px 15px",borderRadius:"10px"}}>
            <h5>Reason</h5>
            <Button variant="contained" sx={{background:"green",color:"white"}}>Approve</Button>
            <Button variant="contained" sx={{background:"red", color:"white"}}>Reject</Button>
        </div>
        
    </div>

    </>
  ) 
}

export default HodDashboard