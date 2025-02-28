import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useLoaderData } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = () => {
    const {id} = useParams();
    
    ///method 1
    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     const fetchJob = async()=>{
    //         try{
    //             const res = await fetch(`/api/jobs/${id}`)
    //             const data = await res.json();
    //             console.log(data)
    //             setJob(data)
    //           }catch(error){
    //             console.log("error fetching data"+ error);
    //           }finally{
    //             setLoading(false);
    //           }
    //     }

    //     fetchJob()
    // },[])

    const job = useLoaderData();
    

  return (
    <h1>{job.title}</h1>
  )
}

const jobLoader = async ({params}) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data; 
};

export default {JobPage, jobLoader}