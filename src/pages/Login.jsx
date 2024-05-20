import { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import bgImg from '../assets/gradient-dark-blue-futuristic-digital-background.jpg'

const Login = () => {
    const [success, setSuccess] = useState("");
    const [logInError, setLogInError] = useState("");
    const { singInUser, googleLogin } = useContext(AuthContext);

    const handelLogin = event => {
        event.preventDefault()
        const form = event.target 
        const email = form.email.value
        const password = form.password.value 
        singInUser(email, password)
        .then(result => {
            const user = result.user
            setSuccess( 'LogIn successfully',toast("LogIn successfully"),user);
            event.target.reset()
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
            setLogInError("Incorrect email password ", toast.error("Incorrect email password"), error.message);
          })
    }

    // const googleLogin =() => {

    // }
  
  return (
    <div style={{backgroundImage: `url(${bgImg})`}} className="py-2 md:py-6 my-12 rounded-md">
        <div className="w-full max-w-md  p-4 rounded-md shadow-xl sm:p-8 bg-blue-600 text-gray-100 mx-auto mt-16" >
      <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>

      <div className="my-6 space-y-4">
        <button
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400 btn-outline bg-green-600 text-white font-bold text-xl gap-2"
        >
          <span className="text-blue-700">
            <FaGoogle />
          </span>
          Login with Google
        </button>
      </div>
      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400" />
        <p className="px-3 text-gray-400">OR</p>
        <hr className="w-full text-gray-400" />
      </div>
      <form onSubmit={handelLogin} className="space-y-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Your password"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
        </div>
        <input
          className="w-full px-8 py-3 font-semibold rounded-md bg-purple-700 text-white"
          type="submit"
          value="Log In"
        />
      </form>
      {logInError && (
          <p className="text-red-500 text-center mb-6 font-medium text-xl">
            {logInError}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-center mb-6 font-medium text-xl">
            {success}
          </p>
        )}
      <p className=" text-center text-gray-400 mt-8 font-bold text-xl ">
        Do not have account?
        <Link to='/register'
          href="#"
          rel="noopener noreferrer"
          className=" ml-3 focus:underline hover:underline text-green-400"
        >
          Register here
        </Link>
      </p>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Login;
