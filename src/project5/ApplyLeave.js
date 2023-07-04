import { Box, Button, FormLabel, TextField, TextareaAutosize } from '@mui/material'
import { margin } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Dashbord from './Dashbord'

function ApplyLeave() {

  const [apprData,setApprData]=useState("")
  useEffect(()=>{
    const hodData=JSON.parse(localStorage.getItem("leavedata"))  
    
    console.log(hodData)
    console.log("testing")
    setApprData(hodData)
  },[])

  const [leave,setLeave]=useState({
    fromdate:"",
    todate:"",
    leavereason:"",
    leavestatus:"Pending"
  })

  const [data,setData]=useState([])

  console.log(data)
  const handleChange=(e)=>{
    setLeave((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

const handleSubmit=(e)=>{
  e.preventDefault()
  setData([...data,leave])
  localStorage.setItem("leavedata",JSON.stringify([...data,leave]))
  setLeave({
    fromdate:"",
    todate:"",
    leavereason:""

  })
}


const handleCancel=()=>{
  setData("")
  setLeave("")
}

  return (
    <>
    <form onSubmit={handleSubmit}>

      <Box borderRadius="15px" border={"0.25px solid #ccc"} alignItems={"center"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"450px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>

        <Box display={"flex col-6"} >
          <FormLabel><p>From</p>
            <TextField onChange={handleChange} size='small' type='date' sx={{ mb: 2 }} name='fromdate' />
          </FormLabel>

          <FormLabel sx={{ ml: 2 }}><p>To</p>
            <TextField onChange={handleChange} size='small'  type='date' sx={{ mb: 2, }} name='todate' />
          </FormLabel>
          <FormLabel sx={{ mb: 3 }}><p>Reason</p>
            <TextareaAutosize onChange={handleChange} minRows={3} style={{ width: "400px" }} name='leavereason' />
          </FormLabel>
          
          <Box style={{ width: "75%", margin: " 0 auto", textAlign: "center" }}>
            <Button onClick={handleSubmit} size={"medium"} sx={{ mt: 2 }} type='submit' variant="contained">Submit</Button>
            <Button onClick={handleCancel} style={{ marginLeft: "15px" }} variant="outlined" size={"medium"} sx={{ mt: 2 }} >Cancel</Button>
          </Box>

        </Box>
      </Box>
    </form>
    <Dashbord data={data}/>
    </>
  )
}

export default ApplyLeave