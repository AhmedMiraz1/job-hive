import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const JobCard = ({job}) => {

  const {_id,buyer,  post_date, job_title, deadline, salary_range, job_application, category } =job || {}
    
    return (
        <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-lg font-light text-gray-800 '>
         {buyer?.name}
        </span>
        <span className='px-3 py-1 text-lg   '>
         Deadline :  {new Date(deadline).toLocaleDateString()}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
         {job_title}
        </h1>

        <div className="flex justify-between items-center">
        <p className='mt-2 text-sm text-gray-600 '>
         {post_date}
        </p>
        <p className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full">{category}</p>
        </div>
       <div className="flex items-center justify-between gap-8 mt-5 ">
       <p className='mt-2 text-sm font-bold text-gray-600 '>
        Salary : {salary_range}
        </p>
        <p className='mt-2 text-sm font-bold text-gray-600 '>
        Application Number : {job_application}
        </p>
        
       </div>
       <Link to= {`/jobDetails/${_id}`}className="btn text-white btn-sm bg-green-500 mt-8" >view details</Link>
      </div>
    </div>
    );
};

export default JobCard;

JobCard.propTypes ={
  job:PropTypes.object
}