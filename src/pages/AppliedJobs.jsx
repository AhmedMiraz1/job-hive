
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";



const AppliedJobs = () => {
   const {user}=useContext(AuthContext)

   const {data :applyJobs =[], isLoading} = useQuery({
    queryFn: ()=> getData(),
    queryKey:['jobData']
   })
   
    const axiosSecure = UseAxiosSecure()
    const [filter, setFilter] = useState('')
   
  
    
      const getData = async () => {
        const { data } = await axiosSecure(`/jobData/${user?.email}`)
    
        return data
      }

     
      
      if(isLoading) return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    return (
        <div className="mt-12">
          <div className="flex justify-center mb-8">
            <select
              onChange={e => {
                setFilter(e.target.value)
                
              }}
              value={filter}
              name='category'
              id='category'
              className='border p-4 rounded-lg'
            >
              <option value=''>Filter By Category</option>
              <option value='On site'>On site</option>
              <option value='Remote'>Remote</option>
              <option value='Hybrid'>Hybrid</option>
              <option value='Part time'>Part time</option>
            </select>
          </div>
          <span className="mt-8 bg-green-900 text-white p-2 rounded-md">Apply Job :- {applyJobs.length}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20 ">

            {
                applyJobs?.map(job => <div key={job._id} className='w-full mx-4 px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
                <div className='flex items-center justify-between'>
                  <span className='text-lg font-light text-gray-800 '>
                  Deadline : {new Date(job?.deadline).toLocaleDateString()}
                  </span>
                  <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full   '>
                     {job?.category}
                  </span>
                </div>
          
                <div>
                  <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                   {job?.job_title}
                  </h1>
          
                  <div className="flex justify-between items-center">
                  <p className='mt-2 text-sm text-gray-600 '>
                   {job?.description}
                  </p>
                  
                  </div>
                 <div className="flex items-center justify-between gap-8 mt-5 ">
                 <p className='mt-2 text-sm font-bold text-gray-600 '>
                  Salary : {job?.salary_range}
                  </p>
                 
                  
                 </div>
                
                </div>
              </div>)
            }
        </div>
        </div>
    );
};

export default AppliedJobs;