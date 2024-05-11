
import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
    return (
        <div className="my-12">
        <Swiper
          navigation={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          loop={true}
        >
          <SwiperSlide>
            <div className="slide slide1 rounded-xl">
              <div className="text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-white p-2 rounded-xl">Part-Time Pursuits</h1>
              <p className="text-slate-100 text-sm md:text-xl my-8">Discover flexible part-time job options that fit your schedule and lifestyle. Explore rewarding opportunities <br /> to earn extra income  while balancing your other commitments. Start your journey to work-life harmony</p>
              <button className=" text-white btn btn-outline text-xl md:text-2xl lg:text-3xl  px-6">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide slide2 rounded-xl">
            <div className="text-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-white p-2 rounded-xl ">Balance Remote and Onsite Opportunities Seamlessly.</h1>
            <p className="text-slate-100 text-sm md:text-xl my-8">Embrace the best of both worlds with hybrid job opportunities! Find roles that offer a blend of <br /> remote and onsite work, allowing you to enjoy flexibility while maintaining connections with your team.  <br />Step into the future of work with hybrid arrangements tailored to your needs.</p>
            <button className=" text-white btn btn-outline text-xl md:text-2xl lg:text-3xl  px-6">Explore</button>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide slide3 rounded-xl">
            <div className="text-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-white p-2 rounded-xl ">Remote Work Revolution</h1>
            <p className="text-white text-sm md:text-xl my-8">Discover the freedom and flexibility of working from home! Explore a world of remote job opportunities <br />that allow you to ditch the commute and embrace a better work-life balance. Join the remote work!</p>
            <button className=" text-white btn btn-outline text-xl md:text-2xl lg:text-3xl  px-6">Explore</button>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide slide4 rounded-xl">
            <div className="text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-white p-2 rounded-xl">Onsite Opportunity Awaits</h1>
              <p className="text-slate-100 text-sm md:text-xl my-8">Unlock your potential with onsite work opportunities! Dive into a world of career growth and collaboration with onsite job <br />listings tailored to your skills and aspirations. Take the next step in your professional journey</p>
              <button className=" text-white text-xl md:text-2xl lg:text-3xl btn btn-outline px-6">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;