import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import HomeCards from "../Components/HomeCards.jsx";
import JobList from "../Components/JobList.jsx";
import ViewAlljobs from "../Components/ViewAlljobs.jsx";


function HomePage() {

    const title = "Search & Apply";
    const subtitle = "Search And Read Carefully Before Apply !";


    return (
       <>
           <Hero title={title.toUpperCase()} subtitle={subtitle.toUpperCase()}/>
           <HomeCards/>
           <JobList/>
           <ViewAlljobs/>
       </>
    );
}

export default HomePage;