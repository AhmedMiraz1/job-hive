import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import bgImg from "../assets/gradient-dark-blue-futuristic-digital-background.jpg";
import axios from "axios";

const Register = () => {
  const { createUser, updateUserProfile, user, loading } =
    useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    console.log(name, email, password, photo);
    if (password.length < 6) {
      setRegisterError(
        "password should be at least 6 characters",
        toast.error("password should be at least 6 characters")
      );
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upperCase character",
        toast.error(
          "Your password should have at least one upperCase character"
        )
      );
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one lowerCase character",
        toast.error(
          "Your password should have at least one lowerCase character"
        )
      );
      return;
    }
    setSuccess("");
    setRegisterError("");

    createUser(email, password)
      .then((result) => {
        //update profile

        updateUserProfile(name, photo).then(() => {
        
          const { data } = axios.post(
            `${import.meta.env.VITE_API_URL}/jwt`,
            { email: result?.user?.email },
            { withCredentials: true }
          );
          console.log(data);
          navigate(location?.state || "/", { replace: true });
        });

        const user = result.user;
        console.log(user);
        setSuccess(
          "User created successfully",
          toast("User created successfully"),
          user
        );
        event.target.reset();
      })
      .catch((error) => {
        setRegisterError(
          "You have already registered",
          toast.error("You have already registered"),
          error.message
        );
      });
  };

  if (user || loading) return;
  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className="py-2 md:py-6 my-12 rounded-md"
    >
      <div className="w-full max-w-2xl p-4 rounded-md shadow-2xl sm:p-8  text-gray-100 mx-auto mt-16">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Register your account
        </h2>

        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form onSubmit={handelRegister} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm">Name</label>
              <input
                type="text"
                name="name"
                id="Name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
                required
              />
            </div>
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
                required
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
                required
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm">Photo URL</label>
              <input
                type="text"
                name="photo"
                id="photo"
                placeholder="Enter your photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
          </div>
          <input
            className="w-full px-8 py-3 font-semibold rounded-md bg-purple-700 text-white btn-outline"
            type="submit"
            value="Register"
          />
        </form>

        {registerError && (
          <p className="text-red-500 text-center mb-6 font-medium text-xl">
            {registerError}
          </p>
        )}
        {success && (
          <p className="text-green-500 text-center mb-6 font-medium text-xl">
            {success}
          </p>
        )}
        <p className=" text-center text-gray-400 mt-8 font-bold text-xl ">
          Already have account?
          <Link
            to="/login"
            href="#"
            rel="noopener noreferrer"
            className=" ml-3 focus:underline hover:underline text-green-400"
          >
            Login here
          </Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Register;
