import React from 'react'
import HodLogin from './HodLogin'
import Dashbord from './Dashbord'
import Home from './Home'
import { RouterProvider  } from 'react-router'
import {router} from "../project5/router/Router"
import Navbar from './Navbar'
function Mainproj5() {
  return (

    

    <div>

      <RouterProvider router={router} />
      {/* <Home/>
        <HodLogin/> */}
        {/* <Navbar/> */}
    </div>
  )
}

export default Mainproj5