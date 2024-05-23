import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const JobCategory = () => {
    const [jobs, setJobs]=useState([])
    useEffect(()=> {
      const getData = async () => {
   const {data} = await axios(`${import.meta.env.VITE_API_URL}/jobs`)
   setJobs(data)
      }
      getData()
    },[] )
    console.log(jobs);
  return (
    <Tabs>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-center font-extrabold text-xl md:text-3xl lg:text-4xl  mb-6 text-purple-500">Job Category</h1>
        <p className="text-lg md:text-xl font-medium text-purple-400 mb-8">Job categories organize positions by roles and responsibilities, aiding in streamlined recruitment and career development.</p>
        <div className="flex justify-center items-center text-xl font-bold">
          <TabList>
          <Tab>All Jobs</Tab>
            <Tab>On site</Tab>
            <Tab>Remote</Tab>
            <Tab>Hybrid</Tab>
            <Tab>Part time</Tab>
          </TabList>
        </div>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-6">
          {
            jobs?.map(job => <JobCard key={job._id} job={job} />)
          }
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-6">
          {
            jobs?.filter(j=> j.category === 'on_site').map(job => <JobCard key={job._id} job={job} />)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-6">
          {
            jobs?.filter(j=> j.category === 'remote').map(job => <JobCard key={job._id} job={job} />)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-6">
          {
            jobs?.filter(j=> j.category === 'hybrid').map(job => <JobCard key={job._id} job={job} />)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-6">
          {
            jobs?.filter(j=> j.category === 'part_time').map(job => <JobCard key={job._id} job={job} />)
          }
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default JobCategory;
