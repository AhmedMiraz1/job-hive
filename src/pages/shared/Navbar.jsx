import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/suitcase.png'
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localThem = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localThem);
  }, [theme]);
  const handelToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
              <li>
            <NavLink to='/' className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] text-lg  "
                : "text-lg"
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to='/allJobs' className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] text-lg  "
                : "text-lg"
            }>All Jobs</NavLink>
          </li>
          <li>
            <NavLink to='/appliedJobs' className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] text-lg  "
                : "text-lg"
            }>Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink to='/addJob' className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] text-lg  "
                : "text-lg"
            }>Add Jobs</NavLink>
          </li>
          <li>
            <NavLink to='/myJob' className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] text-lg  "
                : "text-lg"
            }>My Jobs</NavLink>
          </li>
          </ul>
        </div>
        <div className='flex flex-row-reverse justify-center items-center  gap-0 md:gap-3 btn btn-ghost '>
        <Link className=" text-lg md:text-2xl lg:text-3xl gap-0 text-green-600 font-medium md:font-extrabold">Job<span className="text-blue-700">Hive</span></Link>
        <img className='w-8 h-8'  src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1 gap-6">
          <li>
            <NavLink to="/"   className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold text-xl  "
                : "font-bold text-xl"
            }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/allJobs"   className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold text-xl  "
                : "font-bold text-xl"
            }>AllJobs</NavLink>
          </li>
          <li>
            <NavLink to="/appliedJobs"   className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold text-xl  "
                : "font-bold text-xl"
            }>AppliedJobs</NavLink>
          </li>
          <li>
            <NavLink to="/addJob"   className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold text-xl  "
                : "font-bold text-xl"
            }>AddJobs</NavLink>
          </li>
          <li>
            <NavLink to="/myJob"   className={({ isActive }) =>
              isActive
                ? "text-[#23BE0A] font-bold text-xl  "
                : "font-bold text-xl"
            }>MyJobs</NavLink>
          </li>
         
           
        </ul>
      </div>
      <div className="navbar-end">
      <label className="cursor-pointer grid place-items-center mr-3 md:ml-4">
          <input
            onChange={handelToggle}
            type="checkbox"
            value="dark"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
        <Link to='/login' className="btn btn-outline text-white font-bold bg-green-500 text-xl">Log In </Link>
      </div>
    </div>
  );
};

export default Navbar;
