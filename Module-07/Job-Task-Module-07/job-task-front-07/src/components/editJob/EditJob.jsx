import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {fetchJob, updateJob} from "../../redux/features/job/jobSlice.js";
import {useLocation, useNavigate} from "react-router-dom";
import Loading from "../ui/Loading.jsx";
import {jobTitles} from "../../data/Data.js";

const EditJob = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const {job, isLoading, isError, error} = useSelector((state) => state.job);
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    let titleRef,typeRef, salaryRef, deadlineRef = useRef();


    useEffect(()=>{
        dispatch(fetchJob(id));
    },[dispatch, id]);


    const handleUpdate = (e) => {
        e.preventDefault();
        let Title = titleRef.value.trim();
        let Type = typeRef.value.trim();
        let Salary = salaryRef.value.trim();
        let Deadline = deadlineRef.value;

        dispatch(updateJob({
            id,
            data : {
                title: Title,
                type:Type,
                salary: Number(Salary),
                deadline: Deadline
            }
        }))
        navigate('/');
    }


    const { title, type, salary, deadline } = job || {};

    // decide what to render
    let content = null;
    if (isLoading) content = <Loading />;

    if (!isLoading && isError)
        content = <div className="col-span-12">{error}</div>;

    if (!isLoading && !isError && !job?.id) {
        content = <div className="col-span-12">No video found!</div>;
    }


    if (!isLoading && !isError && job?.id) {
        content = (
            <div className="max-w-3xl mx-auto">
                <form onSubmit={handleUpdate} className="space-y-6">
                    <div className="fieldContainer">
                        <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job
                            Title</label>
                        <select ref={(select)=>titleRef=select} key={new Date()} defaultValue={title} id="lws-JobTitle" name="lwsJobTitle" required>
                            <option value="" hidden selected>Select Job</option>
                            {jobTitles?.length > 0 && (
                                jobTitles.map((item,i) => (
                                    <option key={i.toString()} value={item}>{item}</option>
                                ))
                            )
                            }
                        </select>
                    </div>

                    <div className="fieldContainer">
                        <label htmlFor="lws-JobType">Job Type</label>
                        <select ref={(select)=>typeRef=select} key={new Date()} defaultValue={type} id="lws-JobType" name="lwsJobType" required>
                            <option value="" hidden selected>Select Job Type</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Internship">Internship</option>
                            <option value="Remote">Remote</option>
                        </select>
                    </div>

                    <div className="fieldContainer">
                        <label htmlFor="lws-JobSalary">Salary</label>
                        <div className="flex border rounded-md shadow-sm border-slate-600">
                            <span className="input-tag">BDT</span>
                            <input ref={(input)=>salaryRef=input} key={new Date()} defaultValue={salary} type="number" name="lwsJobSalary" id="lws-JobSalary" required
                                   className="!rounded-l-none !border-0"
                                   placeholder="20,00,000"/>
                        </div>
                    </div>

                    <div className="fieldContainer">
                        <label htmlFor="lws-JobDeadline">Deadline</label>
                        <input ref={(input)=>deadlineRef=input} key={new Date()} defaultValue={deadline} type="date" name="lwsJobDeadline" id="lws-JobDeadline" required/>
                    </div>

                    <div className="text-right">
                        <button disabled={isLoading} type="submit" id="lws-submit" className="button cursor-pointer btn btn-primary w-fit">
                            Edit
                        </button>
                    </div>
                </form>
            </div>
        );
    }

    return (
        <>
            <div className="lg:pl-[14rem] mt-[5.8125rem]">
                <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>
                    {content}
                </main>
            </div>
        </>
    );
};

export default EditJob;