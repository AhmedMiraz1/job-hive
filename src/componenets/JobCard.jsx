import { Link } from "react-router-dom";


const JobCard = ({job}) => {

  const {_id, Category} =job
    
    return (
        <div className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
      <div className='flex items-center justify-between'>
        <span className='text-xs font-light text-gray-800 '>
          Deadline: 20/12/2024
        </span>
        <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
          {Category}
        </span>
      </div>

      <div>
        <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
          Build Dynamic Website Using React
        </h1>

        <p className='mt-2 text-sm text-gray-600 '>
          Lorem ipsum dolor sit adipisicing elit...
        </p>
       <div className="flex items-center justify-between gap-8 mt-5 ">
       <p className='mt-2 text-sm font-bold text-gray-600 '>
          Range: $100 - $150
        </p>
        <Link to= {`/jobDetails/ ${_id}`}className="btn text-white btn-sm bg-green-500" >view details</Link>
       </div>
      </div>
    </div>
    );
};

export default JobCard;