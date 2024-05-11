import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full max-w-md p-4 rounded-md shadow-xl sm:p-8 bg-blue-600 text-gray-100 mx-auto mt-16">
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
      <form noValidate="" action="" className="space-y-8">
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
    </div>
  );
};

export default Login;
