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


import React from 'react'
import Navbar from './components/Navbar.'
import Hero from './components/Hero'
import HomeCards from "./components/HomeCards"
import JobListing from './components/jobListing'
import ViewAllJobs from './components/ViewAllJobs'


const App = () => {
  return (
    <>
      <Navbar/>
      {/* <Hero title="test title" subtitle="test subtitle"/> pass the
      values here for these to show up or let it remain empty so that default values can go in */}
      <Hero/>
      <HomeCards/>
      <JobListing/>
      <ViewAllJobs/>
      
    </>
  )
}

export default App