
import Banner from "../componenets/Banner";
import JobCategory from "../componenets/JobCategory";
import JobDescribe from "../componenets/JobDescribe";
import JobGallery from "../componenets/JobGallery";



const Home = () => {

   
    return (
        <div>
           <div >
           <Banner/>
           <JobCategory />
           </div>

           <JobGallery/>
           <JobDescribe/>
            
           
        </div>
    );
};

export default Home;