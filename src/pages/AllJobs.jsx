import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllJobs = () => {
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
        <section className='container px-4 mx-auto pt-12'>
      <div className='flex items-center gap-x-3'>
        <h2 className='text-lg font-medium text-gray-800 '>My Posted Jobs</h2>

        <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
          {jobs.length}
        </span>
      </div>

      <div className='flex flex-col mt-6'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <div className='flex items-center gap-x-3'>
                        <span>Job Title</span>
                      </div>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <span> Post Date</span>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      <button className='flex items-center gap-x-2'>
                        <span> Deadline</span>
                      </button>
                    </th>

                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                     Salary range
                    </th>
                    <th
                      scope='col'
                      className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                    >
                      Details
                    </th>

                   
                  </tr>
                </thead>
               {
                jobs?.map(job=>  <tbody key={job._id} className='bg-white divide-y divide-gray-200 '>
                <tr>
                  <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                    {job.job_title}
                  </td>

                  <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                   {job?.post_date}
                  </td>

                  <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                  {new Date(job?.deadline).toLocaleDateString()}
                  </td>
                  <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <div className='flex items-center gap-x-2'>
                      <p
                        className='px-3 py-1 rounded-full text-blue-500 bg-blue-100/60
                         text-xs'
                      >
                       {job?.salary_range}
                      </p>
                    </div>
                  </td>
                  
                  <td className='px-4 py-4 text-sm whitespace-nowrap'>
                    <Link to={`/job/${job._id}`}  className="btn btn-outline">View details</Link>
                  </td>
                </tr>
              </tbody>)
               }
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
};

export default AllJobs;