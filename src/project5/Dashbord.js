import React, { useEffect, useState } from 'react'
import ApplyLeave from './ApplyLeave'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom';
function Dashbord({ toggle }) {


    const location = useLocation();
    // const logFind = location.state.logFind;

    const navigateR = useNavigate()
    const [apldata, setaplData] = useState([])
    console.log(apldata)
    useEffect(() => {
        const leaveaplydata = JSON.parse(localStorage.getItem("leavedata"))
        setaplData(leaveaplydata)
    }, [toggle])


    // console.log(apldata)
    // console.log(btnapprovedata)

    const applyLeaveHandle = () => {
        navigateR("/applyleave")
    }

    return (

        <div style={{ marginTop: "100px" }}>


            <h3>Welcome to the Employee Leave Portal</h3>
            <button onClick={applyLeaveHandle}>Apply Leave</button>
            <div className='container d-flex mt-1 mb-5 gap-4' style={{ border: "1px solid red", textAlign: "center", margin: " 0 auto" }} >
                <div>
                    <h4>10</h4>
                    Total Leave
                </div>
                <div><h4>5</h4>
                    Approved</div>
                <div><h4>3</h4>
                    Cancled</div>
            </div>
            <div className='container d-flex mb-5 justify-content-center col-12 flex-wrap' style={{ border: "1px solid red" }}>

                {apldata !== [] && apldata?.map((item) => {
                    return <div

                        className='container flex-direction-row m-1' style={{ border: "1px solid #ccc", width: "300px", borderRadius: "10px" }}>
                        <p>Leave for {item.fromdate} to {item.todate}</p>
                        <p>Number of days {item.leaveDays}</p>
                        <p>From Date:{item.todate}:</p>

                        <h5>Reason:<span>{item.leavereason}</span></h5>
                        <p>Status</p>
                        <p>{item.leavestatus}</p>
                    </div>

                })}

            </div>


        </div>
    )
}

export default Dashbord