import {useDispatch} from "react-redux";
import {useState} from "react";
import {createJob} from "../../redux/features/job/jobSlice.js";
import {useNavigate} from "react-router-dom";
import {jobTitles} from "../../data/Data.js";




const NewJob = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [salary, setSalary] = useState("");
    const [deadline, setDeadline] = useState("");


    const handleCreate = (e) => {
        e.preventDefault();

        dispatch(createJob({
            title,
            type,
            salary: Number(salary),
            deadline: deadline
        }));
        navigate('/');
    }


    return (
        <>
            <div className="lg:pl-[14rem] mt-[5.8125rem]">
                <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
                    <h1 className="mb-10 text-center lws-section-title">Add New Job</h1>

                    <div className="max-w-3xl mx-auto">
                        <form onSubmit={handleCreate} className="space-y-6">
                            <div className="fieldContainer">
                                <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">Job
                                    Title</label>
                                <select onChange={(e)=>setTitle(e.target.value)} id="lws-JobTitle" name="lwsJobTitle" required>
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
                                <select onChange={(e)=>setType(e.target.value)} id="lws-JobType" name="lwsJobType" required>
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
                                    <input onChange={(e)=>setSalary(e.target.value)} type="number" name="lwsJobSalary" id="lws-JobSalary" required
                                           className="!rounded-l-none !border-0"
                                           placeholder="20,00,000"/>
                                </div>
                            </div>

                            <div className="fieldContainer">
                                <label htmlFor="lws-JobDeadline">Deadline</label>
                                <input onChange={(e)=>setDeadline(e.target.value)} type="date" name="lwsJobDeadline" id="lws-JobDeadline" required/>
                            </div>

                            <div className="text-right">
                                <button type="submit" id="lws-submit"
                                        className="cursor-pointer btn btn-primary w-fit">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </>
    );
};

export default NewJob;