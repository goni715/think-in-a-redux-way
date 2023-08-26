import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchJobs} from "../../redux/features/job/jobSlice.js";
import Job from "./Job.jsx";
import Sorting from "./Sorting.jsx";

const Jobs = () => {
    const dispatch = useDispatch();
    const {jobs, isLoading, isError, error} = useSelector((state) => state.job);

    useEffect(()=>{
        dispatch(fetchJobs());
    },[dispatch])


    // decide what to render
    let content = null;
    if (isLoading) content = <p>Loading...</p>;

    if (!isLoading && isError)
        content = <p className="error">There was an error occured</p>;

    if (!isLoading && !isError && jobs?.length > 0) {
        content = jobs.map((job) => (
            <Job key={job?.id} job={job} />
        ));
    }

    if (!isLoading && !isError && jobs?.length === 0) {
        content = <p className="text-white">No transactions found!</p>;
    }


    return (
        <>
            <div className="lg:pl-[14rem]  mt-[5.8125rem]">
                <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                        <h1 className="lws-section-title">All Available Jobs</h1>
                        <div className="flex gap-4">
                            <div className="search-field group flex-1">
                                <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                                <input type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" />
                            </div>
                            <Sorting/>
                        </div>
                    </div>

                    <div className="jobs-list">
                        {content}
                    </div>
                </main>
            </div>
        </>
    );
};

export default Jobs;