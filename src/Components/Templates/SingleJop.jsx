

// eslint-disable-next-line react/prop-types
import {useEffect, useState} from "react";
import {CircleLoader} from "react-spinners";
import {useParams} from "react-router-dom";

const SingleJop = () => {

    const {id} = useParams();

    let [job, setJobs] = useState([null]);
    let [company, setCompany] = useState([null]);
    const [loading, setLoading] = useState(true);



    useEffect(() => {
            const fetchData = async () => {
                try {
                    setLoading(true);
                    const data = await fetch(`http://localhost:8000/jobs/${id}`);
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    job = await data.json();
                    setJobs(job);
                    setCompany(job.company)
                    console.log(company)
                    console.log(job);

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
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <a
                        href="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
                    </a>
                </div>
            </section>
            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div
                                className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
                            >
                                <div className="text-gray-500 mb-4">{job.type}</div>
                                <h1 className="text-3xl font-bold mb-4">
                                    {job.title}
                                </h1>
                                <div
                                    className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
                                >
                                    <i
                                        className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                                    ></i>
                                    <p className="text-orange-700">{job.location}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>

                                <p className="mb-4">
                                    {job.description}
                                </p>

                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

                                <p className="mb-4">{job.salary}</p>
                            </div>
                        </main>


                        <aside>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>

                                <h2 className="text-2xl">{company.name}</h2>

                                <p className="my-2">
                                    {company.description}
                                </p>

                                <hr className="my-4" />

                                <h3 className="text-xl">Contact Email:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">
                                    {company.contactEmail}
                                </p>

                                <h3 className="text-xl">Contact Phone:</h3>

                                <p className="my-2 bg-indigo-100 p-2 font-bold">{company.contactPhone}</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <a
                                    href="/add-job"
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >Edit Job</a
                                >
                                <button
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
};

const JobLoader = async ({params}) => {
    const res = await fetch(`http://localhost:8000/jobs/${params.id}`);
    const job = await res.json();
    return job;
}


export  {SingleJop as default , JobLoader};