
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="w-full max-w-2xl p-4 rounded-md shadow-xl sm:p-8 bg-blue-600 text-gray-100 mx-auto mt-16">
        <h2 className="mb-3 text-3xl font-semibold text-center">Register  your account</h2>
        
      
        <div className="flex items-center w-full my-4">
            <hr  className="w-full text-gray-400" />
            <p className="px-3 text-gray-400">OR</p>
            <hr  className="w-full text-gray-400" />
        </div>
        <form  className="space-y-8">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label  className="block text-sm">Name</label>
                    <input type="text" name="name" id="Name" placeholder="Enter your name" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"  required/>
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm">Email address</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"  required />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <label htmlFor="password" className="text-sm">Password</label>
                        
                    </div>
                    <input type="password" name="password" id="password" placeholder="Enter Your password" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"  required/>
                </div>
                <div className="space-y-2">
                    <label  className="block text-sm">Photo URL</label>
                    <input type="text" name="photo" id="photo" placeholder="Enter your photo URL" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400" />
                </div>
            </div>
            <input className="w-full px-8 py-3 font-semibold rounded-md bg-purple-700 text-white btn-outline" type="submit" value="Register" />
        </form>
        <p className=" text-center text-gray-400 mt-8 font-bold text-xl ">Already have account?
            <Link to='/login' href="#" rel="noopener noreferrer" className=" ml-3 focus:underline hover:underline text-green-400">Login here</Link>
        </p>
    </div>
    );
};

export default Register;