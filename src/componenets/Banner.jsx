
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
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-white p-2 rounded-xl">Welcome to Our Art & Craft Collection</h1>
              <p className="text-slate-100 text-sm md:text-xl my-6">Whether you are a seasoned crafter or just starting out, our curated collection offers something for everyone.
              <br /> Get inspired, get creative, and let your imagination soar with our art & craft items.</p>
              <button className=" text-white btn btn-outline text-xl md:text-2xl lg:text-3xl  px-6">Explore</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide slide2 rounded-xl">
            <div className="text-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-white p-2 rounded-xl ">Discover Creativity with Our Art & Craft Collection</h1>
            <p className="text-slate-100 text-sm md:text-xl my-6">Unleash your imagination and explore a world of endless possibilities with our curated selection of art and craft items. <br /> From vibrant paints and brushes to intricate beads and textiles, we offer everything you need to bring your artistic vision to life</p>
            <button className=" text-white btn btn-outline text-xl md:text-2xl lg:text-3xl  px-6">Explore</button>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide slide3 rounded-xl">
            <div className="text-center">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-white p-2 rounded-xl ">Discover the Magic of Art & Craft</h1>
            <p className="text-slate-100 text-sm md:text-xl my-6">Explore a world of endless possibilities with our curated selection of art and craft items. <br /> From vibrant paints and brushes to intricate beads and textiles, we offer everything you need to bring your artistic vision to life</p>
            <button className=" text-white btn btn-outline text-xl md:text-2xl lg:text-3xl  px-6">Explore</button>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide slide4 rounded-xl">
            <div className="text-center">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold md:font-extrabold text-white p-2 rounded-xl">Welcome to Our Art & Craft Collection</h1>
              <p className="text-slate-100 text-sm md:text-xl my-6">Whether you are a seasoned crafter or just starting out, our curated collection offers something for everyone.
              <br /> Get inspired, get creative, and let your imagination soar with our art & craft items.</p>
              <button className=" text-white text-xl md:text-2xl lg:text-3xl btn btn-outline px-6">Explore</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;