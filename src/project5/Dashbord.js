import React from 'react'

function Dashbord({ data }) {

    console.log(data.fromdate)

    return (
        <>
        
            
         <div className='container d-flex mb-5 gap-4' style={{border:"1px solid red", textAlign:"center", margin:"0 auto"}} >

        <div>
            <h4>10</h4>
            Total Leave
        </div>
        <div><h4>5</h4>
            Approved</div>
        <div><h4>3</h4>
            Cancled</div>
    </div>
    <div className='container d-flex mb-5 justify-content-center col-12 flex-wrap' style={{border:"1px solid red"}}>

            {data.map((item) => {
                return <div

                 className='container flex-direction-row m-1' style={{ border: "1px solid #ccc", width: "300px",borderRadius:"10px" }}>
                    <p>Leave for {item.fromdate} to {item.todate}</p>
                    <p>Number of days 1</p>
                    <p>From Date:{item.todate}:</p>
                    
                    <h5>Reason:<span>{item.leavereason}</span></h5>
                    <p>Status</p>
                    <p>Pending</p>
                </div>
               
            })}
           
            </div>
            
          
        </>
    )
}

export default Dashbord