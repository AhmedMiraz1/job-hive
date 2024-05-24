import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddJob = () => {

  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate()

  const { user } = useContext(AuthContext);
  const handleFormSubmit = async e => {
    e.preventDefault()
    const form = e.target
    const Photo = form.Photo.value
    const job_title = form.job_title.value
    const name = form.name.value
    const email = form.email.value
    const application_deadline = startDate
    const category =form.category.value
    const salary_range = parseFloat(form.salary_range.value)
    const description = form.description.value
    const post_date = form.post_date.value
    const job_applicants_number = form.job_applicants_number.value
    const jobData = {
      Photo,
      job_title,
      // name,
      // email,
      deadline:application_deadline,
      category,
      salary_range,
      description,
      post_date,
      job_application:job_applicants_number,
      buyer: {
        email,
        name,
        
      },
    }
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/jobs`,
        jobData
      )
      console.log(data)
      toast.success('Job Data Added Successfully!')
      navigate('/myJob')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize text-center ">
          Add jobs
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Photo URL
              </label>
              <input
                name="Photo"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Job title
              </label>
              <input
                type="text"
                name="job_title"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Name
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Email
              </label>
              <input
                name="email"
                type="email"
                disabled
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Application Deadline
            </label>
            <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="Web Development">On site</option>
                <option value="Graphics Design">Remote</option>
                <option value="Digital Marketing">Hybrid </option>
                <option value="Digital Marketing">Part time</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                salary range
              </label>
              <input
                name="salary_range"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="max_price">
                Job Description
              </label>
              <textarea
                className="block w-full px-8 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
                name="description"
                id=""
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
              Job Posting Date
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="date"
              name="post_date"
              id=""
            />
          </div>
          
          <div className="flex flex-col gap-2 mt-4">
            <label className="text-gray-700 " htmlFor="description">
            Job  Application number
            </label>
            <input
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              type="number"
              name="job_applicants_number"
              defaultValue={0}
              id=""
            />
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-purple-500 rounded-md hover:bg-green-600 focus:outline-none focus:bg-gray-600">
              Add Job
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
