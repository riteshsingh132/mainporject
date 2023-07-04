import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

import AccordionItem from 'react-bootstrap/esm/AccordionItem';
import AccordionHeader from 'react-bootstrap/esm/AccordionHeader';
import AccordionBody from 'react-bootstrap/esm/AccordionBody';
import { Accordion, Alert } from 'react-bootstrap';
function Home() {

  const [accord, setAccord]=useState({
    header:"",
    discription:""
  })
 
  const [data,setData]=useState([])

  const handleChange=(e)=>{
    setAccord((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(accord.header && accord.discription !=""){
      setData([...data,accord])
    
      setAccord({
        header:"",
        discription:""
      })
      
    }else{
      alert("Please fill the data before submit")
    }
   
  }

  return (
    <div>
      <div className='container col-10 border d-flex justify-content-center mt-5'>
        <div className='col-4'>

          <h1>Add Section</h1>
           <Form onSubmit={handleSubmit}>
           <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Section Header</Form.Label>
              <Form.Control type="text" name='header' placeholder="Enter Your Section" value={accord.header} onChange={handleChange} />
            </Form.Group>

            {/* just for demo */}
            {/* <input type='text' onChange={handleChange} name='header' value={accord.header}/> */}
            {/* <input type='text' onChange={handleChange} name='discription' value={accord.discription}/> */}


            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Section Details</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleChange} name='discription'value={accord.discription} />
            </Form.Group>
            <div className="d-grid gap-2 col-8 mx-auto mt-4 mb-5">
              <button className="btn btn-primary" type="submit">Button</button>
            </div>
          </Form>
        </div>
        <div className='col-6 ml-5' style={{margin:"0 0 0 50px"}}>
         
            {data.map((item,d)=>{
              return <form>
                <Accordion>
                    <AccordionItem eventKey={d}>
                        <AccordionHeader><h1>{"Section"} {d+1}</h1></AccordionHeader>
                        <AccordionBody>
                        {item.discription}
                        </AccordionBody>
                    </AccordionItem>
                </Accordion>
              </form>
            })}

        </div>
      </div>
    </div>
  )
}

export default Home