import { RouterProvider } from "react-router";
import Formpract from "./Formpract";
import Project2a from "./project2A/Main";
import Project2B from "./project2B/Project2B";
import Accordian from "./project3/Accordian";
import Project3 from "./project3/Home"
import Check from "./project3/check";
import Project4 from "./project4/Home"
import Mainproj5 from "./project5/Mainproj5";
import { router } from "./project5/router/Router";
import Main from "./prctice/Main";
import Navbar from "./project5/Navbar";
import { UserProvider } from "./project5/context/UserContext";




function App() {

  
  return (

<div>
  
   
      {/* <Project2a/> */}
      {/* <Project2B/> */}
      {/* <Project3/> */}
    {/* <Formpract/> */}
    {/* <Project4/> */}

    <UserProvider>
    <Mainproj5/>

    </UserProvider>

    
  
 
    {/* <Main/> */}
    </div>
  );
}

export default App;
