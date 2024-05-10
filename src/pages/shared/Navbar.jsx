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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
              <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>All Jobs</NavLink>
          </li>
          <li>
            <NavLink>Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink>Add Jobs</NavLink>
          </li>
          <li>
            <NavLink>My Jobs</NavLink>
          </li>
          </ul>
        </div>
        <div className='flex flex-row-reverse justify-center items-center  gap-0 md:gap-3 btn btn-ghost '>
        <Link className=" text-lg md:text-2xl lg:text-3xl gap-0 text-green-600 font-medium md:font-extrabold">Job<span className="text-blue-700">Hive</span></Link>
        <img className='w-8 h-8'  src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>All Jobs</NavLink>
          </li>
          <li>
            <NavLink>Applied Jobs</NavLink>
          </li>
          <li>
            <NavLink>Add Jobs</NavLink>
          </li>
          <li>
            <NavLink>My Jobs</NavLink>
          </li>
         
           
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
