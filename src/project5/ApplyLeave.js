import { Box, Button, FormLabel, TextField, TextareaAutosize } from '@mui/material'
import { margin } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Dashbord from './Dashbord'
import uuid from 'react-uuid';

function ApplyLeave() {

  

const [toggle,setToggle]=useState(false)
  const [apprData,setApprData]=useState([])

  useEffect(()=>{
    let hodData;
    try{
      hodData=JSON.parse(localStorage.getItem("leavedata")) || []; 
    }catch (error){
      hodData=null
    }  
    console.log(hodData)
    console.log("testing")
    setApprData(hodData)
  },[toggle])

  const [leave,setLeave]=useState({
    fromdate:"",
    todate:"",
    leavereason:"",
    leavestatus:"Pending"
    
  })

console.log(leave)

  const [data,setData]=useState([])

  console.log(data)
  const handleChange=(e)=>{
    setLeave((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  setData([...data,leave])

  localStorage.setItem("leavedata",JSON.stringify([...apprData,{...leave,id:uuid()}]))
  setToggle(!toggle)
  setLeave({
    fromdate:"",
    todate:"",
    leavereason:""
    
  })
}


const handleCancel=()=>{
  
  setLeave({
    fromdate:"",
    todate:"",
    leavereason:""
  })
}

  return (
    <>
    <form onSubmit={handleSubmit}>

      <Box borderRadius="15px" border={"0.25px solid #ccc"} alignItems={"center"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"450px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>
      
        <Box display={"flex col-6"} >
          <FormLabel><p>From</p>
            <TextField onChange={handleChange} size='small' type='date' sx={{ mb: 2 }} name='fromdate' value={leave.fromdate} />
          </FormLabel>

          <FormLabel sx={{ ml: 2 }}><p>To</p>
            <TextField onChange={handleChange} size='small'  type='date' sx={{ mb: 2, }} name='todate' value={leave.todate} />
          </FormLabel>
          <FormLabel sx={{ mb: 3 }}><p>Reason</p>
            <TextareaAutosize onChange={handleChange} minRows={3} style={{ width: "400px" }} name='leavereason' value={leave.leavereason}  />
          </FormLabel>
          <h2 onChange={handleChange}  style={{ width: "400px" }} name='leavestatus'></h2>
          

          <Box style={{ width: "75%", margin: " 0 auto", textAlign: "center" }}>
            <Button onClick={handleSubmit} size={"medium"} sx={{ mt: 2 }} type='submit' variant="contained">Submit</Button>
            <Button onClick={handleCancel} style={{ marginLeft: "15px" }} variant="outlined" size={"medium"} sx={{ mt: 2 }} >Cancel</Button>
          </Box>
        </Box>
      </Box>
    </form>
    {/* <Dashbord toggle={toggle}/> */}
    </>
  )
}

export default ApplyLeave