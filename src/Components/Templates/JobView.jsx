import data from "/src/MockData/jobs.json"
import Job from "./Job.jsx";
import {useEffect, useState} from "react";
import {CircleLoader} from "react-spinners";



function JobView() {

    let [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
            const fetchData = async () => {
                try {

                    setLoading(true);
                    const data = await fetch("http://localhost:8000/jobs");
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    jobs = await data.json();
                    setJobs(jobs);

                    console.log(jobs);

                }catch(err) {
                    console.log(err);
                }finally {
                    setLoading(false);
                }
            }
            fetchData();
        }

        ,[])



    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {loading ? (
                        <CircleLoader />
                    ) : (
                        jobs.length > 0 ? (
                            jobs.map(job => (
                                <Job key={job.id} job={job}/>
                            ))
                        ) : (
                            <div className="col-span-full text-center text-gray-500">No jobs available.</div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}


export default JobView;