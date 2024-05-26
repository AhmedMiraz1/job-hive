import image from "../assets/image.jpg";

const JobDescribe = () => {
  return (
    <div className="my-16 flex justify-between flex-col-reverse md:flex-row gap-6">
      <div className="w-[50%] text-center space-y-5 shadow-lg ">
        <h1 className="text-xl md:text-2xl lg:text-3xl text-purple-500 font-bold">Features you will love & enjoy</h1>
        <p className="text-base font text-gray-400">
          Find your dream job effortlessly with personalized matches, real-time
          alerts, and expert advice. Connect with professionals, ace interviews,
          and enhance your skills all in one place.
        </p>

        <div className="shadow-lg p-2">
            <h1 className="text-orange-500 font-bold text-xl">Explore On-Site Job Opportunities</h1>
        <p className="text-gray-600 mt-3"> Dive into a world of on-site job opportunities tailored to your skills and location preferences. Discover a variety of roles spanning industries such as construction</p></div>
        <div className="shadow-lg p-2"><h1 className="text-orange-500 font-bold text-xl">Discover Remote Job Opportunities</h1>
        <p className="text-gray-600 mt-3" > Explore a world of remote job opportunities tailored to your skills and preferences. Find flexible roles in diverse industries such as technology.</p></div>
        <div className="shadow-lg p-2">
        <h1 className="text-orange-500 font-bold text-xl">Hybrid Work Opportunities</h1>
        <p className="text-gray-600 mt-3">Embrace the best of both worlds with hybrid job opportunities. Explore roles that offer a blend of remote work and in-office collaboration .</p>

        </div>
        <div className="shadow-lg p-2">
            <h1 className="text-orange-500 font-bold text-xl">Part-Time Job Opportunities</h1>
            <p className="text-gray-600 mt-3">Explore flexible part-time job opportunities tailored to your schedule and preferences. Whether you are a student, parent, or simply seeking supplemental income..</p>
        </div>
      </div>
      <div className="w-[50%] p-4 shadow-md ">
        <img className="min-h-[70vh]" src={image} alt="" />
      </div>
    </div>
  );
};

export default JobDescribe;
