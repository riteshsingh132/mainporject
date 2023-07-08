import { Box, Button, FormControl, FormLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

function HodSignUp() {

    const [isSignup, setIsSignup] = useState(false)

    const signupdetail = {
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        username: "",
        password: "",
    }

    const [data, setData] = useState(signupdetail)

    const [newdata, setnewData] = useState([])
    // console.log(newdata)

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    const navigateR = useNavigate()

    const handleChange = (e) => {
        const valDAta = { [e.target.name]: e.target.value }
        // console.log(valDAta)  
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSwitch = () => {
        setIsSignup(!isSignup)

    }

    const handleHodLogin = () => {

        setnewData([...newdata, data])

        if (data.firstname=="") {
            alert("Please fill the correct First Name")           
        }else if(data.lastname==""){
            alert("Please fill the correct LastName")
        }else if(data.email==""){
            alert("Please fill the correct email")
        }else if(data.contact==""){
            alert("Please fill the correct contact")
        }else if(data.username==""){
            alert("Please fill the correct username")
        }else if(data.password==""){
            alert("Please fill the correct password")
        }else{

            localStorage.setItem("user", JSON.stringify([...newdata, data]))
            setData(signupdetail)
        }
    }

    const handleClick=()=>{
        navigateR("/hodlogin")
    }



    return (
        <>
            <form onSubmit={handleSubmit}>

                <Box borderRadius="15px" border={"0.25px solid #ccc"} padding={"40px"} display={"flex"} flexDirection={"column"} maxWidth={"550px"} margin={"100px auto"} boxShadow={"5px 5px 10px #ccc"} sx={{ ":hover": { boxShadow: "10px 10px 20px #ccc" } }}>

                    <Typography sx={{ mb: 3 }}>HOD</Typography>




                    {/* {Signup page} */}



                    <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>First Name
                            <TextField onChange={handleChange} size='small' placeholder='Enter First Name' margin='normal' name='firstname' value={data.firstname} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Last Name
                            <TextField onChange={handleChange} size='small' placeholder='Enter Last Name' margin='normal' name='lastname' value={data.lastname} sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box>
                    <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormLabel>Email
                            <TextField onChange={handleChange} size='small' placeholder='Enter Email' margin='normal' name='email' value={data.email} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Contact
                            <TextField onChange={handleChange} size='small' placeholder='Enter your Contact' margin='normal' name='contact' value={data.contact} sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box>
                    <Box display={"flex"} gap={"25px"} maxWidth={"450px"}>
                        <FormControl fullWidth>

                            <FormLabel id="demo-simple-select-label">Dipartment</FormLabel>
                            <Select size='small'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"

                                sx={{ mt: 2, mb: 2 }}>
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
                            <TextField onChange={handleChange} size='small' placeholder='Enter username' margin='normal' name='username' value={data.username} sx={{ mb: 2 }} />
                        </FormLabel>
                        <FormLabel>Password
                            <TextField onChange={handleChange} value={data.password} type='password' size='small' placeholder='Enter Password' margin='normal' name='password' sx={{ mb: 2 }} />
                        </FormLabel>
                    </Box>

                    {/* {isSignup ?<Button onClick={handleLogin} sx={{ mt: 2 }} type='submit' variant="contained">LOG IN</Button>: <Button onClick={handleLogin} sx={{ mt: 2 }} type='submit' variant="contained">SIGN up</Button>} */}

                    <Button onClick={handleHodLogin} sx={{ mt: 2 }} type='submit' variant="contained">SIGN UP</Button>
                    <Button onClick={handleClick} sx={{ mt: 2 }} >LOG IN</Button>

                </Box>

            </form>

            {/* <HodDashboard/> */}
        </>
    )
}

export default HodSignUp