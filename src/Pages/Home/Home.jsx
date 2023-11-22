import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Contact from "../Contact/Contact";
import Discount from "../Discount/Discount";
import ProjectOverview from "../ProjectOverview/ProjectOverview";
import Service from "../Service/Service";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Category></Category>
           <ProjectOverview></ProjectOverview>
           <Discount></Discount>
           <Service></Service>
           <Contact></Contact>
          
        
        </div>
    );
};

export default Home;