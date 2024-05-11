import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/suitcase.png'

const Navbar = () => {
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
        <Link to='/login' className="btn btn-outline text-white font-bold bg-green-500 text-xl">Log In </Link>
      </div>
    </div>
  );
};

export default Navbar;
