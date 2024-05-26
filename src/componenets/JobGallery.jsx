import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'

const JobGallery = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-8 justify-between my-20'>
      <div className='grid grid-cols-2 gap-6 w-[50%] shadow-xl p-3'>
      <div> <img className='w-full h-full' src={img1} alt="" /></div>
        <div> <img className='w-full h-full' src={img2} alt="" /></div>
        <div> <img className='w-full h-full' src={img3} alt="" /></div>
        <div> <img className='w-full h-full' src={img4} alt="" /></div>
      </div>
      <div className='w-[50%] space-y-6'>
                  <h1 className='text-green-600 font-bold text-xl md:text-2xl lg:text-4xl'><span className='text-[#727272]'>Personalized </span> Job <span className='text-[#ff900e]'>Recommendations</span></h1>
                  <p className='text-lg md:text-xl font-medium text-[#727272]'>Get job recommendations based on your resume and career interests. Our smart algorithms match you <br /> with positions that fit your qualifications and goals.</p>
                  <button className='btn btn-outline bg-[#ff900e] text-lg md:text-xl font-bold text-white border-none'>Explore More..</button>
              
      </div>
    </div>
  );
};

export default JobGallery;