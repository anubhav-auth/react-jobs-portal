import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCards from "../components/HomeCards"
import JobList from '../components/JobList'
import ViewAllJobs from '../components/ViewAllJobs'
const HomePage = () => {
  return (
    <>
      <Navbar/>
      {/* <Hero title="Become a kotlin dev" subtitle="kotlin dev opp"/> pass the
      values here for these to show up or let it remain empty so that default values can go in */}
      <Hero/>
      <HomeCards/>
      <JobList/>
      <ViewAllJobs/>
      
    </>
  )
}

export default HomePage