import { Button, FormControl, FormLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import ApplyLeave from './ApplyLeave'
import { Outlet, useNavigate } from 'react-router'

function EmployeeLogin() {

    const [isSignup, setIsSignup] = useState(false)

    const [empdata, setEmpData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        username: "",
        password: "",
    })


    const [newEmpData, setNewEmpData] = useState([])
    console.log(newEmpData)

    const handleSubmit = (e) => {
        e.preventDefault()
        setNewEmpData([...newEmpData, empdata])

        if(isSignup  == true){
            localStorage.setItem("user1",JSON.stringify([...newEmpData, empdata]))
        setEmpData({
            firstname: "",
        lastname: "",
        email: "",
        contact: "",
        username: "",
        password: "",
        })
        }
        console.log(isSignup)
        
    }

    const navigateR=useNavigate()

    const handleChange = (e) => {
        const valDAta = { [e.target.name]: e.target.value }
        // console.log(valDAta)
        setEmpData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }


    const handleSwitch = () => {
        setIsSignup(!isSignup)
    }

    const handleLogin=()=>{
        const logdata=JSON.parse(localStorage.getItem("user1")) 
      
        const logFind=logdata.find((item)=>item.username == empdata.username)
        console.log(logFind)
       
       
        localStorage.setItem("user1",JSON.stringify([...newEmpData, empdata]))
        //     if(logFind){
            
        //         navigateR("/applyleave")
        // }else {

        //     alert("Please fill the correct data")
        // }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>

                <Box borderRadius="15px" border={"0.25px solid #ccc"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"550px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>

                    <Typography sx={{ mb: 3 }}>Employee</Typography>



                    {
                    !isSignup ? <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>Username
                            <TextField onChange={handleChange} size='small' placeholder='Enter username' margin='normal' name='username' value={empdata.username} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Password
                            <TextField onChange={handleChange} type='password' size='small' placeholder='Enter Password' margin='normal' name='password' value={empdata.password} sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box> : 
                    <> <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>First Name
                            <TextField onChange={handleChange} size='small' placeholder='Enter First Name' margin='normal' name='firstname' value={empdata.firstname} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Last Name
                            <TextField onChange={handleChange} size='small' placeholder='Enter Last Name' margin='normal' name='lastname' value={empdata.lastname} sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormLabel>Email
                                <TextField onChange={handleChange} size='small' placeholder='Enter Email' margin='normal' name='email' value={empdata.email} sx={{ mb: 2 }} />
                            </FormLabel>
                            <FormLabel>Contact
                                <TextField onChange={handleChange} size='small' placeholder='Enter your Contact' margin='normal' name='contact' value={empdata.contact} sx={{ mb: 2 }} />
                            </FormLabel>
                        </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                            <FormControl fullWidth>

                                <FormLabel id="demo-simple-select-label">Dipartment</FormLabel>
                                <Select size='small'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"

                                    sx={{ mt: 2, mb: 2 }}

                                >
                                    <MenuItem value={"0"}>Sales</MenuItem>
                                    <MenuItem value={"1"}>Finace</MenuItem>
                                    <MenuItem value={"2"}>Admin</MenuItem>
                                    <MenuItem value={"3"}>Marketing</MenuItem>
                                    <MenuItem value={"4"}>IT</MenuItem>
                                    <MenuItem value={"5"}>Operation</MenuItem>
                                </Select>

                            </FormControl>
                        </Box>
                        <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>Username
                            <TextField onChange={handleChange} size='small' placeholder='Enter username' margin='normal' name='username' value={empdata.username} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Password
                            <TextField onChange={handleChange} type='password' size='small' placeholder='Enter Password' margin='normal' name='password' value={empdata.password} sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box>
                    </>}

                    

                    <Button onClick={handleLogin}  sx={{ mt: 2 }} type='submit' variant="contained">{isSignup ? "SIGN UP" : "LOG IN"}</Button>
                    <Button onClick={handleSwitch} sx={{ mt: 2 }} >{isSignup ? "LOG IN" : "SIGN UP"}</Button>

                </Box>

            </form>
            <Outlet/>
            {/* <ApplyLeave/> */}
        </>
    )
}

export default EmployeeLogin