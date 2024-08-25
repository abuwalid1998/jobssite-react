import SingleJop from "../Components/Templates/SingleJop.jsx";

const JobPage = () => {


    return (
       <>
           <section>
               <div className="container m-auto py-6 px-6">
                   <a
                       href="/jobs.html"
                       className="text-indigo-500 hover:text-indigo-600 flex items-center"
                   >
                       <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
                   </a>
               </div>
           </section>
           <SingleJop/>
       </>
    );
};

export default JobPage;