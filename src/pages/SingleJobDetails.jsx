import { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaRectangleXmark } from "react-icons/fa6";
import toast from "react-hot-toast";
import UseAxiosSecure from "../hooks/UseAxiosSecure";

const SingleJobDetails = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const axiosSecure = UseAxiosSecure()

  const [showModal, setShowModal] = useState(false);
  const job = useLoaderData();
  console.log(job);
  const { _id, Photo, job_title, salary_range,deadline, category, description, job_application, buyer } =
    job || {};

  const handelApply = async (e) => {
   e.preventDefault()
   if(user?.email === buyer) return toast.error('Action not permitted')
    setShowModal(true);
    const form = e.target
    const jobId = _id
    const name = form.name.value 
    const email = user?.email 
    // const buyer_email = buyer_email
    const status = 'pending'
    // console.log(name, email);


    const jobData = {
        jobId,
        name, 
        email,
        category,
        deadline,
        salary_range,
        status,
        buyer_email: buyer?.email,
        job_title,
        description

    }
   try{
    const {data} = await axiosSecure.post(`/jobData`, jobData)
    console.log(data);
    toast.success('job applied successfully')
    navigate('/appliedJobs')
    
   }
   catch(err){
  toast.error(err.response.data);
   }
  };
  return (
    <div className="my-14 overflow-hidden bg-white rounded-lg shadow-md  ">
     <div >
     <img className=" w-full h-full rounded-xl" src={Photo} alt="photo" />
     </div>

      <div className="p-6">
        <div>
          <h1 className="text-xs font-medium text-blue-600 ">
            {job_title}
          </h1>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-600">
            Job description : {description}
          </p>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p> Salary range : $ {salary_range}</p>
          <p> Job Application Number : {job_application}</p>
        </div>

        <button onClick={()=> setShowModal(true)} className="btn btn-outline mt-8">
          {" "}
          Apply Job{" "}
        </button>
        {showModal && (
          <div className="relative flex flex-col items-center max-w-lg gap-4 p-2 lg:p-6 rounded-md shadow-md py-8 md:py-16 md:*:px-4 lg:py-20 px-2 lg:px-8  text-green-600 bg-purple-100 right-2 -top-44 md:-right-16 lg:-top-96  lg:-right-80  ">
            <button onClick={()=>setShowModal(false)} className="flex justify-end absolute top-10 right-10"><FaRectangleXmark  className="text-2xl"/></button>
            <form onSubmit={handelApply} className="space-y-6 flex flex-col items-center shadow-lg p-4">
            <div>
              <input
                type="text"
                name="name"
                disabled
                defaultValue={user?.displayName}
                id=""
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                disabled
                defaultValue={user?.email}
                id=""
              />
            </div>
            <div>
              <input className="btn btn-outline text-green-500" type="submit" value="submit" />
            </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleJobDetails;
