// import React from 'react'

// const App = () => {
//   const name = "anubhav"
//   const x = 10
//   const y = 20
//   const names = ["a", "b", "c", "d"]
//   const loggedIn = false
//   const styles = {
//     color:"red",
//     fontSize:"55px"
//   }
//   // if(loggedIn){
//   //   return <h1>Hello world</h1>
//   // }



//   return (
//     <>
//     {/* <p style={{color: "rebeccapurple", fontSize:"24px"}}>Hello {name}</p> */}
//     <p style={styles}>Hello {name}</p>
//     <p>sum {x+y}</p>
//     <div classNameNameName='text-xl'>App</div>
//     <ul>
//       {names.map((name1, index) => (
//         <li key={index}>{name1}</li>
//       ))}
//     </ul>

//       {/* {loggedIn ? <h1>Hello MEmber</h1> : <h1>Hello Guest</h1>} */}
//       {loggedIn && <h1>Hello MEmber</h1>} {/* to show its the value if its true and not show anything else*/}
//     </>
//   )
// }

// export default App

import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom"
import React from 'react'
import HomePage from "./pages/HomePage"
import JobsPage from "./pages/JobsPage"
import MainLayout from "./layouts/MainLayout"
import NotFoundPage from "./pages/NotFoundPage"
import JobPage, {jobLoader} from "./pages/JobPage"
import AddJobPage from "./pages/AddJobPage"



const App = () => {

  // add job
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs",{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  // delete job

  const deleteJob = async (id) =>{
    const res = await fetch(`/api/jobs/${id}`,{
      method: "DELETE"
    })
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>}/>
        <Route path="/jobs/:id" element={<JobPage deleteJob = {deleteJob}/>} loader={jobLoader}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router}/>
}

export default App