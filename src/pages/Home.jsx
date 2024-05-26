
import Banner from "../componenets/Banner";
import JobCategory from "../componenets/JobCategory";
import JobGallery from "../componenets/JobGallery";



const Home = () => {

   
    return (
        <div>
           <div >
           <Banner/>
           <JobCategory />
           </div>

           <div>
            <JobGallery/>
           </div>
        </div>
    );
};

export default Home;