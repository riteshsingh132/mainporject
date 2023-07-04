import React, { useState } from 'react'
import Chart from "react-apexcharts"
import { Form } from 'react-bootstrap'

function Home() {

    const [chart, setChart] = useState({
        boxA: "20",
        boxB: "80"
    })

    const [data, setData] = useState([])

  
    const handleChange = (e) => {
        setChart((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const valdata = [Number(chart.boxA), Number(chart.boxB)]
    console.log(valdata)
    return (
        <>
            <div className='container col-6 d-flex mt-5' style={{borderRadius:"8px", border: "1px solid #ccc",boxShadow:"2px 3px 10px #ccc"}}>
                <div className='mt-4'>
                    <h5>Previos Ratio is: 20 </h5>
                    <h5>Previos Ratio is: 80 </h5>
                    <Form>

                        <Form.Group className="mb-3">
                            <div style={{ width: "200px" }}>
                                <Form.Label>Group A</Form.Label>
                                <Form.Control onChange={handleChange} type="number" name='boxA' />
                            </div>
                            <div style={{ width: "200px" }}>
                                <Form.Label>Group B</Form.Label>
                                <Form.Control onChange={handleChange} type="number" name='boxB' />
                            </div>
                        </Form.Group>
                    </Form>
                </div>
                <div className=' m-5' >

                <Chart
                    type='pie'
                    width={300}
                    height={300}
                    series={valdata}
                    options={{
                        labels: ["Group A", "Group B"]
                    }}
                    >
                </Chart>
                    </div>

            </div>
        </>
    )
}

export default Home