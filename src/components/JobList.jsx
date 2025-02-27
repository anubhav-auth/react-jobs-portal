import React from 'react'
import JobCard from './JobCard'
import { useEffect, useState } from 'react'

const JobList = ({isHome = false}) => {
    
    const [job, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => { 
      const fetchJobs = async () => {
        try{
          const res = await fetch("http://localhost:5000/jobs")
          const data = await res.json();
          setJobs(data)
        }catch(error){
          console.log("error fetching data"+ error);
        }finally{
          setLoading(false);
        }

      }

      fetchJobs();
    }, []);

    const jobListings = isHome ? job.slice(0,3): job
  
    return (
      <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {loading? 
                (
                <h2>Loading..</h2>
                ):  (
                  <>
                    {jobListings.map((job) => (
                      <JobCard key={job.id} job={job}/>
                    ))}
                  </>
                ) 
              }
              
          </div>
        </div>
      </section>
      </>
    )
}

export default JobList