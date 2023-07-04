import Dropdown from 'react-bootstrap/Dropdown';

import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
function Home() {


    const [data,setData]=useState("")
    const [toggle,setToggle]=useState(false)


    const handlechange=(e)=>{

        const  getValue=e.target.value;
        console.log(e)
        // setData( getValue.name)
        if(getValue == 1){
            setData("Email Address")
            setToggle(true)
        }else if(getValue==2){
            setData("Phone Number")
            setToggle(true)
        }else if(getValue==0){
            setData("")
            setToggle(false)
            
        }
    }


    return (
        <>
            <div className='container col-6 mt-5 pb-3' style={{ border: "1px solid #ccc" }}>

                <Form >
                    <Form.Group className="mb-3 d-flex justify-content-between" controlId="formBasicText">
                        <div style={{ width: "300px" }}>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" name='fname' placeholder='Enter Your First Name'/>
                        </div>
                        <div style={{ width: "300px" }}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" name='lname' placeholder='Enter Your Last Name' />
                        </div>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1" className='mb-3 d-flex justify-content-between'>
                      
                       <div style={{width:"300px"}}>
                       <Form.Label>How Should we Contact You?</Form.Label>
                        <Form.Control as="select" onChange={(e)=>handlechange(e)} name='selection' type='text'>
                            <option type="email" value={"0"}>selcet option</option>
                            <option type="email" value={"1"}>Email</option>
                            <option type="number" value={"2"}>Phone</option>  
                        </Form.Control>
                       </div>
                      {toggle ? <div style={{width:"300px"}}>                        
                            <Form.Label>{data}</Form.Label>
                            <Form.Control type="text" />
                        </div> :" "}
                    </Form.Group>
                </Form>


                {/* <Dropdown>
                    <p>How Should we Contact You?</p>

                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>
                    

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Email</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Phone</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}
            </div>
        </>
    )
}

export default Home